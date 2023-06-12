"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2884],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(r),y=a,f=s["".concat(l,".").concat(y)]||s[y]||d[y]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},4186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={title:"JPA Native Query \uc0ac\uc6a9 \uc2dc DTO\ub85c \ub9e4\ud551\ud558\uae30",sidebar_position:1},i=void 0,c={unversionedId:"tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30",id:"tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30",title:"JPA Native Query \uc0ac\uc6a9 \uc2dc DTO\ub85c \ub9e4\ud551\ud558\uae30",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30.md",sourceDirName:"tech/backend/jpa",slug:"/tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30",permalink:"/docs/tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"JPA Native Query \uc0ac\uc6a9 \uc2dc DTO\ub85c \ub9e4\ud551\ud558\uae30",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uae30\uc220",permalink:"/docs/category/\uae30\uc220"},next:{title:"Spring Data JPA\uc5d0\uc11c GroupBy \ucc98\ub9ac\ud558\uae30",permalink:"/docs/tech/backend/jpa/GroupBy"}},l={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://incheol-jung.gitbook.io/docs/q-and-a/spring/n+1"},"JPA N+1 \ubb38\uc81c"))),(0,a.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"@OneToMany \uad00\uacc4\uc5d0\uc11c \uc0dd\uae30\ub294 \ubb38\uc81c"),(0,a.kt)("li",{parentName:"ul"},"\ub178\uc120(One) -- \uc5ed(Many) \uad00\uacc4\ub97c \uac00\uc815\ud574\ubcf4\uc790",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"jpaRepository\uc758 findAll()\uc744 \uc0ac\uc6a9\ud558\uba74 JPQL\uc744 \ud1b5\ud574 \uc5d4\ud2f0\ud2f0(\ub178\uc120)\uc640 \ud544\ub4dc\ub97c \ubc14\ud0d5\uc73c\ub85c \ucffc\ub9ac\ub97c \ub9cc\ub4e0\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c \ub178\uc120\uc744 \uc870\ud68c\ud558\ub294 \ucffc\ub9ac (1\uac1c)\uc640"),(0,a.kt)("li",{parentName:"ul"},"\uc870\ud68c\ub41c \ub178\uc120\uc774 \uac00\uc9c4 \uc5f4\ub4e4\uc744 \uc870\ud68c\ud558\ub294 \ucffc\ub9ac (N\uac1c)\uac00 \ubc1c\uc0dd\ud55c\ub2e4.")))))}s.isMDXComponent=!0}}]);