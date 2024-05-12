"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[2183],{4005:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=i(4848),l=i(8453);const t={title:"SLF4J \uc774\ud574\ud558\uae30",tag:["SLF4J","Log"]},s=void 0,o={id:"web/monitoring/logging/slf4j",title:"SLF4J \uc774\ud574\ud558\uae30",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/monitoring/logging/slf4j.md",sourceDirName:"web/monitoring/logging",slug:"/web/monitoring/logging/slf4j",permalink:"/resource/web/monitoring/logging/slf4j",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SLF4J \uc774\ud574\ud558\uae30",tag:["SLF4J","Log"]},sidebar:"tutorialSidebar",previous:{title:"react hydration error",permalink:"/resource/web/frontend/nextjs/react-hydration-error"},next:{title:"prometheus",permalink:"/resource/web/monitoring/metrics/prometheus/"}},c={},d=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2}];function h(n){const e={a:"a",h2:"h2",li:"li",p:"p",ul:"ul",...(0,l.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"\uae00-\ub9c1\ud06c",children:"\uae00 \ub9c1\ud06c"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://velog.io/@mindfulness_22/slf4j-facade-pattern-1",children:"SLF4J \uc774\ud574\ud558\uae30 1\ud0c4"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://velog.io/@mindfulness_22/slf4j-logging-2",children:"SLF4J \uc774\ud574\ud558\uae30 2\ud0c4"})}),"\n",(0,r.jsx)(e.li,{children:(0,r.jsx)(e.a,{href:"https://velog.io/@mindfulness_22/slf4j-slf4j-logback-3",children:"SLF4J \uc774\ud574\ud558\uae30 3\ud0c4"})}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\ub0b4\uc6a9-\uc815\ub9ac",children:"\ub0b4\uc6a9 \uc815\ub9ac"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"System.out.println()\uc740 \uc548 \ub418\ub098\uc694?"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\ucda9\ubd84\ud55c \uc815\ubcf4\ub97c \ub2f4\uace0 \uc788\uc9c0 \uc54a\ub2e4. (\ub85c\uadf8 \ub808\ubca8\uc774 \uc5c6\ub2e4..)"}),"\n",(0,r.jsx)(e.li,{children:"synchronized\ub97c \uc0ac\uc6a9\ud568 (Thread Block)"}),"\n",(0,r.jsx)(e.li,{children:"Logging"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"Logback\uc758 \ub85c\uadf8 \ub808\ubca8 5\ub2e8\uacc4"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Error : \uc608\uc0c1\uce58 \ubabb\ud55c \uc2ec\uac01\ud55c \ubb38\uc81c\uc77c \uacbd\uc6b0. \uc989\uc2dc \uc870\uce58\uac00 \ud544\uc694\ud55c \ub808\ubca8."}),"\n",(0,r.jsx)(e.li,{children:"Warn : \uc5d0\ub7ec\ub294 \uc544\ub2d8. \ub2f9\uc7a5\uc758 \uc11c\ube44\uc2a4 \uc6b4\uc601\uc5d0\ub294 \uc601\ud5a5\uc774 \uc5c6\uc73c\ub098, \uc8fc\uc758\uac00 \ud544\uc694."}),"\n",(0,r.jsx)(e.li,{children:"Info : \uc6b4\uc601\uc5d0 \ucc38\uace0\ud560\ub9cc\ud55c \uc0ac\ud56d."}),"\n",(0,r.jsx)(e.li,{children:"Debug : \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9. \uc77c\ubc18 \uc815\ubcf4\ub97c \uc0c1\uc138\ud558\uac8c \ub098\ud0c0\ub0bc \ub54c \uc0ac\uc6a9."}),"\n",(0,r.jsx)(e.li,{children:"Trace : \uacbd\ub85c \ucd94\uc801\uc744 \uc704\ud574 \uc0ac\uc6a9. \uac1c\ubc1c \ub2e8\uacc4\uc5d0\uc11c \uc0ac\uc6a9."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsx)(e.p,{children:"SLF4J"}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"Logging Framework\uc758 \ucd94\uc0c1\ud654 \uc5ed\ud560"}),"\n",(0,r.jsx)(e.li,{children:"\uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c\ub294 \uad6c\ud604\uccb4\uac00 \ud544\uc694\ud568"}),"\n"]}),"\n"]}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(h,{...n})}):h(n)}},8453:(n,e,i)=>{i.d(e,{R:()=>s,x:()=>o});var r=i(6540);const l={},t=r.createContext(l);function s(n){const e=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);