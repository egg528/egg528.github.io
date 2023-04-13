"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=a,m=s["".concat(c,".").concat(f)]||s[f]||y[f]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4355:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"JPA Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158 \uc0ac\uc6a9\ud558\uae30",tag:["JPA","\uc77c\uae09\uceec\ub809\uc158"]},i=void 0,l={unversionedId:"tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30",id:"tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30",title:"JPA Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158 \uc0ac\uc6a9\ud558\uae30",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30.md",sourceDirName:"tech/jpa",slug:"/tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30",permalink:"/docs/tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/jpa/JPA-Entity\uc5d0\uc11c-\uc77c\uae09\uceec\ub809\uc158-\uc0ac\uc6a9\ud558\uae30.md",tags:[],version:"current",frontMatter:{title:"JPA Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158 \uc0ac\uc6a9\ud558\uae30",tag:["JPA","\uc77c\uae09\uceec\ub809\uc158"]},sidebar:"tutorialSidebar",previous:{title:"Spring Data JPA\uc5d0\uc11c GroupBy \ucc98\ub9ac\ud558\uae30",permalink:"/docs/tech/jpa/GroupBy"},next:{title:"N+1 \ubb38\uc81c",permalink:"/docs/tech/jpa/N1\ubb38\uc81c"}},c={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158",id:"entity\uc5d0\uc11c-\uc77c\uae09-\uceec\ub809\uc158",level:3}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wbluke.tistory.com/23"},"JPA Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158 \uc0ac\uc6a9\ud558\uae30"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("h3",{id:"entity\uc5d0\uc11c-\uc77c\uae09-\uceec\ub809\uc158"},"Entity\uc5d0\uc11c \uc77c\uae09 \uceec\ub809\uc158"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\uc77c\uae09 \uceec\ub809\uc158"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub0b4\ubd80\uc5d0 \uceec\ub809\uc158\uc744 \uac00\uc9c4 \uac1d\uccb4."),(0,a.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc774 \uc694\uc18c\uac00 \uc911\uc694\ud558\uace0, \uceec\ub809\uc158\uc5d0 \ub2e4\uc591\ud55c \uac00\uacf5\uc774 \ud544\uc694\ud560 \ub54c \uc0ac\uc6a9\ud568.")))))}s.isMDXComponent=!0}}]);