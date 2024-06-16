"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[5166],{7770:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var l=i(4848),r=i(8453);const t={title:"Gradle \uc758\uc874\uc131 \uc635\uc158",tag:["Gradle","Dependency"]},s=void 0,a={id:"web/backend/gradle/gradle-dependency-option",title:"Gradle \uc758\uc874\uc131 \uc635\uc158",description:"Dependency Configuration",source:"@site/docs/resource/web/backend/gradle/gradle-dependency-option.md",sourceDirName:"web/backend/gradle",slug:"/web/backend/gradle/gradle-dependency-option",permalink:"/resource/web/backend/gradle/gradle-dependency-option",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Gradle \uc758\uc874\uc131 \uc635\uc158",tag:["Gradle","Dependency"]},sidebar:"tutorialSidebar",previous:{title:"\ub124\uc774\ubc84 \ud30c\uc774\ub0b8\uc15c - \ud504\ub85c\uc81d\ud2b8\uc5d0 \uc0c8\ub85c\uc6b4 \uc544\ud0a4\ud14d\ucc98 \uc801\uc6a9\ud558\uae30",permalink:"/resource/web/backend/architecture/naver-financial-clean-architecture"},next:{title:"Spring Data JPA\uc5d0\uc11c GroupBy \ucc98\ub9ac\ud558\uae30",permalink:"/resource/web/backend/jpa/groupby"}},c={},d=[{value:"Dependency Configuration",id:"dependency-configuration",level:2},{value:"api vs implementation",id:"api-vs-implementation",level:2},{value:"Reference",id:"reference",level:2}];function o(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"dependency-configuration",children:"Dependency Configuration"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Dependency-Configuration.png",src:i(9901).A+"",width:"1656",height:"578"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ucd08\ub85d\uc0c9\uc740 \uc0ac\uc6a9\uc790\uac00 \uc758\uc874\uc131 \uc120\uc5b8\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ubd84\ud64d\uc0c9\uc740 \uad6c\uc131 \uc694\uc18c\uac00 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucef4\ud30c\uc77c\ud558\uac70\ub098 \uc2e4\ud589\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\ud30c\ub780\uc0c9\uc740 \uad6c\uc131 \uc694\uc18c \uc790\uccb4 \uc0ac\uc6a9\uc744 \uc704\ud574 \uad6c\uc131 \uc694\uc18c \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"\uc694\uc18c\ub4e4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"apiElements(\ubd84\ud64d): \ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \ucef4\ud30c\uc77c\ud558\ub294\ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc694\uc18c\ub97c \uac80\uc0c9\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"runtimeElements(\ubd84\ud64d): \ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc2e4\ud589\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc694\uc18c\ub97c \uac80\uc0c9\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"compileClasspath(\ud30c\ub791): \ucef4\ud30c\uc77c \uc2dc\uc810\uc5d0 \uc0ac\uc6a9\ud560 classpath"}),"\n",(0,l.jsx)(n.li,{children:"runtimeClasspath(\ud30c\ub791): \ub7f0\ud0c0\uc784 \uc2dc\uc810\uc5d0 \uc0ac\uc6a9\ud560 classpath"}),"\n",(0,l.jsx)(n.li,{children:"api: \ucef4\ud30c\uc77c, \ub7f0\ud0c0\uc784 \uc2dc\uc810\uc5d0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc758\uc874\uc131\uc744 \ub178\ucd9c\ud55c\ub2e4. \uc758\uc870 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc218\uc815\ub418\uba74 \ud574\ub2f9 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub97c \uc758\uc874\ud558\ub294 \ubaa8\ub4e0 \ubaa8\ub4c8 \uc7ac\ube4c\ub4dc."}),"\n",(0,l.jsx)(n.li,{children:"implementation: \ub0b4\ubd80\uc801\uc73c\ub85c\ub9cc \uc0ac\uc6a9\ub418\uace0 \uc0ac\uc6a9\uc790\uc5d0\uac8c \uc758\uc874\uc131 \ub178\ucd9c X. \ub7f0\ud0c0\uc784\uc5d0\ub294 \ub178\ucd9c\ub428. \uc758\uc874 \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc218\uc815\ub418\uba74 \ubcf8 \ubaa8\ub4c8\uae4c\uc9c0\ub9cc \uc7ac\ube4c\ub4dc."}),"\n",(0,l.jsx)(n.li,{children:"compileOnly: \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0\ub9cc \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac. \ube4c\ub4dc \uacb0\uacfc\ubb3c\uc5d0\ub294 \ud3ec\ud568\ud558\uc9c0 \uc54a\ub294\ub2e4."}),"\n",(0,l.jsx)(n.li,{children:"compileOnlyApi: \ucef4\ud30c\uc77c \ud0c0\uc784\uc5d0 \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac. CompileOnly\uc640 \ub3d9\uc77c\ud558\uac8c \ucef4\ud30c\uc77c \uc2dc\uc5d0\ub9cc \ube4c\ub4dc\ud558\uace0 \uacb0\uacfc\ubb3c\uc5d0\uc11c\ub294 \uc81c\uc678"}),"\n",(0,l.jsx)(n.li,{children:"runtimeOnly: \ub7f0\ud0c0\uc784 \uc2dc\uc810\uc5d0\ub9cc \ud544\uc694\ud55c \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\n",(0,l.jsx)(n.li,{children:"annotationProcessor: annotation processor\ub97c \uba85\uc2dc\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ud568"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"api-vs-implementation",children:"api vs implementation"}),"\n",(0,l.jsx)(n.p,{children:"api: \uc758\uc874 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc218\uc815\uc2dc \ud574\ub2f9 \ubaa8\ub4c8\uc744 \uc758\uc874\ud558\uace0 \uc788\ub294 \ubaa8\ub4c8\ub4e4 \ub610\ud55c \uc7ac\ube4c\ub4dc"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"A(api) <- B <- C \uc77c \ub54c, C \uc5d0\uc11c A \ub97c \uc811\uadfc\ud560 \uc218 \uc788\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"A \uc218\uc815\uc2dc B \uc640 C \ubaa8\ub450 \uc7ac\ube4c\ub4dc\nimplementaion: \uc758\uc874 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc218\uc815\uc2dc \ubcf8 \ubaa8\ub4c8\uae4c\uc9c0\ub9cc \uc7ac\ube4c\ub4dc"}),"\n",(0,l.jsx)(n.li,{children:"A(implementation) <- B <- C \uc77c \ub54c, C \uc5d0\uc11c A \ub97c \uc811\uadfc\ud560 \uc218 \uc5c6\uc74c"}),"\n",(0,l.jsx)(n.li,{children:"A \uc218\uc815\uc2dc B \uae4c\uc9c0 \uc7ac\ube4c\ub4dc"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://twinparadox.tistory.com/630",children:"Gradle\uc758 \ub77c\uc774\ube0c\ub7ec\ub9ac \uc758\uc874\uc131 \uc635\uc158 \uc815\ub9ac"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://jongmin92.github.io/2019/05/09/Gradle/gradle-api-vs-implementation/",children:"api vs implementation"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},9901:(e,n,i)=>{i.d(n,{A:()=>l});const l=i.p+"assets/images/Dependency-Configuration-7b515995ed353d382d35e0a983a9a037.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var l=i(6540);const r={},t=l.createContext(r);function s(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);