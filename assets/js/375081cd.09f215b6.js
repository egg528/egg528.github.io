"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[131],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),h=l,k=m["".concat(u,".").concat(h)]||m[h]||c[h]||n;return r?a.createElement(k,i(i({ref:t},p),{},{components:r})):a.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7274:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(7462),l=(r(7294),r(3905));const n={title:"Prometheus",sidebar_position:1},i=void 0,o={unversionedId:"tech/prometheus/Prometheus",id:"tech/prometheus/Prometheus",title:"Prometheus",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/prometheus/Prometheus.md",sourceDirName:"tech/prometheus",slug:"/tech/prometheus/",permalink:"/docs/tech/prometheus/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/prometheus/Prometheus.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Prometheus",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uae00 & \uc601\uc0c1",permalink:"/docs/category/\uae00--\uc601\uc0c1"},next:{title:"Gradle \uc758\uc874\uc131 \uc635\uc158",permalink:"/docs/tech/etc/Gradle-\uc758\uc874\uc131-\uc635\uc158"}},u={},s=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"Prometheus\ub780?",id:"prometheus\ub780",level:3},{value:"Prometheus \uc544\ud0a4\ud14d\ucc98",id:"prometheus-\uc544\ud0a4\ud14d\ucc98",level:3},{value:"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)",id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780",level:3}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/overview/"},"Prometheus\uc758 \ud2b9\uc9d5\uacfc \uc544\ud0a4\ud14d\ucc98")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/cncf-observability/"},"Prometheus\uc640 CNCF, Observability")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/docker-compose-install/"},"Prometheus + Grafana + Docker Compose \uc124\uce58"))),(0,l.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,l.kt)("h3",{id:"prometheus\ub780"},"Prometheus\ub780?"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uacc4\uc5f4 DB\ub97c \ucc44\ud0dd\ud558\uace0 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Service Discovery \uae30\ub2a5\uc744 \ud1b5\ud574 \uc790\ub3d9 \ubaa8\ub2c8\ud130\ub9c1\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"PromQL\uc774\ub77c\ub294 \uc804\uc6a9 \ucffc\ub9ac \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud574 \uac04\ub2e8\ud558\uace0 \uc720\uc5f0\ud55c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Exporter\ub97c \ud1b5\ud574 \uc11c\ubc84, \uc11c\ube44\uc2a4\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("h3",{id:"prometheus-\uc544\ud0a4\ud14d\ucc98"},"Prometheus \uc544\ud0a4\ud14d\ucc98"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"architecture.png",src:r(7721).Z,width:"1194",height:"636"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uad6c\uc131",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prometheus Server(Prometheus \ubcf8\uccb4)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Meterics\uc744 \uc218\uc9d1\ud558\uac70\ub098"),(0,l.kt)("li",{parentName:"ul"},"\uc815\uae30\uc801\uc73c\ub85c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud574 \uacbd\uace0 \uc5ec\ubd80\ub97c \ud655\uc778\ud55c\ub2e4"))),(0,l.kt)("li",{parentName:"ul"},"Service Discovery",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1\ub418\ub294 \uc815\ubcf4\ub97c \uc790\ub3d9\uc73c\ub85c \ubc1b\uc544\uc624\ub294 \uad6c\uc870"),(0,l.kt)("li",{parentName:"ul"},"API\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uac70\ub098 \uc778\uc2a4\ud134\uc2a4 \uc815\ubcf4\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ubc1b\uc544\uc634"),(0,l.kt)("li",{parentName:"ul"},"\ub355\ubd84\uc5d0 Prometheus \ubcf8\uccb4\uac00 \uac10\uc2dc \ub300\uc0c1\uc744 \uc124\uc815\ud558\ub294 \ubd80\ubd84\uc744 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub428 "))),(0,l.kt)("li",{parentName:"ul"},"Exporter\ub77c\ub294 \uac10\uc2dc \uc5d0\uc774\uc804\ud2b8",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Metrics\ub97c \uc218\uc9d1\ud558\uc5ec Prometheus \ubcf8\uccb4\uc5d0 \uacf5\uac1c\ud55c\ub2e4"),(0,l.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uacfc Prometheus \uc0ac\uc774\uc5d0\uc11c \uc815\ubcf4\ub97c \uac00\uacf5\ud558\ub294 \uc5ed\ud560"))),(0,l.kt)("li",{parentName:"ul"},"\uacbd\uace0\uc758 \uae30\ub2a5\uc744 \uc7a1\ub294 Alert(\uacbd\ubcf4)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec Prometheus Server\uac00 \ud558\ub098\uc758 AlertManager\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"))),(0,l.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \ucffc\ub9ac\uc758 \uc5b8\uc5b4\uc778 PromQL",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prometheus Query Language"))),(0,l.kt)("li",{parentName:"ul"},"\uc2dc\uac01\ud654 \uae30\ub2a5\uc778 Visualization",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Prometheus Web UI"),(0,l.kt)("li",{parentName:"ul"},"Grafana")))))),(0,l.kt)("h3",{id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780"},"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Micro \uc11c\ube44\uc2a4\uac00 \ub300\uc138\ub85c \ud558\ub098\uc758 \uae30\ub2a5\uc744 \uc704\ud574 \uc5ec\ub7ec \uc11c\ubc84\uac00 \ub3d9\uc791\ud558\uac8c \ub418\uc5c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ubcc0\ud654\ub294 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc6d0\uc778\uc744 \ud2b9\uc815\ud558\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud558\uac8c \uc5bd\ud600\uc788\ub294 \uc11c\ubc84\ub4e4\uc758 \uad00\uacc4\ub97c \ud55c \ub208\uc5d0 \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc790\ub294 \uac83\uc774 Observability\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub54c Prometheus\ub294 Observability\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 Tool\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Service Discovery\ub294 Kubernetes \ud658\uacbd\uc5d0\uc11c Observability\ub97c \ub2ec\uc131\ud558\ub294\ub370\uc5d0 \ud070 \uc5ed\ud560\uc744 \ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc720\ub3d9\uc801\uc73c\ub85c \ubcc0\ud654\ud558\ub294 \uc11c\ubc84\ub4e4\uc744 \uc790\ub3d9\uc801\uc73c\ub85c \uac10\uc2dc \ub300\uc0c1\uc5d0 \ub123\uc5c8\ub2e4\uac00 \ube7c\uc8fc\uae30 \ub54c\ubb38")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"telemetry.png",src:r(6325).Z,width:"1182",height:"612"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Observability\ub97c \uc704\ud574\uc11c\ub294 \uc704 3\uac00\uc9c0\ub97c \ubaa8\ub450 \ub9cc\uc871\uc2dc\ucf1c\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"})))}m.isMDXComponent=!0},7721:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-f122a270c39fe1ab30d880233086f720.png"},6325:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/telemetry-3d460f85c2e5b60a975804a5c5a52fc6.png"}}]);