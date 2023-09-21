"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5330],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={title:"05. \uc548\uc815 \ud574\uc2dc \uc124\uacc4",sidebar_position:5},o=void 0,l={unversionedId:"book/system-design-interview/five",id:"book/system-design-interview/five",title:"05. \uc548\uc815 \ud574\uc2dc \uc124\uacc4",description:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58 \ubb38\uc81c",source:"@site/docs/book/system-design-interview/five.md",sourceDirName:"book/system-design-interview",slug:"/book/system-design-interview/five",permalink:"/docs/book/system-design-interview/five",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/book/system-design-interview/five.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"05. \uc548\uc815 \ud574\uc2dc \uc124\uacc4",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"04. \ucc98\ub9ac\uc728 \uc81c\ud55c \uc7a5\uce58\uc758 \uc124\uacc4",permalink:"/docs/book/system-design-interview/four"},next:{title:"06. key-value \uc800\uc7a5\uc18c \uc124\uacc4",permalink:"/docs/book/system-design-interview/six"}},s={},c=[{value:"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58 \ubb38\uc81c",id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58-\ubb38\uc81c",level:2},{value:"\uc548\uc815 \ud574\uc2dc",id:"\uc548\uc815-\ud574\uc2dc",level:2},{value:"2\uac00\uc9c0 \ubb38\uc81c\uc810",id:"2\uac00\uc9c0-\ubb38\uc81c\uc810",level:2},{value:"\uac00\uc0c1 \ub178\ub4dc \uae30\ubc95",id:"\uac00\uc0c1-\ub178\ub4dc-\uae30\ubc95",level:2}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\ud574\uc2dc-\ud0a4-\uc7ac\ubc30\uce58-\ubb38\uc81c"},"\ud574\uc2dc \ud0a4 \uc7ac\ubc30\uce58 \ubb38\uc81c"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ubd84\uc0b0 DB \ub178\ub4dc\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\uac00 \ub41c\ub2e4\uba74? \uc11c\ubc84 \uc778\ub371\uc2a4 \uac12(\ud574\uc2dc % \uc11c\ubc84 \uc218)\uc774 \ub2ec\ub77c\uc9c4\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub294 \ub300\uaddc\ubaa8 \uce90\uc2dc \ubbf8\uc2a4\ub97c \ucd08\ub798\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("h2",{id:"\uc548\uc815-\ud574\uc2dc"},"\uc548\uc815 \ud574\uc2dc"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc548\uc815 \ud574\uc2dc\ub294 \ud574\uc2dc \ud14c\uc774\ube14 \uc218\uac00 \ubcc0\uacbd\ub420 \ub54c \ud3c9\uade0\uc801\uc73c\ub85c k/n(key \uac1c\uc218 / \uc11c\ubc84 \uac1c\uc218)\uac1c\uc758 \ud0a4\ub9cc \uc7ac\ubc30\uce58\ud55c\ub2e4.\n",(0,i.kt)("img",{alt:"hash_ring.png",src:r(2452).Z,width:"597",height:"571"})),(0,i.kt)("li",{parentName:"ul"},"\uc704 \uc0ac\uc9c4\uc740 hash ring\uacfc DB \ub178\ub4dc\ub97c \ub098\ud0c0\ub0b8 \uac83\uc774\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"hash ring\uc740 key\uac00 \uac00\uc9c8 \uc218 \uc788\ub294 \ud574\uc2dc\uac12\uc758 \ubc94\uc704\uc774\uace0 \uc774\ub97c \uade0\ub4f1\ud558\uac8c \ub098\ub220 \uc11c\ubc84\ub97c \ud560\ub2f9\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub54c \uac01 \ud574\uc2dc\ub294 \uc2dc\uacc4 \ubc29\ud5a5\uc73c\ub85c \uac00\uc7a5 \uac00\uae4c\uc774 \uc788\ub294 \ub178\ub4dc\uc5d0 \ud560\ub2f9\ub41c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub54c \uc0c8\ub85c\uc6b4 \ub178\ub4dc\uac00 \ucd94\uac00\ub418\uac70\ub098 \uc0ad\uc81c\ub418\uba74 \ubaa8\ub4e0 key\uac00 \uc544\ub2cc \uc77c\ubd80\ub9cc \uc7ac\ubc30\uce58 \ub418\uc5b4 \ub300\uaddc\ubaa8 \uce90\uc2dc \ubbf8\uc2a4\ub97c \ub9c9\uc744 \uc218 \uc788\ub2e4.")),(0,i.kt)("h2",{id:"2\uac00\uc9c0-\ubb38\uc81c\uc810"},"2\uac00\uc9c0 \ubb38\uc81c\uc810"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud30c\ud2f0\uc158 \ud06c\uae30\ub97c \uade0\ub4f1\ud558\uac8c \uc720\uc9c0\ud558\ub294 \uac8c \ubd88\uac00\ub2a5\ud558\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud0a4\uc758 \uade0\ub4f1 \ubd84\ud3ec\ub97c \ub2ec\uc131\ud558\uae30\uac00 \uc5b4\ub835\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"\uc774 \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \uac00\uc0c1 \ub178\ub4dc \uae30\ubc95\uc744 \uc0ac\uc6a9\ud55c\ub2e4.\n\uc2dc")),(0,i.kt)("h2",{id:"\uac00\uc0c1-\ub178\ub4dc-\uae30\ubc95"},"\uac00\uc0c1 \ub178\ub4dc \uae30\ubc95"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual_node.png",src:r(3927).Z,width:"463",height:"438"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uadf8\ub9bc\uc744 \ubcf4\uba74 \uc2e4\uc81c\ub85c\ub294 4\uac1c\uc758 \ub178\ub4dc\ub9cc \uc874\uc7ac\ud558\uc9c0\ub9cc 1\uac1c\uc758 \ub178\ub4dc\ub294 2\uac1c\uc758 \ucd94\uac00\uc801\uc778 \uac00\uc0c1 \ub178\ub4dc\ub97c \ub46c \ud574\uc2dc \ub9c1 \uc704 \uacf3\uacf3\uc5d0 \ubd84\ud3ec\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ucc98\ub7fc \uac00\uc0c1\uc758 \ub178\ub4dc \uac1c\uc218\ub97c \ub298\ub9ac\uba74 \ud30c\ud2f0\uc158 \ud06c\uae30\ub97c \uade0\ub4f1\ud558\uac8c \uc720\uc9c0\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud0a4\uc758 \ubd84\ud3ec \ub610\ud55c \uade0\ub4f1\ud574\uc9c4\ub2e4. (100 ~ 200\uac1c\uc758 \uac00\uc0c1 \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud588\uc744 \uacbd\uc6b0 \ud45c\uc900 \ud3b8\ucc28 \uac12\uc740 \ud3c9\uade0\uc758 5% ~ 10%)")))}p.isMDXComponent=!0},2452:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/hash_ring-9775b46b25abb227835ccc57fce5189a.png"},3927:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/virtual_node-7cc1782186ba2c0c94d6e721cdf75ddb.png"}}]);