"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7419],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>m});var t=n(7294);function l(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){l(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,l=function(e,a){if(null==e)return{};var n,t,l={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=t.createContext({}),u=function(e){var a=t.useContext(o),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=u(e.components);return t.createElement(o.Provider,{value:a},e.children)},k="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},h=t.forwardRef((function(e,a){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),k=u(n),h=l,m=k["".concat(o,".").concat(h)]||k[h]||s[h]||i;return n?t.createElement(m,r(r({ref:a},p),{},{components:n})):t.createElement(m,r({ref:a},p))}));function m(e,a){var n=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var o in a)hasOwnProperty.call(a,o)&&(c[o]=a[o]);c.originalType=e,c[k]="string"==typeof e?e:l,r[1]=c;for(var u=2;u<i;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9447:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var t=n(7462),l=(n(7294),n(3905));const i={title:"Cache Abstraction",tag:["backend","spring","cache abstraction"]},r=void 0,c={unversionedId:"web/backend/spring/cache-abstraction/cache-abstraction",id:"web/backend/spring/cache-abstraction/cache-abstraction",title:"Cache Abstraction",description:"\uae00 \ub9c1\ud06c",source:"@site/docs/resource/web/backend/spring/cache-abstraction/cache-abstraction.md",sourceDirName:"web/backend/spring/cache-abstraction",slug:"/web/backend/spring/cache-abstraction/",permalink:"/resource/web/backend/spring/cache-abstraction/",draft:!1,tags:[],version:"current",frontMatter:{title:"Cache Abstraction",tag:["backend","spring","cache abstraction"]},sidebar:"tutorialSidebar",previous:{title:"cache abstraction",permalink:"/resource/category/cache-abstraction"},next:{title:"custom validation",permalink:"/resource/web/backend/spring/constraint-validator"}},o={},u=[{value:"\uae00 \ub9c1\ud06c",id:"\uae00-\ub9c1\ud06c",level:2},{value:"\ub0b4\uc6a9 \uc815\ub9ac",id:"\ub0b4\uc6a9-\uc815\ub9ac",level:2},{value:"1. Cache Abstraction\uc758 \uc774\ud574",id:"1-cache-abstraction\uc758-\uc774\ud574",level:3},{value:"Cache vs Buffer",id:"cache-vs-buffer",level:4},{value:"Cache\uc758 \ubaa9\uc801",id:"cache\uc758-\ubaa9\uc801",level:4},{value:"Cache Abstraction \uc81c\uacf5 \uae30\ub2a5",id:"cache-abstraction-\uc81c\uacf5-\uae30\ub2a5",level:4},{value:"\uc5ec\ub7ec \uc11c\ubc84\uc5d0 App\uc774 \ubc30\ud3ec\ub41c \uacbd\uc6b0 \uace0\ub824\ud560 \uac83\ub4e4",id:"\uc5ec\ub7ec-\uc11c\ubc84\uc5d0-app\uc774-\ubc30\ud3ec\ub41c-\uacbd\uc6b0-\uace0\ub824\ud560-\uac83\ub4e4",level:4},{value:"2. Declarative Annotation-based Caching",id:"2-declarative-annotation-based-caching",level:3},{value:"Spring Cache\uac00 \uc81c\uacf5\ud558\ub294 Java annotations",id:"spring-cache\uac00-\uc81c\uacf5\ud558\ub294-java-annotations",level:4},{value:"@Cacheable",id:"cacheable",level:4},{value:"Default Key Generation",id:"default-key-generation",level:5},{value:"Custom Key Generation Declaration (key value)",id:"custom-key-generation-declaration-key-value",level:5},{value:"Default Cache Resolution",id:"default-cache-resolution",level:5},{value:"Synchronized Caching",id:"synchronized-caching",level:5},{value:"Conditional Caching",id:"conditional-caching",level:5},{value:"Optional \uc9c0\uc6d0",id:"optional-\uc9c0\uc6d0",level:5},{value:"@CachePut",id:"cacheput",level:4},{value:"\uc8fc\uc758\ud560 \uc810",id:"\uc8fc\uc758\ud560-\uc810",level:5},{value:"@CacheEvict",id:"cacheevict",level:4},{value:"@Caching",id:"caching",level:4},{value:"@CacheConfig",id:"cacheconfig",level:4},{value:"3\uac1c\uc758 \uc124\uc815 \ub2e8\uacc4",id:"3\uac1c\uc758-\uc124\uc815-\ub2e8\uacc4",level:5},{value:"Enabling Caching Annotations",id:"enabling-caching-annotations",level:4},{value:"Cache \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\ud560 \uc810",id:"cache-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\ud560-\uc810",level:5},{value:"Using Custom Annotations",id:"using-custom-annotations",level:4}],p={toc:u},k="wrapper";function s(e){let{components:a,...n}=e;return(0,l.kt)(k,(0,t.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\uae00-\ub9c1\ud06c"},"\uae00 \ub9c1\ud06c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/integration/cache.html"},"Cache Abstraction Docs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/core/expressions.html"},"SpEL"))),(0,l.kt)("h2",{id:"\ub0b4\uc6a9-\uc815\ub9ac"},"\ub0b4\uc6a9 \uc815\ub9ac"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Spring Framework\ub294 3.1 version\ubd80\ud130 \uc9c0\uc6d0\uc744 \uc2dc\uc791, 4.1 \ubc84\uc804\uc5d0\uc11c \ud06c\uac8c \ud655\uc7a5\ub418\uc5c8\uc74c")),(0,l.kt)("h3",{id:"1-cache-abstraction\uc758-\uc774\ud574"},"1. Cache Abstraction\uc758 \uc774\ud574"),(0,l.kt)("h4",{id:"cache-vs-buffer"},"Cache vs Buffer"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache\uc640 Buffer \uc6a9\uc5b4\ub294 \uc885\uc885 \uac19\uc740 \uc758\ubbf8\ub85c \uc0ac\uc6a9\ub418\uc9c0\ub9cc \ub450 \uc6a9\uc5b4 \uc0ac\uc774\uc5d0\ub294 \ucc28\uc774\uac00 \uc874\uc7ac\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Buffer\ub294 \ub290\ub9b0 Entity\uc640 \ube60\ub978 Entity \uc0ac\uc774\uc5d0 \ub370\uc774\ud130 \uad50\ud658\uc744 \uc704\ud55c \uc784\uc2dc \uc800\uc7a5\uc18c\uc774\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Producer\uc640 Consumer \uc0ac\uc774\uc5d0 Buffer\ub97c \ub450\uace0 \ub370\uc774\ud130\ub97c \uc313\uc544\uac00 Consumer\uac00 \ub370\uc774\ud130\ub97c \ud070 \ub2e8\uc704\ub85c \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc5ec \uc4f0\uae30/\uc77d\uae30 \uc18d\ub3c4 \ucc28\uc774\uc5d0\uc11c \ubc1c\uc0dd\ud558\ub294 \ubb38\uc81c\ub97c \ud574\uacb0\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Buffer\ub294 \ud55c \ubc88\ub9cc \uc4f0\uac70\ub098 \uc77d\uc744 \uc218 \uc788\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"Cache\ub294 \uc5b4\ub290 \ucabd\ub3c4 Caching\uc774 \ubc1c\uc0dd\ud588\ub2e4\ub294 \uc0ac\uc2e4\uc744 \ubaa8\ub978\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\ub610\ud55c \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \uc5ec\ub7ec \ubc88 \uc77d\uc744 \uc218 \uc788\ub3c4\ub85d \ud558\uc5ec \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubaa9\ud45c\ub85c \ud55c\ub2e4.")))),(0,l.kt)("h4",{id:"cache\uc758-\ubaa9\uc801"},"Cache\uc758 \ubaa9\uc801"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Java \uba54\uc11c\ub4dc\uc5d0 \uce90\uc2f1\uc744 \uc801\uc6a9\ud558\uc5ec \uc2e4\ud589 \ud69f\uc218\ub97c \uc904\uc774\ub294 \uac83\uc774 \ubaa9\uc801\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc\uac00 \uc2e4\ud589\ub41c \uc801\uc774 \uc5c6\ub2e4\uba74 \uba54\uc11c\ub4dc\uac00 \ud638\ucd9c\ub418\uace0 \uadf8 \uacb0\uacfc\uac00 \uce90\uc2dc\ub428"),(0,l.kt)("li",{parentName:"ul"},"\uc774\ud6c4\ub85c \ub3d9\uc77c\ud55c \uc694\uccad\uc774 \ub4e4\uc5b4\uc624\uba74 \uce90\uc2dc \uac12\uc774 \ubc18\ud658\ub418\uc5b4 \uba54\uc11c\ub4dc \uc2e4\ud589\uc73c\ub85c \ubc1c\uc0dd\ud558\ub294 \ube44\uc6a9\uc744 \uc904\uc77c \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub54c\ubb38\uc5d0 \ub3d9\uc77c\ud55c \uc785\ub825\uac12\uc5d0 \ub300\ud574 \ub3d9\uc77c\ud55c \uacb0\uacfc\ub97c \ubc18\ud658\ud558\ub294 \uba54\uc11c\ub4dc\uc5d0\ub9cc \uc801\uc6a9\ub420 \uc218 \uc788\ub2e4.")),(0,l.kt)("h4",{id:"cache-abstraction-\uc81c\uacf5-\uae30\ub2a5"},"Cache Abstraction \uc81c\uacf5 \uae30\ub2a5"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache \ucf58\ud150\uce20 \uc5c5\ub370\uc774\ud2b8 \ubc0f \uc81c\uac70 \uae30\ub2a5\uacfc \uac19\uc740 \uce90\uc2dc \uad00\ub828 \uc791\uc5c5\ub4e4\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8, \uce90\uc2dc \uc11c\ube44\uc2a4\ub294 \uad6c\ud604\uc774 \uc544\ub2c8\ub77c \ucd94\uc0c1\uc774\uae30 \ub54c\ubb38\uc5d0 \ub370\uc774\ud130 \uc800\uc7a5\uc744 \uc704\ud55c \uc2e4\uc81c \uc800\uc7a5\uc18c\ub97c \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Spring\uc5d0\uc11c \uba87 \uac00\uc81c \uad6c\ud604\uc744 \uc81c\uacf5\ud558\uae30\ub3c4 \ud568 (ConcurrentMap \uae30\ubc18 \uce90\uc2dc, Gemfire, Caffeine \ub4f1)"),(0,l.kt)("li",{parentName:"ul"},"\ub610\ud55c Cache Abstraction\uc740 \uba40\ud2f0 \uc2a4\ub808\ub4dc \ubc0f \uba40\ud2f0 \ud504\ub85c\uc138\uc2a4 \ucc98\ub9ac\uac00 \ub530\ub85c \uc5c6\uc5b4 \uc774\ub7ec\ud55c \uae30\ub2a5\uc740 \uce90\uc2dc \uad6c\ud604\uc5d0 \uc758\ud574 \ucc98\ub9ac\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"lock\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc73c\uba70 \uc5ec\ub7ec \uc2a4\ub808\ub4dc\uac00 \ub3d9\uc77c\ud55c \ud56d\ubaa9\uc5d0 \uc77d\uae30/\uc4f0\uae30 \uc791\uc5c5\uc744 \uc704\ud574 \ub3d9\uc2dc\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Cache Abstraction\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c 2\uac00\uc9c0 \uad00\uc810\uc744 \uace0\ub824\ud574\uc57c \ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Caching declaration: \uce90\uc2f1\uc774 \ud544\uc694\ud55c \uba54\uc11c\ub4dc\uc640 \uc815\ucc45\uc744 \ud655\uc778\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Cache configuration: \uce90\uc2dc \ucee8\ud150\uce20\uac00 \uc800\uc7a5\ub418\uace0 \uc77d\uae30 \uc704\ud574 \uc811\uadfc\ud574\uc57c\ud560 \uacf3.")))),(0,l.kt)("h4",{id:"\uc5ec\ub7ec-\uc11c\ubc84\uc5d0-app\uc774-\ubc30\ud3ec\ub41c-\uacbd\uc6b0-\uace0\ub824\ud560-\uac83\ub4e4"},"\uc5ec\ub7ec \uc11c\ubc84\uc5d0 App\uc774 \ubc30\ud3ec\ub41c \uacbd\uc6b0 \uace0\ub824\ud560 \uac83\ub4e4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uace0\uc815 \ub370\uc774\ud130\ub77c\uba74 \uc5ec\ub7ec \uc11c\ubc84\uc5d0 \ub3d9\uc77c\ud55c \ub370\uc774\ud130\ub97c \ubcf5\uc0ac\ud558\uc5ec \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uc2e4\ud589\uc911 \ub370\uc774\ud130\uac00 \ubcc0\ud55c\ub2e4\uba74 \ub2e4\ub978 \ubc29\uc548\uc744 \uace0\ub824\ud574\uc57c \ud55c\ub2e4.")),(0,l.kt)("h3",{id:"2-declarative-annotation-based-caching"},"2. Declarative Annotation-based Caching"),(0,l.kt)("h4",{id:"spring-cache\uac00-\uc81c\uacf5\ud558\ub294-java-annotations"},"Spring Cache\uac00 \uc81c\uacf5\ud558\ub294 Java annotations"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@Cacheable"),": cache \uc0dd\uc131 trigger"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@CacheEvict"),": cache \uc81c\uac70 trigger"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@CachePut"),": method \uc2e4\ud589 \uc5c6\uc774 cache updates\ub97c \uc218\ud589\ud55c\ub2e4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@Caching"),": \uba54\uc11c\ub4dc\uc5d0 \uc5ec\ub7ec \uce90\uc2dc \uc804\ub7b5\uc744 \uc801\uc6a9\ud560 \ub54c \uc0ac\uc6a9\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"@CacheConfig"),": class-level\uc5d0\uc11c cache\uad00\ub828 \uc138\ud305\uc744 \uc801\uc6a9\ud55c\ub2e4.")),(0,l.kt)("h4",{id:"cacheable"},"@Cacheable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// \ub2e8\uc77c Cache \uc801\uc6a9\n@Cacheable("books")\npublic Book findBook(ISBN isbn) {...}\n\n// \ub2e4\uc911 Cache \uc801\uc6a9\n@Cacheable({"books", "isbns"})\npublic Book findBook(ISBN isbn) {...}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@Cacheable \uc5b4\ub178\ud14c\uc774\uc158\uc774 \uc801\uc6a9\ub41c \uba54\uc11c\ub4dc\ub294 \uacb0\uacfc\uac12\uc774 Caching\ub418\uace0 \uc774\ud6c4 \uac19\uc740 \uc694\uccad\uc740 \uba54\uc11c\ub4dc \uc2e4\ud589\uc774 \uc544\ub2cc Cache \ucf58\ud150\uce20\ub97c \ubc18\ud658\ud558\uac8c \ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc989, \ucf58\ud150\uce20 \uc800\uc7a5 \ubc0f \uc870\ud68c \uc5ed\ud560\uc774\ub77c \uc774\ud574\ud558\uba74 \ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc608\uc2dc\ucc98\ub7fc \ub2e8\uc77c/\ub2e4\uc911 Cache \uc801\uc6a9\uc774 \uac00\ub2a5\ud558\uace0 \ub2e4\uc911\uc77c \uacbd\uc6b0 \uc21c\ucc28\uc801\uc73c\ub85c \uc800\uc7a5/\uc870\ud68c\ub97c \uc218\ud589\ud55c\ub2e4.")),(0,l.kt)("h5",{id:"default-key-generation"},"Default Key Generation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache\ub294 key-value \uc800\uc7a5\uc18c\uc774\uae30 \ub54c\ubb38\uc5d0 \uacb0\uacfc\uc5d0 \ub9e4\ud551\ub420 \uc218 \uc788\ub294 Key\uac12\uc774 \ud544\uc694\ud558\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Caching Abstraction\uc740 \uc544\ub798 \uc54c\uace0\ub9ac\uc998\uc744 \uae30\ubc18\uc73c\ub85c \ud55c KeyGenerator\ub97c \ud65c\uc6a9\ud574 Key\ub97c \uc0dd\uc131\ud55c\ub2e4.",(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"parameter\uac00 \uc5c6\uc73c\uba74 SimpleKey.Empty\ub97c \ubc18\ud658"),(0,l.kt)("li",{parentName:"ol"},"1\uac1c\uc758 parameter\uac00 \uc8fc\uc5b4\uc9c0\uba74 instance\ub97c \ubc18\ud658"),(0,l.kt)("li",{parentName:"ol"},"2\uac1c \uc774\uc0c1\uc758 parameter\uac00 \uc8fc\uc5b4\uc9c0\uba74 \ubaa8\ub4e0 parameter\ub97c \uac00\uc9c0\uace0 \uc788\ub294 SimpleKey\ub97c \ubc18\ud658\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc804\ub7b5\uc740 parameter \uc911 \ud558\ub098\uac00 natural key\uc774\uace0 \uc720\ud6a8\ud55c hashCode(), equals() \uba54\uc11c\ub4dc\ub97c \uac00\uc9c4 \uacbd\uc6b0 \uc815\uc0c1 \ub3d9\uc791\ud55c\ub2e4. ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Spring 4.0\ubd80\ud130 equals() \uba54\uc11c\ub4dc\ub3c4 \ud65c\uc6a9\ud558\uae30 \uc2dc\uc791"))),(0,l.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 \ubc29\uc2dd\uc744 \ubc14\uafd4\uc57c \ud55c\ub2e4.")),(0,l.kt)("h5",{id:"custom-key-generation-declaration-key-value"},"Custom Key Generation Declaration (key value)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable("books")\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ub2e4\uc911 parameter \uc911 \uc77c\ubd80\ub9cc Cache Key\uc5d0 \uc801\ud569\ud558\ub2e4\uba74 \uba87\uba87 parameter\ub97c Cache Key\ub85c \ud2b9\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc608\uc2dc\ucc98\ub7fc 2, 3\ubc88\uc9f8 parameter\ub294 boolean\uc73c\ub85c Key\uc5d0\ub294 \uc801\ud569\ud558\uc9c0 \uc54a\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="books", key="#isbn")\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n\n@Cacheable(cacheNames="books", key="#isbn.rawNumber")\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n\n@Cacheable(cacheNames="books", key="T(someType).hash(#isbn)")\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \uc0c1\ud669\uc5d0\uc11c \uc704 \ucf54\ub4dc\ucc98\ub7fc ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," value\ub97c \ud1b5\ud574 Key \uc0dd\uc131 \ubc29\uc2dd\uc744 \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/core/expressions.html"},"SpEL"),"\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 Key\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="books", keyGenerator="myKeyGenerator")\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Key \uc0dd\uc131 \ubc29\uc2dd\uc774 \ubcf5\uc7a1\ud558\uac70\ub098 \uacf5\uc720\ub420 \ud544\uc694\uac00 \uc788\uc744 \uacbd\uc6b0 KeyGenerator\ub97c \uc815\uc758\ud558\uace0 ",(0,l.kt)("inlineCode",{parentName:"li"},"keyGenerator")," value\ub97c \ud1b5\ud574 \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"key"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"li"},"keyGenerator"),"\ub294 \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.")),(0,l.kt)("h5",{id:"default-cache-resolution"},"Default Cache Resolution"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache Abstraction\uc740 \uad6c\uc131\ub41c CacheManager\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc815\uc758\ub41c Cache\ub97c \uac80\uc0c9\ud558\ub294 \uac04\ub2e8\ud55c CacheResolver\ub97c \uc0ac\uc6a9\ud55c\ub2e4. (\ub9e4 \uc694\uccad\ub9c8\ub2e4 \uc0ac\uc6a9\ub428)"),(0,l.kt)("li",{parentName:"ul"},"Custom Cache Resolver\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 ",(0,l.kt)("inlineCode",{parentName:"li"},"org.springframework.cache.interceptor.CacheResolver")," \uad6c\ud604\uccb4\ub97c \ub9cc\ub4e4\uba74 \ub41c\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="books", cacheManager="anotherCacheManager") \npublic Book findBook(ISBN isbn) {...}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cacheManager")," value\ub97c \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 CacheManager\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheResolver="runtimeCacheResolver") \npublic Book findBook(ISBN isbn) {...}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cacheResolver")," value\ub97c \ud65c\uc6a9\ud574 \uc6d0\ud558\ub294 CacheResolver \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"cacheManager"),"\uc640 ",(0,l.kt)("inlineCode",{parentName:"li"},"cacheResolver")," \ub610\ud55c \ub3d9\uc2dc\uc5d0 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\ub2e4.")),(0,l.kt)("h5",{id:"synchronized-caching"},"Synchronized Caching"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\ucd08\ubc18\uc5d0 \uc5b8\uae09\ud588\ub4ef\uc774 Cache Abstraction\uc740 lock\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub610\ud55c \ub3d9\uc77c\ud55c \uac12\uc774 \uc5ec\ub7ec \ubc88 \uacc4\uc0b0\ub418\uc5b4 Caching\uc774 \ubb34\uc758\ubbf8\ud574\uc9c8 \uc218 \uc788\ub2e4.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="foos", sync=true) \npublic Foo executeExpensiveOperation(String id) {...}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7ec\ud55c \uc0c1\ud669\uc5d0\uc11c ",(0,l.kt)("inlineCode",{parentName:"li"},"sync=true"),"\ub97c \ud1b5\ud574 \ub3d9\uae30\ud654\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8, \uce90\uc2dc \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \uc774\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc744 \uc218\ub3c4 \uc788\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Spring \uc81c\uacf5 \ub77c\uc774\ube0c\ub7ec\ub9ac\ub294 \ubaa8\ub450 \uc9c0\uc6d0\ud568.")))),(0,l.kt)("h5",{id:"conditional-caching"},"Conditional Caching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="book", condition="#name.length() < 32", unless="#result == null") \npublic Book findBook(String name) {}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"booelan\uc744 \ubc18\ud658\ud558\ub294 ",(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/core/expressions.html"},"SpEL")," \ud45c\ud604\uc2dd\uc744 \uc0ac\uc6a9\ud558\uba74 parameter\uc5d0 \ub530\ub77c \uc870\uac74\ubd80\ub85c Cache\ub97c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"condition")," value\ub97c \uc0ac\uc6a9"),(0,l.kt)("li",{parentName:"ul"},"true -> Cache \uc801\uc6a9, false -> Cache \ubbf8\uc801\uc6a9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"unless")," value\ub97c \ud65c\uc6a9\ud574 Cache\uc5d0 Data \uc800\uc7a5\uc774 \uc548 \ub418\ub3c4\ub85d \uc124\uc815\ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc608\uc2dc\uc5d0\uc11c\ub294 \uacb0\uacfc\uac12\uc774 null\uc77c \uacbd\uc6b0 Data \uc800\uc7a5\uc744 \ud558\uc9c0 \uc54a\ub294 \uac83\uc744 \uc758\ubbf8\ud55c\ub2e4."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/reference/integration/cache/annotations.html#cache-spel-context"},"Available Caching SpEL Evaluation Context"))),(0,l.kt)("h5",{id:"optional-\uc9c0\uc6d0"},"Optional \uc9c0\uc6d0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache Abstraction\uc740 Optional\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Optional \uac12\uc5d0 \ub530\ub77c isPresent()\uac00 true\ub77c\uba74 value\uac00, \uc544\ub2c8\ub77c\uba74 null\uc774 \uc800\uc7a5\ub41c\ub2e4.")),(0,l.kt)("h4",{id:"cacheput"},"@CachePut"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@CachePut(cacheNames="book", key="#isbn")\npublic Book updateBook(ISBN isbn, BookDescriptor descriptor)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uc2e4\ud589 \uc5c6\uc774 Cache update\ub97c \uc6d0\ud560 \ub54c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 annotation\uc774\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"@CachePut\uc774 \ubd99\uc740 \uba54\uc11c\ub4dc\ub294 \ud56d\uc0c1 \uc2e4\ud589\ub418\uace0, \ud56d\uc0c1 \uacb0\uacfc\uac00 Cache\uc5d0 \uc800\uc7a5\ub41c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"@Cacheable\uc5d0 \uc0ac\uc6a9\ub418\ub294 \uc635\uc158\uc744 \ub3d9\uc77c\ud558\uac8c \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucd5c\uc801\ud654\ub97c \ubaa9\uc801\uc73c\ub85c \ud558\uae30 \ubcf4\ub2e4\ub294 Cache \uc0dd\uc131\uc744 \ubaa9\uc801\uc73c\ub85c \ud558\ub294 annotation\uc774\ub2e4.")),(0,l.kt)("h5",{id:"\uc8fc\uc758\ud560-\uc810"},"\uc8fc\uc758\ud560 \uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"@CachePut\uacfc @Cacheable\uc744 \ub3d9\uc77c\ud55c \uba54\uc11c\ub4dc\uc5d0 \uc0ac\uc6a9\ud558\ub294 \uac83\uc740 \uad8c\uc7a5\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ub2e8\uc21c\ud788 \uc0dd\uac01\ud574\ubd10\ub3c4 \ud558\ub098\ub294 \uce90\uc2dc \uc801\uc6a9\uc744 \uc704\ud55c \uac70\uace0... ")),(0,l.kt)("h4",{id:"cacheevict"},"@CacheEvict"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@CacheEvict(cacheNames="books", allEntries=true) \npublic void loadBooks(InputStream batch)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Cache \uc800\uc7a5\uc18c\uc5d0\uc11c \uc624\ub798\ub418\uac70\ub098 \uc0ac\uc6a9\ub418\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub97c \uc81c\uac70\ud558\ub294\ub370 \uc0ac\uc6a9\ub418\ub294 annotation"),(0,l.kt)("li",{parentName:"ul"},"\ud574\ub2f9 annotation\uc774 \ub3d9\uc791\ud560 \uc218 \uc788\ub3c4\ub85d 1\uac1c \uc774\uc0c1\uc758 \uc800\uc7a5\uc18c\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc5b4\uc57c \ud558\uace0 key resolution, condition\ub4f1 \ucd94\uac00 \uc124\uc815 \uc635\uc158\uc744 \uc9c0\uc6d0\ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\uc2dc\uc758 allEntries\uc758 \uacbd\uc6b0 \uc800\uc7a5\uc18c\uc758 \ubaa8\ub4e0 \ub370\uc774\ud130\ub97c \uc0ad\uc81c\ud558\ub294 \uc635\uc158\uc774\ub2e4. (\ub2f9\uc5f0\ud558\uac8c\ub3c4 \uc9c0\uc815\ub41c key \ubb34\uc2dc\ud568)"),(0,l.kt)("li",{parentName:"ul"},"beforeInvocation \uc124\uc815\uc744 \ud1b5\ud574 Evict \uc2dc\uc810\uc744 \uba54\uc11c\ub4dc \uc2e4\ud589 \uc774\uc804\uc73c\ub85c \uc801\uc6a9\ud560 \uc218\ub3c4 \uc788\ub2e4. (Default\ub294 \uba54\uc11c\ub4dc \uc2e4\ud589 \ud6c4)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uba54\uc11c\ub4dc \uacb0\uacfc\uc640 \ubb34\uad00\ud558\uac8c Evict\ub97c \uc2e4\ud589\ud558\uace0 \uc2f6\ub2e4\uba74 \uc720\uc6a9\ud558\ub2e4"))),(0,l.kt)("li",{parentName:"ul"},"void \uba54\uc11c\ub4dc\uc640 \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud558\ub2e4.")),(0,l.kt)("h4",{id:"caching"},"@Caching"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Caching(evict = { @CacheEvict("primary"), @CacheEvict(cacheNames="secondary", key="#p0") })\npublic Book importBooks(String deposit, Date date)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc5ec\ub7ec\uac1c\uc758 \ub3d9\uc77c\ud55c Cache annotation\uc744 \ub2e8\uc77c \uba54\uc11c\ub4dc\uc5d0 \uc0ac\uc6a9\ud574\uc57c \ud560 \uacbd\uc6b0 \ud65c\uc6a9\ud560 \uc218 \uc788\ub2e4.")),(0,l.kt)("h4",{id:"cacheconfig"},"@CacheConfig"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@CacheConfig("books") \npublic class BookRepositoryImpl implements BookRepository {\n\n    @Cacheable\n    public Book findBook(ISBN isbn) {...}\n}\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc77c\ubd80 \uc635\uc158\uc758 \uacbd\uc6b0 Class \ub0b4\uc758 \ubaa8\ub4e0 Cache\uad00\ub828 \uc791\uc5c5\uc5d0 \uc801\uc6a9\ub418\uc5b4\uc57c \ud560 \uc218\ub3c4 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc608\ub97c \ub4e4\uc5b4 \uc704 \uc608\uc2dc\ucc98\ub7fc Cache Name\uc744 Class \ub2e8\uc704\ub85c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774 \uc678\uc5d0\ub3c4 CacheManager, KeyGenerator, CacheResolver\ub97c Class \ub2e8\uc704\ub85c \uc9c0\uc815\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"operation-level(@CacheEvict \ub4f1)\uc758 \uc124\uc815\uc740 CacheConfig\uc758 \uc124\uc815\uc744 \ub36e\uc5b4\uc4f4\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ucd94\uac00\ub85c Cache \uad6c\ud604\uccb4 \uc124\uc815\uc758 \uacbd\uc6b0 CacheManager bean\uc5d0\uc11c \ud560 \uc218 \uc788\uace0 \ud56d\uc0c1 global\ud558\uac8c \uc801\uc6a9\ub41c\ub2e4.")),(0,l.kt)("h5",{id:"3\uac1c\uc758-\uc124\uc815-\ub2e8\uacc4"},"3\uac1c\uc758 \uc124\uc815 \ub2e8\uacc4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Global Level: CachingConfigurer"),(0,l.kt)("li",{parentName:"ol"},"Class Level: @CacheConfig"),(0,l.kt)("li",{parentName:"ol"},"Operation Level: @CachePut, @CacheEvict \ub4f1")),(0,l.kt)("h4",{id:"enabling-caching-annotations"},"Enabling Caching Annotations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration\n@EnableCaching\npublic class AppConfig {\n\n    @Bean\n    CacheManager cacheManager() {\n        CaffeineCacheManager cacheManager = new CaffeineCacheManager();\n        cacheManager.setCacheSpecification(...);\n        return cacheManager;\n    }\n}\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configuration class\ub4e4 \uc911 \ud55c \uacf3\uc5d0 @EnableCaching\ub97c \ucd94\uac00\ud558\uc5ec Cache\ub97c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\ubc18\ub300\ub85c @EnableCaching\ub97c \uc81c\uac70\ud558\uba74 \ubaa8\ub4e0 Cache \ub3d9\uc791\uc740 \uba48\ucd94\uac8c \ub41c\ub2e4.")),(0,l.kt)("h5",{id:"cache-\uc0ac\uc6a9-\uc2dc-\uc8fc\uc758\ud560-\uc810"},"Cache \uc0ac\uc6a9 \uc2dc \uc8fc\uc758\ud560 \uc810"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"public \uba54\uc11c\ub4dc\uc5d0\ub9cc Cache annotation\uc744 \uc801\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uadf8 \uc774\uc720\ub294 protected, private, package-private\uc758 \uacbd\uc6b0 \uc624\ub958\ub294 \ubc29\uc0dd\ud558\uc9c0 \uc54a\uc9c0\ub9cc \uad6c\uc131\ub41c \uce90\uc2dc \uc124\uc815\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"Concrete class\uc5d0\ub9cc Cache annotation\uc744 \uc0ac\uc6a9\ud560 \uac83, \ub9cc\uc57d interface\uc5d0 \uc0ac\uc6a9\ud560 \uac70\ub77c\uba74 \ud504\ub85d\uc2dc \ubaa8\ub4dc\ub97c aspectj\uac00 \uc544\ub2cc proxy\ub85c \uc124\uc815\ud574\uc57c \ud55c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"interface\uc5d0 \uc0ac\uc6a9\ud560 \uc77c\uc774 \uc0dd\uae30\uba74 \ub354 \uc54c\uc544\ubd10\uc57c\uaca0\uc74c"))),(0,l.kt)("li",{parentName:"ul"},"Proxy \ubaa8\ub4dc(default)\uc5d0\uc11c\ub294 Proxy\ub97c \ud1b5\ud574\uc11c \ub4e4\uc5b4\uc628 \uc694\uccad\uc5d0\ub9cc Cache annotation\uc774 \uc801\uc6a9\ub41c\ub2e4.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc989, \uac1d\uccb4 \ub0b4\ubd80\uc5d0\uc11c \uc0ac\uc6a9\ud55c \uba54\uc11c\ub4dc\uc758 \uacbd\uc6b0 Cache annotation\uc774 \uc801\uc6a9\ub418\uc5b4 \uc788\uc5b4\ub3c4 \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,l.kt)("li",{parentName:"ul"},"\uc774\ub7f0 \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ub294 \uacbd\uc6b0 aspectj\ubaa8\ub4dc\ub97c \uace0\ub824\ud574\ubcfc \uac83"))),(0,l.kt)("li",{parentName:"ul"},"\ub610\ud55c Cache annotation\uc774 \uc815\uc0c1 \ub3d9\uc791\ud558\ub824\uba74 \ud504\ub85d\uc2dc\uac00 \uc644\uc804\ud788 \ucd08\uae30\ud654 \ub418\uc5b4\uc57c \ud568.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\uc989, \ucd08\uae30\ud654 \uacfc\uc815\uc5d0\uc11c Cache \uae30\ub2a5\uc744 \uc774\uc6a9\ud560 \uc0dd\uac01\uc740 \ud558\uc9c0 \ub9d0\uc544\uc57c....")))),(0,l.kt)("h4",{id:"using-custom-annotations"},"Using Custom Annotations"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'@Retention(RetentionPolicy.RUNTIME)\n@Target({ElementType.METHOD})\n@Cacheable(cacheNames="books", key="#isbn")\npublic @interface SlowService {\n}\n\n@SlowService\npublic Book findBook(ISBN isbn, boolean checkWarehouse, boolean includeUsed)\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\uc704 \uc608\uc2dc\ucc98\ub7fc Custom Annotation\uc744 \ud65c\uc6a9\ud574\uc11c\ub3c4 Cache\ub97c \uc801\uc6a9\ud560 \uc218 \uc788\ub2e4.")))}s.isMDXComponent=!0}}]);