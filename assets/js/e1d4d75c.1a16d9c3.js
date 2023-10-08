"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4739],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(n),k=l,d=m["".concat(o,".").concat(k)]||m[k]||c[k]||a;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:l,i[1]=u;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},2674:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var r=n(7462),l=(n(7294),n(3905));const a={title:"07. \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc720\uc77c ID \uc0dd\uc131\uae30 \uc124\uacc4",sidebar_position:7,tag:["book","system design interview"]},i=void 0,u={unversionedId:"system-design-interview/seven",id:"system-design-interview/seven",title:"07. \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc720\uc77c ID \uc0dd\uc131\uae30 \uc124\uacc4",description:"\ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud560 ID \uc0dd\uc131\uae30 \uc124\uacc4 \uc2dc \uace0\ubbfc\ud574\ubcfc \uc870\uac74\ub4e4",source:"@site/docs/project/system-design-interview/seven.md",sourceDirName:"system-design-interview",slug:"/system-design-interview/seven",permalink:"/project/system-design-interview/seven",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"07. \ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc744 \uc704\ud55c \uc720\uc77c ID \uc0dd\uc131\uae30 \uc124\uacc4",sidebar_position:7,tag:["book","system design interview"]},sidebar:"tutorialSidebar",previous:{title:"06. key-value \uc800\uc7a5\uc18c \uc124\uacc4",permalink:"/project/system-design-interview/six"},next:{title:"08. URL \ub2e8\ucd95\uae30 \uc124\uacc4",permalink:"/project/system-design-interview/eight"}},o={},p=[{value:"\ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud560 ID \uc0dd\uc131\uae30 \uc124\uacc4 \uc2dc \uace0\ubbfc\ud574\ubcfc \uc870\uac74\ub4e4",id:"\ubd84\uc0b0-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\uc0ac\uc6a9\ud560-id-\uc0dd\uc131\uae30-\uc124\uacc4-\uc2dc-\uace0\ubbfc\ud574\ubcfc-\uc870\uac74\ub4e4",level:2},{value:"ID \uc0dd\uc131\uae30 \uc885\ub958",id:"id-\uc0dd\uc131\uae30-\uc885\ub958",level:2},{value:"\ub2e4\uc911 \ub9c8\uc2a4\ud130 \ubcf5\uc81c",id:"\ub2e4\uc911-\ub9c8\uc2a4\ud130-\ubcf5\uc81c",level:3},{value:"UUID",id:"uuid",level:3},{value:"\ud2f0\ucf13 \uc11c\ubc84",id:"\ud2f0\ucf13-\uc11c\ubc84",level:3},{value:"\ud2b8\uc704\ud130 \uc2a4\ub178\ud50c\ub808\uc774\ud06c \uc811\uadfc\ubc95",id:"\ud2b8\uc704\ud130-\uc2a4\ub178\ud50c\ub808\uc774\ud06c-\uc811\uadfc\ubc95",level:3},{value:"\ucd94\uac00\ub85c \uace0\ubbfc\ud574\ubcfc \uac83\ub4e4",id:"\ucd94\uac00\ub85c-\uace0\ubbfc\ud574\ubcfc-\uac83\ub4e4",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\ubd84\uc0b0-\uc2dc\uc2a4\ud15c\uc5d0\uc11c-\uc0ac\uc6a9\ud560-id-\uc0dd\uc131\uae30-\uc124\uacc4-\uc2dc-\uace0\ubbfc\ud574\ubcfc-\uc870\uac74\ub4e4"},"\ubd84\uc0b0 \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\ud560 ID \uc0dd\uc131\uae30 \uc124\uacc4 \uc2dc \uace0\ubbfc\ud574\ubcfc \uc870\uac74\ub4e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\uc758 \ud2b9\uc131: \uc720\uc77c\uc131, \uc815\ub82c \uac00\ub2a5 \ub4f1"),(0,l.kt)("li",{parentName:"ul"},"\ub808\ucf54\ub4dc \uc0dd\uc131 \ubc29\uc2dd: \uc774\uc804 \ub370\uc774\ud130 + 1 \ub4f1"),(0,l.kt)("li",{parentName:"ul"},"ID \uad6c\uc131: \uc22b\uc790\ub85c \uad6c\uc131 \ub4f1"),(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uc2a4\ud15c \uaddc\ubaa8: \ucd08\ub2f9 10,000\uac1c\uc758 ID \uc0dd\uc131 \ub4f1")),(0,l.kt)("h2",{id:"id-\uc0dd\uc131\uae30-\uc885\ub958"},"ID \uc0dd\uc131\uae30 \uc885\ub958"),(0,l.kt)("h3",{id:"\ub2e4\uc911-\ub9c8\uc2a4\ud130-\ubcf5\uc81c"},"\ub2e4\uc911 \ub9c8\uc2a4\ud130 \ubcf5\uc81c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"auto_increment\uae30\ub2a5\uc744 \ud65c\uc6a9\ud558\ub418, ID\ub97c \uc0ac\uc6a9\uc911\uc778 DB \uc11c\ubc84 \uc218\ub9cc\ud07c \uc99d\uac00\uc2dc\ud0a8\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc11c\ubc84 1\uc740 ID\ub97c 1, 3, 5, 7, 9 ...\ub85c \uc0dd\uc131"),(0,l.kt)("li",{parentName:"ul"},"\uc11c\ubc84 2\ub294 ID\ub97c 2, 4, 6, 8, 10 ...\ub85c \uc0dd\uc131"))),(0,l.kt)("li",{parentName:"ul"},"\uaddc\ubaa8\uc758 \ud655\uc7a5\uc131 \ubb38\uc81c\ub97c \uc5b4\ub290 \uc815\ub3c4 \ud574\uacb0\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ub370\uc774\ud130 \uc13c\ud130\uc5d0 \uac78\uccd0 \uaddc\ubaa8\ub97c \ub298\ub9b4 \uc218 \uc5c6\uc74c."),(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc5d0 \ub9de\ucdb0 ID\uac12\uc774 \ucee4\uc9c0\ub294 \uac83\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc11c\ubc84\uc758 \ucd94\uac00/\uc0ad\uc81c \uc2dc\uc5d0 \uc798 \ub3d9\uc791\ud558\ub3c4\ub85d \ub9cc\ub4e4\uae30 \uc5b4\ub835\ub2e4. (\ucd94\uac00\ud55c\ub2e4\uace0 \uac00\uc815\ud558\uba74 \uae30\uc874 \uc11c\ubc84\uc758 ID \uc0dd\uc131 \ubc29\uc2dd\uc5d0\ub3c4 \uc601\ud5a5\uc744 \uc90c)")))),(0,l.kt)("h3",{id:"uuid"},"UUID"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"UUID\ub780: \uc815\ubcf4\ub97c \uc720\uc77c\ud558\uac8c \uc2dd\ubcc4\ud558\uae30 \uc704\ud574 \ub9cc\ub4e0 128\ube44\ud2b8\uc9dc\ub9ac \uc218."),(0,l.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc0dd\uc131\uc774 \ub2e8\uc21c\ud558\uace0 \uc11c\ubc84\uac04 \uc870\uc728\uc774 \ud544\uc694 \uc5c6\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2f9\uc5f0\ud788 \uaddc\ubaa8 \ud655\uc7a5\ub3c4 \uc6a9\uc758\ud558\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ID\uac00 \uae38\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uac04\uc21c\uc73c\ub85c \uc815\ub82c\ud560 \uc218 \uc5c6\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc22b\uc790\uac00 \uc544\ub2cc \uac12\uc774 \ud3ec\ud568\ub420 \uc218 \uc788\ub2e4.")))),(0,l.kt)("h3",{id:"\ud2f0\ucf13-\uc11c\ubc84"},"\ud2f0\ucf13 \uc11c\ubc84"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"auto_increment \uae30\ub2a5\uc744 \uc218\ud589\ud560 DB\uc11c\ubc84(Ticket \uc11c\ubc84)\ub97c \ud558\ub098 \ub450\uace0 \uc720\uc77c\ud55c ID \uc0dd\uc131\uae30\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\uc2dd"),(0,l.kt)("li",{parentName:"ul"},"\uc7a5\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc720\uc77c\uc131\uc774 \ubcf4\uc7a5\ub418\uace0 \uc22b\uc790\ub85c\ub9cc \uad6c\uc131\ub41c ID\ub97c \uc27d\uac8c \ub9cc\ub4e4 \uc218 \uc788\ub530."),(0,l.kt)("li",{parentName:"ul"},"\uad6c\ud604\uc774 \uc27d\uace0, \uc911\uc18c \uaddc\ubaa8\uc5d0 \uc801\ud569\ud558\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc810",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ud2f0\ucf13 \uc11c\ubc84\uac00 SPOF\uac00 \ub41c\ub2e4.")))),(0,l.kt)("h3",{id:"\ud2b8\uc704\ud130-\uc2a4\ub178\ud50c\ub808\uc774\ud06c-\uc811\uadfc\ubc95"},"\ud2b8\uc704\ud130 \uc2a4\ub178\ud50c\ub808\uc774\ud06c \uc811\uadfc\ubc95"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"snow-flake.jpg",src:n(1779).Z,width:"1422",height:"266"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ID\ub97c 5\uac1c\uc758 \uc139\uc158\uc73c\ub85c \ub098\ub214"),(0,l.kt)("li",{parentName:"ul"},"\uc0ac\uc778: \ud604\uc7ac\ub294 \uc758\ubbf8\uac00 \uc5c6\uc9c0\ub9cc \uc74c\uc218/\uc591\uc218 \uad6c\ubd84\uac12 \ub4f1\uc73c\ub85c \ucd94\ud6c4 \ud65c\uc6a9 \uac00\ub2a5"),(0,l.kt)("li",{parentName:"ul"},"\ud0c0\uc784\uc2a4\ud0ec\ud504: \uae30\uc6d0 \uc2dc\uac01 \uc774\ud6c4\ub85c \uba87 ms\uac00 \uacbd\uacfc\ud588\ub294\uc9c0 \ub098\ud0c0\ub0b4\ub294 \uac12"),(0,l.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc13c\ud130 ID: \ub370\uc774\ud130 \uc13c\ud130 \uc2dd\ubcc4\uc790"),(0,l.kt)("li",{parentName:"ul"},"\uc11c\ubc84 ID: \uc11c\ubc84 \uc2dd\ubcc4\uc790"),(0,l.kt)("li",{parentName:"ul"},"\uc77c\ub828\ubc88\ud638: ID\uc0dd\uc131\ub9c8\ub2e4 1\uc529 \uc99d\uac00\ud558\uba70 1ms\uacbd\uacfc\uc2dc\ub9c8\ub2e4 0\uc73c\ub85c reset\ub41c\ub2e4.")),(0,l.kt)("h2",{id:"\ucd94\uac00\ub85c-\uace0\ubbfc\ud574\ubcfc-\uac83\ub4e4"},"\ucd94\uac00\ub85c \uace0\ubbfc\ud574\ubcfc \uac83\ub4e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \ubaa8\ub4e0 \uc11c\ubc84\uac00 \uac19\uc740 \uc2dc\uacc4\ub97c \uc0ac\uc6a9\ud558\ub3c4\ub85d \ubcf4\uc7a5\ud560 \uac83\uc778\uac00?"),(0,l.kt)("li",{parentName:"ul"},"\uc2a4\ub178\ud50c\ub808\uc774\ud06c\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74 \uac01 \ud30c\ud2b8\uc758 \uae38\uc774 \ucd5c\uc801\ud654\ub97c \uc5b4\ub5bb\uac8c \ud560 \uac83\uc778\uac00?"),(0,l.kt)("li",{parentName:"ul"},"\uace0\uac00\uc6a9\uc131 \uc81c\uacf5 \ubc29\ubc95")))}c.isMDXComponent=!0},1779:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/snow-flake-08233ae015008ac3eba87dfccb9cd62d.jpg"}}]);