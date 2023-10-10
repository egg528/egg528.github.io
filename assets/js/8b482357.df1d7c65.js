"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7747],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>k});var r=l(7294);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)l=i[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=r.createContext({}),p=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):a(a({},t),e)),l},s=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var l=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=p(l),d=n,k=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return l?r.createElement(k,a(a({ref:t},s),{},{components:l})):r.createElement(k,a({ref:t},s))}));function k(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=l.length,a=new Array(i);a[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:n,a[1]=u;for(var p=2;p<i;p++)a[p]=l[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,l)}d.displayName="MDXCreateElement"},6676:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=l(7462),n=(l(7294),l(3905));const i={title:"09. \uc6f9 \ud06c\ub864\ub7ec \uc124\uacc4",sidebar_position:9,tag:["book","system design interview"]},a=void 0,u={unversionedId:"system-design-interview/nine",id:"system-design-interview/nine",title:"09. \uc6f9 \ud06c\ub864\ub7ec \uc124\uacc4",description:"\uc6f9 \ud06c\ub864\ub7ec\ub780?",source:"@site/docs/project/system-design-interview/nine.md",sourceDirName:"system-design-interview",slug:"/system-design-interview/nine",permalink:"/project/system-design-interview/nine",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"09. \uc6f9 \ud06c\ub864\ub7ec \uc124\uacc4",sidebar_position:9,tag:["book","system design interview"]},sidebar:"tutorialSidebar",previous:{title:"08. URL \ub2e8\ucd95\uae30 \uc124\uacc4",permalink:"/project/system-design-interview/eight"}},o={},p=[{value:"\uc6f9 \ud06c\ub864\ub7ec\ub780?",id:"\uc6f9-\ud06c\ub864\ub7ec\ub780",level:2},{value:"\uc124\uacc4 \uc2dc \uace0\ubbfc\ud560 \uac83\ub4e4",id:"\uc124\uacc4-\uc2dc-\uace0\ubbfc\ud560-\uac83\ub4e4",level:2},{value:"\uc6f9 \ud06c\ub864\ub7ec \uac1c\ub7b5\uc801\uc778 \uc124\uacc4\ub3c4",id:"\uc6f9-\ud06c\ub864\ub7ec-\uac1c\ub7b5\uc801\uc778-\uc124\uacc4\ub3c4",level:2},{value:"1. \uc2dc\uc791 URL \uc9d1\ud569",id:"1-\uc2dc\uc791-url-\uc9d1\ud569",level:4},{value:"2. \ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c",id:"2-\ubbf8\uc218\uc9d1-url-\uc800\uc7a5\uc18c",level:4},{value:"3. HTML \ub2e4\uc6b4\ub85c\ub354",id:"3-html-\ub2e4\uc6b4\ub85c\ub354",level:4},{value:"4. \ub3c4\uba54\uc778 \uc774\ub984 \ubcc0\ud658\uae30",id:"4-\ub3c4\uba54\uc778-\uc774\ub984-\ubcc0\ud658\uae30",level:4},{value:"5. \ucf58\ud150\uce20 \ud30c\uc11c",id:"5-\ucf58\ud150\uce20-\ud30c\uc11c",level:4},{value:"6. \uc911\ubcf5 \ucf58\ud150\uce20 \uc5ec\ubd80",id:"6-\uc911\ubcf5-\ucf58\ud150\uce20-\uc5ec\ubd80",level:4},{value:"7. \ucf58\ud150\uce20 \uc800\uc7a5\uc18c",id:"7-\ucf58\ud150\uce20-\uc800\uc7a5\uc18c",level:4},{value:"8. URL \ucd94\ucd9c\uae30",id:"8-url-\ucd94\ucd9c\uae30",level:4},{value:"9. URL \ud544\ud130",id:"9-url-\ud544\ud130",level:4},{value:"10. \uc774\ubbf8 \ubc29\ubb38\ud55c URL \uc5ec\ubd80",id:"10-\uc774\ubbf8-\ubc29\ubb38\ud55c-url-\uc5ec\ubd80",level:4},{value:"11. URL \uc800\uc7a5\uc18c",id:"11-url-\uc800\uc7a5\uc18c",level:4}],s={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\uc6f9-\ud06c\ub864\ub7ec\ub780"},"\uc6f9 \ud06c\ub864\ub7ec\ub780?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6f9\uc5d0 \uc62c\ub77c\uc624\uac70\ub098 \uac31\uc2e0\ub41c \ucf58\ud150\uce20\ub97c \ucc3e\uc544\ub0b4\ub294 \ubaa9\uc801\uc744 \uac00\uc9c4 \ud504\ub85c\uadf8\ub7a8"),(0,n.kt)("li",{parentName:"ul"},"\uc5ec\uae30\uc11c \ucf58\ud150\uce20\ub294 \ub2e4\uc591\ud55c \ud615\uc2dd\uc77c \uc218 \uc788\uc74c(web page, pdf, image ...)"),(0,n.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc608\uc2dc: \uac80\uc0c9 \uc5d4\uc9c4 \uc778\ub371\uc2f1, \uc6f9 \uc544\uce74\uc774\ube59, \uc6f9 \ub9c8\uc774\ub2dd, \uc6f9 \ubaa8\ub2c8\ud130\ub9c1")),(0,n.kt)("h2",{id:"\uc124\uacc4-\uc2dc-\uace0\ubbfc\ud560-\uac83\ub4e4"},"\uc124\uacc4 \uc2dc \uace0\ubbfc\ud560 \uac83\ub4e4"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6f9 \ud06c\ub864\ub7ec\uc758 \ubaa9\uc801"),(0,n.kt)("li",{parentName:"ul"},"\uc218\uc9d1\uc774 \ud544\uc694\ud55c \uc6f9 \ud398\uc774\uc9c0\uc758 \uaddc\ubaa8"),(0,n.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0 \ud615\uc2dd \ubcc0\ud654\uc5d0 \ub300\ud55c \ub300\uc751 \uc5ec\ubd80"),(0,n.kt)("li",{parentName:"ul"},"\uc6f9 \ud398\uc774\uc9c0 \uc800\uc7a5 \uc5ec\ubd80 \ubc0f \ubcf4\uad00 \uae30\uac04"),(0,n.kt)("li",{parentName:"ul"},"\uc911\ubcf5\ub41c \ucee8\ud150\uce20 \ucc98\ub9ac \uc5ec\ubd80 \ub4f1..."),(0,n.kt)("li",{parentName:"ul"},"\uaddc\ubaa8 \ud655\uc7a5\uc131, \uc548\uc815\uc131, \uc218\uc9d1 \ub300\uc0c1 \uc6f9 \ud398\uc774\uc9c0 \uc694\uccad \uc218, \uc218\uc9d1 \ucf58\ud150\uce20\uc758 \ud655\uc7a5\uc131 \ub4f1\ub4f1...")),(0,n.kt)("h2",{id:"\uc6f9-\ud06c\ub864\ub7ec-\uac1c\ub7b5\uc801\uc778-\uc124\uacc4\ub3c4"},"\uc6f9 \ud06c\ub864\ub7ec \uac1c\ub7b5\uc801\uc778 \uc124\uacc4\ub3c4"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"web_crawler.jpg",src:l(1852).Z,width:"1602",height:"1038"})),(0,n.kt)("h4",{id:"1-\uc2dc\uc791-url-\uc9d1\ud569"},"1. \uc2dc\uc791 URL \uc9d1\ud569"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc6f9 \ud06c\ub864\ub7ec\uac00 \ud06c\ub864\ub9c1\uc744 \uc2dc\uc791\ud558\ub294 \ucd9c\ubc1c\uc810\ub4e4\uc758 \uc9d1\ud569"),(0,n.kt)("li",{parentName:"ul"},"\ub300\uac1c \uc218\uc9d1\ud560 \uc804\uccb4 URL \uacf5\uac04\uc744 \uc791\uc740 \ubd80\ubd84\uc9d1\ud569\uc73c\ub85c \ub098\ub204\ub294 \uc804\ub7b5\uc744 \uc0ac\uc6a9\ud55c\ub2e4. (\uc9c0\uc5ed, \uc8fc\uc81c \ub4f1\ub4f1..)")),(0,n.kt)("h4",{id:"2-\ubbf8\uc218\uc9d1-url-\uc800\uc7a5\uc18c"},"2. \ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub9c1 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\uae30 \uc704\ud574 URL\uc744 \ub2e4\uc6b4\ub85c\ub4dc \ud560 URL / \ub2e4\uc6b4\ub85c\ub4dc\ub41c URL\ub85c \ub098\ub208\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774 \uc911\uc5d0\uc11c \ub2e4\uc6b4\ub85c\ub4dc \ud560 URL\uc744 \uc800\uc7a5 \uad00\ub9ac\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ubbf8\uc218\uc9d1 URL \uc800\uc7a5\uc18c\uc774\ub2e4.")),(0,n.kt)("h4",{id:"3-html-\ub2e4\uc6b4\ub85c\ub354"},"3. HTML \ub2e4\uc6b4\ub85c\ub354"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub9d0 \uadf8\ub300\ub85c URL\uc744 \uc778\uc790\ub85c \ubc1b\uc544 \ucf58\ud150\uce20\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4.")),(0,n.kt)("h4",{id:"4-\ub3c4\uba54\uc778-\uc774\ub984-\ubcc0\ud658\uae30"},"4. \ub3c4\uba54\uc778 \uc774\ub984 \ubcc0\ud658\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"URL\uc744 \ub300\uc751\ub418\ub294 IP\ub85c \ubcc0\ud658\ud558\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4.")),(0,n.kt)("h4",{id:"5-\ucf58\ud150\uce20-\ud30c\uc11c"},"5. \ucf58\ud150\uce20 \ud30c\uc11c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub2e4\uc6b4\ubc1b\uc740 \ucf58\ud150\uce20\ub97c parsing\ud558\uace0 validation\ud558\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \ud615\uc2dd\uc758 \ub370\uc774\ud130\ub97c \uac78\ub7ec\ub0b4\ub294 \uc791\uc5c5\uc744 \uc9c4\ud589\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud06c\ub864\ub9c1 \uc11c\ubc84 \ub0b4\uc5d0 \ucf58\ud150\uce20 \ud30c\uc11c\ub97c \uad6c\ud604\ud558\uba74 \ud06c\ub864\ub9c1 \uacfc\uc815\uc774 \ub290\ub824\uc9d0\uc73c\ub85c \ubcc4\ub3c4\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub450\ub294 \uac83\ub3c4 \uace0\ub824\ud560 \uc218 \uc788\ub2e4.")),(0,n.kt)("h4",{id:"6-\uc911\ubcf5-\ucf58\ud150\uce20-\uc5ec\ubd80"},"6. \uc911\ubcf5 \ucf58\ud150\uce20 \uc5ec\ubd80"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ucc45\uc5d0 \uc758\ud558\uba74 29%\uac00\ub7c9\uc758 \uc6f9 \ucf58\ud150\uce20\ub294 \uc911\ubcf5\uc774\ub77c\uace0 \ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \uc801\ud569\ud55c \uc790\ub8cc \uad6c\uc870\ub97c \ub3c4\uc785\ud558\uc5ec \uc911\ubcf5\uacfc \ub370\uc774\ud130 \ucc98\ub9ac \uc18c\uc694 \uc2dc\uac04\uc744 \uc904\uc774\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"HTML \ube44\uad50\uc5d0 \uac00\uc7a5 \uc9c1\uad00\uc801\uc778 \ubc29\ubc95\uc740 \ubb38\uc790\uc5f4 \ube44\uad50\uc774\uaca0\uc9c0\ub9cc, \ud070 \uaddc\ubaa8\uc5d0\uc11c \uc131\ub2a5\uc744 \uace0\ub824\ud55c\ub2e4\uba74 \ucc45\uc5d0\uc11c\ub294 Hash\uac12 \ube44\uad50\ub97c \ucd94\ucc9c\ud55c\ub2e4.")),(0,n.kt)("h4",{id:"7-\ucf58\ud150\uce20-\uc800\uc7a5\uc18c"},"7. \ucf58\ud150\uce20 \uc800\uc7a5\uc18c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc218\uc9d1\ud55c \ucf58\ud150\uce20\ub97c \uc800\uc7a5\ud558\ub294 \uc2dc\uc2a4\ud15c"),(0,n.kt)("li",{parentName:"ul"},"\ucf58\ud150\uce20 \uc720\ud615, \ud06c\uae30, \uc811\uadfc \ube48\ub3c4, \ubcf4\uad00 \uae30\uac04 \ub4f1\uc744 \uace0\ub824\ud558\uc5ec \uc120\ud0dd\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ucc45\uc5d0\uc11c\ub294 \ub514\uc2a4\ud06c\uc640 \uba54\ubaa8\ub9ac\ub97c \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uc800\uc7a5\uc18c\ub97c \ud0dd\ud588\ub2e4.")),(0,n.kt)("h4",{id:"8-url-\ucd94\ucd9c\uae30"},"8. URL \ucd94\ucd9c\uae30"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"HTML \ud398\uc774\uc9c0\ub97c \ud30c\uc2f1\ud558\uc5ec \ub9c1\ud06c\ub4e4\uc744 \uace8\ub77c\ub0b4\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uba74 \uc0c1\ub300 \uacbd\ub85c\uc5d0 \ub3c4\uba54\uc778\uc744 \ucd94\uac00\ud558\uc5ec \uc808\ub300 \uacbd\ub85c\ub85c \ubcc0\ud658\ud558\ub294 \uc5ed\ud560\uc774\ub2e4.")),(0,n.kt)("h4",{id:"9-url-\ud544\ud130"},"9. URL \ud544\ud130"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud2b9\uc815\ud55c \ucf58\ud150\uce20 \ud0c0\uc785\ub098 \ud30c\uc77c \ud655\uc7a5\uc790, \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\ub294 URL, \uc811\uadfc \uc81c\uc678 \ubaa9\ub85d\uc5d0 \ud3ec\ud568\ub41c URL\uc744 \ud06c\ub864\ub9c1 \ub300\uc0c1\uc5d0\uc11c \uc81c\uc678\ud558\ub294 \uc5ed\ud560\uc744 \ub2f4\ub2f9\ud55c\ub2e4.")),(0,n.kt)("h4",{id:"10-\uc774\ubbf8-\ubc29\ubb38\ud55c-url-\uc5ec\ubd80"},"10. \uc774\ubbf8 \ubc29\ubb38\ud55c URL \uc5ec\ubd80"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ub2e4\uc6b4\ub85c\ub4dc \ud560 URL / \ub2e4\uc6b4\ub85c\ub4dc\ub41c URL\uc744 \ubc14\ud0d5\uc73c\ub85c \uc774\ubbf8 \ubc29\ubb38\ud55c URL\uc744 \uac70\ub974\ub294 \ucef4\ud3ec\ub10c\ud2b8\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ucc45\uc5d0\uc11c\ub294 \uc790\ub8cc \uad6c\uc870\ub97c \ud1b5\ud574 \ub2e4\uc6b4\ub85c\ub4dc \ud560 URL / \ub2e4\uc6b4\ub85c\ub4dc\ub41c URL\ub97c \uad00\ub9ac\ud55c\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud1b5\ud574 \uc11c\ubc84 \uc8fc\ud558\ub97c \uc904\uc774\uace0 \ubb34\ud55c \ub8e8\ud504\ub97c \ubc29\uc9c0\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc790\ub8cc \uad6c\uc870\ub85c\ub294 \ube14\ub8f8 \ud544\ud130 \ud639\uc740 \ud574\uc2dc \ud14c\uc774\ube14\uc774 \ub110\ub9ac \uc4f0\uc778\ub2e4.")),(0,n.kt)("h4",{id:"11-url-\uc800\uc7a5\uc18c"},"11. URL \uc800\uc7a5\uc18c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc774\ubbf8 \ubc29\ubb38\ud55c URL\uc744 \ubcf4\uad00\ud558\ub294 \uc800\uc7a5\uc18c\uc774\ub2e4.")))}c.isMDXComponent=!0},1852:(e,t,l)=>{l.d(t,{Z:()=>r});const r=l.p+"assets/images/web_crawler-2beae46248e7361b658657837f546b1b.jpg"}}]);