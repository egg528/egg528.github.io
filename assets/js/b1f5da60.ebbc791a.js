"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[1396],{2571:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>a});var i=r(4848),t=r(8453);const o={title:"02. Project Reactor - Cold Sequence\uc640 Hot Sequence",sidebar_position:3,tag:["book","reactive-programming"]},s=void 0,l={id:"reactive-programming/3",title:"02. Project Reactor - Cold Sequence\uc640 Hot Sequence",description:"1. Cold Sequence\uc640 Hot Sequence",source:"@site/docs/project/reactive-programming/3.md",sourceDirName:"reactive-programming",slug:"/reactive-programming/3",permalink:"/project/reactive-programming/3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"02. Project Reactor - Cold Sequence\uc640 Hot Sequence",sidebar_position:3,tag:["book","reactive-programming"]},sidebar:"tutorialSidebar",previous:{title:"02. Project Reactor - Reactor\uc640 Marble \ub2e4\uc774\uc5b4\uadf8\ub7a8",permalink:"/project/reactive-programming/2"},next:{title:"02. Project Reactor - Backpressure",permalink:"/project/reactive-programming/4"}},c={},a=[{value:"1. Cold Sequence\uc640 Hot Sequence",id:"1-cold-sequence\uc640-hot-sequence",level:2},{value:"\ucef4\ud4e8\ud130 \uacf5\ud559\uc5d0\uc11c Cold / Hot\uc758 \uc758\ubbf8",id:"\ucef4\ud4e8\ud130-\uacf5\ud559\uc5d0\uc11c-cold--hot\uc758-\uc758\ubbf8",level:3},{value:"Cole Sequence \uc608\uc2dc",id:"cole-sequence-\uc608\uc2dc",level:3},{value:"Hot Sequence \uc608\uc2dc",id:"hot-sequence-\uc608\uc2dc",level:3},{value:"HOT\uc758 2\uac00\uc9c0 \uc758\ubbf8",id:"hot\uc758-2\uac00\uc9c0-\uc758\ubbf8",level:4}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"1-cold-sequence\uc640-hot-sequence",children:"1. Cold Sequence\uc640 Hot Sequence"}),"\n",(0,i.jsx)(n.h3,{id:"\ucef4\ud4e8\ud130-\uacf5\ud559\uc5d0\uc11c-cold--hot\uc758-\uc758\ubbf8",children:"\ucef4\ud4e8\ud130 \uacf5\ud559\uc5d0\uc11c Cold / Hot\uc758 \uc758\ubbf8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Cold: \ubb34\uc5b8\uac00\ub97c \uc0c8\ub85c \uc2dc\uc791\ud55c\ub2e4\ub294 \uc758\ubbf8","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc598\uc0ac: Cold Wallet \uc778\ud130\ub137\uacfc \ub2e8\uc808\ub418\uc5b4 \uc788\ub294 \uc554\ud638 \ud654\ud3d0 \uc9c0\uac11"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Hot: \ubb34\uc5b8\uac00\ub97c \uc0c8\ub85c \uc2dc\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4\ub294 \uc758\ubbf8","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uc608\uc2dc: Hot Deploy - \uc11c\ubc84 \uc7ac\uc2dc\uc791 \uc5c6\uc774 \uc751\uc6a9 \ud504\ub85c\uadf8\ub7a8\uc758 \ubcc0\uacbd \uc0ac\ud56d\uc744 \ubc18\uc601\ud558\ub294 \uae30\ub2a5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"cole-sequence-\uc608\uc2dc",children:"Cole Sequence \uc608\uc2dc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Slf4j\npublic class Example {\n    public static void main(String[] args) throws InterruptedException {\n\n        Flux<String> coldFlux =\n                Flux\n                    .fromIterable(Arrays.asList("KOREA", "JAPAN", "CHINESE"))\n                    .map(String::toLowerCase);\n\n        coldFlux.subscribe(country -> log.info("# Subscriber1: {}", country));\n        System.out.println("----------------------------------------------------------------------");\n\n        Thread.sleep(2000L);\n\n        coldFlux.subscribe(country -> log.info("# Subscriber2: {}", country));\n    }\n}\n\n// 23:07:05.739 [main] INFO - # Subscriber1: korea\n// 23:07:05.740 [main] INFO - # Subscriber1: japan\n// 23:07:05.740 [main] INFO - # Subscriber1: chinese\n// ----------------------------------------------------------------------\n// 23:07:07.746 [main] INFO - # Subscriber2: korea\n// 23:07:07.749 [main] INFO - # Subscriber2: japan\n// 23:07:07.750 [main] INFO - # Subscriber2: chinese\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Subscriber\uac00 \uad6c\ub3c5\ud558\ub294 \uc2dc\uc810\uc774 \ub2ec\ub77c\ub3c4 \uad6c\ub3c5 \ub54c\ub9c8\ub2e4 Publisher\ub294 \ub370\uc774\ud130\ub97c emit\ud558\ub294 \uacfc\uc815\uc744 \ucc98\uc74c\ubd80\ud130 \ub2e4\uc2dc \uc2dc\uc791\ud55c\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class Example {\n    public static void main(String[] args) throws InterruptedException {\n        URI worldTimeUri = UriComponentsBuilder.newInstance().scheme("http")\n                .host("worldtimeapi.org")\n                .port(80)\n                .path("/api/timezone/Asia/Seoul")\n                .build()\n                .encode()\n                .toUri();\n\n        Mono<String> mono = getWorldTime(worldTimeUri);\n        mono.subscribe(dateTime -> log.info("# dateTime 1: {}", dateTime));\n        Thread.sleep(2000);\n        mono.subscribe(dateTime -> log.info("# dateTime 2: {}", dateTime));\n\n        Thread.sleep(2000);\n    }\n\n    private static Mono<String> getWorldTime(URI worldTimeUri) {\n        return WebClient.create()\n                .get()\n                .uri(worldTimeUri)\n                .retrieve()\n                .bodyToMono(String.class)\n                .map(response -> {\n                    DocumentContext jsonContext = JsonPath.parse(response);\n                    String dateTime = jsonContext.read("$.datetime");\n                    return dateTime;\n                });\n    }\n}\n\n// # dateTime 1: 2022-02-21T14:55:06.365269+09:00\n// # dateTime 2: 2022-02-21T14:55:08.265269+09:00\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\uacb0\uacfc\ub97c \ubcf4\uba74 \ucd1d 2\ubc88\uc758 \uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud588\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\ubc1c\uc0dd \uc2dc\uc810\ub9c8\ub2e4 \ub370\uc774\ud130 emit \uacfc\uc815\uc774 \ucc98\uc74c\ubd80\ud130 \uc0c8\ub85c \uc2dc\uc791\ub418\uc5b4 log\uc5d0 2\ucd08 \uc815\ub3c4\uc758 \ucc28\uc774\uac00 \uc788\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"hot-sequence-\uc608\uc2dc",children:"Hot Sequence \uc608\uc2dc"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'public class Example {\n    public static void main(String[] args) throws InterruptedException {\n        String[] singers = {"Singer A", "Singer B", "Singer C", "Singer D", "Singer E"};\n\n        log.info("# Begin concert:");\n        Flux<String> concertFlux =\n                Flux\n                    .fromArray(singers)\n                    .delayElements(Duration.ofSeconds(1))\n                    .share();\n\n        concertFlux.subscribe(\n                singer -> log.info("# Subscriber1 is watching {}\'s song", singer)\n        );\n\n        Thread.sleep(2500);\n\n        concertFlux.subscribe(\n                singer -> log.info("# Subscriber2 is watching {}\'s song", singer)\n        );\n\n        Thread.sleep(3000);\n    }\n}\n\n// 23:12:24.717 [parallel-1] INFO - # Subscriber1 is watching Singer A\'s song\n// 23:12:25.722 [parallel-2] INFO - # Subscriber1 is watching Singer B\'s song\n// 23:12:26.729 [parallel-3] INFO - # Subscriber1 is watching Singer C\'s song\n// 23:12:26.729 [parallel-3] INFO - # Subscriber2 is watching Singer C\'s song\n// 23:12:27.733 [parallel-4] INFO - # Subscriber1 is watching Singer D\'s song\n// 23:12:27.733 [parallel-4] INFO - # Subscriber2 is watching Singer D\'s song\n// 23:12:28.738 [parallel-5] INFO - # Subscriber1 is watching Singer E\'s song\n// 23:12:28.739 [parallel-5] INFO - # Subscriber2 is watching Singer E\'s song\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["share() Operator\uc5d0 \uc758\ud574 \uc6d0\ubcf8 Flux\ub97c \uba40\ud2f0\uce90\uc2a4\ud2b8\ud55c\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"\uc911\uc694: \ub9cc\uc57d Subscriber1\uc774 \uad6c\ub3c5\uc744 \uc885\ub8cc\ud55c \uc774\ud6c4 Subscriber2\uac00 \uad6c\ub3c5\uc744 \uc2dc\uc791\ud55c\ub2e4\uba74 Subscriber2\ub294 \ucc98\uc74c\ubd80\ud130 \ub370\uc774\ud130\ub97c \uad6c\ub3c5\ud558\uac8c \ub428"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"\uc989, \uc5ec\ub7ec Subscriber\uac00 \ud558\ub098\uc758 \uc6d0\ubcf8 Flux\ub97c \uacf5\uc720\ud558\uac8c \ub41c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"\uacb0\uacfc\ub97c \ubcf4\uba74 Subscriber2\ub294 Singer A, Singer B \ub370\uc774\ud130\ub97c \uc804\ub2ec\ubc1b\uc9c0 \ubabb\ud55c \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:["\ub85c\uadf8\ub97c \ubcf4\uba74 thread \uba85\uc774 \ub0a8\uc740 \uac78 \ud655\uc778\ud560 \uc218 \uc788\ub294\ub370 \uc774\ub294 delayElements() Operator\uc758 default thread scheduler\uac00 parallel\uc774\uae30 \ub54c\ubb38\uc774\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Scheduler\ub294 10\uc7a5\uc5d0\uc11c..."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Slf4j\npublic class Example {\n    public static void main(String[] args) throws InterruptedException {\n        URI worldTimeUri = UriComponentsBuilder.newInstance().scheme("http")\n                .host("worldtimeapi.org")\n                .port(80)\n                .path("/api/timezone/Asia/Seoul")\n                .build()\n                .encode()\n                .toUri();\n\n        Mono<String> mono = getWorldTime(worldTimeUri).cache();\n        mono.subscribe(dateTime -> log.info("# dateTime 1: {}", dateTime));\n        Thread.sleep(2000);\n        mono.subscribe(dateTime -> log.info("# dateTime 2: {}", dateTime));\n\n        Thread.sleep(2000);\n    }\n\n    private static Mono<String> getWorldTime(URI worldTimeUri) {\n        return WebClient.create()\n                .get()\n                .uri(worldTimeUri)\n                .retrieve()\n                .bodyToMono(String.class)\n                .map(response -> {\n                    DocumentContext jsonContext = JsonPath.parse(response);\n                    String dateTime = jsonContext.read("$.datetime");\n                    return dateTime;\n                });\n    }\n}\n\n// # dateTime 1: 2022-02-21T14:55:06.365269+09:00\n// # dateTime 2: 2022-02-21T14:55:06.365269+09:00\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"cache() Operator\ub294 Cold Sequence\ub85c \ub3d9\uc791\ud558\ub294 Mono\ub97c Hot Sequence\ub85c  \ubcc0\uacbd\ud55c\ub2e4."}),"\n",(0,i.jsx)(n.li,{children:"emit\ub41c \ub370\uc774\ud130\ub97c \uce90\uc2dc\ud574 \uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud560 \ub54c\ub9c8\ub2e4 \uce90\uc2dc\ub41c \uac12\uc744 \uc804\ub2ec\ud55c\ub2e4."}),"\n",(0,i.jsxs)(n.li,{children:["Hot Sequence\uc758 \uccab \uc608\uc2dc\uc640 \uc0c1\ud669\uc774 \ub3d9\uc77c\ud558\uc9c0\ub294 \uc54a\uc740 \uac83 \uac19\ub2e4.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\ub2e8, \uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud588\uc744 \ub54c \ub370\uc774\ud130 emit\uc744 \ub2e4\uc2dc \ud558\uc9c0 \uc54a\ub294\ub2e4(Cache\uac12 \ud65c\uc6a9)\ub294 \uc810\uc5d0\uc11c \ub3d9\uc77c\ud558\uac8c Hot Sequence\uc774\ub2e4"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"hot\uc758-2\uac00\uc9c0-\uc758\ubbf8",children:"HOT\uc758 2\uac00\uc9c0 \uc758\ubbf8"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\ucd5c\ucd08 \uad6c\ub3c5\uc774 \ubc1c\uc0dd\ud558\uae30 \uc804\uae4c\uc9c0\ub294 \ub370\uc774\ud130\uc758 emit\uc774 \ubc1c\uc0dd\ud558\uc9c0 \uc54a\ub294 \uac83 (Warm up)"}),"\n",(0,i.jsx)(n.li,{children:"\uad6c\ub3c5 \uc5ec\ubd80\uc640 \uc0c1\uad00 \uc5c6\uc774 \ub370\uc774\ud130\uac00 emit\ub418\ub294 \uac83"}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var i=r(6540);const t={},o=i.createContext(t);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);