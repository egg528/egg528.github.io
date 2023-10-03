"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=i.createContext({}),p=function(e){var n=i.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),m=l,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[d]="string"==typeof e?e:l,a[1]=o;for(var p=2;p<r;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4819:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(7462),l=(t(7294),t(3905));const r={title:"9. AOP",sidebar_position:9},a=void 0,o={unversionedId:"spring-advance/nine",id:"spring-advance/nine",title:"9. AOP",description:"AOP \uac1c\ub150",source:"@site/docs/lecture/spring-advance/nine.md",sourceDirName:"spring-advance",slug:"/spring-advance/nine",permalink:"/lecture/spring-advance/nine",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"9. AOP",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"8. @AspectAOP",permalink:"/lecture/spring-advance/eight"},next:{title:"10. AOP Pointcut",permalink:"/lecture/spring-advance/ten"}},u={},p=[{value:"AOP \uac1c\ub150",id:"aop-\uac1c\ub150",level:2},{value:"Aspect",id:"aspect",level:3},{value:"AOP \uad6c\ud604\uccb4",id:"aop-\uad6c\ud604\uccb4",level:3},{value:"AOP \uc801\uc6a9 \ubc29\uc2dd",id:"aop-\uc801\uc6a9-\ubc29\uc2dd",level:3},{value:"AOP \uc801\uc6a9 \uc704\uce58",id:"aop-\uc801\uc6a9-\uc704\uce58",level:3},{value:"AOP \uc6a9\uc5b4 \uc815\ub9ac",id:"aop-\uc6a9\uc5b4-\uc815\ub9ac",level:3},{value:"AOP \uad6c\ud604",id:"aop-\uad6c\ud604",level:2},{value:"\uc77c\ubc18 \uc608\uc81c",id:"\uc77c\ubc18-\uc608\uc81c",level:3},{value:"Pointcut \ubd84\ub9ac \uc608\uc81c",id:"pointcut-\ubd84\ub9ac-\uc608\uc81c",level:3},{value:"Pointcut \uc5f0\uc0b0  &amp;&amp; / || / !",id:"pointcut-\uc5f0\uc0b0------",level:3},{value:"Pointcut \ucc38\uc870",id:"pointcut-\ucc38\uc870",level:3},{value:"Advice \uc21c\uc11c \uc801\uc6a9",id:"advice-\uc21c\uc11c-\uc801\uc6a9",level:3},{value:"Advice \uc885\ub958",id:"advice-\uc885\ub958",level:3}],c={toc:p},d="wrapper";function s(e){let{components:n,...r}=e;return(0,l.kt)(d,(0,i.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"aop-\uac1c\ub150"},"AOP \uac1c\ub150"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"cross-cutting-concerns2.png",src:t(9696).Z,width:"2120",height:"404"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Application \ub85c\uc9c1\uc740 ",(0,l.kt)("inlineCode",{parentName:"li"},"\ud575\uc2ec \uae30\ub2a5"),"\uacfc ",(0,l.kt)("inlineCode",{parentName:"li"},"\ubd80\uac00 \uae30\ub2a5"),"\uc73c\ub85c \ub098\ub20c \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubd80\uac00 \uae30\ub2a5 \uc911 \uc5ec\ub7ec \uacf3\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 \ubd80\uac00 \uae30\ub2a5\ub4e4\uc774 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uacf5\ud1b5 \ub85c\uc9c1\uc774 \uc5ec\ub7ec \uacf3\uc5d0 \uc801\uc6a9\ub418\uc5b4 \uc788\uc73c\uba74 \uad6c\ud604 / \uc720\uc9c0 / \uad00\ub9ac\uac00 \uc5b4\ub824\uc6cc\uc9c4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc5b4\ub824\uc6c0\uc744 \ud574\uacb0\ud558\uae30 \uc704\ud574 \uacf5\ud1b5 \ub85c\uc9c1\uc744 \ud575\uc2ec \uae30\ub2a5\uc5d0\uc11c \ubd84\ub9ac\uc5d0 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294 \uae30\uc220")),(0,l.kt)("h3",{id:"aspect"},"Aspect"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"aspect.png",src:t(937).Z,width:"2080",height:"848"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ubd80\uac00 \uae30\ub2a5\uacfc \ubd80\uac00 \uae30\ub2a5\uc744 \uc801\uc6a9\ud560 \uc704\uce58\ub97c \uc815\uc774\ud55c \ud558\ub098\uc758 \ubaa8\ub4c8")),(0,l.kt)("h3",{id:"aop-\uad6c\ud604\uccb4"},"AOP \uad6c\ud604\uccb4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2a4\ud504\ub9c1 AOP"),(0,l.kt)("li",{parentName:"ul"},"AspectJ \ud504\ub808\uc784 \uc6cc\ud06c",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc790\ubc14 \ud504\ub85c\uadf8\ub798\ubc0d \uc5b8\uc5b4\uc5d0 \ub300\ud55c \uc644\ubcbd\ud55c \uad00\uc810 \uc9c0\ud5a5 \ud655\uc7a5 \ud6a1\ub2e8 \uad00\uc2ec\uc0ac\uc758 \uae54\ub054\ud55c \ubaa8\ub4c8\ud654 "),(0,l.kt)("li",{parentName:"ul"},"\uc624\ub958 \uac80\uc0ac \ubc0f \ucc98\ub9ac "),(0,l.kt)("li",{parentName:"ul"},"\ub3d9\uae30\ud654 "),(0,l.kt)("li",{parentName:"ul"},"\uc131\ub2a5 \ucd5c\uc801\ud654(\uce90\uc2f1) "),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ubc0f \ub85c\uae45")))),(0,l.kt)("h3",{id:"aop-\uc801\uc6a9-\ubc29\uc2dd"},"AOP \uc801\uc6a9 \ubc29\uc2dd"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \uc2dc\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AspectJ \ucef4\ud30c\uc77c\ub7ec\ub97c \uc774\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},".java -> .class \ubcc2\ud658 \uc2dc\uc810\uc5d0 AspectJ \ubaa8\ub4c8\uc744 \ubc14\ud0d5\uc73c\ub85c \uc6d0\ubcf8 \ub85c\uc9c1\uc5d0 \ubd80\uac00 \uae30\ub2a5 \ub85c\uc9c1\uc744 \ucd94\uac00\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8, \ud2b9\ubcc4\ud55c \ucef4\ud30c\uc77c\ub7ec\uac00 \ud544\uc694\ud558\uace0 \ubcf5\uc7a1\ud558\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ud074\ub798\uc2a4 \ub85c\ub529 \uc2dc\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc790\ubc14 \uc2e4\ud589 \uc2dc\uc810\uc5d0 .class\ub97c \uc870\uc791\ud558\uc5ec JVM \ud074\ub798\uc2a4 \ub85c\ub354\uc5d0 \ubcf4\uad00\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"java instrumentation \ucc38\uace0"),(0,l.kt)("li",{parentName:"ul"},"\ub2e8, \uc2e4\ud589 \uc635\uc158\uc73c\ub85c \ud074\ub798\uc2a4 \ub85c\ub354 \uc870\uc791\uae30\ub97c \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784 \uc2dc\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"main \uba54\uc11c\ub4dc \uc2e4\ud589 \uc774\ud6c4"),(0,l.kt)("li",{parentName:"ul"},"\uc9c0\uae08\uae4c\uc9c0 \ud559\uc2b5\ud55c \ubc29\uc2dd"),(0,l.kt)("li",{parentName:"ul"},"Spring AOP\uac00 \uc774\uc6a9\ud558\ub294 \ubc29\uc2dd\uc774\uae30\ub3c4 \ud558\ub2e4")))),(0,l.kt)("h3",{id:"aop-\uc801\uc6a9-\uc704\uce58"},"AOP \uc801\uc6a9 \uc704\uce58"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc801\uc6a9 \uac00\ub2a5 \uc9c0\uc810(Join point): \uc0dd\uc131\uc790, \ud544\ub4dc \uac12 \uc811\uadfc, static \uba54\uc11c\ub4dc \uc811\uadfc, \uba54\uc11c\ub4dc \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \uc2dc\uc810 / \ud074\ub798\uc2a4 \ub85c\ub529 \uc2dc\uc810\uc5d0 AOP\ub97c \uc801\uc6a9\ud558\uba74 \ubaa8\ub4e0 Join point\uc5d0 \uc801\uc6a9 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ud504\ub85d\uc2dc \ubc29\uc2dd\uc740 \uba54\uc11c\ub4dc \uc2e4\ud589 \uc9c0\uc810\uc5d0 \uc81c\ud55c\ub428.")),(0,l.kt)("h3",{id:"aop-\uc6a9\uc5b4-\uc815\ub9ac"},"AOP \uc6a9\uc5b4 \uc815\ub9ac"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"aop-word.png",src:t(2971).Z,width:"2108",height:"1810"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc870\uc778 \ud3ec\uc778\ud2b8(Join point)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"AOP \uc801\uc6a9 \uac00\ub2a5 \uc9c0\uc810"))),(0,l.kt)("li",{parentName:"ul"},"\ud3ec\uc778\ud2b8\ucef7(Pointcut)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc2e4\uc81c \uc801\uc6a9 \uc704\uce58\ub97c \uc120\ubcc4\ud558\ub294 \uae30\ub2a5"))),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\ucf13(Target)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub4dc\ubc14\uc774\uc2a4\ub97c \ubc1b\ub294 \uac1d\uccb4, \ud3ec\uc778\ud2b8\ucef7\uc73c\ub85c \uacb0\uc815 "))),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub4dc\ubc14\uc774\uc2a4(Advice) ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubd80\uac00 \uae30\ub2a5 "),(0,l.kt)("li",{parentName:"ul"},"Around(\uc8fc\ubcc0), Before(\uc804), After(\ud6c4)\uc640 \uac19\uc740 \ub2e4\uc591\ud55c \uc885\ub958\uc758 \uc5b4\ub4dc\ubc14\uc774\uc2a4\uac00 \uc788\uc74c "))),(0,l.kt)("li",{parentName:"ul"},"\uc560\uc2a4\ud399\ud2b8(Aspect)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub4dc\ubc14\uc774\uc2a4 + \ud3ec\uc778\ud2b8\ucef7\uc744 \ubaa8\ub4c8\ud654 \ud55c \uac83 @Aspect \ub97c \uc0dd\uac01\ud558\uba74 \ub428"))),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub4dc\ubc14\uc774\uc800(Advisor)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud558\ub098\uc758 \uc5b4\ub4dc\ubc14\uc774\uc2a4\uc640 \ud558\ub098\uc758 \ud3ec\uc778\ud2b8 \ucef7\uc73c\ub85c \uad6c\uc131 \uc2a4\ud504\ub9c1 AOP\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ub418\ub294 \ud2b9\ubcc4\ud55c \uc6a9\uc5b4 "))),(0,l.kt)("li",{parentName:"ul"},"\uc704\ube59(Weaving)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud3ec\uc778\ud2b8\ucef7\uc73c\ub85c \uacb0\uc815\ud55c \ud0c0\ucf13\uc758 \uc870\uc778 \ud3ec\uc778\ud2b8\uc5d0 \uc5b4\ub4dc\ubc14\uc774\uc2a4\ub97c \uc801\uc6a9\ud558\ub294 \uac83 \uc704\ube59\uc744 \ud1b5\ud574 \ud575\uc2ec \uae30\ub2a5 \ucf54\ub4dc\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uace0 \ubd80\uac00 \uae30\ub2a5\uc744 \ucd94\uac00 \ud560 \uc218 \uc788\uc74c "),(0,l.kt)("li",{parentName:"ul"},"AOP \uc801\uc6a9\uc744 \uc704\ud574 \uc560\uc2a4\ud399\ud2b8\ub97c \uac1d\uccb4\uc5d0 \uc5f0\uacb0\ud55c \uc0c1\ud0dc ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ucef4\ud30c\uc77c \ud0c0\uc784(AspectJ compiler)"),(0,l.kt)("li",{parentName:"ul"},"\ub85c\ub4dc \ud0c0\uc784 "),(0,l.kt)("li",{parentName:"ul"},"\ub7f0\ud0c0\uc784, \uc2a4\ud504\ub9c1 AOP\ub294 \ub7f0\ud0c0\uc784, \ud504\ub85d\uc2dc \ubc29\uc2dd "))))),(0,l.kt)("li",{parentName:"ul"},"AOP \ud504\ub85d\uc2dc\nAOP \uae30\ub2a5\uc744 \uad6c\ud604\ud558\uae30 \uc704\ud574 \ub9cc\ub4e0 \ud504\ub85d\uc2dc \uac1d\uccb4, \uc2a4\ud504\ub9c1\uc5d0\uc11c AOP \ud504\ub85d\uc2dc\ub294 JDK \ub3d9\uc801 \ud504\ub85d\uc2dc \ub610\ub294 CGLIB \ud504\ub85d\uc2dc\uc774\ub2e4.")),(0,l.kt)("h2",{id:"aop-\uad6c\ud604"},"AOP \uad6c\ud604"),(0,l.kt)("h3",{id:"\uc77c\ubc18-\uc608\uc81c"},"\uc77c\ubc18 \uc608\uc81c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Aspect\npublic class AspectV1 {\n\n    //hello.aop.order \ud328\ud0a4\uc9c0\uc640 \ud558\uc704 \ud328\ud0a4\uc9c0\n    @Around("execution(* hello.aop.order..*(..))")\n    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n        log.info("[log] {}", joinPoint.getSignature()); //join point \uc2dc\uadf8\ub2c8\ucc98\n        return joinPoint.proceed();\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\uc804\uc5d0 \uc124\uba85\ud588\ub4ef\uc774"),(0,l.kt)("li",{parentName:"ul"},"@Around \uac12\uc774 Pointcut, \uba54\uc11c\ub4dc\uac00 Advice\uc774\ub2e4.")),(0,l.kt)("h3",{id:"pointcut-\ubd84\ub9ac-\uc608\uc81c"},"Pointcut \ubd84\ub9ac \uc608\uc81c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Aspect\npublic class AspectV2 {\n\n    //hello.aop.order \ud328\ud0a4\uc9c0\uc640 \ud558\uc704 \ud328\ud0a4\uc9c0\n    @Pointcut("execution(* hello.aop.order..*(..))")\n    private void allOrder(){} //pointcut signature\n\n    @Around("allOrder()")\n    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n        log.info("[log] {}", joinPoint.getSignature()); //join point \uc2dc\uadf8\ub2c8\ucc98\n        return joinPoint.proceed();\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uba85, \ud30c\ub77c\ubbf8\ud130\ub97c \ud569\uccd0\uc11c \ud3ec\uc778\ud2b8\ucef7 \uc2dc\uadf8\ub2c8\ucc98\ub77c \ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \ubc18\ud658 \uac12\uc740 void"),(0,l.kt)("li",{parentName:"ul"},"\ucf54\ub4dc \ub0b4\uc6a9\uc740 x"),(0,l.kt)("li",{parentName:"ul"},"public, private \uae30\uc874 \uac1c\ub150\uacfc \uac19\uac8c \uc0dd\uac01\ud558\uba74 \ub428"))),(0,l.kt)("li",{parentName:"ul"},"@Around\ub97c \uc0ac\uc6a9\ud560 \ub54c \ud3ec\uc778\ud2b8\ucef7 \uc2dc\uadf8\ub2c8\ucc98\ub97c \uc0ac\uc6a9\ud574\ub3c4 \ub428")),(0,l.kt)("h3",{id:"pointcut-\uc5f0\uc0b0------"},"Pointcut \uc5f0\uc0b0  && / || / !"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Aspect\npublic class AspectV3 {\n\n    //hello.aop.order \ud328\ud0a4\uc9c0\uc640 \ud558\uc704 \ud328\ud0a4\uc9c0\n    @Pointcut("execution(* hello.aop.order..*(..))")\n    private void allOrder(){} //pointcut signature\n\n    //\ud074\ub798\uc2a4 \uc774\ub984 \ud328\ud134\uc774 *Service\n    @Pointcut("execution(* *..*Service.*(..))")\n    private void allService(){}\n\n    @Around("allOrder()")\n    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n        log.info("[log] {}", joinPoint.getSignature()); //join point \uc2dc\uadf8\ub2c8\ucc98\n        return joinPoint.proceed();\n    }\n\n    //hello.aop.order \ud328\ud0a4\uc9c0\uc640 \ud558\uc704 \ud328\ud0a4\uc9c0 \uc774\uba74\uc11c \ud074\ub798\uc2a4 \uc774\ub984 \ud328\ud134\uc774 *Service\n    @Around("allOrder() && allService()")\n    public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {\n\n        try {\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791] {}", joinPoint.getSignature());\n            Object result = joinPoint.proceed();\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ucee4\ubc0b] {}", joinPoint.getSignature());\n            return result;\n        } catch (Exception e) {\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ub864\ubc31] {}", joinPoint.getSignature());\n            throw e;\n        } finally {\n            log.info("[\ub9ac\uc18c\uc2a4 \ub9b4\ub9ac\uc988] {}", joinPoint.getSignature());\n        }\n    }\n}\n')),(0,l.kt)("h3",{id:"pointcut-\ucc38\uc870"},"Pointcut \ucc38\uc870"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public class Pointcuts {\n\n    //hello.aop.order \ud328\ud0a4\uc9c0\uc640 \ud558\uc704 \ud328\ud0a4\uc9c0\n    @Pointcut("execution(* hello.aop.order..*(..))")\n    public void allOrder(){} //pointcut signature\n\n    //\ud074\ub798\uc2a4 \uc774\ub984 \ud328\ud134\uc774 *Service\n    @Pointcut("execution(* *..*Service.*(..))")\n    public void allService(){}\n\n    //allOrder && allService\n    @Pointcut("allOrder() && allService()")\n    public void orderAndService() {}\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pointcut\ub9cc \ub530\ub85c \ub5bc\uc5b4 \uad00\ub9ac\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Aspect\npublic class AspectV4Pointcut {\n\n    @Around("hello.aop.order.aop.Pointcuts.allOrder()")\n    public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n        log.info("[log] {}", joinPoint.getSignature()); //join point \uc2dc\uadf8\ub2c8\ucc98\n        return joinPoint.proceed();\n    }\n\n    @Around("hello.aop.order.aop.Pointcuts.orderAndService()")\n    public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {\n\n        try {\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791] {}", joinPoint.getSignature());\n            Object result = joinPoint.proceed();\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ucee4\ubc0b] {}", joinPoint.getSignature());\n            return result;\n        } catch (Exception e) {\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ub864\ubc31] {}", joinPoint.getSignature());\n            throw e;\n        } finally {\n            log.info("[\ub9ac\uc18c\uc2a4 \ub9b4\ub9ac\uc988] {}", joinPoint.getSignature());\n        }\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pointcut \uac1d\uccb4\uc758 \uc2dc\uadf8\ub2c8\ucc98 \uc774\uc6a9 \uac00\ub2a5")),(0,l.kt)("h3",{id:"advice-\uc21c\uc11c-\uc801\uc6a9"},"Advice \uc21c\uc11c \uc801\uc6a9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\npublic class AspectV5Order {\n\n    @Aspect\n    @Order(2)\n    public static class LogAspect {\n        @Around("hello.aop.order.aop.Pointcuts.allOrder()")\n        public Object doLog(ProceedingJoinPoint joinPoint) throws Throwable {\n            log.info("[log] {}", joinPoint.getSignature()); //join point \uc2dc\uadf8\ub2c8\ucc98\n            return joinPoint.proceed();\n        }\n    }\n\n    @Aspect\n    @Order(1)\n    public static class TxAspect {\n        @Around("hello.aop.order.aop.Pointcuts.orderAndService()")\n        public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {\n\n            try {\n                log.info("[\ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791] {}", joinPoint.getSignature());\n                Object result = joinPoint.proceed();\n                log.info("[\ud2b8\ub79c\uc7ad\uc158 \ucee4\ubc0b] {}", joinPoint.getSignature());\n                return result;\n            } catch (Exception e) {\n                log.info("[\ud2b8\ub79c\uc7ad\uc158 \ub864\ubc31] {}", joinPoint.getSignature());\n                throw e;\n            } finally {\n                log.info("[\ub9ac\uc18c\uc2a4 \ub9b4\ub9ac\uc988] {}", joinPoint.getSignature());\n            }\n        }\n    }\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@Order\ub97c \ud1b5\ud574\uc11c Advice \uc21c\uc11c\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("h3",{id:"advice-\uc885\ub958"},"Advice \uc885\ub958"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Aspect\npublic class AspectV6Advice {\n\n    @Around("hello.aop.order.aop.Pointcuts.orderAndService()")\n    public Object doTransaction(ProceedingJoinPoint joinPoint) throws Throwable {\n\n        try {\n            //@Before\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \uc2dc\uc791] {}", joinPoint.getSignature());\n            Object result = joinPoint.proceed();\n            //@AfterReturning\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ucee4\ubc0b] {}", joinPoint.getSignature());\n            return result;\n        } catch (Exception e) {\n            //@AfterThrowing\n            log.info("[\ud2b8\ub79c\uc7ad\uc158 \ub864\ubc31] {}", joinPoint.getSignature());\n            throw e;\n        } finally {\n            //@After\n            log.info("[\ub9ac\uc18c\uc2a4 \ub9b4\ub9ac\uc988] {}", joinPoint.getSignature());\n        }\n    }\n\n    @Before("hello.aop.order.aop.Pointcuts.orderAndService()")\n    public void doBefore(JoinPoint joinPoint) {\n        log.info("[before] {}", joinPoint.getSignature());\n    }\n\n    @AfterReturning(value = "hello.aop.order.aop.Pointcuts.orderAndService()", returning = "result")\n    public void doReturn(JoinPoint joinPoint, Object result) {\n        log.info("[return] {} return={}", joinPoint.getSignature(), result);\n    }\n\n    @AfterThrowing(value = "hello.aop.order.aop.Pointcuts.orderAndService()", throwing = "ex")\n    public void doThrowing(JoinPoint joinPoint, Exception ex) {\n        log.info("[ex] {} message={}", ex);\n    }\n\n    @After(value = "hello.aop.order.aop.Pointcuts.orderAndService()")\n    public void doAfter(JoinPoint joinPoint) {\n        log.info("[after] {}", joinPoint.getSignature());\n    }\n\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ubaa8\ub4e0 Advice\ub294 JointPoint\ub97c \uccab\ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JointPoint \uc8fc\uc694 \uba54\uc11c\ub4dc ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"getArgs() : \uba54\uc11c\ub4dc \uc778\uc218\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"getThis() : \ud504\ub85d\uc2dc \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"getTarget() : \ub300\uc0c1 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"getSignature() : \uc870\uc5b8\ub418\ub294 \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \ubc18\ud658\ud569\ub2c8\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"toString() : \uc870\uc5b8\ub418\ub294 \ubc29\ubc95\uc5d0 \ub300\ud55c \uc720\uc6a9\ud55c \uc124\uba85\uc744 \uc778\uc1c4\ud569\ub2c8\ub2e4."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\ub2e8, @Around \ub294 ProceedingJoinPoint \uc744 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ProceedingJoinPoint \uc8fc\uc694 \uba54\uc11c\ub4dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"proceed() : \ub2e4\uc74c \uc5b4\ub4dc\ubc14\uc774\uc2a4\ub098 \ud0c0\ucf13\uc744 \ud638\ucd9c\ud55c\ub2e4."))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Advice \uc885\ub958"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@Before"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Joinpoint \uc2e4\ud589 \uc804"),(0,l.kt)("li",{parentName:"ul"},"ProceedingJoinPoint.proceed() \uc790\uccb4\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc74c. (\uc2e4\ud589 \uc2dc\uc810\uc774 \uc815\ud574\uc838\uc788\uae30 \ub54c\ubb38\uc774\ub2e4)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@AfterReturning"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc2e4\ud589\uc774 \uc815\uc0c1\uc801\uc73c\ub85c \ubc18\ud658\ub420 \ub54c \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},"returning \uc18d\uc131\uc5d0 \uc0ac\uc6a9\ub41c \uc774\ub984\uc740 \uc5b4\ub4dc\ubc14\uc774\uc2a4 \uba54\uc11c\ub4dc\uc758 \ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uacfc \uc77c\uce58\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"returning \uc808\uc5d0 \uc9c0\uc815\ub41c \ud0c0\uc785\uc758 \uac12\uc744 \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc\ub9cc \ub300\uc0c1\uc73c\ub85c \uc2e4\ud589\ud55c\ub2e4. (\ubd80\ubaa8 \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uba74 \ubaa8\ub4e0 \uc790\uc2dd \ud0c0\uc785\uc740 \uc778\uc815\ub41c\ub2e4.)"),(0,l.kt)("li",{parentName:"ul"},"\ubc18\ud658 \uac1d\uccb4\ub97c \ubcc0\uacbd\ud560 \uc218\ub294 \uc5c6\uace0 \uc870\uc791\ud560 \uc218\ub294 \uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@AfterThrowing"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc2e4\ud589\uc774 \uc608\uc678\ub97c \ub358\uc838\uc11c \uc885\ub8cc\ub420 \ub54c \uc2e4\ud589"),(0,l.kt)("li",{parentName:"ul"},"throwing \uc18d\uc131\uc5d0 \uc0ac\uc6a9\ub41c \uc774\ub984\uc740 \uc5b4\ub4dc\ubc14\uc774\uc2a4 \uba54\uc11c\ub4dc\uc758 \ub9e4\uac1c\ubcc0\uc218 \uc774\ub984\uacfc \uc77c\uce58\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"throwing \uc808\uc5d0 \uc9c0\uc815\ub41c \ud0c0\uc785\uacfc \ub9de\ub294 \uc608\uc678\ub97c \ub300\uc0c1\uc73c\ub85c \uc2e4\ud589\ud55c\ub2e4. (\ubd80\ubaa8 \ud0c0\uc785\uc744 \uc9c0\uc815\ud558\uba74 \ubaa8\ub4e0 \uc790\uc2dd \ud0c0\uc785\uc740 \uc778\uc815\ub41c\ub2e4.)"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@After"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc2e4\ud589\uc774 \uc885\ub8cc\ub418\uba74 \uc2e4\ud589\ub41c\ub2e4. (finally\ub97c \uc0dd\uac01\ud558\uba74 \ub41c\ub2e4.) "),(0,l.kt)("li",{parentName:"ul"},"\uc815\uc0c1 \ubc0f \uc608\uc678 \ubc18\ud658 \uc870\uac74\uc744 \ubaa8\ub450 \ucc98\ub9ac\ud55c\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubc18\uc801\uc73c\ub85c \ub9ac\uc18c\uc2a4\ub97c \ud574\uc81c\ud558\ub294 \ub370 \uc0ac\uc6a9\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@Around"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uc758 \uc2e4\ud589\uc758 \uc8fc\ubcc0\uc5d0\uc11c \uc2e4\ud589\ub41c\ub2e4. \uba54\uc11c\ub4dc \uc2e4\ud589 \uc804\ud6c4\uc5d0 \uc791\uc5c5\uc744 \uc218\ud589\ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc870\uc778 \ud3ec\uc778\ud2b8 \uc2e4\ud589 \uc5ec\ubd80 \uc120\ud0dd joinPoint.proceed() "),(0,l.kt)("li",{parentName:"ul"},"\ud638\ucd9c \uc5ec\ubd80 \uc120\ud0dd \uc804\ub2ec \uac12 \ubcc0\ud658: joinPoint.proceed(args[])"),(0,l.kt)("li",{parentName:"ul"},"\ubc18\ud658 \uac12 \ubcc0\ud658 "),(0,l.kt)("li",{parentName:"ul"},"\uc608\uc678 \ubcc0\ud658 "),(0,l.kt)("li",{parentName:"ul"},"\ud2b8\ub79c\uc7ad\uc158 \ucc98\ub7fc try ~ catch~ finally \ubaa8\ub450 \ub4e4\uc5b4\uac00\ub294 \uad6c\ubb38 \ucc98\ub9ac \uac00\ub2a5"))),(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub4dc\ubc14\uc774\uc2a4\uc758 \uccab \ubc88\uc9f8 \ud30c\ub77c\ubbf8\ud130\ub294 ProceedingJoinPoint \ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"proceed() \ub97c \ud1b5\ud574 \ub300\uc0c1\uc744 \uc2e4\ud589\ud55c\ub2e4. "),(0,l.kt)("li",{parentName:"ul"},"proceed() \ub97c \uc5ec\ub7ec\ubc88 \uc2e4\ud589\ud560 \uc218\ub3c4 \uc788\uc74c(\uc7ac\uc2dc\ub3c4)")))))))}s.isMDXComponent=!0},2971:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/aop-word-5e460e459e19207a9613e8a2e2712744.png"},937:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/aspect-375ce25fd66c12c2bea506baa576f065.png"},9696:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/cross-cutting-concerns2-bad247d6465d152f8cc63d694ea81133.png"}}]);