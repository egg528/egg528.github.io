"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6968:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"stopwatch",tag:["backend","spring","stopwatch"]},i=void 0,p={unversionedId:"web/backend/spring/stopwatch",id:"web/backend/spring/stopwatch",title:"stopwatch",description:"\ub0b4\uc6a9 \uc815\ub9ac",source:"@site/docs/resource/web/backend/spring/stopwatch.md",sourceDirName:"web/backend/spring",slug:"/web/backend/spring/stopwatch",permalink:"/resource/web/backend/spring/stopwatch",draft:!1,tags:[],version:"current",frontMatter:{title:"stopwatch",tag:["backend","spring","stopwatch"]},sidebar:"tutorialSidebar",previous:{title:"redis support",permalink:"/resource/web/backend/spring/spring-data-redis/redis-support"},next:{title:"browser rendering",permalink:"/resource/web/frontend/browser-rendering"}},l={},c=[{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"\uc0dd\uac01 \uc815\ub9ac",id:"\uc0dd\uac01-\uc815\ub9ac",level:3},{value:"Reference",id:"reference",level:2}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud06c\uac8c 2\uac00\uc9c0 \ubc29\ubc95\uc73c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"start():  \ucd9c\ub825\ud558\uba74 Task\uba85\uc774 \uc5c6\uc74c."),(0,a.kt)("li",{parentName:"ul"},"start(String taskName): \ucd9c\ub825\ud558\uba74 Task\uba85\uc774 \uc788\ub2e4."))),(0,a.kt)("li",{parentName:"ul"},"prettyPrint(): \ubaa8\ub4e0 Task \uacb0\uacfc\ub97c Table \ud615\uc2dd\uc73c\ub85c \ucd9c\ub825\ud574\uc90c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-text"},"    -----------------------------------------\n    ms % Task name\n    ----------------------------------------- \n    00017 040% Task1\n    00025 060% Task2\n")))))),(0,a.kt)("h3",{id:"\uc0dd\uac01-\uc815\ub9ac"},"\uc0dd\uac01 \uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Annotation, Aop\uc640 \ud568\uaed8 \uc0ac\uc6a9\ud558\uba74 \uc6d0\ud558\ub294 \ud3b8\ub9ac\ud558\uac8c \ub85c\uc9c1 \uc218\ud589 \uc2dc\uac04\uc744 \uad6c\ud560 \uc218 \uc788\uc744 \uac83 \uac19\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ubaa8\ub4c8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uac83 \uac19\uc73c\ub2c8 \uba40\ud2f0 \ubaa8\ub4c8\uc77c \uacbd\uc6b0 \uc704\uce58\ub294 Core\uac00 \uc88b\uc744 \uac83 \uac19\ub2e4.")))),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sungminhong.github.io/spring/stop_watch/"},"Spring StopWatch\ub85c \uc2e4\ud589 \uc18d\ub3c4 \uce21\uc815\ud558\uae30")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://jhkimmm.tistory.com/5"},"Custom Annotation, AOP, StopWatch\ub97c \ud65c\uc6a9\ud55c \uc2dc\uac04 \uce21\uc815")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/util/StopWatch.html"},"Spring docs"))))}m.isMDXComponent=!0}}]);