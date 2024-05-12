"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5523],{6155:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(4848),s=t(8453);const r={title:"10. AOP Pointcut",sidebar_position:10,tag:["lecture","spring advance"]},l=void 0,o={id:"lecture/spring-advance/10",title:"10. AOP Pointcut",description:"Pointcut \uc9c0\uc2dc\uc790 (= AspectJ\uac00 \uc81c\uacf5\ud558\ub294 \ud3ec\uc778\ud2b8\ucef7 \ud45c\ud604\uc2dd)",source:"@site/docs/resource/lecture/spring-advance/10.md",sourceDirName:"lecture/spring-advance",slug:"/lecture/spring-advance/10",permalink:"/resource/lecture/spring-advance/10",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"10. AOP Pointcut",sidebar_position:10,tag:["lecture","spring advance"]},sidebar:"tutorialSidebar",previous:{title:"9. AOP",permalink:"/resource/lecture/spring-advance/9"},next:{title:"11. AOP \uc2e4\ubb34 \uc8fc\uc758\uc0ac\ud56d",permalink:"/resource/lecture/spring-advance/11"}},c={},a=[{value:"Pointcut \uc9c0\uc2dc\uc790 (= AspectJ\uac00 \uc81c\uacf5\ud558\ub294 \ud3ec\uc778\ud2b8\ucef7 \ud45c\ud604\uc2dd)",id:"pointcut-\uc9c0\uc2dc\uc790--aspectj\uac00-\uc81c\uacf5\ud558\ub294-\ud3ec\uc778\ud2b8\ucef7-\ud45c\ud604\uc2dd",level:2},{value:"\ud3ec\uc778\ud2b8\ucef7 \uc9c0\uc2dc\uc790\uc758 \uc885\ub958",id:"\ud3ec\uc778\ud2b8\ucef7-\uc9c0\uc2dc\uc790\uc758-\uc885\ub958",level:3},{value:"excution",id:"excution",level:2},{value:"\ub9e4\uce6d \uc870\uac74",id:"\ub9e4\uce6d-\uc870\uac74",level:3},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"Excution \ud30c\ub77c\ubbf8\ud130 \ub9e4\uce6d \uaddc\uce59",id:"excution-\ud30c\ub77c\ubbf8\ud130-\ub9e4\uce6d-\uaddc\uce59",level:3},{value:"within",id:"within",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c",level:3},{value:"args",id:"args",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c-1",level:3},{value:"@target, @within",id:"target-within",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c-2",level:3},{value:"args, @args, @target \uc8fc\uc758\ud560 \uc810",id:"args-args-target-\uc8fc\uc758\ud560-\uc810",level:2},{value:"@annotation, @args",id:"annotation-args",level:2},{value:"bean",id:"bean",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c-3",level:3},{value:"\ub9e4\uac1c\ubcc0\uc218 \uc804\ub2ec",id:"\ub9e4\uac1c\ubcc0\uc218-\uc804\ub2ec",level:2},{value:"\uc608\uc81c",id:"\uc608\uc81c-4",level:3},{value:"this, target",id:"this-target",level:2},{value:"\uc0dd\uc131 \ubc29\uc2dd",id:"\uc0dd\uc131-\ubc29\uc2dd",level:3},{value:"1. JDK \ub3d9\uc801 \ud504\ub85d\uc2dc",id:"1-jdk-\ub3d9\uc801-\ud504\ub85d\uc2dc",level:4},{value:"2. CGLIB \ud504\ub85d\uc2dc",id:"2-cglib-\ud504\ub85d\uc2dc",level:4}];function h(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"pointcut-\uc9c0\uc2dc\uc790--aspectj\uac00-\uc81c\uacf5\ud558\ub294-\ud3ec\uc778\ud2b8\ucef7-\ud45c\ud604\uc2dd",children:"Pointcut \uc9c0\uc2dc\uc790 (= AspectJ\uac00 \uc81c\uacf5\ud558\ub294 \ud3ec\uc778\ud2b8\ucef7 \ud45c\ud604\uc2dd)"}),"\n",(0,i.jsx)(n.h3,{id:"\ud3ec\uc778\ud2b8\ucef7-\uc9c0\uc2dc\uc790\uc758-\uc885\ub958",children:"\ud3ec\uc778\ud2b8\ucef7 \uc9c0\uc2dc\uc790\uc758 \uc885\ub958"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"execution : \uba54\uc18c\ub4dc \uc2e4\ud589 \uc870\uc778 \ud3ec\uc778\ud2b8\ub97c \ub9e4\uce6d\ud55c\ub2e4. \uc2a4\ud504\ub9c1 AOP\uc5d0\uc11c \uac00\uc7a5 \ub9ce\uc774 \uc0ac\uc6a9\ud558\uace0, \uae30\ub2a5\ub3c4 \ubcf5\uc7a1\ud558\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"within : \ud2b9\uc815 \ud0c0\uc785 \ub0b4\uc758 \uc870\uc778 \ud3ec\uc778\ud2b8\ub97c \ub9e4\uce6d\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"args : \uc778\uc790\uac00 \uc8fc\uc5b4\uc9c4 \ud0c0\uc785\uc758 \uc778\uc2a4\ud134\uc2a4\uc778 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"this : \uc2a4\ud504\ub9c1 \ube48 \uac1d\uccb4(\uc2a4\ud504\ub9c1 AOP \ud504\ub85d\uc2dc)\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"target : Target \uac1d\uccb4(\uc2a4\ud504\ub9c1 AOP \ud504\ub85d\uc2dc\uac00 \uac00\ub974\ud0a4\ub294 \uc2e4\uc81c \ub300\uc0c1)\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"@target : \uc2e4\ud589 \uac1d\uccb4\uc758 \ud074\ub798\uc2a4\uc5d0 \uc8fc\uc5b4\uc9c4 \ud0c0\uc785\uc758 \uc560\ub178\ud14c\uc774\uc158\uc774 \uc788\ub294 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"@within : \uc8fc\uc5b4\uc9c4 \uc560\ub178\ud14c\uc774\uc158\uc774 \uc788\ub294 \ud0c0\uc785 \ub0b4 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"@annotation : \uba54\uc11c\ub4dc\uac00 \uc8fc\uc5b4\uc9c4 \uc560\ub178\ud14c\uc774\uc158\uc744 \uac00\uc9c0\uace0 \uc788\ub294 \uc870\uc778 \ud3ec\uc778\ud2b8\ub97c \ub9e4\uce6d"}),"\n",(0,i.jsx)(n.li,{children:"@args : \uc804\ub2ec\ub41c \uc2e4\uc81c \uc778\uc218\uc758 \ub7f0\ud0c0\uc784 \ud0c0\uc785\uc774 \uc8fc\uc5b4\uc9c4 \ud0c0\uc785\uc758 \uc560\ub178\ud14c\uc774\uc158\uc744 \uac16\ub294 \uc870\uc778 \ud3ec\uc778\ud2b8"}),"\n",(0,i.jsx)(n.li,{children:"bean : \uc2a4\ud504\ub9c1 \uc804\uc6a9 \ud3ec\uc778\ud2b8\ucef7 \uc9c0\uc2dc\uc790, \ube48\uc758 \uc774\ub984\uc73c\ub85c \ud3ec\uc778\ud2b8\ucef7\uc744 \uc9c0\uc815\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"excution",children:"excution"}),"\n",(0,i.jsx)(n.h3,{id:"\ub9e4\uce6d-\uc870\uac74",children:"\ub9e4\uce6d \uc870\uac74"}),"\n",(0,i.jsx)(n.p,{children:"\ub9e4\uce6d \uc870\uac74"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc811\uadfc\uc81c\uc5b4\uc790"}),"\n",(0,i.jsx)(n.li,{children:"\ubc18\ud658\ud0c0\uc785"}),"\n",(0,i.jsx)(n.li,{children:"\uc120\uc5b8\ud0c0\uc785"}),"\n",(0,i.jsx)(n.li,{children:"\uba54\uc11c\ub4dc\uc774\ub984"}),"\n",(0,i.jsx)(n.li,{children:"\ud30c\ub77c\ubbf8\ud130"}),"\n",(0,i.jsx)(n.li,{children:"\uc608\uc678"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc2dc",children:"\uc608\uc2dc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Slf4j\npublic class ExecutionTest {\n\n    AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n    Method helloMethod;\n\n    @BeforeEach\n    public void init() throws NoSuchMethodException {\n        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);\n    }\n\n    @Test\n    void printMethod() {\n        //public java.lang.String hello.aop.member.MemberServiceImpl.hello(java.lang.String)\n        log.info("helloMethod={}", helloMethod);\n    }\n\n    @Test\n    void exactMatch() {\n        //public java.lang.String hello.aop.member.MemberServiceImpl.hello(java.lang.String)\n        pointcut.setExpression("execution(public String hello.aop.member.MemberServiceImpl.hello(String))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void allMatch() {\n        pointcut.setExpression("execution(* *(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void nameMatch() {\n        pointcut.setExpression("execution(* hello(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void nameMatchStar1() {\n        pointcut.setExpression("execution(* hel*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void nameMatchStar2() {\n        pointcut.setExpression("execution(* *el*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void nameMatchFalse() {\n        pointcut.setExpression("execution(* nono(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();\n    }\n\n    @Test\n    void packageExactMatch1() {\n        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.hello(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void packageExactMatch2() {\n        pointcut.setExpression("execution(* hello.aop.member.*.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void packageExactFalse() {\n        pointcut.setExpression("execution(* hello.aop.*.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();\n    }\n\n    @Test\n    void packageMatchSubPackage1() {\n        pointcut.setExpression("execution(* hello.aop.member..*.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void packageMatchSubPackage2() {\n        pointcut.setExpression("execution(* hello.aop..*.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void typeExactMatch() {\n        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    // excution\uc5d0\uc11c MemberService\ub97c \uc120\uc5b8\ud574\uc918\ub3c4 \uc790\uc2dd \ud0c0\uc785\uc778 MemberServiceImpl\uc5d0\ub3c4 \uc801\uc6a9\ub41c\ub2e4.\n    @Test\n    void typeMatchSuperType() {\n        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n\n    // internal \uba54\uc11c\ub4dc\ub294 MemberServiceImpl\ub9cc \uc815\uc758\ud55c \uba54\uc11c\ub4dc\uc774\ub2e4.\n    // \uc544\ub798 2\uac1c\uc758 \ud14c\uc2a4\ud2b8\ub97c \ubcf4\uba74 MemberService\ub85c \uba85\uc2dc\ud588\uc744 \ub54c\ub294 internal \uba54\uc11c\ub4dc\ub97c \ucc3e\uc744 \uc218 \uc5c6\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4\n    @Test\n    void typeMatchInternal() throws NoSuchMethodException {\n        pointcut.setExpression("execution(* hello.aop.member.MemberServiceImpl.*(..))");\n\n        Method internalMethod = MemberServiceImpl.class.getMethod("internal", String.class);\n        assertThat(pointcut.matches(internalMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void typeMatchNoSuperTypeMethodFalse() throws NoSuchMethodException {\n        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");\n\n        Method internalMethod = MemberServiceImpl.class.getMethod("internal", String.class);\n        assertThat(pointcut.matches(internalMethod, MemberServiceImpl.class)).isFalse();\n    }\n\n    //String \ud0c0\uc785\uc758 \ud30c\ub77c\ubbf8\ud130 \ud5c8\uc6a9\n    //(String)\n    @Test\n    void argsMatch() {\n        pointcut.setExpression("execution(* *(String))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    //\ud30c\ub77c\ubbf8\ud130\uac00 \uc5c6\uc5b4\uc57c \ud568\n    //()\n    @Test\n    void argsMatchNoArgs() {\n        pointcut.setExpression("execution(* *())");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();\n    }\n\n    //\uc815\ud655\ud788 \ud558\ub098\uc758 \ud30c\ub77c\ubbf8\ud130 \ud5c8\uc6a9, \ubaa8\ub4e0 \ud0c0\uc785 \ud5c8\uc6a9\n    //(Xxx)\n    @Test\n    void argsMatchStar() {\n        pointcut.setExpression("execution(* *(*))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    //\uc22b\uc790\uc640 \ubb34\uad00\ud558\uac8c \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130, \ubaa8\ub4e0 \ud0c0\uc785 \ud5c8\uc6a9\n    //(), (Xxx), (Xxx, Xxx)\n    @Test\n    void argsMatchAll() {\n        pointcut.setExpression("execution(* *(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    //String \ud0c0\uc785\uc73c\ub85c \uc2dc\uc791, \uc22b\uc790\uc640 \ubb34\uad00\ud558\uac8c \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130, \ubaa8\ub4e0 \ud0c0\uc785 \ud5c8\uc6a9\n    //(String), (String, Xxx), (String, Xxx, Xxx)\n    @Test\n    void argsMatchComplex() {\n        pointcut.setExpression("execution(* *(String, ..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"AspectJExpressionPointcut"}),": \ud3ec\uc778\ud2b8\ucef7 \ud45c\ud604\uc2dd \ucc98\ub9ac \ud074\ub798\uc2a4. setExpression() \uba54\uc11c\ub4dc\ub85c \uc124\uc815"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"excution-\ud30c\ub77c\ubbf8\ud130-\ub9e4\uce6d-\uaddc\uce59",children:"Excution \ud30c\ub77c\ubbf8\ud130 \ub9e4\uce6d \uaddc\uce59"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"execution \ud30c\ub77c\ubbf8\ud130 \ub9e4\uce6d \uaddc\uce59\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"(String) : \uc815\ud655\ud558\uac8c String \ud0c0\uc785 \ud30c\ub77c\ubbf8\ud130"}),"\n",(0,i.jsx)(n.li,{children:"() : \ud30c\ub77c\ubbf8\ud130\uac00 \uc5c6\uc5b4\uc57c \ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"(*) : \uc815\ud655\ud788 \ud558\ub098\uc758 \ud30c\ub77c\ubbf8\ud130, \ub2e8 \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"(*, *) : \uc815\ud655\ud788 \ub450 \uac1c\uc758 \ud30c\ub77c\ubbf8\ud130, \ub2e8 \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"(..) : \uc22b\uc790\uc640 \ubb34\uad00\ud558\uac8c \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130, \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4. \ucc38\uace0\ub85c \ud30c\ub77c\ubbf8\ud130\uac00 \uc5c6\uc5b4\ub3c4 \ub41c\ub2e4. 0..* \ub85c \uc774\ud574\ud558\uba74 \ub41c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"(String, ..) : String \ud0c0\uc785\uc73c\ub85c \uc2dc\uc791\ud574\uc57c \ud55c\ub2e4. \uc22b\uc790\uc640 \ubb34\uad00\ud558\uac8c \ubaa8\ub4e0 \ud30c\ub77c\ubbf8\ud130, \ubaa8\ub4e0 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4. \uc608) (String) , (String, Xxx) , (String, Xxx, Xxx) \ud5c8\uc6a9"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"within",children:"within"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud2b9\uc815 \ud0c0\uc571 \ub0b4\uc758 \uc870\uc778 \ud3ec\uc778\ud2b8\ub4e4\ub85c \ub9e4\uce6d\uc744 \uc81c\ud55c\ud568"}),"\n",(0,i.jsx)(n.li,{children:"\uc989 \ud0c0\uc785\uc744 \uae30\ubc18\uc73c\ub85c \ub9e4\uce6d \ud6c4 \uba54\uc11c\ub4dc\uc5d0 \uc790\ub3d9 \uc801\uc6a9\ub428"}),"\n",(0,i.jsx)(n.li,{children:"\uae30\uc874 execution\uc5d0\uc11c \ud0c0\uc785 \ubd80\ubd84\ub9cc \uc0ac\uc6a9\ud558\ub294 \ud615\uc2dd"}),"\n",(0,i.jsx)(n.li,{children:"\ub2e8, execution\uacfc \ub2e4\ub974\uac8c \uc815\ud655\ud55c \ud0c0\uc785 \uba85\uc2dc\uac00 \ud544\uc694\ud568(\ubd80\ubaa8 \ud0c0\uc785 != \uc790\uc2dd \ud0c0\uc785)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc81c",children:"\uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class WithinTest {\n\n    AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n    Method helloMethod;\n\n    @BeforeEach\n    public void init() throws NoSuchMethodException {\n        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);\n    }\n\n    @Test\n    void withinExact() {\n        pointcut.setExpression("within(hello.aop.member.MemberServiceImpl)");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void withinStar() {\n        pointcut.setExpression("within(hello.aop.member.*Service*)");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    void withinSubPackage() {\n        pointcut.setExpression("within(hello.aop..*)");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    @Test\n    @DisplayName("\ud0c0\ucf13\uc758 \ud0c0\uc785\uc5d0\ub9cc \uc9c1\uc811 \uc801\uc6a9, \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc120\uc815\ud558\uba74 \uc548\ub41c\ub2e4.")\n    void withinSuperTypeFalse() {\n        pointcut.setExpression("within(hello.aop.member.MemberService)");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isFalse();\n    }\n\n    @Test\n    @DisplayName("execution\uc740 \ud0c0\uc785 \uae30\ubc18, \uc778\ud130\ud398\uc774\uc2a4 \uc120\uc815 \uac00\ub2a5")\n    void executionSuperTypeTrue() {\n        pointcut.setExpression("execution(* hello.aop.member.MemberService.*(..))");\n        assertThat(pointcut.matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"args",children:"args"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc778\uc790\ub97c \uae30\uc900\uc73c\ub85c \uba54\uc11c\ub4dc \ub9e4\uce6d"}),"\n",(0,i.jsxs)(n.li,{children:["execution\uc740 \ud30c\ub77c\ubbf8\ud130\uc758 \ud0c0\uc785\uc774 \uc815\ud655\ud788 \ub9e4\uce6d\ub418\uc5b4\uc57c \ud55c\ub2e4. (\ud074\ub798\uc2a4 \uc120\uc5b8 \uc815\ubcf4\ub97c \uae30\ubc18\uc73c\ub85c \ud310\ub2e8\ud558\uae30\uc5d0)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"class \uc120\uc5b8 \uc815\ubcf4\uc5d0\uc11c\ub294 impements, extends\ud55c \ud074\ub798\uc2a4/\uc778\ud130\ud398\uc774\uc2a4\ub97c \uc54c \uc218 \uc5c6\ub098\ubcf4\ub2e4..."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"args\ub294 \ud30c\ub77c\ubbf8\ud130 \ud0c0\uc785\uc744 \ube44\uad50\ud560 \ub54c \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud55c\ub2e4. (\ud30c\ub77c\ubbf8\ud130\ub85c \ub118\uc5b4\uc628 \uc778\uc2a4\ud134\uc2a4\ub97c \ubcf4\uace0 \ud310\ub2e8\ud558\uae30 \ub54c\ubb38)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc81c-1",children:"\uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class ArgsTest {\n\n    Method helloMethod;\n\n    @BeforeEach\n    public void init() throws NoSuchMethodException {\n        helloMethod = MemberServiceImpl.class.getMethod("hello", String.class);\n    }\n\n    private AspectJExpressionPointcut pointcut(String expression) {\n        AspectJExpressionPointcut pointcut = new AspectJExpressionPointcut();\n        pointcut.setExpression(expression);\n        return pointcut;\n    }\n\n    @Test\n    void args() {\n        //hello(String)\uacfc \ub9e4\uce6d\n        assertThat(pointcut("args(String)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args(Object)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args()")\n                .matches(helloMethod, MemberServiceImpl.class)).isFalse();\n        assertThat(pointcut("args(..)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args(*)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args(String,..)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n    }\n\n    /**\n     * execution(* *(java.io.Serializable)): \uba54\uc11c\ub4dc\uc758 \uc2dc\uadf8\ub2c8\ucc98\ub85c \ud310\ub2e8 (\uc815\uc801)\n     * args(java.io.Serializable): \ub7f0\ud0c0\uc784\uc5d0 \uc804\ub2ec\ub41c \uc778\uc218\ub85c \ud310\ub2e8 (\ub3d9\uc801)\n     */\n    @Test\n    void argsVsExecution() {\n        //Args\n        assertThat(pointcut("args(String)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args(java.io.Serializable)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("args(Object)")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n\n        //Execution\n        assertThat(pointcut("execution(* *(String))")\n                .matches(helloMethod, MemberServiceImpl.class)).isTrue();\n        assertThat(pointcut("execution(* *(java.io.Serializable))") //\ub9e4\uce6d \uc2e4\ud328\n                .matches(helloMethod, MemberServiceImpl.class)).isFalse();\n        assertThat(pointcut("execution(* *(Object))") //\ub9e4\uce6d \uc2e4\ud328\n                .matches(helloMethod, MemberServiceImpl.class)).isFalse();\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"target-within",children:"@target, @within"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub458 \ub2e4 \uc560\ub178\ud14c\uc774\uc158 \uae30\ubc18 \ub9e4\uce6d"}),"\n",(0,i.jsxs)(n.li,{children:["\ub2e8,","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"@target: \uc778\uc2a4\ud134\uc2a4\uc758 \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc5d0 \uc801\uc6a9 (\ubd80\ubaa8 \ud074\ub798\uc2a4 \uba54\uc2a4\ub3c4\uc5d0\ub3c4 \uc801\uc6a9\ub428)"}),"\n",(0,i.jsx)(n.li,{children:"@within: \ud574\ub2f9 \ud0c0\uc785 \ub0b4\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub9cc (\ubd80\ubaa8 \ud074\ub798\uc2a4 \uba54\uc11c\ub4dc\uc5d0 \uc801\uc6a9 \uc548\ub428)"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc81c-2",children:"\uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Slf4j\n@Import({AtTargetAtWithinTest.Config.class})\n@SpringBootTest\npublic class AtTargetAtWithinTest {\n\n    @Autowired\n    Child child;\n\n    @Test\n    void success() {\n        log.info("child Proxy={}", child.getClass());\n        child.childMethod(); //\ubd80\ubaa8, \uc790\uc2dd \ubaa8\ub450 \uc788\ub294 \uba54\uc11c\ub4dc\n        child.parentMethod(); //\ubd80\ubaa8 \ud074\ub798\uc2a4\ub9cc \uc788\ub294 \uba54\uc11c\ub4dc\n    }\n\n    static class Config {\n\n        @Bean\n        public Parent parent() {\n            return new Parent();\n        }\n        @Bean\n        public Child child() {\n            return new Child();\n        }\n        @Bean\n        public AtTargetAtWithinAspect atTargetAtWithinAspect() {\n            return new AtTargetAtWithinAspect();\n        }\n    }\n\n    static class Parent {\n        public void parentMethod(){} //\ubd80\ubaa8\uc5d0\ub9cc \uc788\ub294 \uba54\uc11c\ub4dc\n    }\n\n    @ClassAop\n    static class Child extends Parent {\n        public void childMethod(){}\n    }\n\n    @Slf4j\n    @Aspect\n    static class AtTargetAtWithinAspect {\n\n        //@target: \uc778\uc2a4\ud134\uc2a4 \uae30\uc900\uc73c\ub85c \ubaa8\ub4e0 \uba54\uc11c\ub4dc\uc758 \uc870\uc778 \ud3ec\uc778\ud2b8\ub97c \uc120\uc815, \ubd80\ubaa8 \ud0c0\uc785\uc758 \uba54\uc11c\ub4dc\ub3c4 \uc801\uc6a9\n        @Around("execution(* hello.aop..*(..)) && @target(hello.aop.member.annotation.ClassAop)")\n        public Object atTarget(ProceedingJoinPoint joinPoint) throws Throwable {\n            log.info("[@target] {}", joinPoint.getSignature());\n            return joinPoint.proceed();\n        }\n\n        //@within: \uc120\ud0dd\ub41c \ud074\ub798\uc2a4 \ub0b4\ubd80\uc5d0 \uc788\ub294 \uba54\uc11c\ub4dc\ub9cc \uc870\uc778 \ud3ec\uc778\ud2b8\ub85c \uc120\uc815, \ubd80\ubaa8 \ud0c0\uc785\uc758 \uba54\uc11c\ub4dc\ub294 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc74c\n        @Around("execution(* hello.aop..*(..)) && @within(hello.aop.member.annotation.ClassAop)")\n        public Object atWithin(ProceedingJoinPoint joinPoint) throws Throwable {\n            log.info("[@within] {}", joinPoint.getSignature());\n            return joinPoint.proceed();\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"args-args-target-\uc8fc\uc758\ud560-\uc810",children:"args, @args, @target \uc8fc\uc758\ud560 \uc810"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc2e4\uc81c \uac1d\uccb4 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\uace0 \uc2e4\ud589\ub420 \ub54c advice \uc801\uc6a9 \uc5ec\ubd80\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc989, \uc77c\ub2e8 \ud504\ub85d\uc2dc \uac1d\uccb4\uac00 \uc874\uc7ac\ud574\uc57c \uc2e4\ud589 \uc2dc\uc810\uc5d0 \ud310\ub2e8\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ud504\ub85d\uc2dc\uac00 \uc5c6\uc73c\uba74 \uc2e4\ud589 \uc2dc\uc810\uc5d0 \ud310\ub2e8 \uc790\uccb4\uac00 \ubd88\uac00\ub2a5\ud558\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ub54c\ubb38\uc5d0 \uc608\uc2dc\ub97c \ubcf4\uba74 execution\uacfc \ud568\uaed8 \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"annotation-args",children:"@annotation, @args"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@annotation"}),": \uba54\uc11c\ub4dc \uc560\ub178\ud14c\uc774\uc158\uc744 \uae30\ubc18\uc73c\ub85c \uc870\uc778 \ud3ec\uc778\ud2b8 \ub9e4\uce6d"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@args"}),": \uc804\ub2ec\ub41c \uc2e4\uc81c \uc778\uc218\uc758 \ub7f0\ud0c0\uc784 \ud0c0\uc785\uacfc \ubaa9\ud45c\ud55c \uc560\ub178\ud14c\uc774\uc158\uc744 \uae30\ubc18\uc73c\ub85c \uc870\uc778 \ud3ec\uc778\ud2b8 \ub9e4\uce6d"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"bean",children:"bean"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc2a4\ud504\ub9c1 \uc804\uc6a9 \ud3ec\uc778\ud2b8\ucef7 \uc9c0\uc2dc\uc790, \ube48\uc758 \uc774\ub984\uc73c\ub85c \uc9c0\uc815\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc81c-3",children:"\uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Import(AspectV6Advice.class)\npublic class AopTest {\n\n    @Autowired\n    OrderService orderService;\n\n    @Autowired\n    OrderRepository orderRepository;\n\n    @Test\n    void aopInfo() {\n        log.info("isAopProxy, orderService={}", AopUtils.isAopProxy(orderService));\n        log.info("isAopProxy, orderRepository={}", AopUtils.isAopProxy(orderRepository));\n    }\n\n    @Test\n    void success() {\n        orderService.orderItem("itemA");\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"\ub9e4\uac1c\ubcc0\uc218-\uc804\ub2ec",children:"\ub9e4\uac1c\ubcc0\uc218 \uc804\ub2ec"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ud3ec\uc778\ud2b8\ucef7 \ud45c\ud604\uc2dd\uc744 \uc774\uc6a9\ud55c advice \ub9e4\uac1c\ubcc0\uc218 \uc804\ub2ec"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc608\uc81c-4",children:"\uc608\uc81c"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Slf4j\n@Import(ParameterTest.ParameterAspect.class)\n@SpringBootTest\npublic class ParameterTest {\n\n    @Autowired\n    MemberService memberService;\n\n    @Test\n    void success() {\n        log.info("memberService Proxy={}", memberService.getClass());\n        memberService.hello("helloA");\n    }\n\n    @Slf4j\n    @Aspect\n    static class ParameterAspect {\n\n        @Pointcut("execution(* hello.aop.member..*.*(..))")\n        private void allMember() {\n        }\n\n        @Around("allMember()")\n        public Object logArgs1(ProceedingJoinPoint joinPoint) throws Throwable {\n            Object arg1 = joinPoint.getArgs()[0];\n            log.info("[logArgs1]{}, arg={}", joinPoint.getSignature(), arg1);\n            return joinPoint.proceed();\n        }\n\n        // \ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uc744 \ub9de\ucdb0\uc57c \ud55c\ub2e4.\n        @Around("allMember() && args(arg,..)")\n        public Object logArgs2(ProceedingJoinPoint joinPoint, Object arg) throws Throwable {\n            log.info("[logArgs2]{}, arg={}", joinPoint.getSignature(), arg);\n            return joinPoint.proceed();\n        }\n        \n        // \uba54\uc11c\ub4dc\uc5d0 \uc9c0\uc815\ud55c \ud0c0\uc785\uc73c\ub85c \uc81c\ud55c\ub41c\ub2e4.\n        // \uc5ec\uae30\uc11c arg\ub294 String\n        @Before("allMember() && args(arg,..)")\n        public void logArgs3(String arg) {\n            log.info("[logArgs3] arg={}", arg);\n        }\n\n        @Before("allMember() && this(obj)")\n        public void thisArgs(JoinPoint joinPoint, MemberService obj) {\n            log.info("[this]{}, obj={}", joinPoint.getSignature(), obj.getClass());\n        }\n\n        @Before("allMember() && target(obj)")\n        public void targetArgs(JoinPoint joinPoint, MemberService obj) {\n            log.info("[target]{}, obj={}", joinPoint.getSignature(), obj.getClass());\n        }\n\n        @Before("allMember() && @target(annotation)")\n        public void atTarget(JoinPoint joinPoint, ClassAop annotation) {\n            log.info("[@target]{}, obj={}", joinPoint.getSignature(), annotation);\n        }\n\n        @Before("allMember() && @within(annotation)")\n        public void atWithin(JoinPoint joinPoint, ClassAop annotation) {\n            log.info("[@within]{}, obj={}", joinPoint.getSignature(), annotation);\n        }\n\n        @Before("allMember() && @annotation(annotation)")\n        public void atAnnotation(JoinPoint joinPoint, MethodAop annotation) {\n            log.info("[@annotation]{}, annotationValue={}", joinPoint.getSignature(), annotation.value());\n        }\n    }\n}\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"this"}),": \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\ub294\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"target"}),": \uc2e4\uc81c \ub300\uc0c1 \uac1d\uccb4\ub97c \uc804\ub2ec \ubc1b\ub294\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@target"})," , ",(0,i.jsx)(n.code,{children:"@within"})," : \ud0c0\uc785\uc758 \uc560\ub178\ud14c\uc774\uc158\uc744 \uc804\ub2ec \ubc1b\ub294\ub2e4."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"@annotation"})," : \uba54\uc11c\ub4dc\uc758 \uc560\ub178\ud14c\uc774\uc158\uc744 \uc804\ub2ec \ubc1b\ub294\ub2e4."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"this-target",children:"this, target"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this: \uc2a4\ud504\ub9c1 \ube48 \uac1d\uccb4(\ud504\ub85d\uc2dc)\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 Joinpoint"}),"\n",(0,i.jsx)(n.li,{children:"target: Target(\ud504\ub85d\uc2dc\uac00 \uac00\uc9c0\ub294 \uc2e4\uc81c \ub300\uc0c1 \uac1d\uccb4)\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 Joinpoint"}),"\n",(0,i.jsx)(n.li,{children:"\ubd80\ubaa8 \ud0c0\uc785\uc740 \ud5c8\uc6a9\ud558\ub418, \uc801\uc6a9 \ud0c0\uc785 \ud558\ub098\ub97c \uc815\ud655\ud558\uac8c \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\uc0dd\uc131-\ubc29\uc2dd",children:"\uc0dd\uc131 \ubc29\uc2dd"}),"\n",(0,i.jsx)(n.h4,{id:"1-jdk-\ub3d9\uc801-\ud504\ub85d\uc2dc",children:"1. JDK \ub3d9\uc801 \ud504\ub85d\uc2dc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["hello.aop.member.MemberService","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this: \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. this\ub294 \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\uae30\uc5d0 AOP \uc801\uc6a9\ub428"}),"\n",(0,i.jsx)(n.li,{children:"target: target \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. target\ub3c4 \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\uae30\uc5d0 AOP \uc801\uc6a9\ub428"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["hello.aop.member.MemberServiceImpl","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this: proxy \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. \ud558\uc9c0\ub9cc proxy \uac1d\uccb4\ub294 MemberService \uc778\ud130\ud398\uc774\uc2a4\ub97c \uae30\ubc18\uc73c\ub85c \uad6c\ud604\ub41c \ud074\ub798\uc2a4\ub77c AOP \uc801\uc6a9 \ub300\uc0c1\uc774 \uc544\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"target: target \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. target \uac1d\uccb4\ub294 \uc5b8\uc81c\ub098 MemberServiceImpl\uc774\uae30\uc5d0 AOP \uc801\uc6a9 \ub300\uc0c1\uc774\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"2-cglib-\ud504\ub85d\uc2dc",children:"2. CGLIB \ud504\ub85d\uc2dc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["hello.aop.member.MemberService","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this: \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. this\ub294 \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\uae30\uc5d0 AOP \uc801\uc6a9\ub428"}),"\n",(0,i.jsx)(n.li,{children:"target: target \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. target\ub3c4 \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud5c8\uc6a9\ud558\uae30\uc5d0 AOP \uc801\uc6a9\ub428"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["hello.aop.member.MemberServiceImpl","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"this: proxy \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. GCLIB\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 proxy\ub294 \uad6c\uccb4 \ud074\ub798\uc2a4\ub97c \uc0c1\uc18d\ubc1b\uc544 \ub9cc\ub4e4\uc5b4\uc9c0\uae30\uc5d0 AOP\uac00 \uc801\uc6a9\ub41c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"target: target \uac1d\uccb4\ub97c \ubcf4\uace0 \ud310\ub2e8. target \uac1d\uccb4\ub294 \uc5b8\uc81c\ub098 MemberServiceImpl\uc774\uae30\uc5d0 AOP \uc801\uc6a9 \ub300\uc0c1\uc774\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"\uc989, \ud504\ub85d\uc2dc\ub97c \ub300\uc0c1\uc73c\ub85c \ud558\ub294 this \uc758 \uacbd\uc6b0 \uad6c\uccb4 \ud074\ub798\uc2a4\ub97c \uc9c0\uc815\ud558\uba74 \ud504\ub85d\uc2dc \uc0dd\uc131 \uc804\ub7b5\uc5d0 \ub530\ub77c\uc11c \ub2e4\ub978 \uacb0\uacfc\uac00 \ub098\uc62c \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uc54c\uc544\ub450\uc790."})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);