"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[3645],{8646:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>j,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var l=i(4848),s=i(8453);const r={title:"\ub3d9\uc2dc \uc694\uccad - \uc11c\ube14\ub9bf \uba40\ud2f0 \uc4f0\ub808\ub4dc",tag:["backend","spring","webclient"]},t=void 0,c={id:"servlet-multi-thread",title:"\ub3d9\uc2dc \uc694\uccad - \uc11c\ube14\ub9bf \uba40\ud2f0 \uc4f0\ub808\ub4dc",description:"1. \uc11c\ube14\ub9bf",source:"@site/docs/project/servlet-multi-thread.md",sourceDirName:".",slug:"/servlet-multi-thread",permalink:"/project/servlet-multi-thread",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\ub3d9\uc2dc \uc694\uccad - \uc11c\ube14\ub9bf \uba40\ud2f0 \uc4f0\ub808\ub4dc",tag:["backend","spring","webclient"]},sidebar:"tutorialSidebar",previous:{title:"02. Project Reactor - Testing",permalink:"/project/reactive-programming/9"},next:{title:"WebClient",permalink:"/project/web-client"}},d={},h=[{value:"1. \uc11c\ube14\ub9bf",id:"1-\uc11c\ube14\ub9bf",level:2},{value:"2. \uc11c\ube14\ub9bf \ucee8\ud14c\uc774\ub108",id:"2-\uc11c\ube14\ub9bf-\ucee8\ud14c\uc774\ub108",level:2},{value:"3. \ub3d9\uc2dc \uc694\uccad - Multi Thread",id:"3-\ub3d9\uc2dc-\uc694\uccad---multi-thread",level:2},{value:"\uc2e4\ubb34 \ud301",id:"\uc2e4\ubb34-\ud301",level:3},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"1-\uc11c\ube14\ub9bf",children:"1. \uc11c\ube14\ub9bf"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"server_task.jpg",src:i(6643).A+"",width:"710",height:"894"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"HTTP \uc694\uccad\uc744 \ubc1b\uc544 \uc751\ub2f5\ud558\uae30 \uc704\ud574\uc11c \uc11c\ubc84\ub294 \uc704\uc640 \uac19\uc740 \uc791\uc5c5\ub4e4\uc744 \uc218\ud589\ud574\uc57c \ud55c\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:["\uac1c\ubc1c\uc790\uac00 \ucd08\ub85d\uc0c9 \ubd80\ubd84\uc5d0\ub9cc \uc9d1\uc911\ud560 \uc218 \uc788\ub3c4\ub85d ",(0,l.jsx)(n.code,{children:"\uc11c\ube14\ub9bf"})," \uc9c0\uc6d0\ud558\ub294 WAS\uac00 \ub098\uba38\uc9c0 \ubd80\ubd84\uc744 \ucc98\ub9ac\ud574\uc90c (\uc11c\ube14\ub9bf\uc774 \ucc98\ub9ac\ub97c \ud574\uc900\ub2e4\uace0 \uc0dd\uac01\ud574\ub3c4 \ubb34\ubc29\ud560\ub4ef)"]}),"\n",(0,l.jsxs)(n.li,{children:["\uac1c\ubc1c\uc790\ub294 ",(0,l.jsx)(n.code,{children:"\uc11c\ube14\ub9bf"}),"\uc744 \ud1b5\ud574 HTTP \uc2a4\ud399\uc744 \ub9e4\uc6b0 \ud3b8\ub9ac\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub41c\ub2e4."]}),"\n",(0,l.jsxs)(n.li,{children:["\ub3d9\uc791 \uc21c\uc11c","\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"WAS\ub294 Request, Response \uac1d\uccb4\ub97c \ub9cc\ub4e4\uc5b4\uc11c \uc11c\ube14\ub9bf \uac1d\uccb4 \ud638\ucd9c"}),"\n",(0,l.jsx)(n.li,{children:"\uac1c\ubc1c\uc790\ub294 Request \uac1d\uccb4\uc5d0\uc11c \uc815\ubcf4 \uc870\ud68c"}),"\n",(0,l.jsx)(n.li,{children:"Response \uac1d\uccb4\uc5d0 HTTP \uc751\ub2f5 \uc815\ubcf4 \uc785\ub825"}),"\n",(0,l.jsx)(n.li,{children:"WAS\ub294 Response \uac1d\uccb4\uc5d0 \ub2f4\uae34 \ub0b4\uc6a9\uc73c\ub85c HTTP \uc751\ub2f5 \uc815\ubcf4 \uc0dd\uc131"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"2-\uc11c\ube14\ub9bf-\ucee8\ud14c\uc774\ub108",children:"2. \uc11c\ube14\ub9bf \ucee8\ud14c\uc774\ub108"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc11c\ube14\ub9bf\uc744 \uc9c0\uc6d0\ud558\ub294 WAS\ub97c \uc11c\ube14\ub9bf \ucee8\ud14c\uc774\ub108\ub77c\uace0 \ubd80\ub978\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\ube14\ub9bf \ucee8\ud14c\uc774\ub108\ub294 \uc11c\ube14\ub9bf \uac1d\uccb4\ub97c \uc0dd\uc131, \ucd08\uae30\ud654, \ud638\ucd9c, \uad00\ub9ac\ud55c\ub2e4. (\uc0dd\uba85\uc8fc\uae30 \uad00\ub9ac)"}),"\n",(0,l.jsxs)(n.li,{children:["\uc11c\ube14\ub9bf \uac1d\uccb4\ub294 \uc2f1\uae00\ud1a4\uc73c\ub85c \uad00\ub9ac\ub428","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uacf5\uc720 \ubcc0\uc218 \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\uac00 \ud544\uc694\ud568"}),"\n",(0,l.jsx)(n.li,{children:"\uc11c\ube14\ub9bf \ucee8\ud14c\uc774\ub108 \uc885\ub8cc\uc2dc \ud568\uaed8 \uc885\ub8cc"}),"\n",(0,l.jsx)(n.li,{children:"\ub2f9\uc5f0\ud558\uc9c0\ub9cc.. HTTP Request/Response\ub294 \uc694\uccad\ub9c8\ub2e4 \uc0dd\uc131\ub428"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.li,{children:"JSP\ub3c4 \uc11c\ube14\ub9bf\uc73c\ub85c \ubcc0\ud658 \ub418\uc5b4\uc11c \uc0ac\uc6a9"}),"\n",(0,l.jsx)(n.li,{children:"\ub3d9\uc2dc \uc694\uccad\uc744 \uc704\ud55c \uba40\ud2f0 \uc4f0\ub808\ub4dc \ucc98\ub9ac \uc9c0\uc6d0"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"3-\ub3d9\uc2dc-\uc694\uccad---multi-thread",children:"3. \ub3d9\uc2dc \uc694\uccad - Multi Thread"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"multi.jpg",src:i(883).A+"",width:"2218",height:"1034"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ubc14\ub85c Thread\uac00 \uc11c\ube14\ub9bf \uac1d\uccb4\ub97c \ud638\ucd9c\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"Thread"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ucf54\ub4dc\ub97c \ud558\ub098\ud558\ub098 \uc21c\ucc28\uc801\uc73c\ub85c \uc2e4\ud589\ud558\ub294 \uac83\uc740 Thread"}),"\n",(0,l.jsx)(n.li,{children:"Thread\ub294 \ud55c\ubc88\uc5d0 \ud558\ub098\uc758 \ucf54\ub4dc \ub77c\uc778\ub9cc \uc218\ud589"}),"\n",(0,l.jsx)(n.li,{children:"\ub3d9\uc2dc \ucc98\ub9ac\uac00 \ud544\uc694\ud558\uba74 Thread \ucd94\uac00 \uc0dd\uc131 \ud544\uc694"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"multi_2.jpg",src:i(3576).A+"",width:"2402",height:"1196"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\uc694\uccad\uc774 \uc624\uba74 Thread\ub97c \ud560\ub2f9 \ubc1b\uc544\uc11c \uc11c\ube14\ub9bf\uc744 \ud638\ucd9c\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub54c\ubb38\uc5d0 WAS\ub294 \ub300\ubd80\ubd84 Thread\ub97c \ubbf8\ub9ac \uc0dd\uc131\ud574 Pool\uc744 \ub9cc\ub4e4\uc5b4\ub460."}),"\n",(0,l.jsxs)(n.li,{children:["Pool \ub0b4\uc5d0 Thread \uc218\ubcf4\ub2e4 \ub354 \ub9ce\uc740 \uc694\uccad\uc774 \uc62c \uacbd\uc6b0 \ub300\uae30 \ub610\ub294 \uac70\uc808\ub41c\ub2e4.","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ubaa8\ub450 \uc124\uc815\uc73c\ub85c \uc218\ub97c \uc870\uc808\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\uc2e4\ubb34-\ud301",children:"\uc2e4\ubb34 \ud301"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"WAS\uc758 \uc8fc\uc694 \ud29c\ub2dd \ud3ec\uc778\ud2b8\ub294 MAX THREAD \uc218\uc774\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub108\ubb34 \ub0ae\uc73c\uba74 \uc11c\ubc84 \ub9ac\uc18c\uc2a4\ub294 \uc5ec\uc720\ub86d\uc9c0\ub9cc, \uc751\ub2f5 \uc9c0\uc5f0\uc774 \uae08\ubc29 \uc0dd\uae34\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\ub108\ubb34 \ub192\uc73c\uba74 \uc11c\ubc84 \ub9ac\uc18c\uc2a4 \uc784\uacc4\uc810 \ucd08\uacfc -> \uc11c\ubc84 \ub2e4\uc6b4... (\ubb34\uc12d\uad70)"}),"\n",(0,l.jsxs)(n.li,{children:["\uc801\uc815 \uc22b\uc790\ub294 \uc5b4\ub5bb\uac8c \ucc3e\uc9c0?","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\ub85c\uc9c1\uc758 \ubcf5\uc7a1\ub3c4, CPU, \uba54\ubaa8\ub9ac, IO \ub9ac\uc18c\uc2a4 \uc0c1\ud669\uc5d0 \ub530\ub77c \ub2e4\ub974\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"\uc131\ub2a5 \ud14c\uc2a4\ud2b8\ub85c \uccb4\ud06c\ud574\ubcfc \uac83"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://songkg7.github.io/posts/Spring-MVC-Traffic-Testing/",children:"1\ub300\uc758 \uc11c\ubc84 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 \ucd5c\ub300 \uba87 \uac1c\uc758 \ub3d9\uc2dc \uc694\uccad\uc744 \uac10\ub2f9\ud560 \uc218 \uc788\uc744\uae4c?"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://www.inflearn.com/course/%EC%8A%A4%ED%94%84%EB%A7%81-mvc-1/",children:"\uc2a4\ud504\ub9c1 MVC 1\ud3b8 - \ubc31\uc5d4\ub4dc \uc6f9 \uac1c\ubc1c \ud575\uc2ec \uae30\uc220"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},883:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/multi-a516044209ca3ebadf8e3ef1c46ec55a.jpg"},3576:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/multi_2-4657de472eb23e8946f40436aa9a521d.jpg"},6643:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/server_task-883f47fd524cc5feb0a11be3453332c7.jpg"},8453:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>c});var l=i(6540);const s={},r=l.createContext(s);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);