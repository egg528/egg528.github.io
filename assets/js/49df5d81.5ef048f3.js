"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[267],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>s});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=l.createContext({}),p=function(e){var t=l.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=p(e.components);return l.createElement(m.Provider,{value:t},e.children)},N="mdxType",o={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,m=e.parentName,k=u(e,["components","mdxType","originalType","parentName"]),N=p(a),c=r,s=N["".concat(m,".").concat(c)]||N[c]||o[c]||n;return a?l.createElement(s,i(i({ref:t},k),{},{components:a})):l.createElement(s,i({ref:t},k))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=c;var u={};for(var m in t)hasOwnProperty.call(t,m)&&(u[m]=t[m]);u.originalType=e,u[N]="string"==typeof e?e:r,i[1]=u;for(var p=2;p<n;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>o,frontMatter:()=>n,metadata:()=>u,toc:()=>p});var l=a(7462),r=(a(7294),a(3905));const n={title:"6. JPQL \uc911\uae09",sidebar_position:7},i=void 0,u={unversionedId:"jpa/seven",id:"jpa/seven",title:"6. JPQL \uc911\uae09",description:"\uacbd\ub85c \ud45c\ud604\uc2dd",source:"@site/docs/lecture/jpa/seven.md",sourceDirName:"jpa",slug:"/jpa/seven",permalink:"/lecture/jpa/seven",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"6. JPQL \uc911\uae09",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"5. JPQL",permalink:"/lecture/jpa/six"},next:{title:"1. \uc4f0\ub808\ub4dc \ub85c\uceec - ThreadLocal",permalink:"/lecture/spring-advance/one"}},m={},p=[{value:"\uacbd\ub85c \ud45c\ud604\uc2dd",id:"\uacbd\ub85c-\ud45c\ud604\uc2dd",level:2},{value:"\ud398\uce58 \uc870\uc778(fetch join)",id:"\ud398\uce58-\uc870\uc778fetch-join",level:2},{value:"\ud398\uce58 \uc870\uc778\uc758 \ud2b9\uc9d5\uacfc \ud55c\uacc4",id:"\ud398\uce58-\uc870\uc778\uc758-\ud2b9\uc9d5\uacfc-\ud55c\uacc4",level:2},{value:"\ub2e4\ud615\uc131 \ucffc\ub9ac",id:"\ub2e4\ud615\uc131-\ucffc\ub9ac",level:2},{value:"\uc5d4\ud2f0\ud2f0 \uc9c1\uc811 \uc0ac\uc6a9",id:"\uc5d4\ud2f0\ud2f0-\uc9c1\uc811-\uc0ac\uc6a9",level:2},{value:"Named \ucffc\ub9ac",id:"named-\ucffc\ub9ac",level:2},{value:"\ubc8c\ud06c \uc5f0\uc0b0",id:"\ubc8c\ud06c-\uc5f0\uc0b0",level:2}],k={toc:p},N="wrapper";function o(e){let{components:t,...a}=e;return(0,r.kt)(N,(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uacbd\ub85c-\ud45c\ud604\uc2dd"},"\uacbd\ub85c \ud45c\ud604\uc2dd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"."\uc744 \ucc0d\uc5b4 \uac1d\uccb4 \uadf8\ub798\ud504\ub97c \ud0d0\uc0c9\ud558\ub294 \uac83'),(0,r.kt)("li",{parentName:"ul"},"Select m.username From Member m \uc2dd\uc744 \uc608\uc2dc\ub85c \uc0dd\uac01\ud574\ubcf4\uc790.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"m.username\ucc98\ub7fc Entity\uc758 \uac12\uc744 \ub098\ud0c0\ub0b4\ub294 \uacbd\uc6b0 => \uc0c1\ud0dc \ud544\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"m.team\ucc98\ub7fc \uac1d\uccb4 \ub0b4 \ub2e4\ub978 Entity\ub85c \ub118\uc5b4\uac04 \uacbd\uc6b0 => \ub2e8\uc77c \uac12 \uc5f0\uad00 \ud544\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"m.orders\ucc98\ub7fc(orders\ub294 \uceec\ub809\uc158\uc774\ub77c \uac00\uc815) \uceec\ub809\uc158 \ud544\ub4dc\ub85c \ub118\uc5b4\uac04 \uacbd\uc6b0 => \uceec\ub809\uc158 \uac12 \uc5f0\uad00 \ud544\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uacbd\ub85c \ud45c\ud604\uc2dd\uc744 \uc774\uc6a9\ud558\ub294\uac00\uc5d0 \ub530\ub77c \ub0b4\ubd80 \ub3d9\uc791\uc774 \ub2ec\ub77c\uc9c4\ub2e4!"))),(0,r.kt)("li",{parentName:"ul"},"\uc6a9\uc5b4 \uc815\ub9ac",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud0d0\uc0c9 - \ubc1b\uc544\uc628 \uac12\uc758 \ub0b4\ubd80 \ud544\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\uc2dc m.team.\ub0b4\ubd80\ud544\ub4dc\ub4e4\uc774 \ub098\uc628\ub2e4\uba74 \ud0d0\uc0c9 O"))),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc \ud544\ub4dc - \ub2e8\uc21c\ud788 \uac12\uc744 \uc800\uc7a5\ud558\uae30 \uc704\ud55c \ud544\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud0d0\uc0c9\uc744 \ub530\ub85c \ud558\uc9c0 \uc54a\ub294\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uad00 \ud544\ub4dc - \uc5f0\uad00 \uad00\uacc4\ub97c \uc704\ud55c \ud544\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \uac12 \uc5f0\uad00 \ud544\ub4dc - @ManyToOne, @OneToOne \ud544\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubb35\uc2dc\uc801 \ub0b4\ubd80 \uc870\uc778\uc774 \ubc1c\uc0dd\ud558\uace0, \ud0d0\uc0c9 O"))),(0,r.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158 \uac12 \uc5f0\uad00 \ud544\ub4dc - @OneToMany, @ManyToMany \ud544\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubb35\uc2dc\uc801 \ub0b4\ubd80 \uc870\uc778\uc774 \ubc1c\uc0dd\ud558\uc9c0\ub9cc \ud0d0\uc0c9\uc740 X"),(0,r.kt)("li",{parentName:"ul"},"FROM \uc808\uc5d0\uc11c \uba85\uc2dc\uc801 \uc870\uc778\uc744 \ud1b5\ud574 \ubcc4\uce6d\uc744 \uc5bb\uc740 \uacbd\uc6b0 \ubcc4\uce6d\uc744 \ud1b5\ud574 \ud0d0\uc0c9 \uac00\ub2a5"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"\ubb35\uc2dc\uc801 \uc870\uc778\uc740 \ubc30\uc81c\ud558\ub294 \ubc29\ud5a5\uc73c\ub85c \uc791\uc131\ud560 \uac83!")," (\ubb35\uc2dc\uc801 \uc870\uc778 - \uacbd\ub85c \ud45c\ud604\uc2dd\uc5d0 \uc758\ud574 \uc790\ub3d9\uc801\uc73c\ub85c \uc801\uc6a9\ub41c JOIN)")),(0,r.kt)("h2",{id:"\ud398\uce58-\uc870\uc778fetch-join"},"\ud398\uce58 \uc870\uc778(fetch join)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JPQL\uc5d0\uc11c \uc131\ub2a5 \ucd5c\uc801\ud654\ub97c \uc704\ud574 \uc81c\uacf5\ud558\ub294 \uae30\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\uc5f0\uad00\ub41c Entity\ub098 Collection\uc744 SQL\ub85c \ud55c \ubc88\uc5d0 \ud568\uaed8 \uc870\ud68c\ud558\ub294 \uae30\ub2a5"),(0,r.kt)("li",{parentName:"ul"},"\uc608\uc2dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"select m from Member m join fetch m.team ==> select M.*",(0,r.kt)("em",{parentName:"li"},", T.")," * frrom Member M Inner Join Team T on M.Team_ID = T.ID"))),(0,r.kt)("li",{parentName:"ul"},"\ubb38\uc81c\uc810 1 (1:N\uc77c \uacbd\uc6b0)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'"Select t From Team t join fetch t.members" => getResultList \uacb0\uacfc \uac19\uc740 \ud300 \uac12\uc774 \uc5ec\ub7ff \uc788\uc744 \uc218 \uc788\ub2e4.'),(0,r.kt)("li",{parentName:"ul"},"\ub9cc\uc57d A\ud300\uc5d0 \uc120\uc218\uac00 2\uba85 \uc788\ub2e4\uace0 \uc0dd\uac01\ud574\ubcf4\uba74 JOIN\ubb38\uc744 \uc0ac\uc6a9\ud55c \uacb0\uacfc\uc5d0\ub294 Team A\uc5d0 \ub300\ud574 2\uac1c\uc758 \ub370\uc774\ud130\uac00 \uc0dd\uc131\ub420 \uac83\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 getResultList\uc5d0 Team A \uac1d\uccb4\uac00 2\uac1c \ub4e4\uc5b4\uac00\uac8c \ub41c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud574\uacb0\ucc45, distinct M\uc744 \uc0ac\uc6a9\ud558\uba74 JPA\uc5d0\uc11c \uac19\uc740 Team\uac1d\uccb4 \uc911\ubcf5\uc744 \uc5c6\uc560\uc900\ub2e4. (\uc2dd\ubcc4\uc790 \uae30\uc900)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SQL distinct\uc640\ub294 \ub2e4\ub984. SQL\uc774\ub77c\uba74 \uc704 \ucffc\ub9ac\uc5d0\uc11c\ub294 \ubaa8\ub4e0 \uceec\ub7fc\uc774 \uac19\uc544\uc57c \uc911\ubcf5  \uc81c\uac70"))))),(0,r.kt)("li",{parentName:"ul"},"\ud398\uce58 \uc870\uc778\uacfc \uc77c\ubc18 \uc870\uc778\uc758 \ucc28\uc774",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \uc870\uc778 \uc2e4\ud589\uc2dc \uc5f0\uad00\ub41c \uc5d4\ud2f0\ud2f0\ub97c \ud568\uaed8 \uc870\ud68c\ud558\uc9c0 \uc54a\uc74c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc77c\ubc18 \uc870\uc778\uc740 \uc5f0\uad00\uad00\uacc4 \uace0\ub824\ud558\uc9c0 \uc54a\ub294\ub2e4. \uc704 \uc608\uc2dc\uc758 \uacbd\uc6b0 \ud300 \uc5d4\ud2f0\ud2f0\ub9cc \uc870\ud68c\ud558\uace0 \ud68c\uc6d0 \uc5d4\ud2f0\ud2f0\ub294 \uc870\ud68c\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \ub73b."),(0,r.kt)("li",{parentName:"ul"},"\ubc18\uba74 \ud398\uce58 \uc870\uc778\uc758 \uacbd\uc6b0 \ud300, \uba64\ubc84 \ubaa8\ub450 \uc870\ud68c(\uc989\uc2dc \ub85c\ub529)"))),(0,r.kt)("li",{parentName:"ul"},"\uac1d\uccb4 \uadf8\ub798\ud504\ub97c SQL \ud55c\ubc88\uc5d0 \uc870\ud68c\ud558\ub294 \uac1c\ub150")))),(0,r.kt)("h2",{id:"\ud398\uce58-\uc870\uc778\uc758-\ud2b9\uc9d5\uacfc-\ud55c\uacc4"},"\ud398\uce58 \uc870\uc778\uc758 \ud2b9\uc9d5\uacfc \ud55c\uacc4"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud398\uce58 \uc870\uc778\uc5d0\ub294 \ubcc4\uce6d\uc744 \uc4f8 \uc218 \uc5c6\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud558\uc774\ubc84\ub124\uc774\ud2b8\uc5d0\uc11c \uac00\ub2a5\uc740 \ud558\uc9c0\ub9cc \uac00\uae09\uc801\uc774\uba74 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac8c \uc88b\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud398\uce58 \uc870\uc778\ud560 \uc5d4\ud2f0\ud2f0\uc5d0 \ubcc4\uce6d\uc744 \uc900\ub2e4\ub294 \uac74 \ud574\ub2f9 \uc5d4\ud2f0\ud2f0\uc5d0 \ub300\ud55c \uc870\uac74\uc744 \uac78 \ubaa9\uc801\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc 1:N \uad00\uacc4\uc5d0\uc11c \uc77c\ubd80\ub9cc \uac80\uc0c9\ud558\uc5ec \uc5d4\ud2f0\ud2f0\ub97c \uc0ac\uc6a9\ud558\ub294 \uac74 \uc704\ud5d8\ud560 \uc218 \uc788\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \ud300\uc5d0 5\uba85\uc758 Member\uac00 \uc788\ub294 \uc0c1\ud669\uc5d0\uc11c 3\uba85\uc5d0 \ub300\ud55c \uc815\ubcf4\uac00 \ud544\uc694\ud558\ub2e4\uba74"),(0,r.kt)("li",{parentName:"ul"},"Member 3\uba85\uc744 \uc870\ud68c\ud558\ub294 \uac83\uc774 \uc62c\ubc14\ub978 \ubc29\ud5a5\uc774\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub2e8, \uc704\ud5d8\ud55c \uc0c1\ud669\uc744 \uc798 \ud1b5\uc81c\ud558\uace0 \uc0ac\uc6a9\ud558\uba74 \uc720\uc6a9\ud55c \uacbd\uc6b0\ub3c4 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uae40\uc601\ud55c\ub2d8\uc758 \uacbd\uc6b0 fetch join\uc744 \uc5ec\ub7ec \ub2e8\uacc4\ub85c \uac00\uc838\uac00\uc57c\ud560 \ub54c\ub294 \ubcc4\uce6d\uc744 \uc0ac\uc6a9\ud558\uc2e0\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\ub458 \uc774\uc0c1\uc758 \uceec\ub809\uc158\uc740 \ud398\uce58 \uc870\uc778 \ud560 \uc218 \uc5c6\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ub370\uc774\ud130\uc758 \uc591\uc774 \uc608\uc0c1\uce58 \ubabb\ud558\uac8c \ub298\uc5b4\ub0a0 \uc218 \uc788\ub2e4..."))),(0,r.kt)("li",{parentName:"ul"},"\uceec\ub809\uc158\uc744 \ud398\uce58 \uc870\uc778\ud558\uba74 \ud398\uc774\uc9d5 API\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"1:1, N:1\uac19\uc740 \ub2e8\uc77c \uac12 \uc5f0\uace0\ub098 \ud544\ub4dc\ub4e4\uc740 \ud328\uce58 \uc870\uc778\ud574\ub3c4 \ud398\uc774\uc9d5\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc774\uc678\uc758 \uacbd\uc6b0 \ubaa8\ub4e0 \uac74\uc744 \uc870\ud68c\ud55c \ud6c4 \ud398\uc774\uc9d5\uc774 \uc9c4\ud589\ub41c\ub2e4.... \uc131\ub2a5\uc774..."),(0,r.kt)("li",{parentName:"ul"},"\uacbd\uace0 \ub85c\uadf8\ub97c \ud655\uc778\ud560 \uac83."),(0,r.kt)("li",{parentName:"ul"},"1:N \uc0c1\ud669\uc5d0\uc11c \ud398\uce58 \uc870\uc778 + \ud398\uc774\uc9d5 \uacb0\uacfc\ub97c \uc5bb\uace0 \uc2f6\ub2e4\uba74...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"BatchSize \ud65c\ud558\uba74 N\uc5d0 \ud574\ub2f9\ud558\ub294 \uc5d4\ud2f0\ud2f0\ub97c \ud55c\ubc88\uc5d0 \uba87 \uac1c\uc529 \uac00\uc838\uc62c\uc9c0 \uc815\ud560 \uc218 \uc788\ub2e4 => Lazy\ubc29\uc2dd\uc758 fetch\uc5d0\uc11c \uc0dd\uae30\ub294 \ucffc\ub9ac \uc218 \uc99d\uac00 \ub2e8\uc810\uc744 \ud574\uc18c\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c\ub4e4\uc5b4, BatchSize = 10 => \uc0c1\uc704 \uc5d4\ud2f0\ud2f0 10\uac1c\uc5d0 \ud574\ub2f9\ud558\ub294 \ud558\uc704 \uc5d4\ud2f0\ud2f0 \uc870\ud68c (SQL IN \uc808 \ud65c\uc6a9)"))))),(0,r.kt)("li",{parentName:"ul"},"\uacb0\ub860",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ud398\uce58 \uc870\uc778\uc740 \uac1d\uccb4 \uadf8\ub798\ud504\ub97c \uc720\uc9c0\ud560 \ub54c \uc0ac\uc6a9\ud558\uba74 \ud6a8\uacfc\uc801\uc774\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc989, JOIN\ud55c Entity\ub4e4\ub3c4 Entity\ub85c \ud65c\uc6a9\ud574\uc57c \ud558\ub294 \uacbd\uc6b0\ub4e4..!"))),(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud14c\uc774\ube14\uc744 JOIN\ud574\uc11c \uc5d4\ud2f0\ud2f0\uc640 \ub2e4\ub978 \ubaa8\uc591\uc758 \uacb0\uacfc\ub97c \uc6d0\ud55c\ub2e4\uba74 \uc77c\ubc18 JOIN\uc744 \uc0ac\uc6a9\ud558\uace0 \ud544\uc694\ud55c \ub370\uc774\ud130\ub4e4\ub9cc \uc870\ud68c\ud558\uc5ec DTO\ub85c \ubc18\ud658\ud558\ub294 \uac83\uc774 \ud6a8\uacfc\uc801",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Entity\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:2},(0,r.kt)("li",{parentName:"ol"},"Entity\ub97c \ubc1b\uc544\uc640 APP\uc5d0\uc11c DTO\ub85c \ubcc0\ud658\ud574 \ubc18\ud658\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("ol",{parentName:"li",start:3},(0,r.kt)("li",{parentName:"ol"},"DTO\uc5d0 \ud574\ub2f9\ud558\ub294 \ub370\uc774\ud130\ub9cc \uc870\ud68c\ud558\uc5ec \ubc18\ud658\ud55c\ub2e4.")))))))),(0,r.kt)("h2",{id:"\ub2e4\ud615\uc131-\ucffc\ub9ac"},"\ub2e4\ud615\uc131 \ucffc\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"TYPE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc870\ud68c \ub300\uc0c1\uc744 \ud2b9\uc815 \uc790\uc2dd\uc73c\ub85c \ud55c\uc815\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"type(i) IN (Book, Movie) => where i.DTYPE in ('B', 'M')"))),(0,r.kt)("li",{parentName:"ul"},"TREAT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc790\ubc14\uc758 \ud0c0\uc785 \uce90\uc2a4\ud305\uacfc \uc720\uc0ac\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\uc18d \uad6c\uc870\uc5d0\uc11c \ubd80\ubaa8 \ud0c0\uc785\uc744 \ud2b9\uc815 \uc790\uc2dd \ud0c0\uc785\uc73c\ub85c \ub2e4\ub8f0 \ub54c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"FROM, WHERE, SELECT\uc808\uc5d0\uc11c \uc0ac\uc6a9 \uac00\ub2a5")))),(0,r.kt)("h2",{id:"\uc5d4\ud2f0\ud2f0-\uc9c1\uc811-\uc0ac\uc6a9"},"\uc5d4\ud2f0\ud2f0 \uc9c1\uc811 \uc0ac\uc6a9"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\ubcf8 \ud0a4 \uac12",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JPQL\uc5d0\uc11c \uc5d4\ud2f0\ud2f0\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud558\uba74 SQL\uc5d0\uc11c \ud574\ub2f9 \uc5d4\ud2f0\ud2f0\uc758 \uae30\ubcf8 \ud0a4 \uac12\uc744 \uc0ac\uc6a9\ud55c\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc678\ub798 \ud0a4 \uac12",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ucc38\uc870 \uc5d4\ud2f0\ud2f0\uc758 \uae30\ubcf8 \ud0a4 \uac12\uc744 \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4.")))),(0,r.kt)("h2",{id:"named-\ucffc\ub9ac"},"Named \ucffc\ub9ac"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@NamedQuery\ub85c \ucffc\ub9ac\uc5d0 \uc774\ub984\uc744 \ubd80\uc5ec\ud558\uace0 createNamedQuery\uba54\uc11c\ub4dc\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc74c."),(0,r.kt)("li",{parentName:"ul"},"\uc815\uc801\uc778 \ucffc\ub9ac\ub9cc \uac00\ub2a5\ud558\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\ub529 \uc2dc\uc810\uc5d0 \ucd08\uae30\ud654 \ud6c4 \uc7ac\uc0ac\uc6a9\ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc989, \ub85c\ub529 \uc2dc\uc810\uc5d0 JPQL => SQL\ub85c \ubcc0\ud658\ub418\uc5b4 \uce90\uc2f1\ub418\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\ud560 \ub54c \ubcc0\ud658\uc5d0 \ub4dc\ub294 \ube44\uc6a9\uc774 \uc904\uc5b4\ub4e0\ub2e4."))),(0,r.kt)("li",{parentName:"ul"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ub85c\ub529 \uc2dc\uc810\uc5d0 \ucffc\ub9ac\ub97c \uac80\uc99d\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"XML\ub85c \uc815\uc758 \uac00\ub2a5, \uc6b0\uc120\uad8c \uac00\uc9c4\ub2e4.")),(0,r.kt)("h2",{id:"\ubc8c\ud06c-\uc5f0\uc0b0"},"\ubc8c\ud06c \uc5f0\uc0b0"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \uc7ac\uace0\uac00 10\uac1c \ubbf8\ub9cc\uc778 \ubaa8\ub4e0 \uc0c1\ud488\uc758 \uac00\uaca9\uc744 10% \uc0c1\uc2b9\uc2dc\ud0a4\ub824\uba74?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"JPA \ubcc0\uacbd \uac10\uc9c0 \uae30\ub2a5\uc73c\ub85c \uc2e4\ud589\ud558\ub824\uba74 \ub108\ubb34 \ub9ce\uc740 SQL\uc744 \uc2e4\ud589\ud574\uc57c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc7ac\uace0 10\uac1c \ubbf8\ub9cc\uc778 \uc0c1\ud488 \ub9ac\uc2a4\ud2b8 \uc870\ud68c"),(0,r.kt)("li",{parentName:"ul"},"\uac00\uaca9 \uc62c\ub9ac\uace0"),(0,r.kt)("li",{parentName:"ul"},"Commit => \ubcc0\uacbd \uac10\uc9c0 (\ubcc0\uacbd \ub370\uc774\ud130\uac00 100\uac74\uc77c \uacbd\uc6b0 100\ubc88\uc758 UPDATE SQL \uc2e4\ud589)"))))),(0,r.kt)("li",{parentName:"ul"},"\ubc8c\ud06c \uc5f0\uc0b0\uc740 \ucffc\ub9ac \ud55c \ubc88\uc73c\ub85c \uc5ec\ub7ec \ud14c\uc774\ube14 \ub85c\uc6b0\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uac8c \ud55c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},".excuteUpdate() \ud65c => \uacb0\uacfc\ub294 \uc601\ud5a5 \ubc1b\uc740 \uc5d4\ud2f0\ud2f0 \uc218 \ubc18\ud658"),(0,r.kt)("li",{parentName:"ul"},"UPDATE, DELETE \uc9c0\uc6d0 / INSERT (\ud558\uc774\ubc84\ub124\uc774\ud2b8 \uc9c0\uc6d0)"))),(0,r.kt)("li",{parentName:"ul"},"\uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8\ub97c \ubb34\uc2dc\ud558\uace0 DB\uc5d0 \uc9c1\uc811 \ucffc\ub9ac \ub0a0\ub9b0\ub2e4. APP/\uc601\uc18d\uc131 \ucee8\ud14c\uc774\ub108\uc640 DB\uc758 \uc0c1\ud0dc\uac00 \ub2ec\ub77c\uc9c0\uae30\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc0ac\uc6a9\ud574\uc57c \ud568.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\ubc8c\ud06c \uc5f0\uc0b0\uc744 \uba3c\uc800 \uc2e4\ud589"),(0,r.kt)("li",{parentName:"ul"},"\uc218\ud589 \ud6c4 \uc601\uc18d\uc131 \ucee8\ud14d\uc2a4\ud2b8 \ucd08\uae30\ud654 (em.clear)\uc2a4")))))}o.isMDXComponent=!0}}]);