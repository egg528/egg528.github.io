"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4778],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,f=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2932:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={title:"JS \uae30\ucd08",sidebar_position:1},l=void 0,c={unversionedId:"book/react/one",id:"book/react/one",title:"JS \uae30\ucd08",description:"\ubcc0\uc218",source:"@site/docs/book/react/one.md",sourceDirName:"book/react",slug:"/book/react/one",permalink:"/docs/book/react/one",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/book/react/one.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"JS \uae30\ucd08",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"12. \uc544\ud0a4\ud14d\ucc98 \uc2a4\ud0c0\uc77c \uacb0\uc815\ud558\uae30",permalink:"/docs/book/clean-architecture/twelve"},next:{title:"JS \uc751\uc6a9",permalink:"/docs/book/react/two"}},i={},p=[{value:"\ubcc0\uc218",id:"\ubcc0\uc218",level:2},{value:"\uc790\ub8cc\ud615",id:"\uc790\ub8cc\ud615",level:2},{value:"\uc5f0\uc0b0\uc790",id:"\uc5f0\uc0b0\uc790",level:2},{value:"\ud568\uc218 \ud45c\ud604\uc2dd",id:"\ud568\uc218-\ud45c\ud604\uc2dd",level:2},{value:"\uac1d\uccb4",id:"\uac1d\uccb4",level:2},{value:"\ubc30\uc5f4",id:"\ubc30\uc5f4",level:2}],s={toc:p};function u(e){let{components:n,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\ubcc0\uc218"},"\ubcc0\uc218"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n* let, var, const\ub97c \uc0ac\uc6a9\ud574\uc11c \ubcc0\uc218\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\uc74c\n* \ucc28\uc774\uc810\n* let\uc740 \ubcc0\uc218 \uc911\ubcf5 \uc0dd\uc131\uc774 \ubd88\uac00\ub2a5\n* var\ub294 \uac00\ub2a5\n* const\ub294 \uac12 \ubcc0\uacbd \ubd88\uac00 (read-only)\n*/ \n\nlet age1 = 27;\nvar age2 = 27;\nconst age3 = 27;\n\n\nlet age1 = 28; (X)\nvar age2 = 28; (O)\n\nage3 = 28 (X)\n")),(0,a.kt)("h2",{id:"\uc790\ub8cc\ud615"},"\uc790\ub8cc\ud615"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"\uc0ac\uc9c41",src:t(337).Z,width:"1814",height:"766"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"JS\uc758 null",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"JS\uc5d0\uc11c null\uc740 \uc758\ub3c4\uc801\uc73c\ub85c \ub123\uc740 \uac12\uc774\ub2e4."),(0,a.kt)("li",{parentName:"ul"},"\uac12\uc774 \ud560\ub2f9\ub418\uc9c0 \uc54a\uc740 \ubcc0\uc218\ub294 ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined"))))),(0,a.kt)("h2",{id:"\uc5f0\uc0b0\uc790"},"\uc5f0\uc0b0\uc790"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'var temp = 1 == "1"; // true, \uac12\ub9cc \ube44\uad50 (!=)\nvar temp = 1 === "1"; // flase, type\ub3c4 \ube44\uad50(!==)\n')),(0,a.kt)("h2",{id:"\ud568\uc218-\ud45c\ud604\uc2dd"},"\ud568\uc218 \ud45c\ud604\uc2dd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// (1) \ud568\uc218 \uc120\uc5b8\uc2dd \n// \uc120\uc5b8\uc2dd\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \ud568\uc218\ub4e4\uc740 \ud504\ub85c\uadf8\ub7a8 \uc2e4\ud589 \uc804 \ucd5c\uc0c1\ub2e8\uc73c\ub85c \uc62c\ub77c\uac04\ub2e4\uace0 \uc0dd\uac01\ud558\uba74 \ub428 (hoisting)\nfunction method(param1, param2){\n    return "return";\n}\n\n// (2-1) \ud568\uc218 \ud45c\ud604\uc2dd\nlet method = function(param1, param2){\n    return "return";\n}\n\n// (2-2) \ud568\uc218 \ud45c\ud604\uc2dd\nlet method = (param1, param2) => "return";\nlet method = (param1, param2) => {\n    return "return";\n}\n')),(0,a.kt)("h2",{id:"\uac1d\uccb4"},"\uac1d\uccb4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \uac1d\uccb4 \uc120\uc5b8 \ubc29\uc2dd\n// const\ub85c \uc120\uc5b8\ud574\ub3c4 \ub0b4\ubd80 \ubcc0\uacbd \uac00\ub2a5. \uac1d\uccb4\uac00 \ubcc0\ud558\ub294 \uac8c \uc544\ub2c8\uae30 \ub54c\ubb38.\nlet person = {\n    name: "\uad8c\uc6b0\uc11d",\n    age: 28,\n    sayAge: function () {\n        console.log(this.age);\n    }\n};\n\n// \uc678\ubd80\uc5d0\uc11c \uc18d\uc131 \ucd94\uac00 \uac00\ub2a5\nperson["gender"] = male;\n\n// \uc5c6\ub294 \uc18d\uc131 \uc811\uadfc \uc2dc undefined\nconsole.log(person.hobby);\n\n// \ud504\ub85c\ud37c\ud2f0\uac00 \uc874\uc7ac\ud558\ub294\uc9c0 \ud655\uc778\ud558\ub294 \uc5f0\uc0b0\uc774 \uc874\uc7ac\ud568. -> in \uc5f0\uc0b0 \uc0ac\uc6a9\ud558\uba74 \uc874\uc7ac \uc5ec\ubd80 trun false \ubc18\ud658\nconsole.log(`${"name" in person}`)\n')),(0,a.kt)("h2",{id:"\ubc30\uc5f4"},"\ubc30\uc5f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \ud55c \ubc30\uc5f4\uc5d0 \ub2e4\uc591\ud55c \uc790\ub8cc\ud615\uc774 \ub4e4\uc5b4\uac08 \uc218 \uc788\uc74c\nlet arr = [1, "element", true]\n\n// 1. forEach\narr = [1, 2, 3, 4]\narr.forEach((elm) => console.log(elm))\n\n        \n// 2. map: \uc5f0\uc0b0 \uc218\ud589\ud558\uc5ec \uc0c8\ub85c\uc6b4 \ubc30\uc5f4 \ubc18\ud658\nlet arr2 = arr.map((elm) => {\n    return elm * 2\n});\n\n\n// 3. filter: \uc6d0\ud558\ub294 \uc694\uc18c\ub9cc \uc0c8\ub85c\uc6b4 \ubc30\uc5f4\uc5d0 \ub123\uc5b4 \ubc18\ud658\nlet arr3 = arr.filter((elm) => elm%3 === 0)\n\n\n// 4. slice, concat: \ubc30\uc5f4 \uc790\ub974\uae30 / \ud569\uce58\uae30\narr1.slice(0, 1)\narr1.concat(arr2)\n\n\n// 5. sort: \uc815\ub82c\narr.sort()\n\n// \uc9c1\uc811 \ube44\uad50 \uc870\uac74\uc744 \uc791\uc131\ud574\uc11c \uc815\ub82c\ud560 \uc218\ub3c4\n\nconst compare = (a, b) => {\n    \n    if(a > b){\n      \n      // 1\uc740 \ub450 \uc694\uc18c \uc704\uce58\ub97c \ubc14\uafd4\ub77c\n      return 1;\n    }\n    \n    if(a < b){\n        \n      // -1\uc740 \ub450 \uc694\uc18c\ub97c \uac00\ub9cc\ud788 \ub46c\ub77c\n      return -1;\n    }\n    \n    if(a == b){\n        \n        // 0\uc740 \ub450 \uc694\uc18c\ub97c \uac00\ub9cc\ud788 \ub46c\ub77c\n        return 0\n    }\n}\n')))}u.isMDXComponent=!0},337:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/type-897d2c8a3c9656f8497381e21afc1aea.png"}}]);