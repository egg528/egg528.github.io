"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[379],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=l.createContext({}),p=function(e){var t=l.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,d=u["".concat(c,".").concat(m)]||u[m]||k[m]||i;return a?l.createElement(d,n(n({ref:t},s),{},{components:a})):l.createElement(d,n({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,n[1]=o;for(var p=2;p<i;p++)n[p]=a[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1389:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var l=a(7462),r=(a(7294),a(3905));const i={title:"View",sidebar_position:1},n=void 0,o={unversionedId:"tech/etc/slack/View",id:"tech/etc/slack/View",title:"View",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/tech/etc/slack/View.md",sourceDirName:"tech/etc/slack",slug:"/tech/etc/slack/View",permalink:"/docs/tech/etc/slack/View",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tech/etc/slack/View.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"View",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Socket Mode",permalink:"/docs/tech/etc/slack/Socket-Mode"},next:{title:"\uc778\uc218\ud14c\uc2a4\ud2b8\uc5d0\uc11c \ud14c\uc2a4\ud2b8 \uaca9\ub9ac\ud558\uae30",permalink:"/docs/tech/etc/\uc778\uc218\ud14c\uc2a4\ud2b8\uc5d0\uc11c-\ud14c\uc2a4\ud2b8-\uaca9\ub9ac\ud558\uae30"}},c={},p=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"Slack\uc758 View",id:"slack\uc758-view",level:2},{value:"Modal",id:"modal",level:3},{value:"Lifecycle",id:"lifecycle",level:4},{value:"Home Tabs",id:"home-tabs",level:3}],s={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,l.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/surfaces/views"},"Slack View Object \uae30\ubcf8 \ud398\uc774\uc9c0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/modals"},"Modal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/tabs"},"Home Tabs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://app.slack.com/block-kit-builder/"},"View Block Kit Builder")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://slack.dev/java-slack-sdk/guides/composing-messages#block-kit-kotlin-dsl"},"Block kotlin DSL ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/reference/block-kit/blocks"},"Block \uc885\ub958"))),(0,r.kt)("h2",{id:"slack\uc758-view"},"Slack\uc758 View"),(0,r.kt)("h3",{id:"modal"},"Modal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc694\uccad \ud639\uc740 \ub370\uc774\ud130 \uc218\uc9d1\uc744 \uc704\ud55c View"),(0,r.kt)("li",{parentName:"ul"},"alert boxes, pop-ups, or dialog boxes \ub4f1\uc758 \ud615\ud0dc"),(0,r.kt)("li",{parentName:"ul"},"\uad00\ub828 \uba54\uc11c\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"view.open"),(0,r.kt)("li",{parentName:"ul"},"view.update"),(0,r.kt)("li",{parentName:"ul"},"view.push"))),(0,r.kt)("li",{parentName:"ul"},"Modal\uc740 1\ubc88\uc5d0 3\uac1c\uc758 view\uae4c\uc9c0 \uc18c\uc720\ud560 \uc218 \uc788\ub2e4. (view stack\uc5d0 \uc313\ub294\ub2e4)")),(0,r.kt)("h4",{id:"lifecycle"},"Lifecycle"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"modal_flow.png",src:a(3681).Z,width:"1290",height:"2674"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc720\uc800\uac00 \ud2b9\uc815\ud55c \ud589\ub3d9\uc744 \ud558\uba74 slack -> server\ub85c \ud2b9\uc815 ",(0,r.kt)("inlineCode",{parentName:"li"},"trigger_id")," + ",(0,r.kt)("inlineCode",{parentName:"li"},"paylod"),"\ub97c \ubcf4\ub0b8\ub2e4")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815\ud55c \ud589\ub3d9\uc740 Entry points\ub97c \ub73b\ud568 ",(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/interactivity/entry-points"},"Entry points for app interactions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/interactivity/handling#payloads"},"Handling payload"))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"views.open api\ub85c modal \uc804\ub2ec"),(0,r.kt)("li",{parentName:"ol"},"\uc720\uc800\ub294 \uc804\ub2ec \ubc1b\uc740 modal view\uc640 \uc0c1\ud638\uc791\uc6a9 \ud568. \uc774 \uacfc\uc815\uc5d0\uc11c \uc0c8\ub85c\uc6b4 \uc694\uccad\uc744 \ubcf4\ub0bc \uc218 \uc788\uc74c"),(0,r.kt)("li",{parentName:"ol"},"server\ub294 view\ub97c update\ud568 (views.update)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://api.slack.com/surfaces/modals/using#updating_views"},"view update \ubc29\ubc95")))),(0,r.kt)("li",{parentName:"ol"},"\uc644\uc804\ud788 \uc0c8\ub85c\uc6b4 view\uac00 \ud544\uc694\ud560 \ub54c\ub294 view.push. \uc774\uc804 \uac83 \uc0ac\uc6a9 \ubabb\ud568"),(0,r.kt)("li",{parentName:"ol"},"submit \ubc84\ud2bc\uc744 \ub204\ub974\uba74 data\uac00 \uc804\uc1a1\ub428"),(0,r.kt)("li",{parentName:"ol"},"view stack\uc774 \ube44\uc6cc\uc9d0")),(0,r.kt)("h3",{id:"home-tabs"},"Home Tabs"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"home_tabs.png",src:a(8836).Z,width:"1308",height:"1668"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Slack \uc571 \uba54\uc778 \ud398\uc774\uc9c0\ub77c \uc0dd\uac01\ud558\uba74 \ub428"),(0,r.kt)("li",{parentName:"ul"},"\uad00\ub828 \uba54\uc11c\ub4dc",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"view.publish",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc720\uc800 id\ubcc4\ub85c \uc81c\uacf5, insert + update")))))))}u.isMDXComponent=!0},8836:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/home_tabs-65edd2fe0a0278756eae09f803ef2567.png"},3681:(e,t,a)=>{a.d(t,{Z:()=>l});const l=a.p+"assets/images/modal_flow-4caf321e51d0f1698f7e2e6ae589eb91.png"}}]);