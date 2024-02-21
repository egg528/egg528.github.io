"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3916],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),m=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=m(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(r),b=n,k=p["".concat(u,".").concat(b)]||p[b]||c[b]||i;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=b;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=r[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},2449:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var a=r(7462),n=(r(7294),r(3905));const i={title:"prometheus",sidebar_position:1,tag:["monitoring","prometheus"]},l=void 0,o={unversionedId:"web/monitoring/metrics/prometheus/prometheus",id:"web/monitoring/metrics/prometheus/prometheus",title:"prometheus",description:"Prometheus\ub780?",source:"@site/docs/resource/web/monitoring/metrics/prometheus/prometheus.md",sourceDirName:"web/monitoring/metrics/prometheus",slug:"/web/monitoring/metrics/prometheus/",permalink:"/resource/web/monitoring/metrics/prometheus/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"prometheus",sidebar_position:1,tag:["monitoring","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"SLF4J \uc774\ud574\ud558\uae30",permalink:"/resource/web/monitoring/logging/slf4j"},next:{title:"devops",permalink:"/resource/category/devops"}},u={},m=[{value:"Prometheus\ub780?",id:"prometheus\ub780",level:2},{value:"Prometheus \uc544\ud0a4\ud14d\ucc98",id:"prometheus-\uc544\ud0a4\ud14d\ucc98",level:2},{value:"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)",id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780",level:2},{value:"Reference",id:"reference",level:2}],s={toc:m},p="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"prometheus\ub780"},"Prometheus\ub780?"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uacc4\uc5f4 DB\ub97c \ucc44\ud0dd\ud558\uace0 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Service Discovery \uae30\ub2a5\uc744 \ud1b5\ud574 \uc790\ub3d9 \ubaa8\ub2c8\ud130\ub9c1\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"PromQL\uc774\ub77c\ub294 \uc804\uc6a9 \ucffc\ub9ac \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud574 \uac04\ub2e8\ud558\uace0 \uc720\uc5f0\ud55c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Exporter\ub97c \ud1b5\ud574 \uc11c\ubc84, \uc11c\ube44\uc2a4\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\ub2e4.")),(0,n.kt)("h2",{id:"prometheus-\uc544\ud0a4\ud14d\ucc98"},"Prometheus \uc544\ud0a4\ud14d\ucc98"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"architecture.png",src:r(4572).Z,width:"1194",height:"636"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\uad6c\uc131",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prometheus Server(Prometheus \ubcf8\uccb4)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Meterics\uc744 \uc218\uc9d1\ud558\uac70\ub098"),(0,n.kt)("li",{parentName:"ul"},"\uc815\uae30\uc801\uc73c\ub85c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud574 \uacbd\uace0 \uc5ec\ubd80\ub97c \ud655\uc778\ud55c\ub2e4"))),(0,n.kt)("li",{parentName:"ul"},"Service Discovery",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1\ub418\ub294 \uc815\ubcf4\ub97c \uc790\ub3d9\uc73c\ub85c \ubc1b\uc544\uc624\ub294 \uad6c\uc870"),(0,n.kt)("li",{parentName:"ul"},"API\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uac70\ub098 \uc778\uc2a4\ud134\uc2a4 \uc815\ubcf4\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ubc1b\uc544\uc634"),(0,n.kt)("li",{parentName:"ul"},"\ub355\ubd84\uc5d0 Prometheus \ubcf8\uccb4\uac00 \uac10\uc2dc \ub300\uc0c1\uc744 \uc124\uc815\ud558\ub294 \ubd80\ubd84\uc744 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub428 "))),(0,n.kt)("li",{parentName:"ul"},"Exporter\ub77c\ub294 \uac10\uc2dc \uc5d0\uc774\uc804\ud2b8",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Metrics\ub97c \uc218\uc9d1\ud558\uc5ec Prometheus \ubcf8\uccb4\uc5d0 \uacf5\uac1c\ud55c\ub2e4"),(0,n.kt)("li",{parentName:"ul"},"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uacfc Prometheus \uc0ac\uc774\uc5d0\uc11c \uc815\ubcf4\ub97c \uac00\uacf5\ud558\ub294 \uc5ed\ud560"))),(0,n.kt)("li",{parentName:"ul"},"\uacbd\uace0\uc758 \uae30\ub2a5\uc744 \uc7a1\ub294 Alert(\uacbd\ubcf4)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec Prometheus Server\uac00 \ud558\ub098\uc758 AlertManager\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"))),(0,n.kt)("li",{parentName:"ul"},"\uadf8\ub9ac\uace0 \ucffc\ub9ac\uc758 \uc5b8\uc5b4\uc778 PromQL",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prometheus Query Language"))),(0,n.kt)("li",{parentName:"ul"},"\uc2dc\uac01\ud654 \uae30\ub2a5\uc778 Visualization",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Prometheus Web UI"),(0,n.kt)("li",{parentName:"ul"},"Grafana")))))),(0,n.kt)("h2",{id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780"},"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Micro \uc11c\ube44\uc2a4\uac00 \ub300\uc138\ub85c \ud558\ub098\uc758 \uae30\ub2a5\uc744 \uc704\ud574 \uc5ec\ub7ec \uc11c\ubc84\uac00 \ub3d9\uc791\ud558\uac8c \ub418\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \ubcc0\ud654\ub294 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc6d0\uc778\uc744 \ud2b9\uc815\ud558\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\ubcf5\uc7a1\ud558\uac8c \uc5bd\ud600\uc788\ub294 \uc11c\ubc84\ub4e4\uc758 \uad00\uacc4\ub97c \ud55c \ub208\uc5d0 \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc790\ub294 \uac83\uc774 Observability\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"\uc774\ub54c Prometheus\ub294 Observability\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 Tool\uc774\ub2e4."),(0,n.kt)("li",{parentName:"ul"},"Service Discovery\ub294 Kubernetes \ud658\uacbd\uc5d0\uc11c Observability\ub97c \ub2ec\uc131\ud558\ub294\ub370\uc5d0 \ud070 \uc5ed\ud560\uc744 \ud55c\ub2e4.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\uc720\ub3d9\uc801\uc73c\ub85c \ubcc0\ud654\ud558\ub294 \uc11c\ubc84\ub4e4\uc744 \uc790\ub3d9\uc801\uc73c\ub85c \uac10\uc2dc \ub300\uc0c1\uc5d0 \ub123\uc5c8\ub2e4\uac00 \ube7c\uc8fc\uae30 \ub54c\ubb38")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"telemetry.png",src:r(4594).Z,width:"1182",height:"612"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Observability\ub97c \uc704\ud574\uc11c\ub294 \uc704 3\uac00\uc9c0\ub97c \ubaa8\ub450 \ub9cc\uc871\uc2dc\ucf1c\uc57c \ud55c\ub2e4.")),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/overview/"},"Prometheus\uc758 \ud2b9\uc9d5\uacfc \uc544\ud0a4\ud14d\ucc98")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/cncf-observability/"},"Prometheus\uc640 CNCF, Observability")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.devkuma.com/docs/prometheus/docker-compose-install/"},"Prometheus + Grafana + Docker Compose \uc124\uce58"))))}c.isMDXComponent=!0},4572:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture-f122a270c39fe1ab30d880233086f720.png"},4594:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/telemetry-3d460f85c2e5b60a975804a5c5a52fc6.png"}}]);