"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[154],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),p=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=l,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||i;return a?r.createElement(d,n(n({ref:t},s),{},{components:a})):r.createElement(d,n({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:l,n[1]=o;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9675:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),l=(a(7294),a(3905));const i={title:"View",tag:["slack","view"]},n=void 0,o={unversionedId:"dev-resource/slack/View",id:"dev-resource/slack/View",title:"View",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/dev-resource/slack/View.md",sourceDirName:"dev-resource/slack",slug:"/dev-resource/slack/View",permalink:"/resource/dev-resource/slack/View",draft:!1,tags:[],version:"current",frontMatter:{title:"View",tag:["slack","view"]},sidebar:"tutorialSidebar",previous:{title:"Socket Mode",permalink:"/resource/dev-resource/slack/Socket-Mode"},next:{title:"Gradle \uc758\uc874\uc131 \uc635\uc158",permalink:"/resource/dev-resource/etc/Gradle-\uc758\uc874\uc131-\uc635\uc158"}},c={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"Slack\uc758 View",id:"slack\uc758-view",level:2},{value:"Modal",id:"modal",level:3},{value:"Lifecycle",id:"lifecycle",level:4},{value:"Home Tabs",id:"home-tabs",level:3}],s={toc:p},u="wrapper";function k(e){let{components:t,...i}=e;return(0,l.kt)(u,(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/surfaces/views"},"Slack View Object \uae30\ubcf8 \ud398\uc774\uc9c0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/modals"},"Modal")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/tabs"},"Home Tabs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://app.slack.com/block-kit-builder/"},"View Block Kit Builder")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://slack.dev/java-slack-sdk/guides/composing-messages#block-kit-kotlin-dsl"},"Block kotlin DSL ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/block-kit/blocks"},"Block \uc885\ub958"))),(0,l.kt)("h2",{id:"slack\uc758-view"},"Slack\uc758 View"),(0,l.kt)("h3",{id:"modal"},"Modal"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc694\uccad \ud639\uc740 \ub370\uc774\ud130 \uc218\uc9d1\uc744 \uc704\ud55c View"),(0,l.kt)("li",{parentName:"ul"},"alert boxes, pop-ups, or dialog boxes \ub4f1\uc758 \ud615\ud0dc"),(0,l.kt)("li",{parentName:"ul"},"\uad00\ub828 \uba54\uc11c\ub4dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"view.open"),(0,l.kt)("li",{parentName:"ul"},"view.update"),(0,l.kt)("li",{parentName:"ul"},"view.push"))),(0,l.kt)("li",{parentName:"ul"},"Modal\uc740 1\ubc88\uc5d0 3\uac1c\uc758 view\uae4c\uc9c0 \uc18c\uc720\ud560 \uc218 \uc788\ub2e4. (view stack\uc5d0 \uc313\ub294\ub2e4)")),(0,l.kt)("h4",{id:"lifecycle"},"Lifecycle"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"modal_flow.png",src:a(650).Z,width:"1290",height:"2674"})),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\uc720\uc800\uac00 \ud2b9\uc815\ud55c \ud589\ub3d9\uc744 \ud558\uba74 slack -> server\ub85c \ud2b9\uc815 ",(0,l.kt)("inlineCode",{parentName:"li"},"trigger_id")," + ",(0,l.kt)("inlineCode",{parentName:"li"},"paylod"),"\ub97c \ubcf4\ub0b8\ub2e4")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ud2b9\uc815\ud55c \ud589\ub3d9\uc740 Entry points\ub97c \ub73b\ud568 ",(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/interactivity/entry-points"},"Entry points for app interactions")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/interactivity/handling#payloads"},"Handling payload"))),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"views.open api\ub85c modal \uc804\ub2ec"),(0,l.kt)("li",{parentName:"ol"},"\uc720\uc800\ub294 \uc804\ub2ec \ubc1b\uc740 modal view\uc640 \uc0c1\ud638\uc791\uc6a9 \ud568. \uc774 \uacfc\uc815\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\uc74c"),(0,l.kt)("li",{parentName:"ol"},"server\ub294 view\ub97c update\ud568 (views.update)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/modals/using#updating_views"},"view update \ubc29\ubc95")))),(0,l.kt)("li",{parentName:"ol"},"\uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 view\uac00 \ud544\uc694\ud560 \ub54c\ub294 view.push. \uc774\uc804 \uac83 \uc0ac\uc6a9 \ubabb\ud568"),(0,l.kt)("li",{parentName:"ol"},"submit \ubc84\ud2bc\uc744 \ub204\ub974\uba74 data\uac00 \uc804\uc1a1\ub428"),(0,l.kt)("li",{parentName:"ol"},"view stack\uc774 \ube44\uc6cc\uc9d0")),(0,l.kt)("h3",{id:"home-tabs"},"Home Tabs"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"home_tabs.png",src:a(9511).Z,width:"1308",height:"1668"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Slack \uc571 \uba54\uc778 \ud398\uc774\uc9c0\ub77c \uc0dd\uac01\ud558\uba74 \ub428"),(0,l.kt)("li",{parentName:"ul"},"\uad00\ub828 \uba54\uc11c\ub4dc",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"view.publish",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc720\uc800 id\ubcc4\ub85c \uc81c\uacf5, insert + update")))))))}k.isMDXComponent=!0},9511:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/home_tabs-65edd2fe0a0278756eae09f803ef2567.png"},650:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/modal_flow-4caf321e51d0f1698f7e2e6ae589eb91.png"}}]);