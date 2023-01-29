"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[618],{3905:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>k});var r=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var l=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),d=s(l),m=a,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||n;return l?r.createElement(k,i(i({ref:t},p),{},{components:l})):r.createElement(k,i({ref:t},p))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=l.length,i=new Array(n);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[d]="string"==typeof e?e:a,i[1]=u;for(var s=2;s<n;s++)i[s]=l[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,l)}m.displayName="MDXCreateElement"},4870:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>s});var r=l(7462),a=(l(7294),l(3905));const n={title:"1\uc8fc\ucc28 - \uc778\uc218 \ud14c\uc2a4\ud2b8\uc640 E2E \ud14c\uc2a4\ud2b8",sidebar_position:1},i=void 0,u={unversionedId:"lecture/atdd/one",id:"lecture/atdd/one",title:"1\uc8fc\ucc28 - \uc778\uc218 \ud14c\uc2a4\ud2b8\uc640 E2E \ud14c\uc2a4\ud2b8",description:"\uac15\uc758 \uc911 \uc0dd\uac01 \uc815\ub9ac",source:"@site/docs/lecture/atdd/one.md",sourceDirName:"lecture/atdd",slug:"/lecture/atdd/one",permalink:"/docs/lecture/atdd/one",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/lecture/atdd/one.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1\uc8fc\ucc28 - \uc778\uc218 \ud14c\uc2a4\ud2b8\uc640 E2E \ud14c\uc2a4\ud2b8",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\uac15\uc758",permalink:"/docs/category/\uac15\uc758"},next:{title:"JS \uae30\ubcf8",permalink:"/docs/lecture/react/one"}},o={},s=[{value:"\uac15\uc758 \uc911 \uc0dd\uac01 \uc815\ub9ac",id:"\uac15\uc758-\uc911-\uc0dd\uac01-\uc815\ub9ac",level:2},{value:"- ATDD \uc774\uc57c\uae30\ub97c \ud558\uae30 \uc804\uc5d0",id:"--atdd-\uc774\uc57c\uae30\ub97c-\ud558\uae30-\uc804\uc5d0",level:3},{value:"- ATDD\ub97c \ud558\ub294 \uc774\uc720",id:"--atdd\ub97c-\ud558\ub294-\uc774\uc720",level:3},{value:"- \uc778\uc218 \ud14c\uc2a4\ud2b8\ub780?",id:"--\uc778\uc218-\ud14c\uc2a4\ud2b8\ub780",level:3},{value:"- \uac1c\ubc1c\uc744 \uc704\ud55c \uc2dc\ub098\ub9ac\uc624 \uae30\ubc18 \uc778\uc218 \ud14c\uc2a4\ud2b8 \ub9cc\ub4e4\uae30",id:"--\uac1c\ubc1c\uc744-\uc704\ud55c-\uc2dc\ub098\ub9ac\uc624-\uae30\ubc18-\uc778\uc218-\ud14c\uc2a4\ud2b8-\ub9cc\ub4e4\uae30",level:3},{value:"- \uc774\ubc88 \uacfc\uc815\uc5d0\uc11c\uc758 \uc778\uc218 \ud14c\uc2a4\ud2b8",id:"--\uc774\ubc88-\uacfc\uc815\uc5d0\uc11c\uc758-\uc778\uc218-\ud14c\uc2a4\ud2b8",level:3},{value:"- \uc778\uc218 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c \uc124\uba85",id:"--\uc778\uc218-\ud14c\uc2a4\ud2b8-\ub3c4\uad6c-\uc124\uba85",level:3},{value:"- ATDD \uc8fc\ub3c4 \uac1c\ubc1c",id:"--atdd-\uc8fc\ub3c4-\uac1c\ubc1c",level:3},{value:"1\ub2e8\uacc4 \ubbf8\uc158",id:"1\ub2e8\uacc4-\ubbf8\uc158",level:2},{value:"- Rest-Assured",id:"--rest-assured",level:3},{value:"\uc0ac\uc6a9 \uc608\uc2dc (JSON)",id:"\uc0ac\uc6a9-\uc608\uc2dc-json",level:4},{value:"lottoId\uac00 5\uc778\uc9c0 \ud655\uc778\ud558\ub824\uba74?",id:"lottoid\uac00-5\uc778\uc9c0-\ud655\uc778\ud558\ub824\uba74",level:4},{value:"response expectation \ub610\ub294 request parameter\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc4f4\ub2e4\uba74?",id:"response-expectation-\ub610\ub294-request-parameter\ub97c-\ubc18\ubcf5\uc801\uc73c\ub85c-\uc4f4\ub2e4\uba74",level:4},{value:"2\ub2e8\uacc4 \ubbf8\uc158",id:"2\ub2e8\uacc4-\ubbf8\uc158",level:2},{value:"- @DirtiesContext",id:"--dirtiescontext",level:3},{value:"- @Sql",id:"--sql",level:3},{value:"- Table Truncate",id:"--table-truncate",level:3}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\uac15\uc758-\uc911-\uc0dd\uac01-\uc815\ub9ac"},"\uac15\uc758 \uc911 \uc0dd\uac01 \uc815\ub9ac"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"--atdd-\uc774\uc57c\uae30\ub97c-\ud558\uae30-\uc804\uc5d0"},"- ATDD \uc774\uc57c\uae30\ub97c \ud558\uae30 \uc804\uc5d0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub2e8\uc704 \ud14c\uc2a4\ud2b8: \uc2dc\ub098\ub9ac\uc624/\uc758\ub3c4\ub77c\uae30 \ubcf4\ub2e4\ub294 \uad6c\ud604\ud55c \ub300\ub85c \ub3d9\uc791\ud558\ub294\uac00\ub97c \uac80\uc99d"),(0,a.kt)("li",{parentName:"ul"},"\uc778\uc218 \ud14c\uc2a4\ud2b8: \uc2dc\ub098\ub9ac\uc624/\uc758\ub3c4\ub300\ub85c \ub3d9\uc791\ud558\ub294\uac00\ub97c \uac80\uc99d")),(0,a.kt)("h3",{id:"--atdd\ub97c-\ud558\ub294-\uc774\uc720"},"- ATDD\ub97c \ud558\ub294 \uc774\uc720"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0dd\uc0b0\uc131 \uc99d\uac00"),(0,a.kt)("li",{parentName:"ul"},"\uc791\uc5c5\uc758 \uba85\ud655\ud55c \uc2dc\uc791\uacfc \ub05d\uc744 \uc81c\uc2dc: \ud14c\uc2a4\ud2b8 \uc791\uc131 -> \uae30\ub2a5 \uad6c\ud604 \ubc0f \ud14c\uc2a4\ud2b8 \uc131\uacf5"),(0,a.kt)("li",{parentName:"ul"},"\uadc0\ucc2e\uc740 \uc791\uc5c5 \uac15\uc81c\ud654")),(0,a.kt)("h3",{id:"--\uc778\uc218-\ud14c\uc2a4\ud2b8\ub780"},"- \uc778\uc218 \ud14c\uc2a4\ud2b8\ub780?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc2a4\ud1a0\ub9ac\ub97c \uac80\uc99d\ud558\ub294 \uae30\ub2a5 \ud14c\uc2a4\ud2b8"),(0,a.kt)("li",{parentName:"ul"},"\ub9c8\uc9c0\ub9c9 \ub2e8\uacc4\uc5d0\uc11c \uc218\ud589\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc758\ubbf8 (\uc791\uc5c5\uc744 \ub05d\ub0bc \uc218 \uc788\ub294 \ud14c\uc2a4\ud2b8)")),(0,a.kt)("h3",{id:"--\uac1c\ubc1c\uc744-\uc704\ud55c-\uc2dc\ub098\ub9ac\uc624-\uae30\ubc18-\uc778\uc218-\ud14c\uc2a4\ud2b8-\ub9cc\ub4e4\uae30"},"- \uac1c\ubc1c\uc744 \uc704\ud55c \uc2dc\ub098\ub9ac\uc624 \uae30\ubc18 \uc778\uc218 \ud14c\uc2a4\ud2b8 \ub9cc\ub4e4\uae30"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc694\uad6c\uc0ac\ud56d\uc744 \uc2dc\ub098\ub9ac\uc624\ub85c \uc791\uc131\ud558\uba74 \uc791\uc5c5\uc774 \uc791\uc740 \ub2e8\uc704\ub85c \uadf8\ub824\uc9c0\uace0 \uac1c\ubc1c\uc5d0 \ub354\uc6b1 \uc6a9\uc774\ud574 \ubcf4\uc778\ub2e4.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\uc694\uad6c\uc0ac\ud56d\uc744 \uc2dc\ub098\ub9ac\uc624\ud654 \ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ol"},"\uc2dc\ub098\ub9ac\uc624\ub97c \uc791\uc740 \ub2e8\uc704\ub85c \ucabc\uac20\ub2e4 (\uc791\uc740 \ub2e8\uc704\ub97c \ud14c\uc2a4\ud2b8 \ud55c\ub2e4 -> \ub2e8\uc704\ud14c\uc2a4\ud2b8)"),(0,a.kt)("li",{parentName:"ol"},"\uc791\uc740 \ub2e8\uc704\uac00 \uc544\ub2cc \uc2dc\ub098\ub9ac\uc624\ub97c \uac80\uc99d\ud558\ub294 \ud14c\uc2a4\ud2b8\uac00 \uc778\uc218 \ud14c\uc2a4\ud2b8?")),(0,a.kt)("h3",{id:"--\uc774\ubc88-\uacfc\uc815\uc5d0\uc11c\uc758-\uc778\uc218-\ud14c\uc2a4\ud2b8"},"- \uc774\ubc88 \uacfc\uc815\uc5d0\uc11c\uc758 \uc778\uc218 \ud14c\uc2a4\ud2b8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc778\uc218 \ud14c\uc2a4\ud2b8\ub294 \ud14c\uc2a4\ud2b8 \uc758\ub3c4\uc5d0 \ub530\ub77c \uc815\ud574\uc9c4\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uc989, \uad6c\ud604 \ubc29\uc2dd(\ud615\ud0dc)\uc73c\ub85c \uc778\uc218 \ud14c\uc2a4\ud2b8\ub97c \uaddc\uc815\ud558\uae30 \ubcf4\ub2e4\ub294 \uc778\uc218\ub97c \ubaa9\uc801\uc73c\ub85c \uc2dc\ub098\ub9ac\uc624\ub97c \uac80\uc99d\ud558\ub824\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4\uba74 \uc778\uc218 \ud14c\uc2a4\ud2b8\uc778 \uac83 ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc785\uc7a5\uc758 \ud14c\uc2a4\ud2b8 (Black Box)")))),(0,a.kt)("h3",{id:"--\uc778\uc218-\ud14c\uc2a4\ud2b8-\ub3c4\uad6c-\uc124\uba85"},"- \uc778\uc218 \ud14c\uc2a4\ud2b8 \ub3c4\uad6c \uc124\uba85"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Test Server",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SpringBootTest"))),(0,a.kt)("li",{parentName:"ul"},"Client",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"RestAssured"),(0,a.kt)("li",{parentName:"ul"},"MockMVC"),(0,a.kt)("li",{parentName:"ul"},"WebTestClient"))),(0,a.kt)("li",{parentName:"ul"},"Response Body Parsing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JsonPath(Json)"))),(0,a.kt)("li",{parentName:"ul"},"Cucumber")),(0,a.kt)("h3",{id:"--atdd-\uc8fc\ub3c4-\uac1c\ubc1c"},"- ATDD \uc8fc\ub3c4 \uac1c\ubc1c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ucd5c\ub300\ud55c \uc2e4\uc81c\uc640 \ube44\uc2b7\ud55c \ud658\uacbd\uc744 \uad6c\uc131",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SpringBootTest: RANDOM_PORT \ub4f1\ub4f1")))),(0,a.kt)("h2",{id:"1\ub2e8\uacc4-\ubbf8\uc158"},"1\ub2e8\uacc4 \ubbf8\uc158"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/next-step/atdd-subway-map/pull/609"},"PR \ub9c1\ud06c"))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uad6c\ud604\ub41c \uae30\ub2a5\uc744 \ub300\uc0c1\uc73c\ub85c \uc778\uc218 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"RestAssured\ub97c \ud65c\uc6a9\ud558\uc5ec \uc778\uc218 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud574\ubcf4\ub294 \uac04\ub2e8\ud55c \uc791\uc5c5.")),(0,a.kt)("h3",{id:"--rest-assured"},"- Rest-Assured"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ub9c1\ud06c: ",(0,a.kt)("a",{parentName:"li",href:"https://rest-assured.io/"},"https://rest-assured.io/")),(0,a.kt)("li",{parentName:"ul"},"\uc124\uba85: REST \uae30\ubc18 \uc11c\ube44\uc2a4\uc758 \ud14c\uc2a4\ud2b8\ub97c \ub2e8\uc21c\ud654\ud558\uae30 \uc704\ud55c Java DSL. POST, GET, PUT, DELETE, OPTIONS, PATCH \ubc0f HEAD \uc694\uccad\uc744 \uc9c0\uc6d0\ud558\uba70 \uc774\uc5d0 \ub300\ud55c \uc751\ub2f5\uc744 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\ub2e4.")),(0,a.kt)("h4",{id:"\uc0ac\uc6a9-\uc608\uc2dc-json"},"\uc0ac\uc6a9 \uc608\uc2dc (JSON)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// \uc608\uc2dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \uc11c\ube44\uc2a4 \uc751\ub2f5 \ud615\ud0dc\n{\n    "lotto":\n    {\n      "lottoId":5, \n      "winning-numbers":[2,45,34,23,7,5,3], \n      "winners":\n      [{"winnerId":23,\n        "numbers":[2,45,34,23,3,5]\n      },\n        {\n          "winnerId":54,\n          "numbers":[52,3,12,11,18,22]\n        }]\n    }\n}\n')),(0,a.kt)("h4",{id:"lottoid\uac00-5\uc778\uc9c0-\ud655\uc778\ud558\ub824\uba74"},"lottoId\uac00 5\uc778\uc9c0 \ud655\uc778\ud558\ub824\uba74?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'        RestAssured\n                .get("/lotto") // \uc694\uccad \uba54\uc11c\ub4dc, \uacbd\ub85c: GET \uc694\uccad( http://localhost:8080/lotto \n                .then() // \uc694\uccad \ud30c\ub77c\ubbf8\ud130 \uc5c6\uc74c\n                .body("lotto.lottoId", equalTo(5));\n')),(0,a.kt)("h4",{id:"response-expectation-\ub610\ub294-request-parameter\ub97c-\ubc18\ubcf5\uc801\uc73c\ub85c-\uc4f4\ub2e4\uba74"},"response expectation \ub610\ub294 request parameter\ub97c \ubc18\ubcf5\uc801\uc73c\ub85c \uc4f4\ub2e4\uba74?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \uc751\ub2f5 \uc2a4\ud399 \ub610\ub294 \uc694\uccad \ud30c\ub77c\ubbf8\ud130\ub97c \uc815\uc758\ud574\uc11c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"ResponseSpecification /RequestSpecification"),(0,a.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9 \uc608\uc2dc: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rest-assured/rest-assured/wiki/Usage#specification-re-use"},"https://github.com/rest-assured/rest-assured/wiki/Usage#specification-re-use"))),(0,a.kt)("h2",{id:"2\ub2e8\uacc4-\ubbf8\uc158"},"2\ub2e8\uacc4 \ubbf8\uc158"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc694\uad6c\uc0ac\ud56d\uc744 \ubc14\ud0d5\uc73c\ub85c \uc778\uc218 \ud14c\uc2a4\ud2b8\ub97c \uc791\uc131\ud55c \ud6c4, \uc774\ub97c \ud1b5\uacfc\ud560 \uc218 \uc788\uac8c \uae30\ub2a5\uc744 \uad6c\ud604\ud558\ub294 \ubbf8\uc158"),(0,a.kt)("li",{parentName:"ul"},"\uc694\uad6c\uc0ac\ud56d\uc740 Given / When / Then \ud615\ud0dc\ub85c \uc81c\uc2dc\ub418\uc5b4 \uc788\ub2e4.")),(0,a.kt)("h3",{id:"--dirtiescontext"},"- @DirtiesContext"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spring Context\ub97c \uc774\uc6a9\ud55c Test\ub294 \uae30\ubcf8\uc801\uc73c\ub85c Context\ub97c \uacf5\uc720\ud55c\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \uac1c\ubcc4\ub85c \uc131\uacf5\ud558\ub294 Test\ub3c4 2\uac1c \uc774\uc0c1\uc774 \ub418\uc5c8\uc744 \ub54c \uc2e4\ud328\ud558\ub294 \uacbd\uc6b0\uac00 \uc885\uc885 \uc0dd\uae34\ub2e4. "),(0,a.kt)("li",{parentName:"ul"},"\uc774\ub54c Context \uc7ac\uc0dd\uc131 \uc2dc\uc810\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub294 \uc5b4\ub178\ud14c\uc774\uc158"),(0,a.kt)("li",{parentName:"ul"},"\uc124\uc815 \uac12 - @DirtiesContext(methodMode = ?)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Class\uc5d0\uc11c Default: \ud074\ub798\uc2a4 \ub0b4 \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8\uac00 \uc885\ub8cc \uc774\ud6c4"),(0,a.kt)("li",{parentName:"ul"},"BEFORE_EACH_TEST_METHOD: \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uc2dc\uc791 \uc774\uc804\uc5d0"),(0,a.kt)("li",{parentName:"ul"},"AFTER_EACH_TEST_METHOD: \ubaa8\ub4e0 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uc885\ub958 \uc774\ud6c4"),(0,a.kt)("li",{parentName:"ul"},"BEFORE_METHOD: \ud2b9\uc815 \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uc774\uc804"),(0,a.kt)("li",{parentName:"ul"},"Method\uc5d0\uc11c Default: \ud14c\uc2a4\ud2b8 \ucf00\uc774\uc2a4 \uc774\ud6c4"))),(0,a.kt)("li",{parentName:"ul"},"\uba54\ubaa8\ub9ac DB\uc774 \uacbd\uc6b0 Context\uac00 \uc7ac\uc0dd\uc131\ub418\uba74 DB \ub0b4\uc6a9\ub3c4 \ucd08\uae30\ud654\ub428")),(0,a.kt)("h3",{id:"--sql"},"- @Sql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\uc6d0\ud558\ub294 \uc2dc\uc810\uc5d0 \ucffc\ub9ac\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 \uc5b4\ub178\ud14c\uc774\uc158")),(0,a.kt)("h3",{id:"--table-truncate"},"- Table Truncate"))}d.isMDXComponent=!0}}]);