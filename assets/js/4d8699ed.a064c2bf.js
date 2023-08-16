"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),o=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=o(r),d=n,f=m["".concat(u,".").concat(d)]||m[d]||s[d]||l;return r?a.createElement(f,c(c({ref:t},p),{},{components:r})):a.createElement(f,c({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,c=new Array(l);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=r[o];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var a=r(7462),n=(r(7294),r(3905));const l={title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30"},c=void 0,i={unversionedId:"tech/backend/architecture/naver-financial-clean-architecture",id:"tech/backend/architecture/naver-financial-clean-architecture",title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/backend/architecture/naver-financial-clean-architecture.md",sourceDirName:"tech/backend/architecture",slug:"/tech/backend/architecture/naver-financial-clean-architecture",permalink:"/docs/tech/backend/architecture/naver-financial-clean-architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/backend/architecture/naver-financial-clean-architecture.md",tags:[],version:"current",frontMatter:{title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30"},sidebar:"tutorialSidebar",previous:{title:"React \ucef4\ud3ec\ub10c\ud2b8\uc640 \ucd94\uc0c1\ud654",permalink:"/docs/tech/frontend/react/react-component-abstraction"},next:{title:"JPA Native Query \uc0ac\uc6a9 \uc2dc DTO\ub85c \ub9e4\ud551\ud558\uae30",permalink:"/docs/tech/backend/jpa/JPA-Native-Query-DTO-\ub9e4\ud551\ud558\uae30"}},u={},o=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"\ub808\uc774\uc5b4\ub4dc \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5",id:"\ub808\uc774\uc5b4\ub4dc-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",level:3},{value:"\ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5?",id:"\ud074\ub9b0-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5",level:3},{value:"\ud5e5\uc0ac\uace0\ub0a0(\ud3ec\ud2b8 &amp; \uc5b4\ub311\ud130) \uc544\ud0a4\ud14d\ucc98\ub780?",id:"\ud5e5\uc0ac\uace0\ub0a0\ud3ec\ud2b8--\uc5b4\ub311\ud130-\uc544\ud0a4\ud14d\ucc98\ub780",level:3},{value:"\uc2e4\uc81c \uc801\uc6a9",id:"\uc2e4\uc81c-\uc801\uc6a9",level:3}],p={toc:o};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://medium.com/naverfinancial/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EC%97%90-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98-%EC%A0%81%EC%9A%A9%ED%95%98%EA%B8%B0-99d70df6122b"},"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30"))),(0,n.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,n.kt)("h3",{id:"\ub808\uc774\uc5b4\ub4dc-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5"},"\ub808\uc774\uc5b4\ub4dc \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Access \uacc4\uce35\uc774 \ucd5c\uc0c1\uc704\uc5d0 \uc874\uc7ac"),(0,n.kt)("li",{parentName:"ul"},"Data Access \uacc4\uce35\uc758 \ubcc0\ud654\ub294 App \uc804\uccb4\uc5d0 \uc601\ud5a5\uc744 \uc900\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ud2b9\uc9d5\uc740 \uacc4\uce35\uac00\ub2ac \uacb0\ud569\ub3c4\ub97c \ub0ae\ucdb0 \uacc4\uce35 \uac04\uc758 \uc601\ud5a5\uc744 \ucd5c\uc18c\ud654\ud558\ub294 \ubc29\ud5a5\uc744 \uace0\ubbfc\ud558\uac8c \ub9cc\ub4e4\uc5c8\ub2e4.")),(0,n.kt)("h3",{id:"\ud074\ub9b0-\uc544\ud0a4\ud14d\ucc98\uc758-\ud2b9\uc9d5"},"\ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\uc758 \ud2b9\uc9d5?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uad6c\ud604\ud55c \uacc4\uce35\uc740 \uc5b4\ub5a4 \uc758\uc874\uc131\ub3c4 \uac00\uc9c0\uc9c0 \uc54a\ub294 \ucd5c\uc0c1\uc704 \uacc4\uce35\uc73c\ub85c \ub454\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \uacc4\uce35\uc73c\ub85c\uc758 \uc785\ucd9c\ub825\uc744 \ucd94\uc0c1\ud654 \uacc4\uce35\uc73c\ub85c \uac10\uc2f8 \ubaa8\ub4e0 \uc678\ubd80 \uc758\uc874\uc131\uc758 \ubc29\ud5a5\uc744 \ub3c4\uba54\uc778 \uacc4\uce35\uc73c\ub85c \ud5a5\ud558\ub3c4\ub85d \ub9cc\ub4e0\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub294 \uc678\ubd80 \uacc4\uce35(DB, REST API)\uc758 \uacb0\uc815\uc744 \ubbf8\ub8e8\uac70\ub098 \ubcc0\uacbd\uc744 \uc6a9\uc758\ud558\uac8c \ud55c\ub2e4.")),(0,n.kt)("h3",{id:"\ud5e5\uc0ac\uace0\ub0a0\ud3ec\ud2b8--\uc5b4\ub311\ud130-\uc544\ud0a4\ud14d\ucc98\ub780"},"\ud5e5\uc0ac\uace0\ub0a0(\ud3ec\ud2b8 & \uc5b4\ub311\ud130) \uc544\ud0a4\ud14d\ucc98\ub780?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucd94\uc0c1\uc801\uc778 \uac1c\ub150\uc758 \ud074\ub9b0 \uc544\ud0a4\ud14d\ucc98\ub97c \uad6c\ud604\ud558\ub294 \ubc29\ubc95 \uc911 \ud558\ub098"),(0,n.kt)("li",{parentName:"ul"},"\ub3c4\uba54\uc778 \uacc4\uce35\uc73c\ub85c \ub4e4\uc5b4\uc624\uac70\ub098 \ub098\uac00\ub294 \uacc4\uce35\uac04\uc758 \uc694\uccad/\uc751\ub2f5\uc740 Port\ub77c\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ud1b5\ud574 \uc815\uc758\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Input Port\ub97c \uc774\uc6a9\ud558\ub294 \ub300\ud45c\uc801\uc778 Adapter\ub85c\ub294 REST API \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \uc5ed\ud560\uc744 \ud558\ub294 \uc6f9 \uc5b4\ub311\ud130\uac00 \uc788\uace0, \ud574\ub2f9 \uacc4\uce35\uc740 User Interface \uacc4\uce35\uc774\ub77c\uace0 \ud558\uba70 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc9c1\uc811 \ud638\ucd9c\ud558\uae30 \ub54c\ubb38\uc5d0 \uc8fc\ub3c4\ud558\ub294(driving) \uc5b4\ub311\ud130\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Output Port\ub97c \uad6c\ud604\ud558\ub294 \ub300\ud45c\uc801\uc778 Adapter\ub85c\ub294 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub370\uc774\ud130\ub97c \uc800\uc7a5\ud558\uace0 \ubd88\ub7ec\uc624\ub294 \uc5ed\ud560\uc744 \ud558\ub294 \uc601\uc18d\uc131 \uc5b4\ub311\ud130\uac00 \uc788\uace0, \ud574\ub2f9 \uacc4\uce35\uc740 Infrastructure \uacc4\uce35\uc774\ub77c\uace0 \ud558\uba70 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc5d0 \uc758\ud574 \ud638\ucd9c\ub418\uae30 \ub54c\ubb38\uc5d0 \uc8fc\ub3c4\ub418\ub294(driven) \uc5b4\ub311\ud130\ub77c\uace0 \ubd80\ub978\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud575\uc2ec\uc740 Input Port\uc640 Output Port \uba85\uc138\uac00 \uc788\ub2e4\uba74, \ud574\ub2f9 \uba85\uc138\uc5d0 \ub9de\uac8c \uad6c\ud604\ub41c \uc5b4\ub311\ud130\uc758 \ud615\ud0dc\uac00 \uc5b4\ub5bb\ub4e0 \ub3d9\uc77c\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub2e4\ub294 \uac83")),(0,n.kt)("h3",{id:"\uc2e4\uc81c-\uc801\uc6a9"},"\uc2e4\uc81c \uc801\uc6a9"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hexagonal-example.jpg",src:r(1633).Z,width:"1488",height:"1750"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud504\ub85c\uc81d\ud2b8 \uc2dc\uc791\uacfc \ub3d9\uc2dc\uc5d0 \uac00\uc7a5 \uba3c\uc800 \uc9c4\ud589\ud588\ub358 \uc77c\uc774 \uc678\ubd80 \uacc4\uce35\uc758 \uae30\uc220 \uc120\ud0dd\uc5d0\uc11c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1 \uad6c\ud604\uc73c\ub85c \ubc14\ub00c\uc5c8\ub2e4\uace0 \ud568."),(0,n.kt)("li",{parentName:"ul"},"\uad6c\ud604 \uc21c\uc11c",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\ub3c4\uba54\uc778 \ubaa8\ub378 \uad6c\ud604"),(0,n.kt)("li",{parentName:"ol"},"UseCase\uc640 OutPort \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc815\uc758\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\uc774\ub97c \ud65c\uc6a9\ud574 Service \ub85c\uc9c1\uc744 \uc791\uc131\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\uc774 \uc0c1\ud0dc\uc5d0\uc11c \ub85c\uc9c1\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4 (Mocking \ud65c\uc6a9)"))),(0,n.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Input, Output Port\uc758 \ubaa8\ub4c8 \uad50\uccb4\uac00 \uc6a9\uc758\ud558\ub2e4"))),(0,n.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uacc4\uce35 \ubcc4\ub85c \uc0ac\uc6a9\ud560 \ubaa8\ub378\uc744 \uad6c\ud604\ud574\uc918\uc57c \ud55c\ub2e4.")))))}m.isMDXComponent=!0},1633:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hexagonal-example-080e435770f00b69b74fd6d86579fabf.jpg"}}]);