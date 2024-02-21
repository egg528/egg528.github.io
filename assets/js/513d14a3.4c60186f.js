"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5667],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),k=a,f=s["".concat(c,".").concat(k)]||s[k]||m[k]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const l={title:"11. \uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30",sidebar_position:11,tag:["book","clean architecture"]},o=void 0,i={unversionedId:"book/clean-architecture/11",id:"book/clean-architecture/11",title:"11. \uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30",description:"\uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30",source:"@site/docs/resource/book/clean-architecture/11.md",sourceDirName:"book/clean-architecture",slug:"/book/clean-architecture/11",permalink:"/resource/book/clean-architecture/11",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"11. \uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30",sidebar_position:11,tag:["book","clean architecture"]},sidebar:"tutorialSidebar",previous:{title:"10. \uc544\ud0a4\ud14d\ucc98 \uacbd\uacc4 \uac15\uc81c\ud558\uae30",permalink:"/resource/book/clean-architecture/10"},next:{title:"12. \uc544\ud0a4\ud14d\ucc98 \uc2a4\ud0c0\uc77c \uacb0\uc815\ud558\uae30",permalink:"/resource/book/clean-architecture/12"}},c={},u=[{value:"\uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30",id:"\uc758\uc2dd\uc801\uc73c\ub85c-\uc9c0\ub984\uae38-\uc0ac\uc6a9\ud558\uae30",level:2},{value:"1. \uc720\uc2a4\ucf00\uc774\uc2a4 \uac04 \ubaa8\ub378 \uacf5\uc720\ud558\uae30",id:"1-\uc720\uc2a4\ucf00\uc774\uc2a4-\uac04-\ubaa8\ub378-\uacf5\uc720\ud558\uae30",level:3},{value:"2. \ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\ub97c \uc785\ucd9c\ub825 \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud558\uae30",id:"2-\ub3c4\uba54\uc778-\uc5d4\ud2f0\ud2f0\ub97c-\uc785\ucd9c\ub825-\ubaa8\ub378\ub85c-\uc0ac\uc6a9\ud558\uae30",level:3},{value:"3. \uc778\ucee4\ubc0d \ud3ec\ud2b8 \uac74\ub108 \ub6f0\uae30",id:"3-\uc778\ucee4\ubc0d-\ud3ec\ud2b8-\uac74\ub108-\ub6f0\uae30",level:3},{value:"4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ube44\uc2a4 \uac74\ub108\ub6f0\uae30",id:"4-\uc560\ud50c\ub9ac\ucf00\uc774\uc158-\uc11c\ube44\uc2a4-\uac74\ub108\ub6f0\uae30",level:3}],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uc758\uc2dd\uc801\uc73c\ub85c-\uc9c0\ub984\uae38-\uc0ac\uc6a9\ud558\uae30"},"\uc758\uc2dd\uc801\uc73c\ub85c \uc9c0\ub984\uae38 \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc7a0\uc7ac\uc801\uc778 \uc9c0\ub984\uae38\uc758 \uc778\uc2dd\uc744 \ub192\uc774\uace0 \uadf8 \uc601\ud5a5\uc744 \uc0dd\uac01\ud574\ubcf4\uc790"),(0,a.kt)("li",{parentName:"ul"},"\uc9c0\ub984\uae38\uc740 \uc2e4\uc81c\ub85c \ub354 \uc2e4\uc6a9\uc801\uc77c \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub9cc \uae68\uc9c4 \uc720\ub9ac\ucc3d\uc73c\ub85c \uc778\uc2dd\ub418\uc9c0 \uc54a\ub3c4\ub85d \uc9c0\ub984\uae38\uc744 \uc0ac\uc6a9\ud55c \uc774\uc720\ub97c \uba85\ud655\ud788 \uc815\ub9ac\ud574\ub450\uc790")),(0,a.kt)("h3",{id:"1-\uc720\uc2a4\ucf00\uc774\uc2a4-\uac04-\ubaa8\ub378-\uacf5\uc720\ud558\uae30"},"1. \uc720\uc2a4\ucf00\uc774\uc2a4 \uac04 \ubaa8\ub378 \uacf5\uc720\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9cc\uc57d 2\uac1c\uc758 UseCase\uac00 1\uac1c\uc758 Command \uac1d\uccb4\ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74"),(0,a.kt)("li",{parentName:"ul"},"Command\uac1d\uccb4\uac00 \ubcc0\uacbd\ub418\ub294 \uc774\uc720\ub294 2\uac1c\uac00 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc 2\uac1c\uc758 UseCase\uac00 \uae30\ub2a5\uc801\uc73c\ub85c \ubb36\uc5ec\uc788\uace0 \uacf5\uc720\uc0ac\ud56d\uc744 \uacf5\uc720\ud55c\ub2e4\uba74 \uc88b\uc740 \uc120\ud0dd\uc774 \ub420 \uc218\ub3c4...")),(0,a.kt)("h3",{id:"2-\ub3c4\uba54\uc778-\uc5d4\ud2f0\ud2f0\ub97c-\uc785\ucd9c\ub825-\ubaa8\ub378\ub85c-\uc0ac\uc6a9\ud558\uae30"},"2. \ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\ub97c \uc785\ucd9c\ub825 \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud558\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc774 \uc9c0\ub984\uae38 \ub610\ud55c UseCase\uc640 Service 2\uac1c\uac00 \ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0\uc758 \ubcc0\uacbd \uc694\uc778\uc774 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac04\ub2e8\ud55c \uc0dd\uc131/\uc5c5\ub370\uc774\ud2b8 UseCase\uc5d0\uc11c\ub294 \uc720\uc6a9\ud560 \uc218\ub3c4.."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \ubcf5\uc7a1\ud55c \ub85c\uc9c1\uc774 \ud544\uc694\ud558\ub2e4\uba74 \uc804\uc6a9 \uc785\ucd9c\ub825\uc744 \ub9cc\ub4dc\ub294 \uac83\uc744 \uad8c\uc7a5."),(0,a.kt)("li",{parentName:"ul"},"\uadf8\ub798\uc57c UseCase\uc758 \ubcc0\uacbd\uc5d0 \ub530\ub978 \ub3c4\uba54\uc778 \uc5d4\ud2f0\ud2f0 \ubcc0\uacbd\uc744 \ub9ca\uc744 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"3-\uc778\ucee4\ubc0d-\ud3ec\ud2b8-\uac74\ub108-\ub6f0\uae30"},"3. \uc778\ucee4\ubc0d \ud3ec\ud2b8 \uac74\ub108 \ub6f0\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc544\uc6c3\uace0\uc789 \ud3ec\ud2b8\uc640 \ub2ec\ub9ac \uc778\ucee4\ubc0d \ud3ec\ud2b8\ub294 \uc758\uc874\uc131 \uc5ed\uc804\uc5d0 \ud544\uc218\uc801\uc778 \uc694\uc18c\ub294 \uc544\ub2c8\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \ubd88\ud544\uc694\ud55c \uc778\ucee4\ubc0d \ud3ec\ud2b8\ub97c \uc81c\uac70\ud588\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc774\ub294 UseCase\ubcc4\ub85c \uc5b4\ub5a4 Service\ub97c \ud544\uc694\ub85c \ud558\ub294\uc9c0 \ubd88\ubd84\uba85\ud558\uac8c \ub9cc\ub4e0\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc774\uac74 \ud3ec\ud2b8\uc758 \uc874\uc7ac\uac00 Service\ub0b4 \uba54\uc11c\ub4dc\ub97c \ub354 \ubd84\uba85\ud788 \ud55c\ub2e4\ub294 \uc758\ubbf8")))),(0,a.kt)("h3",{id:"4-\uc560\ud50c\ub9ac\ucf00\uc774\uc158-\uc11c\ube44\uc2a4-\uac74\ub108\ub6f0\uae30"},"4. \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc11c\ube44\uc2a4 \uac74\ub108\ub6f0\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc601\uc18d\uc131 \uc5b4\ub311\ud130\uc5d0\uc11c \uc9c1\uc811 UseCase\ub97c \uad6c\ud604\ud558\ub294 \ubc29\uc2dd\uc774 \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc774 \uacbd\uc6b0 \ub3c4\uba54\uc778 \ubaa8\ub378\uc744 \uc785\ub825 \ubaa8\ub378\ub85c \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub85c\uc9c1\uc774 \uc870\uae08\ub9cc \ubcf5\uc7a1\ud574\uc838\ub3c4 \uc0ac\uc6a9 \ubd88\uac00\ub2a5\ud574\uc9c4\ub2e4. (\uc601\uc18d\uc131 \uc5b4\ub311\ud130\uc5d0 \ub85c\uc9c1\uc774 \ub4e4\uc544\uac00\uc57c \ud568...)"),(0,a.kt)("li",{parentName:"ul"},"\uc774 \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud560 \ub54c\ub294 \uba85\ud655\ud55c \uac00\uc774\ub4dc\ub77c\uc778\uc744 \ub9cc\ub4e4\uc5b4 \ub458 \uac83...")))}m.isMDXComponent=!0}}]);