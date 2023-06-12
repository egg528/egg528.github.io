"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3157],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,h=d["".concat(c,".").concat(f)]||d[f]||s[f]||n;return r?a.createElement(h,l(l({ref:t},p),{},{components:r})):a.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5478:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>i,toc:()=>u});var a=r(7462),o=(r(7294),r(3905));const n={title:"Java\uc758 \uc2e4\ud589\uc6d0\ub9ac Deep Dive",tag:["java"]},l=void 0,i={unversionedId:"tech/java/ThreadPoolExecutor",id:"tech/java/ThreadPoolExecutor",title:"Java\uc758 \uc2e4\ud589\uc6d0\ub9ac Deep Dive",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/java/ThreadPoolExecutor.md",sourceDirName:"tech/java",slug:"/tech/java/ThreadPoolExecutor",permalink:"/docs/tech/java/ThreadPoolExecutor",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/java/ThreadPoolExecutor.md",tags:[],version:"current",frontMatter:{title:"Java\uc758 \uc2e4\ud589\uc6d0\ub9ac Deep Dive",tag:["java"]},sidebar:"tutorialSidebar",previous:{title:"Servlet\uc774\ub780?",permalink:"/docs/tech/java/Servlet\uc774\ub780"},next:{title:"JPA Native Query \uc0ac\uc6a9 \uc2dc DTO\ub85c \ub9e4\ud551\ud558\uae30",permalink:"/docs/tech/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30"}},c={},u=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"newFixedThreadPool \ub3d9\uc791 \uc6d0\ub9ac",id:"newfixedthreadpool-\ub3d9\uc791-\uc6d0\ub9ac",level:3}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://hamait.tistory.com/937"},"newFixedThreadPool \ub294 \uc5b4\ub5bb\uac8c \ub3d9\uc791\ud558\ub294\uac00?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://leeyh0216.github.io/posts/truth_of_threadpoolexecutor/"},"ThreadPoolExecutor\uc5d0 \ub300\ud55c \uc624\ud574\uc640 \uc9c4\uc2e4"))),(0,o.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,o.kt)("h3",{id:"newfixedthreadpool-\ub3d9\uc791-\uc6d0\ub9ac"},"newFixedThreadPool \ub3d9\uc791 \uc6d0\ub9ac"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"corePoolSize\ub9cc\ud07c Thread \uc0dd\uc131"),(0,o.kt)("li",{parentName:"ol"},"Thread\uac00 \ubd80\uc871\ud558\uba74 Runnable\uc744 Queue\uc5d0 \ub2f4\ub294\ub2e4"),(0,o.kt)("li",{parentName:"ol"},"Queue\uac00 \uac00\ub4dd \ucc28\uba74 maximumPoolSize\uae4c\uc9c0 Thread\ub97c \ucd94\uac00 \uc0dd\uc131\ud55c\ub2e4.")))}d.isMDXComponent=!0}}]);