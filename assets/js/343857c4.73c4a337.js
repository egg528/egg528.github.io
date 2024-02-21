"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7754],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,h=s["".concat(o,".").concat(m)]||s[m]||p[m]||l;return t?n.createElement(h,i(i({ref:r},d),{},{components:t})):n.createElement(h,i({ref:r},d))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var u={};for(var o in r)hasOwnProperty.call(r,o)&&(u[o]=r[o]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},717:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const l={title:"02. Project Reactor - Secheduler",sidebar_position:6,tag:["book","reactive-programming"]},i=void 0,u={unversionedId:"reactive-programming/6",id:"reactive-programming/6",title:"02. Project Reactor - Secheduler",description:"1. Reactor\uc758 Scheduler",source:"@site/docs/project/reactive-programming/6.md",sourceDirName:"reactive-programming",slug:"/reactive-programming/6",permalink:"/project/reactive-programming/6",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"02. Project Reactor - Secheduler",sidebar_position:6,tag:["book","reactive-programming"]},sidebar:"tutorialSidebar",previous:{title:"02. Project Reactor - Sinks",permalink:"/project/reactive-programming/5"},next:{title:"02. Project Reactor - Context",permalink:"/project/reactive-programming/7"}},o={},c=[{value:"1. Reactor\uc758 Scheduler",id:"1-reactor\uc758-scheduler",level:2},{value:"2. Scheduler\ub97c \uc704\ud55c \uc804\uc6a9 Operator",id:"2-scheduler\ub97c-\uc704\ud55c-\uc804\uc6a9-operator",level:2},{value:"(1) subscribeOn()",id:"1-subscribeon",level:3},{value:"(2) publishOn",id:"2-publishon",level:3},{value:"(3) parallel",id:"3-parallel",level:3},{value:"3. Scheduler \uc885\ub958",id:"3-scheduler-\uc885\ub958",level:2},{value:"(1) Schedulers.immediate()",id:"1-schedulersimmediate",level:3},{value:"(2) Schedulers.single()",id:"2-schedulerssingle",level:3},{value:"(3) Schedulers.newSingle()",id:"3-schedulersnewsingle",level:3},{value:"(4) Schedulers.boundedElastic()",id:"4-schedulersboundedelastic",level:3},{value:"(5) Schedulers.parallel()",id:"5-schedulersparallel",level:3},{value:"(6) Schedulers.fromExcutorService()",id:"6-schedulersfromexcutorservice",level:3},{value:"(7) Schedulers.newXXXX()",id:"7-schedulersnewxxxx",level:3}],d={toc:c},s="wrapper";function p(e){let{components:r,...t}=e;return(0,a.kt)(s,(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-reactor\uc758-scheduler"},"1. Reactor\uc758 Scheduler"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ube44\ub3d9\uae30 \ud504\ub85c\uadf8\ub798\ubc0d\uc744 \uc704\ud574 \uc0ac\uc6a9\ub418\ub294 \uc2a4\ub808\ub4dc\ub97c \uad00\ub9ac\ud574\uc8fc\ub294 \uc5ed\ud560"),(0,a.kt)("li",{parentName:"ul"},"\uc5b4\ub5a4 \uc2a4\ub808\ub4dc\uc5d0\uc11c \ubb34\uc5c7\uc744 \ucc98\ub9ac\ud560\uc9c0 \uc81c\uc5b4\ud55c\ub2e4.")),(0,a.kt)("h2",{id:"2-scheduler\ub97c-\uc704\ud55c-\uc804\uc6a9-operator"},"2. Scheduler\ub97c \uc704\ud55c \uc804\uc6a9 Operator"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reactor\uc5d0\uc11c Scheduler\ub294 \uc804\uc6a9 Operator\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"Operator\uc758 Parameter\ub85c \uc6d0\ud558\ub294 Scheduler\ub97c \uc804\ub2ec\ud558\uba74 \ud574\ub2f9 Sequence\uc5d0 \ub9de\ub294 \uc2a4\ub808\ub4dc\uac00 Reactor Sequence\uc5d0 \uc804\ub2ec\ub428")),(0,a.kt)("h3",{id:"1-subscribeon"},"(1) subscribeOn()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws InterruptedException {\n\n    Flux.fromArray(new Integer[] {1, 3, 5, 7})\n            .subscribeOn(Schedulers.boundedElastic()) // \uc6d0\ubcf8 Publisher\uc758 \ub3d9\uc791\uc744 \ucc98\ub9ac\ud558\uae30 \uc704\ud55c \uc2a4\ub808\ub4dc\ub97c \ud560\ub2f9.\n            .doOnNext(data -> System.out.println(Thread.currentThread() + " # doOnNext: " + data))\n            .doOnSubscribe(subscription -> System.out.println(Thread.currentThread() + " # doOnSubscribe"))\n            .subscribe(data -> System.out.println(Thread.currentThread() + " # onNext: " + data));\n\n    Thread.sleep(500L);\n}\n\n\n// Thread[main,5,main] # doOnSubscribe\n// Thread[boundedElastic-1,5,main] # doOnNext: 1\n// Thread[boundedElastic-1,5,main] # onNext: 1\n// Thread[boundedElastic-1,5,main] # doOnNext: 3\n// Thread[boundedElastic-1,5,main] # onNext: 3\n// Thread[boundedElastic-1,5,main] # doOnNext: 5\n// Thread[boundedElastic-1,5,main] # onNext: 5\n// Thread[boundedElastic-1,5,main] # doOnNext: 7\n// Thread[boundedElastic-1,5,main] # onNext: 7\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud55c \uc9c1\ud6c4 \uc2e4\ud589\ub420 \uc2a4\ub798\ub4dc\ub97c \uc9c0\uc815\ud558\ub294 Operator"),(0,a.kt)("li",{parentName:"ul"},"\uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud558\ub294 \uacfc\uc815\uc778 doOnSubscribe()\ub9cc main\uc73c\ub85c \uc2e4\ud589\ub418\uace0 \ub098\uba38\uc9c0 \uc791\uc5c5\uc740 \uc124\uc815\ud55c Scheduler\uc5d0\uc11c \uc0dd\uc131\ud55c Thread\ub85c \uc2e4\ud589\ub41c \uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"2-publishon"},"(2) publishOn"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws InterruptedException {\n\n    Flux.fromArray(new Integer[] {1, 3, 5, 7})\n            .doOnNext(data -> System.out.println(Thread.currentThread() + " # doOnNext: " + data))\n            .doOnSubscribe(subscription -> System.out.println(Thread.currentThread() + " # doOnSubscribe"))\n            .publishOn(Schedulers.boundedElastic())\n            .subscribe(data -> System.out.println(Thread.currentThread() + " # onNext: " + data));\n\n    Thread.sleep(500L);\n}\n\n// Thread[main,5,main] # doOnSubscribe\n// Thread[main,5,main] # doOnNext: 1\n// Thread[main,5,main] # doOnNext: 3\n// Thread[main,5,main] # doOnNext: 5\n// Thread[main,5,main] # doOnNext: 7\n// Thread[boundedElastic-1,5,main] # onNext: 1\n// Thread[boundedElastic-1,5,main] # onNext: 3\n// Thread[boundedElastic-1,5,main] # onNext: 5\n// Thread[boundedElastic-1,5,main] # onNext: 7\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DownStream\uc73c\ub85c Signal\uc744 \uc804\uc1a1\ud560 \ub54c \uc2e4\ud589\ub418\ub294 \uc2a4\ub808\ub4dc\ub97c \uc81c\uc5b4\ud558\ub294 \uc5ed\ud560"),(0,a.kt)("li",{parentName:"ul"},"\ub85c\uadf8\ub97c \ubcf4\uba74 7\ubc88 \ub77c\uc778\uc5d0\uc11c publishOn()\uc744 \uc0ac\uc6a9\ud588\uae30\uc5d0 subscribe()\uba54\uc11c\ub4dc\uc5d0\uc11c Downstream\uc73c\ub85c \ub370\uc774\ud130\ub97c emit\ud558\ub294 \uc2a4\ub808\ub4dc\uac00 \ubcc0\uacbd\ub41c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"3-parallel"},"(3) parallel"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) throws InterruptedException {\n\n    Flux.fromArray(new Integer[] {1, 3, 5, 7})\n            .parallel() // \ud30c\ub77c\ubbf8\ud130\ub85c \uc6d0\ud558\ub294 Thread \uac1c\uc218\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\uc74c\n            .runOn(Schedulers.parallel())\n            .subscribe(data -> System.out.println(Thread.currentThread() + " # onNext: "+data));\n\n    Thread.sleep(500L);\n}\n    \n// Thread[parallel-4,5,main] # onNext: 7\n// Thread[parallel-2,5,main] # onNext: 3\n// Thread[parallel-3,5,main] # onNext: 5\n// Thread[parallel-1,5,main] # onNext: 1\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"subscribeOn()\uacfc publishOn()\uc758 \uacbd\uc6b0 \ub3d9\uc2dc\uc131\uc744 \uac00\uc9c0\uc9c0\ub9cc, parallel()\uc758 \uacbd\uc6b0 \ubcd1\ub82c\uc131\uc744 \uac00\uc9c0\ub294 \ubb3c\ub9ac\uc801\uc778 \uc2a4\ub808\ub4dc\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub77c\uc6b4\ub4dc \ub85c\ube48 \ubc29\uc2dd\uc73c\ub85c CPU \ucf54\uc5b4 \uac1c\uc218\ub9cc\ud07c\uc758 \uc2a4\ub808\ub4dc\ub97c \ubcd1\ub82c\ub85c \uc2e4\ud589\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub85c\uadf8\ub97c \ubcf4\uba74 4\uac1c\uc758 \ub370\uc774\ud130\ub97c \ubaa8\ub450 \ub2e4\ub978 Thread\ub85c emit\ud558\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h2",{id:"3-scheduler-\uc885\ub958"},"3. Scheduler \uc885\ub958"),(0,a.kt)("h3",{id:"1-schedulersimmediate"},"(1) Schedulers.immediate()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ubcc4\ub3c4\uc758 \uc2a4\ub808\ub4dc\ub97c \ucd94\uac00 \uc0dd\uc131\ud558\uc9c0 \uc54a\uace0 \ud604\uc7ac \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\uace0\uc790 \ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc5b8\uc81c \uc0ac\uc6a9\ud560\uae4c?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uacf5\ud1b5\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 API \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ucc98\uc5d0 \ub530\ub77c Scheduler\ub97c \ub2e4\ub974\uac8c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \ub54c "),(0,a.kt)("li",{parentName:"ul"},"\uc774 Scheduler\ub97c Param\uc73c\ub85c \ub118\uaca8\uc11c \ud604\uc7ac \uc2a4\ub808\ub4dc\uc5d0\uc11c \uc791\uc5c5\uc744 \ucc98\ub9ac\ud558\ub3c4\ub85d \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.")))),(0,a.kt)("h3",{id:"2-schedulerssingle"},"(2) Schedulers.single()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc \ud558\ub098\ub9cc \uc0dd\uc131\ud574\uc11c Scheduler\uac00 \uc81c\uac70\ub418\uae30 \uc804\uae4c\uc9c0 \uc7ac\uc0ac\uc6a9"),(0,a.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \ud638\ucd9c\uc5d0\uc11c\ub3c4 \ud558\ub098\uc758 \uc2a4\ub808\ub4dc\ub97c \uc0ac\uc6a9\ud558\uae30 \ub54c\ubb38\uc5d0 \uc9c0\uc5f0 \uc2dc\uac04\uc774 \uc9e7\uc740 \uc791\uc5c5\uc5d0 \uc801\ud569\ud558\ub2e4.")),(0,a.kt)("h3",{id:"3-schedulersnewsingle"},"(3) Schedulers.newSingle()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud638\ucd9c\ub9c8\ub2e4 \uc2a4\ub808\ub4dc\ub97c \uc0dd\uc131\ud558\uc5ec \uc791\uc5c5\uc744 \ucc98\ub9ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"newSingle()\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 \ub370\ubaac \uc2a4\ub808\ub4dc\ub85c \ub3d9\uc791\ud558\uac8c \ud560\uc9c0 \uc5ec\ubd80\ub3c4 \uc124\uc815\ud574\uc918\uc57c \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub370\ubaac \uc2a4\ub808\ub4dc\ub780?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ubcf4\uc870 \uc2a4\ub808\ub4dc\ub77c\uace0\ub3c4 \ubd88\ub9ac\uc6b0\uace0, \uc8fc \uc2a4\ub808\ub4dc\uac00 \uc885\ub8cc\ub418\uba74 \uc790\ub3d9\uc73c\ub85c \uc885\ub8cc\ub418\ub294 \ud2b9\uc131\uc744 \uac00\uc9c4 \uc2a4\ub808\ub4dc")))),(0,a.kt)("h3",{id:"4-schedulersboundedelastic"},"(4) Schedulers.boundedElastic()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ExecutorService \uae30\ubc18\uc758 \uc2a4\ub808\ub4dc \ud480\uc744 \uc0dd\uc131\ud558\uc5ec \ud65c\uc6a9\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c \uc2a4\ub808\ub4dc \uc218\ub294 CPU \ucf54\uc5b4 \uc218 x 10\uac1c \ub9cc\ud07c \uc0dd\uc131\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc2a4\ub808\ub4dc \ud560\ub2f9 \ub300\uae30 Queue\ub294 100,000\uc73c\ub85c \uc124\uc815\ub418\uc5b4 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc2e4\ud589 \uc2dc\uac04\uc774 \uae34 Blocking I/O \uc791\uc5c5\uc5d0 \uc801\ud569\ud558\ub2e4.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\ub2e4\ub978 Non-Blocking \uc791\uc5c5\uc5d0 \uc601\ud5a5\uc744 \uc8fc\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0")))),(0,a.kt)("h3",{id:"5-schedulersparallel"},"(5) Schedulers.parallel()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Non-Blocking I/O\uc5d0 \ucd5c\uc801\ud68c\ub418\uc5b4 \uc788\ub294 Scheduler\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"CPU \ucf54\uc5b4 \uc218\ub9cc\ud07c\uc758 \uc2a4\ub808\ub4dc\ub97c \uc0dd\uc131\ud55c\ub2e4.")),(0,a.kt)("h3",{id:"6-schedulersfromexcutorservice"},"(6) Schedulers.fromExcutorService()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790\uac00 \uc815\uc758\ud55c ExcutorService\ub97c Scheduler\ub85c \ud65c\uc6a9\ud560 \uc218 \uc788\ub294 \ubc29\uc2dd"),(0,a.kt)("li",{parentName:"ul"},"Reactor\uc5d0\uc11c \ud574\ub2f9 \ubc29\uc2dd\uc744 \uad8c\uc7a5\ud558\uc9c0 \uc54a\uc74c")),(0,a.kt)("h3",{id:"7-schedulersnewxxxx"},"(7) Schedulers.newXXXX()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"single, boundedElastic, parallel\uc740 \ubaa8\ub450 \uc55e\uc5d0 new\uac00 \ubd99\uc740 Scheduler\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"new\uac00 \ubd99\uc9c0 \uc54a\uc740 \uacbd\uc6b0 Reactor\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \ub514\ud3f4\ud2b8 Scheduler \uc778\uc2a4\ud134\uc2a4\ub97c \uc0ac\uc6a9\ud558\uace0"),(0,a.kt)("li",{parentName:"ul"},"new\uac00 \ubd99\uc73c\uba74 \uc2a4\ub808\ub4dc \uc774\ub984, \ub514\ud3f4\ud2b8 \uc2a4\ub808\ub4dc\uc758 \uac1c\uc218, \uc2a4\ub808\ub4dc\uc758 \uc720\ud734 \uc2dc\uac04, \ub370\ubaac \uc2a4\ub808\ub4dc\ub85c\uc758 \ub3d9\uc791 \uc5ec\ubd80\ub97c \uc9c1\uc811 \uc9c0\uc815\ud574 \ucee4\uc2a4\ud140 \uc2a4\ub808\ub4dc \ud480\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4.")))}p.isMDXComponent=!0}}]);