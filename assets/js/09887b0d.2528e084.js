"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),v=a,y=u["".concat(c,".").concat(v)]||u[v]||d[v]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=v;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},2399:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={title:"6. \uc2a4\ud504\ub9c1\uc774 \uc9c0\uc6d0\ud558\ub294 \ud504\ub85d\uc2dc",sidebar_position:6,tag:["lecture","spring advance"]},i=void 0,l={unversionedId:"lecture/spring-advance/six",id:"lecture/spring-advance/six",title:"6. \uc2a4\ud504\ub9c1\uc774 \uc9c0\uc6d0\ud558\ub294 \ud504\ub85d\uc2dc",description:"\ub3d9\uc801 \ud504\ub85d\uc2dc\uc758 \ubb38\uc81c\uc810",source:"@site/docs/resource/lecture/spring-advance/six.md",sourceDirName:"lecture/spring-advance",slug:"/lecture/spring-advance/six",permalink:"/resource/lecture/spring-advance/six",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"6. \uc2a4\ud504\ub9c1\uc774 \uc9c0\uc6d0\ud558\ub294 \ud504\ub85d\uc2dc",sidebar_position:6,tag:["lecture","spring advance"]},sidebar:"tutorialSidebar",previous:{title:"5. \ub3d9\uc801 \ud504\ub85d\uc2dc \uae30\uc220",permalink:"/resource/lecture/spring-advance/five"},next:{title:"7. \ube48 \ud6c4\ucc98\ub9ac\uae30",permalink:"/resource/lecture/spring-advance/seven"}},c={},s=[{value:"\ub3d9\uc801 \ud504\ub85d\uc2dc\uc758 \ubb38\uc81c\uc810",id:"\ub3d9\uc801-\ud504\ub85d\uc2dc\uc758-\ubb38\uc81c\uc810",level:2},{value:"\ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac",id:"\ud504\ub85d\uc2dc-\ud329\ud1a0\ub9ac",level:2},{value:"\uc608\uc81c 1",id:"\uc608\uc81c-1",level:3},{value:"Pointcut, Advice, Advisor",id:"pointcut-advice-advisor",level:2},{value:"\uc608\uc81c 1",id:"\uc608\uc81c-1-1",level:3},{value:"\uc9c1\uc811 \ub9cc\ub4e0 Pointcut",id:"\uc9c1\uc811-\ub9cc\ub4e0-pointcut",level:3},{value:"Spring\uc774 \uc81c\uacf5\ud558\ub294 \ubb34\uc218\ud788 \ub9ce\uc740 Pointcut\ub4e4",id:"spring\uc774-\uc81c\uacf5\ud558\ub294-\ubb34\uc218\ud788-\ub9ce\uc740-pointcut\ub4e4",level:3},{value:"\ud558\ub098\uc758 target\uc5d0 \uc5ec\ub7ec Advisor(Advice, Pointcut)\ub97c \uc801\uc6a9\ud558\ub824\uba74?",id:"\ud558\ub098\uc758-target\uc5d0-\uc5ec\ub7ec-advisoradvice-pointcut\ub97c-\uc801\uc6a9\ud558\ub824\uba74",level:3},{value:"\ud558\ub098\uc758 \ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac\uc5d0 \uc5ec\ub7ec Advisor\ub97c \uc801\uc6a9\ud574\ub3c4 \ub428",id:"\ud558\ub098\uc758-\ud504\ub85d\uc2dc-\ud329\ud1a0\ub9ac\uc5d0-\uc5ec\ub7ec-advisor\ub97c-\uc801\uc6a9\ud574\ub3c4-\ub428",level:4}],p={toc:s},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub3d9\uc801-\ud504\ub85d\uc2dc\uc758-\ubb38\uc81c\uc810"},"\ub3d9\uc801 \ud504\ub85d\uc2dc\uc758 \ubb38\uc81c\uc810"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc778\ud130\ud398\uc774\uc2a4\uc77c \uacbd\uc6b0 JDK, \uad6c\uccb4 \ud074\ub798\uc2a4\uc77c \uacbd\uc6b0 CGLIB\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uac01\uac01\uc758 Interface\ub97c \uad6c\ud604\ud55c \ud504\ub85d\uc2dc \uac1d\uccb4\uac00 \ud544\uc694\ud588\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc870\uac74\uc5d0 \ub9de\uc744 \ub54c \ud504\ub85d\uc2dc \ub85c\uc9c1\uc744 \uc801\uc6a9\ud558\ub294 \uae30\ub2a5\ub3c4 \uacf5\ud1b5\uc73c\ub85c \ubb36\uc744 \uc218 \uc788\uc5c8\uc73c\uba74")),(0,a.kt)("h2",{id:"\ud504\ub85d\uc2dc-\ud329\ud1a0\ub9ac"},"\ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"proxtfactory.png",src:r(920).Z,width:"2108",height:"2092"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uac1c\ubc1c\uc790\ub294 InvocationHandler / MethodInterceptor\ub97c \uad6c\ud604\ud558\uc9c0 \uc54a\uace0 Advice\ub9cc \uad6c\ud604\ud558\uba74 \ub428")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"advice.png",src:r(2448).Z,width:"2086",height:"2286"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac\ub294 Advice\ub97c \uc0ac\uc6a9\ud574 \ud544\uc694\uc5d0 \ub9de\ub294 \ub3d9\uc801 \ud504\ub85d\uc2dc\ub97c \uc0dd\uc131\ud558\uc5ec \ubc18\ud658\ud574\uc900\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub610\ud55c Pointcut \uac1c\ub150\uc744 \ub3c4\uc785\ud574\uc11c \uc6d0\ud558\ub294 \uc870\uac74\uc5d0 \ud574\ub2f9\ud560 \ub54c\ub9cc \ud504\ub85d\uc2dc\uc758 \ubd80\uac00 \uae30\ub2a5\uc774 \uc801\uc6a9\ub418\ub3c4\ub85d \uad6c\ud604\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"\uc608\uc81c-1"},"\uc608\uc81c 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// Advice \uc0dd\uc131\uc744 \uc704\ud574 \uad6c\ud604\ud574\uc57c \ud558\ub294 Interface\n\n@FunctionalInterface\npublic interface MethodInterceptor extends Interceptor {\n\n    @Nullable\n    Object invoke(@Nonnull MethodInvocation invocation) throws Throwable;\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Advice\ub97c \ub9cc\ub4dc\ub294 \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \ubc29\ubc95\uc740 \uc704 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud558\ub294 \uac83\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"MethodInterceptor\ub294 JDK\uc640 CGLIB\uc758 \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \uc704\ud55c Interface\ub97c \ucd94\uc0c1\ud654\ud55c \uac83.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Advice \uad6c\ud604 \uc608\uc2dc\n\n@Slf4j\npublic class TimeAdvice implements MethodInterceptor {\n\n    @Override\n    public Object invoke(MethodInvocation invocation) throws Throwable {\n        log.info("TimeProxy \uc2e4\ud589");\n        long startTime = System.currentTimeMillis();\n\n        Object result = invocation.proceed();\n\n        long endTime = System.currentTimeMillis();\n        long resultTime = endTime - startTime;\n        log.info("TimeProxy \uc885\ub8cc resultTime={}", resultTime);\n        return result;\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704 \uad6c\ud604\uc774 \uc774\uc804\uacfc \ub2e4\ub978 \uc810\uc740 \ud504\ub85d\uc2dc \uac1d\uccb4\uc784\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 \uc2e4\uc81c \ub85c\uc9c1\uc744 \uc218\ud589\ud560 target \uac1d\uccb4\uac00 \uc5c6\ub2e4\ub294 \uc810\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"invoke \uba54\uc11c\ub4dc\uc758 \uc778\uc790 MethodInvocation \ub0b4\ubd80\uc5d0 target \ud074\ub798\uc2a4 \uc815\ubcf4\uac00 \ubaa8\ub450 \ud3ec\ud568\ub418\uc5b4 \uc788\uae30\uc5d0 \ub54c\ubb38\uc774\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac\ub85c \ud504\ub85d\uc2dc\ub97c \uc0dd\uc131\ud558\ub294 \ub2e8\uacc4\uc5d0 target \uc815\ubcf4\ub97c \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec \ubc1b\uc74c")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    @DisplayName("\uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\uc73c\uba74 JDK \ub3d9\uc801 \ud504\ub85d\uc2dc \uc0ac\uc6a9")\n    void interfaceProxy() {\n        ServiceInterface target = new ServiceImpl();\n        \n        // target\uc744 \uc8fc\uc785\ud558\uc5ec ProxyFactory \uc0dd\uc131\n        ProxyFactory proxyFactory = new ProxyFactory(target);\n        proxyFactory.addAdvice(new TimeAdvice());\n        \n        //\ud504\ub85d\uc2dc \uac1d\uccb4 \uc0dd\uc131\n        ServiceInterface proxy = (ServiceInterface) proxyFactory.getProxy();\n        log.info("targetClass={}", target.getClass());\n        log.info("proxyClass={}", proxy.getClass());\n\n        proxy.save();\n\n        assertThat(AopUtils.isAopProxy(proxy)).isTrue();\n        assertThat(AopUtils.isJdkDynamicProxy(proxy)).isTrue();\n        assertThat(AopUtils.isCglibProxy(proxy)).isFalse();\n    }\n\n    @Test\n    @DisplayName("\uad6c\uccb4 \ud074\ub798\uc2a4\ub9cc \uc788\uc73c\uba74 CGLIB \uc0ac\uc6a9")\n    void concreteProxy() {\n        ConcreteService target = new ConcreteService();\n        ProxyFactory proxyFactory = new ProxyFactory(target);\n        proxyFactory.addAdvice(new TimeAdvice());\n        ConcreteService proxy = (ConcreteService) proxyFactory.getProxy();\n        log.info("targetClass={}", target.getClass());\n        log.info("proxyClass={}", proxy.getClass());\n\n        proxy.call();\n\n        assertThat(AopUtils.isAopProxy(proxy)).isTrue();\n        assertThat(AopUtils.isJdkDynamicProxy(proxy)).isFalse();\n        assertThat(AopUtils.isCglibProxy(proxy)).isTrue();\n    }\n\n    @Test\n    @DisplayName("ProxyTargetClass \uc635\uc158\uc744 \uc0ac\uc6a9\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\uc5b4\ub3c4 CGLIB\ub97c \uc0ac\uc6a9\ud558\uace0, \ud074\ub798\uc2a4 \uae30\ubc18 \ud504\ub85d\uc2dc \uc0ac\uc6a9")\n    void proxyTargetClass() {\n        ServiceInterface target = new ServiceImpl();\n        ProxyFactory proxyFactory = new ProxyFactory(target);\n        proxyFactory.setProxyTargetClass(true);\n        proxyFactory.addAdvice(new TimeAdvice());\n        ServiceInterface proxy = (ServiceInterface) proxyFactory.getProxy();\n        log.info("targetClass={}", target.getClass());\n        log.info("proxyClass={}", proxy.getClass());\n\n        proxy.save();\n\n        assertThat(AopUtils.isAopProxy(proxy)).isTrue();\n        assertThat(AopUtils.isJdkDynamicProxy(proxy)).isFalse();\n        assertThat(AopUtils.isCglibProxy(proxy)).isTrue();\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc704 \ud14c\uc2a4\ud2b8\ub97c \ubcf4\uba74"),(0,a.kt)("li",{parentName:"ul"},"Interface \uc720\ubb34\uc5d0 \ub530\ub77c \uc790\ub3d9\uc801\uc73c\ub85c JDK / CGLIB\uc774 \uc0ac\uc6a9\ub418\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ucd94\uac00\ub85c proxyTargetClass = true\ub85c \uc124\uc815\ud558\uba74 \uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\uc5b4\ub3c4 CGLIB\uc744 \uc0ac\uc6a9\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"pointcut-advice-advisor"},"Pointcut, Advice, Advisor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Pointcut"),": \ubd80\uac00\uae30\ub2a5 \uc801\uc6a9 \uc704\uce58\ub97c \ud310\ub2e8\ud558\ub294 \ud544\ud130\ub9c1 \ub85c\uc9c1\n",(0,a.kt)("inlineCode",{parentName:"p"},"Advice"),": \ud504\ub85d\uc2dc\uac00 \ud638\ucd9c\ud558\ub294 \ubd80\uac00 \uae30\ub2a5\n",(0,a.kt)("inlineCode",{parentName:"p"},"Advisor"),": \ud558\ub098\uc758 Pointcut\uacfc \ud558\ub098\uc758 Advice\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uac83\uc744 \ub73b\ud568"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc\uc5d0 \ub9de\ucd94\uc5b4 \uc124\uba85\ud55c \uac83\uc774\ub77c \uc2e4\uc81c \uad6c\ud604\uc740 \ub2e4\ub97c \uc218 \uc788\ub2e4...")))),(0,a.kt)("h3",{id:"\uc608\uc81c-1-1"},"\uc608\uc81c 1"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Test\n    void advisorTest1() {\n        ServiceInterface target = new ServiceImpl();\n        ProxyFactory proxyFactory = new ProxyFactory(target);\n        \n        // \ud56d\uc0c1 true\ub97c \ubc18\ud658\ud558\ub294 pointcut\uacfc TimeAdvice\ub97c \uac00\uc9c4 Advisor \uc0dd\uc131\n        DefaultPointcutAdvisor advisor = new DefaultPointcutAdvisor(Pointcut.TRUE, new TimeAdvice());\n        \n        // proxyFactory\uc5d0 advisor \uc124\uc815\n        proxyFactory.addAdvisor(advisor);\n        ServiceInterface proxy = (ServiceInterface) proxyFactory.getProxy();\n\n        proxy.save();\n        proxy.find();\n    }\n")),(0,a.kt)("h3",{id:"\uc9c1\uc811-\ub9cc\ub4e0-pointcut"},"\uc9c1\uc811 \ub9cc\ub4e0 Pointcut"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    // \uc2e4\ud589 \ubd80\ubd84\n    @Test\n    @DisplayName("\uc2a4\ud504\ub9c1\uc774 \uc81c\uacf5\ud558\ub294 \ud3ec\uc778\ud2b8\ucef7")\n    void advisorTest3() {\n        ServiceInterface target = new ServiceImpl();\n        ProxyFactory proxyFactory = new ProxyFactory(target);\n        NameMatchMethodPointcut pointcut = new NameMatchMethodPointcut();\n        pointcut.setMappedNames("save");\n        DefaultPointcutAdvisor advisor = new DefaultPointcutAdvisor(pointcut, new TimeAdvice());\n        proxyFactory.addAdvisor(advisor);\n        ServiceInterface proxy = (ServiceInterface) proxyFactory.getProxy();\n\n        proxy.save();\n        proxy.find();\n    }\n\n    // Custom Pointcut\n    static class MyPointcut implements Pointcut {\n\n        @Override\n        public ClassFilter getClassFilter() {\n            return ClassFilter.TRUE;\n        }\n\n        @Override\n        public MethodMatcher getMethodMatcher() {\n            return new MyMethodMatcher();\n        }\n    }\n\n    // Pointcut\uc5d0 \uc0ac\uc6a9\ub420 MethodMatcher\n    static class MyMethodMatcher implements MethodMatcher {\n\n        private String matchName = "save";\n\n        @Override\n        public boolean matches(Method method, Class<?> targetClass) {\n            boolean result = method.getName().equals(matchName);\n            log.info("\ud3ec\uc778\ud2b8\ucef7 \ud638\ucd9c method={} targetClass={}", method.getName(), targetClass);\n            log.info("\ud3ec\uc778\ud2b8\ucef7 \uacb0\uacfc result={}", result);\n            return result;\n        }\n\n        @Override\n        public boolean isRuntime() {\n            return false;\n        }\n\n        @Override\n        public boolean matches(Method method, Class<?> targetClass, Object... args) {\n            return false;\n        }\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pointcut\uc740 Class\ub97c \ud544\ud130\ub9c1\ud558\ub294 ClassFIlter\uc640 Method\ub97c \ud544\ud130\ub9c1\ud558\ub294 MethodMatcher\ub97c \uac00\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub458\uc744 \uc0ac\uc6a9\ud574 \uc801\uc6a9 \ub300\uc0c1\uc774 \ub420 Class / Method\ub97c \uad6c\ubd84\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"MethodMatcher \uad6c\ud604\ubd80\uc758 isRuntime",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"isRuntime\uc774 true\uc774\uba74 public boolean matches(Method method, Class<?> targetClass, Object... args) \uba54\uc11c\ub4dc\uac00 \uc2e4\ud589\ub428"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc801\uc73c\ub85c \ub118\uc5b4\uc624\ub294 \ub9e4\uac1c\ubcc0\uc218\ub85c \ud310\ub2e8\uc774 \uac00\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"false\uc778 \uacbd\uc6b0 \uc2a4\ud504\ub9c1 \ub0b4\ubd80\uc5d0\uc11c \ud074\ub798\uc2a4 \uc815\uc801 \uc815\ubcf4\ub97c \uce90\uc2f1\ud558\uc5ec \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uac00\ub2a5"),(0,a.kt)("li",{parentName:"ul"},"\ub3d9\uc801 \ub9e4\uac1c\ubcc0\uc218\uc5d0 \uc758\ud55c \ud310\ub2e8\uc774 \ud544\uc694\ud558\uc9c0 \uc54a\ub2e4\uba74 false \uc0ac\uc6a9\uc774 \uc88b\uaca0\ub2e4")))),(0,a.kt)("h3",{id:"spring\uc774-\uc81c\uacf5\ud558\ub294-\ubb34\uc218\ud788-\ub9ce\uc740-pointcut\ub4e4"},"Spring\uc774 \uc81c\uacf5\ud558\ub294 \ubb34\uc218\ud788 \ub9ce\uc740 Pointcut\ub4e4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NameMatchMethodPointcut: \uba54\uc11c\ub4dc \uc774\ub984 \uae30\ubc18"),(0,a.kt)("li",{parentName:"ul"},"JdkRegexpMethodPointcut JDK \uc815\uaddc \ud45c\ud604\uc2dd \uae30\ubc18"),(0,a.kt)("li",{parentName:"ul"},"TruePointcut: \ud56d\uc0c1 \uc801\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"AnnotationMatchingPointcut: \uc560\ub178\ud14c\uc774\uc158 \uae30\ubc18"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"AspectJexpressionPointcut"),": aspectJ \ud45c\ud604\uc2dd\uc5d0 \uc758\ud55c \ub9e4\uce6d")),(0,a.kt)("h3",{id:"\ud558\ub098\uc758-target\uc5d0-\uc5ec\ub7ec-advisoradvice-pointcut\ub97c-\uc801\uc6a9\ud558\ub824\uba74"},"\ud558\ub098\uc758 target\uc5d0 \uc5ec\ub7ec Advisor(Advice, Pointcut)\ub97c \uc801\uc6a9\ud558\ub824\uba74?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    // \uac00\uc7a5 \ub2e8\uc21c\ud788 \uc0dd\uac01\ud574\ubcf4\uba74...\n    // \uac01\uac01\uc758 Advisor\ub85c ProxyFactory\ub97c \ub9cc\ub4e4\uba74 \ub420 \uac83 \uac19\ub2e4...\n    @Test\n    @DisplayName("\uc5ec\ub7ec \ud504\ub85d\uc2dc")\n    void multiAdvisorTest1() {\n        //client -> proxy2(advisor2) -> proxy1(advisor1) -> target\n\n        //\ud504\ub85d\uc2dc1 \uc0dd\uc131\n        ServiceInterface target = new ServiceImpl();\n        ProxyFactory proxyFactory1 = new ProxyFactory(target);\n        DefaultPointcutAdvisor advisor1 = new DefaultPointcutAdvisor(Pointcut.TRUE, new Advice1());\n        proxyFactory1.addAdvisor(advisor1);\n        ServiceInterface proxy1 = (ServiceInterface) proxyFactory1.getProxy();\n\n        //\ud504\ub85d\uc2dc2 \uc0dd\uc131, target -> proxy1 \uc785\ub825\n        ProxyFactory proxyFactory2 = new ProxyFactory(proxy1);\n        DefaultPointcutAdvisor advisor2 = new DefaultPointcutAdvisor(Pointcut.TRUE, new Advice2());\n        proxyFactory2.addAdvisor(advisor2);\n        ServiceInterface proxy2 = (ServiceInterface) proxyFactory2.getProxy();\n\n        //\uc2e4\ud589\n        proxy2.save();\n\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud589\ud574\ubcf4\uba74 proxy2\ub294 advice2\ub97c \ud638\ucd9c\ud558\uace0 proxy1\uc744 \ud638\ucd9c\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"proxy1\uc740 advice\ub97c \ud638\ucd9c\ud558\uace0 target\uc744 \ud638\ucd9c\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Pointcut.TRUE\uc774\uae30\uc5d0 \ub458 \ub2e4 \uc801\uc6a9\ub41c \uac83."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc774\uac74 pointcut\uc774 \uacb9\uce5c \ubb38\uc81c\uc77c \ubfd0"),(0,a.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \ud070 \ub2e8\uc810\uc740 \uc801\uc6a9\ud560 Advisor\ub9cc\ud07c ProxyFactory\uac00 \ud544\uc694\ud558\ub2e4\ub294 \uac83")),(0,a.kt)("h4",{id:"\ud558\ub098\uc758-\ud504\ub85d\uc2dc-\ud329\ud1a0\ub9ac\uc5d0-\uc5ec\ub7ec-advisor\ub97c-\uc801\uc6a9\ud574\ub3c4-\ub428"},"\ud558\ub098\uc758 \ud504\ub85d\uc2dc \ud329\ud1a0\ub9ac\uc5d0 \uc5ec\ub7ec Advisor\ub97c \uc801\uc6a9\ud574\ub3c4 \ub428"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'    @Test\n    @DisplayName("\ud558\ub098\uc758 \ud504\ub85d\uc2dc, \uc5ec\ub7ec \uc5b4\ub4dc\ubc14\uc774\uc800")\n    void multiAdvisorTest2() {\n        //client -> proxy -> advisor2 -> advisor1 -> target\n\n        DefaultPointcutAdvisor advisor1 = new DefaultPointcutAdvisor(Pointcut.TRUE, new Advice1());\n        DefaultPointcutAdvisor advisor2 = new DefaultPointcutAdvisor(Pointcut.TRUE, new Advice2());\n\n        //\ud504\ub85d\uc2dc1 \uc0dd\uc131\n        ServiceInterface target = new ServiceImpl();\n        ProxyFactory proxyFactory1 = new ProxyFactory(target);\n\n        proxyFactory1.addAdvisor(advisor2);\n        proxyFactory1.addAdvisor(advisor1);\n        ServiceInterface proxy = (ServiceInterface) proxyFactory1.getProxy();\n\n        //\uc2e4\ud589\n        proxy.save();\n    }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"multiproxy.png",src:r(4057).Z,width:"1424",height:"884"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774\ub807\uac8c \uad6c\ud604\ud574\ub3c4 \uac00\uc7a5 \ub2e8\uc21c\ud55c \ubc29\ubc95\uacfc \uac19\uac8c \ub3d9\uc791\ud55c\ub2e4.")))}d.isMDXComponent=!0},2448:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/advice-67883999a6d240d284cf6cf71d1512aa.png"},4057:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/multiproxy-e0696bf8a6e5097296a8ab9f8659d0ea.png"},920:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proxtfactory-8ca2cf1de729a74ae8f3f3f5d3861f5b.png"}}]);