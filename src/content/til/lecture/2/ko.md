---
title: "토비의 스프링 부트 - 이해와 원리"
description: "인프런 강의 토비의 스프링 부트 - 이해와 원리를 듣고 내용을 정리한 글"
date: "2026-08-02"
---


## 1. 독립 실행형 서블릿 애플리케이션

> 컨테이너리스는 마법이 아니다. run() 한 줄 뒤에는 코드로 띄운 서블릿 컨테이너와 프론트 컨트롤러가 들어있다.

스프링 부트의 특징 중 하나가 컨테이너리스다.
여기서 컨테이너는 톰캣 같은 서블릿 컨테이너를 뜻하고, 컨테이너가 사라졌다는 게 아니라 설치와 배포, 관리를 개발자가 신경 쓰지 않아도 되는 상태를 말한다.
이 섹션은 그 컨테이너리스를 설명하는데, 방식이 흥미롭다. `SpringApplication.run`과 `@SpringBootApplication`을 지우고 부트가 대신 해주던 일을 직접 만들어본다.
토비의 스프링 6 - 이해와 원리에서 Spring이 없는 Java 코드부터 시작해 IoC Container에 도달했던 전개가 여기서도 반복된다.

먼저 서블릿 컨테이너를 코드로 띄우고, 그 안에 서블릿을 등록한 뒤 URL 매핑까지 붙인다.

```java
ServletWebServerFactory serverFactory = new TomcatServletWebServerFactory();
WebServer webServer = serverFactory.getWebServer(servletContext ->
        servletContext.addServlet("hello", new HttpServlet() {
            @Override
            protected void service(HttpServletRequest req, HttpServletResponse res) throws IOException {
                res.setStatus(HttpStatus.OK.value());
                res.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.TEXT_PLAIN_VALUE);
                res.getWriter().println("Hello " + req.getParameter("name"));
            }
        }).addMapping("/hello")
);
webServer.start();
```

눈여겨볼 건 타입이다. 생성된 서버가 Tomcat이 아니라 start와 stop 정도만 정의된 WebServer로 돌아온다.
제티나 언더토우로 바꾸고 싶다면 팩토리만 교체하면 되고 나머지는 그대로다. 토비의 스프링 6 - 이해와 원리의 PlatformTransactionManager와 같은 구조로, 서비스 추상화가 트랜잭션에서 웹 서버로 옮겨왔을 뿐이다.

다음은 프론트 컨트롤러다.
서블릿을 URL마다 하나씩 만들다 보면 인증이나 다국어 처리 같은 공통 코드가 서블릿마다 중복된다.
그래서 매핑을 `/*`로 바꿔 서블릿 하나가 모든 요청을 받게 하고, 공통 작업을 앞단에서 처리한 뒤 실제 로직은 뒤로 위임한다.

```java
if (req.getRequestURI().equals("/hello") && req.getMethod().equals(HttpMethod.GET.name())) {
    String ret = helloController.hello(req.getParameter("name"));  // 매핑 + 바인딩
    ...
} else {
    res.setStatus(HttpStatus.NOT_FOUND.value());
}
```

이 짧은 코드 안에 매핑과 바인딩이 모두 들어있다.
매핑은 요청 정보를 보고 어떤 로직을 호출할지 정하는 일이고, 바인딩은 요청을 로직이 쓸 수 있는 평범한 타입으로 바꿔 넘기는 일이다.
바인딩이 없다면 HelloController가 HttpServletRequest를 그대로 받아야 하고, 그러면 로직 사이사이에 웹 기술 코드가 끼어든다.
프론트 컨트롤러가 요청을 대신 해석해주는 덕분에 로직은 웹을 모르는 순수한 Java 코드로 남을 수 있다.

---

## 2. 독립 실행형 스프 애플리케이션

> 톰캣이 스프링을 품던 구조에서 스프링 컨테이너가 톰캣을 품는 구조로

`독립 실행형 서블릿 애플리케이션` 섹션에서 만든 코드에 스프링을 얹는다.
HelloController를 직접 new 하는 대신 컨테이너에 빈으로 등록하고, 손으로 만든 프론트 컨트롤러는 스프링이 제공하는 DispatcherServlet으로 교체한다.

```java
GenericWebApplicationContext applicationContext = new GenericWebApplicationContext() {
    @Override
    protected void onRefresh() {
        super.onRefresh();

        ServletWebServerFactory serverFactory = new TomcatServletWebServerFactory();
        WebServer webServer = serverFactory.getWebServer(servletContext ->
                servletContext.addServlet("dispatcherServlet", new DispatcherServlet(this))
                        .addMapping("/*")
        );
        webServer.start();
    }
};
applicationContext.registerBean(HelloController.class);
applicationContext.refresh();
```

여기서 관계가 뒤집힌다.
예전에는 톰캣을 설치하고 그 안에 스프링을 얹었으니 서블릿 컨테이너가 바깥이고 스프링이 안이었다.
그런데 이 코드에서는 스프링 컨테이너를 초기화하는 과정에서 서블릿 컨테이너를 띄운다. 컨테이너리스의 실체가 결국 이 역전이라고 볼 수도 있다.

순서에도 의도가 담겨 있다.
톰캣은 onRefresh에서 만들어지지만 포트를 열지는 않고, 싱글톤 빈이 전부 만들어진 뒤 refresh의 마지막 단계에서야 열린다.
포트를 먼저 열었다면 빈 생성이 실패하는 그 짧은 구간에 들어온 요청이 500을 받는다.
서버가 아예 뜨지 않아 연결이 거부되는 것보다 나쁘다. 로드밸런서는 연결 거부는 피해 가지만 응답이 오면 살아있다고 판단해 계속 요청을 보내기 때문이다.
포트가 열렸다는 건 모든 빈이 준비됐다는 보증이어야 한다.

```java
// 스프링 프레임워크
import org.springframework.web.context.support.GenericWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;
import org.springframework.web.bind.annotation.GetMapping;

// 스프링 부트
import org.springframework.boot.web.embedded.tomcat.TomcatServletWebServerFactory;
import org.springframework.boot.web.server.WebServer;
import org.springframework.boot.SpringApplication;
```
컨테이너도, 요청을 받아 컨트롤러로 넘기는 DispatcherServlet도 전부 스프링 프레임워크의 것이지 부트의 것이 아니다.
부트가 기여한 건 톰캣을 코드로 다루게 해주는 팩토리와 실행 절차 정도다.
실제로 마지막에 직접 만든 MySpringApplication을 부트의 SpringApplication으로 바꿔도 그대로 동작한다.
부트는 갈아끼울 수 있는 껍데기였고 알맹이는 계속 스프링이었던 셈이다.
그래서 부트를 프레임워크라기보다 도구의 모음으로 보는 게 맞다. 스프링 프레임워크가 애플리케이션을 구성하고, 부트는 그게 혼자 설 수 있게 조립해 시동을 건다.
