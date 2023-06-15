"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(k,u(u({ref:t},s),{},{components:n})):a.createElement(k,u({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:r,u[1]=o;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>i});var a=n(7462),r=(n(7294),n(3905));const l={title:"React Hook",sidebar_position:5},u=void 0,o={unversionedId:"book/react/five",id:"book/react/five",title:"React Hook",description:"useEffect\ub780?",source:"@site/docs/book/react/five.md",sourceDirName:"book/react",slug:"/book/react/five",permalink:"/docs/book/react/five",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/book/react/five.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"React Hook",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"React.js \uae30\ucd08",permalink:"/docs/book/react/four"},next:{title:"Context",permalink:"/docs/book/react/six"}},c={},i=[{value:"useEffect\ub780?",id:"useeffect\ub780",level:2},{value:"useEffect \uc0ac\uc6a9\ubc95",id:"useeffect-\uc0ac\uc6a9\ubc95",level:3},{value:"cleanup \ud568\uc218",id:"cleanup-\ud568\uc218",level:3},{value:"useReducer\ub780?",id:"usereducer\ub780",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95",level:3},{value:"useMemo\ub780?",id:"usememo\ub780",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95-1",level:3},{value:"\ub9ac\uc561\ud2b8 \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8(HOC)",id:"\ub9ac\uc561\ud2b8-\uace0\ucc28-\ucef4\ud3ec\ub10c\ud2b8hoc",level:2},{value:"\uc608\uc2dc",id:"\uc608\uc2dc",level:3},{value:"React.memo",id:"reactmemo",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95-2",level:3},{value:"useCallback\uc774\ub780?",id:"usecallback\uc774\ub780",level:2},{value:"\uc0ac\uc6a9\ubc95",id:"\uc0ac\uc6a9\ubc95-3",level:3},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:3}],s={toc:i};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"useeffect\ub780"},"useEffect\ub780?"),(0,r.kt)("p",null,"\ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1 \ub420 \ub54c\ub9c8\ub2e4 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\ub294 Hook"),(0,r.kt)("h3",{id:"useeffect-\uc0ac\uc6a9\ubc95"},"useEffect \uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// useEffect(\ucf5c\ubc31 \ud568\uc218, \uc758\uc874 \ubc30\uc5f4)\n\n// 1. \ub9c8\uc6b4\ud2b8 \uc2dc\uc810\uc5d0\ub9cc \uc2e4\ud589\nuseEffect(()=> {\n    // \uc2e4\ud589 \ucf54\ub4dc\n}, [])\n\n// 2. \ud2b9\uc815 \ub370\uc774\ud130\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c (\ubc30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \ub370\uc774\ud130\ub4e4 \uc911 1\uac1c\ub77c\ub3c4 \ubc14\ub00c\uba74 \ud568\uc218 \uc2e4\ud589)\nuseEffect(()=> {\n    // \uc2e4\ud589 \ucf54\ub4dc\n}, [\ub370\uc774\ud1301, \ub370\uc774\ud1302])\n\n// \ucef4\ud3ec\ub10c\ud2b8\uac00 \ub80c\ub354\ub9c1\ub420 \ub54c \uc5b8\uc81c\ub098\n// 2. \ud2b9\uc815 \ub370\uc774\ud130\uac00 \ubc14\ub00c\uc5c8\uc744 \ub54c (\ubc30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \ub370\uc774\ud130\ub4e4 \uc911 1\uac1c\ub77c\ub3c4 \ubc14\ub00c\uba74 \ud568\uc218 \uc2e4\ud589)\nuseEffect(()=> {\n    // \uc2e4\ud589 \ucf54\ub4dc\n})\n")),(0,r.kt)("h3",{id:"cleanup-\ud568\uc218"},"cleanup \ud568\uc218"),(0,r.kt)("p",null,"useEffect \ucf5c\ubc31 \ud568\uc218\ub294 \ud568\uc218\ub97c \ubc18\ud658\ud560 \uc218 \uc788\ub294\ub370 \uc774 \ud568\uc218\uac00 CleanUp \ud568\uc218\uc774\ub2e4."),(0,r.kt)("p",null,"\ub80c\ub354\ub9c1\uc774 \ub2e4\uc2dc \uc77c\uc5b4\ub0a0 \ub54c \uc2e4\ud589\ub418\ub294 \ud568\uc218\ub85c \uc774\uc804\uc5d0 \ub0a8\uc740 \ud568\uc218\uac00 \uc2e4\ud589\ub418\uc5b4 \uba54\ubaa8\ub9ac \ub204\uc218\uac00 \uc77c\uc5b4\ub098\ub294 \uc77c\uc744 \ub9c9\uc744 \uc218 \uc788\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"useEffect(() => {\n    // \uc2e4\ud589 \ucf54\ub4dc\n\n    return function cleanup() {\n        // clean up \ucf54\ub4dc\n    }\n}, [])\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usereducer\ub780"},"useReducer\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"State\ub97c \uad00\ub9ac\ud558\ub294 hook\uc73c\ub85c useState\ub97c \ub300\uccb4\ud560 \uc218 \uc788\ub2e4?"),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc \ubcc0\ud654 \ub85c\uc9c1\uc744 Component\uc5d0\uc11c \ubd84\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc0c1\ud0dc \ubcc0\uacbd \uba54\uc18c\ub4dc\uac00 \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\ubd80\uc5d0 \uc5ec\ub7ec\uac1c \uc0dd\uae38 \ub54c \uc774\ub97c \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80\ub85c \ubd84\ub9ac\ud560 \ub54c \uc0ac\uc6a9\ud568.")),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\ubc95"},"\uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const [state, dispatch] = useReducer(reducer, initialState);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"useState\uc640 \ube44\uc2b7\ud558\uc9c0\ub9cc dispatch\uc640 reducer\uac00 \ub2e4\ub974\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"dispatch: reducer \ud568\uc218\ub97c \uc2e4\ud589\uc2dc\ud0a4\uace0 state \uad00\ub9ac\ub97c \uc704\ud574 \uc0ac\uc6a9\ub41c\ub2e4.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\uc5b4\ub5bb\uac8c \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud560\uc9c0 \uc54c\ub824\uc918\uc57c \ud55c\ub2e4. (\uc544\ub798 \uc608\uc2dc)"))),(0,r.kt)("li",{parentName:"ul"},"reducer: \ucef4\ud3ec\ub10c\ud2b8 \uc678\ubd80\uc5d0\uc11c state\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub85c\uc9c1 (state\uc640 action\uc744 \uc778\uc790\ub85c \ubc1b\ub294\ub2e4.)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// reducer\nfunction reducer(state, action) {\n  switch (action.type){\n    case "CREATE" : {\n      return [action.newItem, ...state];\n    }\n\n    case "UPDATE" : {\n      return state.map((it) => {\n        if(it.id === action.targetId) {\n          return {\n            ...it,\n            isDone: !it.isDone,\n          };\n        }\n        return it;\n      })\n    }\n\n    case "DELETE" : {\n      return state.filter((it) => it.id !== action.targetId);\n    }\n\n    default:\n      return state;\n  }\n}\n\n// Component \ub0b4\ubd80 \uc0ac\uc6a9\ubd80\nfunction App() {\n...\ndispatch({\n      type: "CREATE",\n      newItem: newItem\n    });\n...\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usememo\ub780"},"useMemo\ub780?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud2b9\uc815 \ud568\uc218\ub97c \ud638\ucd9c\ud588\uc744 \ub54c \ubc18\ud658\uac12\uc744 \uae30\uc5b5\ud558\uace0 \uc774\ud6c4 \ud568\uc218 \ud638\ucd9c \ubc18\ud658 \uac12\uc73c\ub85c \ud65c\uc6a9\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc758\uc874\uc131 \ubc30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \uac12\uc774 \ubcc0\ud560 \uacbd\uc6b0 \ud568\uc218 \ub85c\uc9c1\uc744 \ub2e4\uc2dc \uc2e4\ud589\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\ubc95-1"},"\uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const value = useReducer(callback, deps);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"value: useMemo\uac00 \uc801\uc6a9\ub41c callback \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},"callback: useMemo\ub97c \uc801\uc6a9\ud560 \uba54\uc11c\ub4dc"),(0,r.kt)("li",{parentName:"ul"},"deps: \uae30\uc5b5\ud55c \uac12\uc744 \ubc18\ud658\ud560\uc9c0 \uc0c8\ub85c \uc5f0\uc0b0\uc744 \uc218\ud589\ud560\uc9c0\ub97c \uacb0\uc815\ud558\ub294 \uae30\uc900 \uac12\ub4e4(\ubc30\uc5f4)")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"\ub9ac\uc561\ud2b8-\uace0\ucc28-\ucef4\ud3ec\ub10c\ud2b8hoc"},"\ub9ac\uc561\ud2b8 \uace0\ucc28 \ucef4\ud3ec\ub10c\ud2b8(HOC)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uae30\uc874 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ud2b9\uc815 \uae30\ub2a5\uc744 \ucd94\uac00\ud574 \uac15\ud654\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubc18\ud658\ud55c\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\ubaa9\uc801\uc740 \ud6a1\ub2e8 \uad00\uc2ec\uc0ac \ubd84\ub9ac\uc774\ub2e4."),(0,r.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec \uacf3\uc5d0\uc11c \uc4f0\uc774\ub294 \ub85c\uc9c1\uc744 \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud55c\ub2e4.")),(0,r.kt)("h3",{id:"\uc608\uc2dc"},"\uc608\uc2dc"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function withLifeCycleLogging(WrappedComponent){\n    return (props) => {\n        useEffect(() => {\n            console.log("Mount!");\n            return () => console.log("Unmount");\n        }, []);\n        \n        useEffect(() => {\n            console.log("Update!");\n        })\n      \n      return <WrappedComponent {...props} />;\n    }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Component\ub97c \uc778\uc790\ub85c \ub123\uc73c\uba74 LifeCycleLoggin \uae30\ub2a5\uc774 \ucd94\uac00\ub41c Component \ubc18\ud63c")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"reactmemo"},"React.memo"),(0,r.kt)("p",null,"\uc778\uc218\ub85c \uc804\ub2ec\ud55c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uba54\ubaa8\uc774\uc81c\uc774\uc158\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubcc0\ud658\ud558\uc5ec \ubc18\ud658\ud55c\ub2e4."),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\ubc95-2"},"\uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const memoizedComp = React.memo(Comp);\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"usecallback\uc774\ub780"},"useCallback\uc774\ub780?"),(0,r.kt)("p",null,"Component\uac00 \ub9ac\ub80c\ub354\ub418\uc5b4\ub3c4 \ub0b4\ubd80\uc5d0 \uc791\uc131\ub41c \ud568\uc218\ub97c \ub2e4\uc2dc \uc0dd\uc131\ud558\uc9c0 \uc54a\ub3c4\ub85d \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud558\ub294 \ub9ac\uc561\ud2b8 \ud6c5"),(0,r.kt)("h3",{id:"\uc0ac\uc6a9\ubc95-3"},"\uc0ac\uc6a9\ubc95"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const memoizedFunc = useCallback(func, deps)\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"func: \uba54\ubaa8\uc774\uc81c\uc774\uc158\ud560 \ud568\uc218"),(0,r.kt)("li",{parentName:"ul"},"deps: \uc758\uc874\uc131 \ubc30\uc5f4")),(0,r.kt)("h3",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \uc774 \uacbd\uc6b0 state\uac00 \ubcc0\uacbd\ub420 \ub54c\ub9c8\ub2e4 \ud568\uc218\uac00 \uc7ac\uc0dd\uc131\ub418\uc5b4 useCallback\uc774 \uc758\ubbf8\uac00 \uc5c6\ub2e4\nconst onCreate = useCallback(() => {\n    setState([newItem, ...state])\n}, [state])\n\n\n// \uc774 \uacbd\uc6b0 \ud568\uc218\uac00 \ucc98\uc74c \ub9c8\uc6b4\ud2b8\ub420 \ub54c\uc758 state\uac12\uc73c\ub85c \uc9c0\uc815\ub418\uc5b4 \uc788\ub2e4.\n// \ub54c\ubb38\uc5d0 \ud568\uc218 \ub0b4\ubd80\uc758 ...state\ub294 \ud56d\uc0c1 \ucd08\uae30\uac12 state\uc774\ub2e4.\nconst onCreate = useCallback(() => {\n  setState([newItem, ...state])\n}, [])\n\n\n// \ud574\uacb0\ucc45 - \ud568\uc218\ub85c \uc778\uc790\ub97c \uc804\ub2ec\ud558\uba74 \ud56d\uc0c1 \ucd5c\uc2e0\uc758 state\ub97c \ubc18\uc601\ud560 \uc218 \uc788\ub2e4.\nconst onCreate = useCallback(() => {\n  setState((state) => [newItem, ...state])\n}, [])\n")))}p.isMDXComponent=!0}}]);