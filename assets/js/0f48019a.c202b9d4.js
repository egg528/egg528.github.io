"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[6294],{1050:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var i=r(4848),s=r(8453);const t={title:"prometheus",sidebar_position:1,tag:["monitoring","prometheus"]},l=void 0,o={id:"web/monitoring/metrics/prometheus/prometheus",title:"prometheus",description:"Prometheus\ub780?",source:"@site/docs/resource/web/monitoring/metrics/prometheus/prometheus.md",sourceDirName:"web/monitoring/metrics/prometheus",slug:"/web/monitoring/metrics/prometheus/",permalink:"/resource/web/monitoring/metrics/prometheus/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"prometheus",sidebar_position:1,tag:["monitoring","prometheus"]},sidebar:"tutorialSidebar",previous:{title:"SLF4J \uc774\ud574\ud558\uae30",permalink:"/resource/web/monitoring/logging/slf4j"},next:{title:"devops",permalink:"/resource/category/devops"}},c={},h=[{value:"Prometheus\ub780?",id:"prometheus\ub780",level:2},{value:"Prometheus \uc544\ud0a4\ud14d\ucc98",id:"prometheus-\uc544\ud0a4\ud14d\ucc98",level:2},{value:"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)",id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"prometheus\ub780",children:"Prometheus\ub780?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc2dc\uacc4\uc5f4 DB\ub97c \ucc44\ud0dd\ud558\uace0 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"Service Discovery \uae30\ub2a5\uc744 \ud1b5\ud574 \uc790\ub3d9 \ubaa8\ub2c8\ud130\ub9c1\uc774 \uac00\ub2a5\ud558\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"PromQL\uc774\ub77c\ub294 \uc804\uc6a9 \ucffc\ub9ac \uc5b8\uc5b4\ub97c \uc0ac\uc6a9\ud574 \uac04\ub2e8\ud558\uace0 \uc720\uc5f0\ud55c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"Exporter\ub97c \ud1b5\ud574 \uc11c\ubc84, \uc11c\ube44\uc2a4\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prometheus-\uc544\ud0a4\ud14d\ucc98",children:"Prometheus \uc544\ud0a4\ud14d\ucc98"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"architecture.png",src:r(6579).A+"",width:"1194",height:"636"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uad6c\uc131","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Prometheus Server(Prometheus \ubcf8\uccb4)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Meterics\uc744 \uc218\uc9d1\ud558\uac70\ub098"}),"\n",(0,i.jsx)(n.li,{children:"\uc815\uae30\uc801\uc73c\ub85c \ucffc\ub9ac\ub97c \uc2e4\ud589\ud574 \uacbd\uace0 \uc5ec\ubd80\ub97c \ud655\uc778\ud55c\ub2e4"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Service Discovery","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub2c8\ud130\ub9c1\ub418\ub294 \uc815\ubcf4\ub97c \uc790\ub3d9\uc73c\ub85c \ubc1b\uc544\uc624\ub294 \uad6c\uc870"}),"\n",(0,i.jsx)(n.li,{children:"API\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ud638\ucd9c\ud558\uac70\ub098 \uc778\uc2a4\ud134\uc2a4 \uc815\ubcf4\ub97c \uc8fc\uae30\uc801\uc73c\ub85c \ubc1b\uc544\uc634"}),"\n",(0,i.jsx)(n.li,{children:"\ub355\ubd84\uc5d0 Prometheus \ubcf8\uccb4\uac00 \uac10\uc2dc \ub300\uc0c1\uc744 \uc124\uc815\ud558\ub294 \ubd80\ubd84\uc744 \uc2e0\uacbd\uc4f0\uc9c0 \uc54a\uc544\ub3c4 \ub428"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Exporter\ub77c\ub294 \uac10\uc2dc \uc5d0\uc774\uc804\ud2b8","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uc5d0\uc11c Metrics\ub97c \uc218\uc9d1\ud558\uc5ec Prometheus \ubcf8\uccb4\uc5d0 \uacf5\uac1c\ud55c\ub2e4"}),"\n",(0,i.jsx)(n.li,{children:"\ubaa8\ub2c8\ud130\ub9c1 \ub300\uc0c1\uacfc Prometheus \uc0ac\uc774\uc5d0\uc11c \uc815\ubcf4\ub97c \uac00\uacf5\ud558\ub294 \uc5ed\ud560"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uacbd\uace0\uc758 \uae30\ub2a5\uc744 \uc7a1\ub294 Alert(\uacbd\ubcf4)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc5ec\ub7ec Prometheus Server\uac00 \ud558\ub098\uc758 AlertManager\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uadf8\ub9ac\uace0 \ucffc\ub9ac\uc758 \uc5b8\uc5b4\uc778 PromQL","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prometheus Query Language"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uc2dc\uac01\ud654 \uae30\ub2a5\uc778 Visualization","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prometheus Web UI"}),"\n",(0,i.jsx)(n.li,{children:"Grafana"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"observability\ub780-\uae00\uc4f4\uc774\uac00-\uc0dd\uac01\ud558\ub294-observability\ub780",children:"Observability\ub780? (\uae00\uc4f4\uc774\uac00 \uc0dd\uac01\ud558\ub294 Observability\ub780)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Micro \uc11c\ube44\uc2a4\uac00 \ub300\uc138\ub85c \ud558\ub098\uc758 \uae30\ub2a5\uc744 \uc704\ud574 \uc5ec\ub7ec \uc11c\ubc84\uac00 \ub3d9\uc791\ud558\uac8c \ub418\uc5c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub7ec\ud55c \ubcc0\ud654\ub294 \uc7a5\uc560\uac00 \ubc1c\uc0dd\ud588\uc744 \ub54c \uc6d0\uc778\uc744 \ud2b9\uc815\ud558\uae30 \uc5b4\ub835\uac8c \ub9cc\ub4e4\uc5c8\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ubcf5\uc7a1\ud558\uac8c \uc5bd\ud600\uc788\ub294 \uc11c\ubc84\ub4e4\uc758 \uad00\uacc4\ub97c \ud55c \ub208\uc5d0 \ud30c\uc545\ud560 \uc218 \uc788\ub3c4\ub85d \ub9cc\ub4e4\uc790\ub294 \uac83\uc774 Observability\uc774\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uc774\ub54c Prometheus\ub294 Observability\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 Tool\uc774\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:["Service Discovery\ub294 Kubernetes \ud658\uacbd\uc5d0\uc11c Observability\ub97c \ub2ec\uc131\ud558\ub294\ub370\uc5d0 \ud070 \uc5ed\ud560\uc744 \ud55c\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc720\ub3d9\uc801\uc73c\ub85c \ubcc0\ud654\ud558\ub294 \uc11c\ubc84\ub4e4\uc744 \uc790\ub3d9\uc801\uc73c\ub85c \uac10\uc2dc \ub300\uc0c1\uc5d0 \ub123\uc5c8\ub2e4\uac00 \ube7c\uc8fc\uae30 \ub54c\ubb38"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"telemetry.png",src:r(8185).A+"",width:"1182",height:"612"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Observability\ub97c \uc704\ud574\uc11c\ub294 \uc704 3\uac00\uc9c0\ub97c \ubaa8\ub450 \ub9cc\uc871\uc2dc\ucf1c\uc57c \ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.devkuma.com/docs/prometheus/overview/",children:"Prometheus\uc758 \ud2b9\uc9d5\uacfc \uc544\ud0a4\ud14d\ucc98"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.devkuma.com/docs/prometheus/cncf-observability/",children:"Prometheus\uc640 CNCF, Observability"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.devkuma.com/docs/prometheus/docker-compose-install/",children:"Prometheus + Grafana + Docker Compose \uc124\uce58"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6579:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/architecture-f122a270c39fe1ab30d880233086f720.png"},8185:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/telemetry-3d460f85c2e5b60a975804a5c5a52fc6.png"},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var i=r(6540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);