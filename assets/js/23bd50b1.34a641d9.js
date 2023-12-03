"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5918],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7171:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={title:"redis support",sidebar_position:1,tag:["backend","spring","spring data redis"]},l=void 0,s={unversionedId:"web/backend/spring/spring-data-redis/redis-support",id:"web/backend/spring/spring-data-redis/redis-support",title:"redis support",description:"01. \uc2dc\uc791\ud558\uae30",source:"@site/docs/resource/web/backend/spring/spring-data-redis/redis-support.md",sourceDirName:"web/backend/spring/spring-data-redis",slug:"/web/backend/spring/spring-data-redis/redis-support",permalink:"/resource/web/backend/spring/spring-data-redis/redis-support",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"redis support",sidebar_position:1,tag:["backend","spring","spring data redis"]},sidebar:"tutorialSidebar",previous:{title:"spring data redis",permalink:"/resource/category/spring-data-redis"},next:{title:"stopwatch",permalink:"/resource/web/backend/spring/stopwatch"}},o={},p=[{value:"01. \uc2dc\uc791\ud558\uae30",id:"01-\uc2dc\uc791\ud558\uae30",level:2},{value:"02. Redis Connection",id:"02-redis-connection",level:2},{value:"\uc0ac\uc6a9 \uac00\ub2a5\ud55c Redis Connector library",id:"\uc0ac\uc6a9-\uac00\ub2a5\ud55c-redis-connector-library",level:3},{value:"03. RedisTemplate",id:"03-redistemplate",level:2},{value:"04. \ubb38\uc790\uc5f4 \uc911\uc2ec\uc758 \ud3b8\uc758 \ud074\ub798\uc2a4\ub4e4",id:"04-\ubb38\uc790\uc5f4-\uc911\uc2ec\uc758-\ud3b8\uc758-\ud074\ub798\uc2a4\ub4e4",level:2},{value:"RedisCallback",id:"rediscallback",level:3},{value:"05.  Hash \ub9e4\ud551",id:"05--hash-\ub9e4\ud551",level:2},{value:"Hash Mappers",id:"hash-mappers",level:3},{value:"06. Redis Messaging",id:"06-redis-messaging",level:2},{value:"07. Redis Streams",id:"07-redis-streams",level:2},{value:"08. Redis Transactions",id:"08-redis-transactions",level:2},{value:"@Transactional",id:"transactional",level:3},{value:"09. Pipelining",id:"09-pipelining",level:2},{value:"10. Redis Scripting",id:"10-redis-scripting",level:2},{value:"11. Redis Cache",id:"11-redis-cache",level:2},{value:"12. \uc9c0\uc6d0 Class\ub4e4",id:"12-\uc9c0\uc6d0-class\ub4e4",level:2},{value:"13. Observability",id:"13-observability",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2},{value:"Reference",id:"reference",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(d,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"01-\uc2dc\uc791\ud558\uae30"},"01. \uc2dc\uc791\ud558\uae30"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-gradle"},"dependencies {\n    implementation 'org.springframework.data:spring-data-redis'\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ud68c\uc0ac \uc9c0\uc6d0 spring boot version\uc774 3.0.11\uc774\uc5ec\uc11c \ud574\ub2f9 \ubc84\uc804 docs\uc774\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc694\uad6c \uc870\uac74",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"JDK 17 \uc774\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"Spring Framework 6.0.13 \uc774\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"Redis 2.6 \uc774\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"Lettuce \ub610\ub294 Jedis open-source \uc774\uc6a9\ud558\uc5ec")))),(0,i.kt)("h2",{id:"02-redis-connection"},"02. Redis Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis\ub97c \uc0ac\uc6a9\ud558\uae30 \uc704\ud574\uc11c \uac00\uc7a5 \uba3c\uc800 \ud560 \uc77c\uc740 IoC container\ub97c \ud1b5\ud574 Redis \uc800\uc7a5\uc18c\uc640 Connection\uc744 \ub9fa\ub294 \uac83\uc774\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774\ub97c \uc704\ud574 ",(0,i.kt)("inlineCode",{parentName:"li"},"RedisConnection"),"\uacfc ",(0,i.kt)("inlineCode",{parentName:"li"},"RedisConnectionFactory")," \uac1d\uccb4\uac00 \ud544\uc694\ud55c\ub370 \ud6c4\uc790\ub294 \uc804\uc790\ub97c \uc0dd\uc131\ud558\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RedisConnectionFactory"),"\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"PersistenceExceptionTranslator")," \uac1d\uccb4 \uc5ed\ud560\ub3c4 \ud55c\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Redis \uc5d0\ub7ec\ub97c Spring \uc77c\ubc18 \uc5d0\ub7ec\ub85c \ubcc0\ud658\ud558\ub294 \uc5ed\ud560"))),(0,i.kt)("li",{parentName:"ul"},"\ub3d9\uc2dc\uc131 \uad00\ub828",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RedisConnection\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uc2a4\ub808\ub4dc \uc548\uc804\ud558\uc9c0 \uc54a\ub2e4. \ub54c\ubb38\uc5d0 \uc5ec\ub7ec Thread\uc5d0\uc11c RedisConnection \uc778\uc2a4\ud134\uc2a4\ub97c \uacf5\uc720\ud558\uba74 \uc548 \ub41c\ub2e4. \ub610\ud55c \ud2b8\ub79c\uc7ad\uc158 \ub0b4\uc5d0\uc11c RedisConnection\uc744 \uc0ac\uc6a9\ud558\ub354\ub77c\ub3c4 \uc774 \uac1d\uccb4\ub294 \ubcc0\uacbd \uac00\ub2a5\ud55c \uc0c1\ud0dc\uc774\ub2e4. (\uc758\ub3c4\ub41c \ub514\uc790\uc778\uc784)"),(0,i.kt)("li",{parentName:"ul"},"Redis \ub9ac\uc18c\uc2a4\ub97c \uacf5\uc720\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 native connection\uc744 \uc5bb\uace0 Redis client library API\ub97c \uc9c1\uc811 \uc0ac\uc6a9\ud574\uc57c \ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc544\ub2c8\uba74 ",(0,i.kt)("inlineCode",{parentName:"li"},"RedisTemplate"),"\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\ub3c4 \ubc29\ubc95\uc774\ub2e4.")))),(0,i.kt)("h3",{id:"\uc0ac\uc6a9-\uac00\ub2a5\ud55c-redis-connector-library"},"\uc0ac\uc6a9 \uac00\ub2a5\ud55c Redis Connector library"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vs.jpg",src:t(557).Z,width:"2060",height:"1782"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis \uad6c\uc870\uc5d0 \ub530\ub77c Config \uc124\uc815 \ubc29\ubc95\uc774 \ub2ec\ub77c\uc9c4\ub2e4",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc77c Store"),(0,i.kt)("li",{parentName:"ul"},"Sentinel"),(0,i.kt)("li",{parentName:"ul"},"Master - Replica"),(0,i.kt)("li",{parentName:"ul"},"Cluster")))),(0,i.kt)("h2",{id:"03-redistemplate"},"03. RedisTemplate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration  \nclass MyConfig {  \n  \n    @Bean  \n    LettuceConnectionFactory redisConnectionFactory() {  \n        return new LettuceConnectionFactory();  \n    }  \n      \n    @Bean  \n    RedisTemplate<String, String> redisTemplate(RedisConnectionFactory redisConnectionFactory) {  \n      \n    RedisTemplate<String, String> template = new RedisTemplate<>();  \n        template.setConnectionFactory(redisConnectionFactory);  \n        return template;  \n    }  \n}  \n  \npublic class Example {  \n  \n    // inject the actual template  \n    @Autowired  \n    private RedisTemplate<String, String> template;  \n      \n    // inject the template as ListOperations  \n    @Resource(name="redisTemplate")  \n    private ListOperations<String, String> listOps;  \n      \n    public void addLink(String userId, URL url) {  \n        listOps.leftPush(userId, url.toExternalForm());  \n    }  \n}  \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RedisConnection\uc740 \ubc14\uc774\ub108\ub9ac \uac12\uc744 \ubc1b\uc544\ub4e4\uc774\uace0 \ubc18\ud658\ud558\ub294 \uc800\uc218\uc900 \uba54\uc11c\ub4dc\ub9cc\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc RedisTemplate\ub97c \ud65c\uc6a9\ud558\uba74 \uac1d\uccb4 \uc218\uc900\uc5d0\uc11c Redis\ub97c \ud3b8\ub9ac\ud558\uac8c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"RedisTemplate\uc744 \uad6c\uc131\ud558\uba74 thread-safe\ud558\uba70 \uc5ec\ub7ec \uc778\uc2a4\ud134\uc2a4\uc5d0\uc11c \uc7ac\uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"RedisTemplate\uc5d0\uc11c \uc77d\uace0 \uc4f0\ub294 \uac1d\uccb4\ub294 Java\ub97c \ud1b5\ud574 \uc5ed/\uc9c1\uc5f4\ud654 \ub41c\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc124\uc815\uc744 \ud1b5\ud574 RedisTemplate\uc640 \uc6d0\uc2dc \ubc14\uc774\ud2b8 \ubc30\uc5f4\uc744 \ud568\uaed8 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4.")))),(0,i.kt)("h2",{id:"04-\ubb38\uc790\uc5f4-\uc911\uc2ec\uc758-\ud3b8\uc758-\ud074\ub798\uc2a4\ub4e4"},"04. \ubb38\uc790\uc5f4 \uc911\uc2ec\uc758 \ud3b8\uc758 \ud074\ub798\uc2a4\ub4e4"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Configuration  \nclass MyConfig {  \n  \n    @Bean  \n    LettuceConnectionFactory redisConnectionFactory() {  \n        return new LettuceConnectionFactory();  \n    }  \n  \n    @Bean  \n    StringRedisTemplate stringRedisTemplate(RedisConnectionFactory redisConnectionFactory) {  \n  \n    StringRedisTemplate template = new StringRedisTemplate();  \n    template.setConnectionFactory(redisConnectionFactory);  \n    return template;  \n    }  \n}  \n  \npublic class Example {  \n  \n    @Autowired  \n    private StringRedisTemplate redisTemplate;  \n      \n    public void addLink(String userId, URL url) {  \n        redisTemplate.opsForList().leftPush(userId, url.toExternalForm());  \n    }  \n}  \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis\uc5d0 \uc800\uc7a5\ub41c key/value\ub294 String\uc778 \uacbd\uc6b0\uac00 \uc77c\ubc18\uc801\uc774\ub77c String \ud3b8\uc758 \ud074\ub798\uc2a4\ub97c \uc81c\uacf5\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StringRedisConnection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StringRedisTemplate"))),(0,i.kt)("h3",{id:"rediscallback"},"RedisCallback"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public void useCallback() {  \n  \n    redisTemplate.execute(new RedisCallback<Object>() {  \n        public Object doInRedis(RedisConnection connection) throws DataAccessException {  \n            Long size = connection.dbSize();  \n            // Can cast to StringRedisConnection if using a StringRedisTemplate  \n            ((StringRedisConnection)connection).set("key", "value");  \n        }  \n    });  \n}  \n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RedisCallback\uc744 \uc774\uc6a9\ud558\uba74 Redis\uc640 \uc9c1\uc811\uc801\uc73c\ub85c \ud1b5\uc2e0\uc774 \uac00\ub2a5\ud558\ub2e4. (\uc644\uc804\ud55c \uc81c\uc5b4\uad8c\uc744 \uac00\uc9c0\uac8c \ub428)"),(0,i.kt)("li",{parentName:"ul"},"\ub2e8, ",(0,i.kt)("inlineCode",{parentName:"li"},"StringRedisTemplate"),"\uc744 \uc0ac\uc6a9\ud560 \uacbd\uc6b0 ",(0,i.kt)("inlineCode",{parentName:"li"},"StringRedisConnection"),"\uc744 \uac70\uce58\uac8c \ub428")),(0,i.kt)("h2",{id:"05--hash-\ub9e4\ud551"},"05.  Hash \ub9e4\ud551"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Redis Hash \uad6c\uc870\ub97c \uc774\uc6a9\ud560 \uacbd\uc6b0 \ub9e4\ud551\uc744 \uc704\ud55c \ub3d9\uc791\uc774 \ud544\uc694\ud574\uc9c4\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Spring Data Redis\ub294 Hash \ub9e4\ud551 \uc704\ud55c \ub2e4\uc591\ud55c \uc804\ub7b5\uc744 \uc81c\uacf5\ud568.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"HashOperation, serializer\uc744 \ud1b5\ud55c \uc9c1\uc811 \ub9e4\ud551"),(0,i.kt)("li",{parentName:"ul"},"Redis Repositories \uc774\uc6a9\ud558\uae30"),(0,i.kt)("li",{parentName:"ul"},"HashMapper, HashOperation \uc774\uc6a9\ud558\uae30")))),(0,i.kt)("h3",{id:"hash-mappers"},"Hash Mappers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BeanUtilsHashMapper"),"\xa0using Spring\u2019s\xa0",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/6.0.13/javadoc-api/org/springframework/beans/BeanUtils.html"},"BeanUtils"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ObjectHashMapper"),"\xa0using\xa0",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data/redis/docs/3.0.11/reference/html/#redis.repositories.mapping"},"Object-to-Hash Mapping"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data/redis/docs/3.0.11/reference/html/#redis.hashmappers.jackson2"},(0,i.kt)("inlineCode",{parentName:"a"},"Jackson2HashMapper")),"\xa0using\xa0",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FasterXML/jackson"},"FasterXML Jackson"),".")),(0,i.kt)("h2",{id:"06-redis-messaging"},"06. Redis Messaging"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JMS Integration\uacfc \uc720\uc0ac\ud55c Messaging \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4 (Pub/Sub)"),(0,i.kt)("li",{parentName:"ul"},"\ub098\uc911\uc5d0 \ud544\uc694\ud560 \ub54c \uc54c\uc544\ubcf4\uc790.")),(0,i.kt)("h2",{id:"07-redis-streams"},"07. Redis Streams"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub85c\uadf8 \ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\uace0 \uc18c\ube44\ud558\ub294 \uae30\ub2a5 \ub610\ud55c \uc81c\uacf5\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"6\ubc88 Redis Messaging\uacfc \uc720\uc0ac\ud558\uc9c0\ub9cc Message\uc758 \uc601\uc18d\uc131\uacfc Consume \ubc29\uc2dd\uc5d0\uc11c \ucc28\uc774\uc810\uc774 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc774 \ub610\ud55c \ud544\uc694\ud560 \ub54c\ub85c \uacf5\ubd80\ub97c \ubbf8\ub8e8\uc790.")),(0,i.kt)("h2",{id:"08-redis-transactions"},"08. Redis Transactions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"RedisTemplate\uc758 ",(0,i.kt)("inlineCode",{parentName:"li"},"multi"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"exec"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"discard")," command\ub97c \ud1b5\ud574 Transaction \uae30\ub2a5\uc744 \uc81c\uacf5\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\ud558\uc9c0\ub9cc RedisTemplate\uc774 \ub3d9\uc77c\ud55c Connection\uc73c\ub85c \ubaa8\ub4e0 \uc5f0\uc0b0\uc5d0 Transaction\uc744 \uc218\ud589\ud558\ub294 \uac78 \ubcf4\uc7a5\ud558\uc9c0\ub294 \uc54a\ub294\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'//execute a transaction  \nList<Object> txResults = redisTemplate.execute(new SessionCallback<List<Object>>() {  \n    public List<Object> execute(RedisOperations operations) throws DataAccessException {  \n        operations.multi();  \n        operations.opsForSet().add("key", "value1");  \n          \n        // This will contain the results of all operations in the transaction  \n        return operations.exec();  \n    }  \n});  \n\nSystem.out.println("Number of items added to set: " + txResults.get(0));  \n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SessionCallback"),"\uc744 \uc774\uc6a9\ud558\uba74 \uc5ec\ub7ec operation\uc744 \ub3d9\uc778\ud55c connection\uc73c\ub85c \uc218\ud589\ud568\uc744 \ubcf4\uc7a5\ud560 \uc218 \uc788\ub2e4.")),(0,i.kt)("h3",{id:"transactional"},"@Transactional"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Configuration  \n@EnableTransactionManagement  \npublic class RedisTxContextConfiguration {  \n      \n    @Bean  \n    public StringRedisTemplate redisTemplate() {  \n        StringRedisTemplate template = new StringRedisTemplate(redisConnectionFactory());  \n        // explicitly enable transaction support  \n        template.setEnableTransactionSupport(true);  \n        return template;  \n    }  \n      \n    @Bean  \n    public RedisConnectionFactory redisConnectionFactory() {  \n    // jedis || Lettuce  \n    }  \n      \n    @Bean  \n    public PlatformTransactionManager transactionManager() throws SQLException {  \n        return new DataSourceTransactionManager(dataSource());  \n    }  \n      \n    @Bean  \n    public DataSource dataSource() throws SQLException {  \n    // ...  \n    }  \n}  \n  \n// 1. Configures a Spring Context to enable declarative transaction management.  \n// 2. Configures RedisTemplate to participate in transactions by binding connections to the current thread.  \n// 3. Transaction management requires a PlatformTransactionManager. Spring Data Redis does not ship with a PlatformTransactionManager implementation. Assuming your application uses JDBC, Spring Data Redis can participate in transactions by using existing transaction managers.  \n  \n// Usage Constraints  \n// must be performed on thread-bound connection  \ntemplate.opsForValue().set("thing1", "thing2");  \n  \n// read operation must be run on a free (not transaction-aware) connection  \ntemplate.keys("*");  \n  \n// returns null as values set within a transaction are not visible  \ntemplate.opsForValue().get("thing1");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uae30\ubcf8\uc801\uc73c\ub85c RedisTemplate\ub294 Spring Transaction\uc5d0 \uc5f0\ub3d9\ud558\uc5ec \ub3d9\uc791\ud558\uc9c0 \uc54a\ub294\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"@Transaction"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"TransactionTemplate"),"\uc744 \uc0ac\uc6a9\ud558\ub824\uba74 RedisTemplate\uc5d0 setEnableTransactionSupport(true) \uc124\uc815\uc744 \ud574\uc918\uc57c \ud55c\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc124\uc815\uc744 \ud558\uba74 RedisConnection\uacfc \ud604\uc7ac \uc0ac\uc6a9 \uc911\uc778 ThreadLocal\uc744 \uc5f0\ub3d9\ud55c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uc624\ub958 \uc5c6\uc774 \uc644\ub8cc\ub418\uc5c8\uc744 \ub54c Redis transaction\uc740 EXEC\uc640 \ud568\uaed8 commit\ub418\uace0 \uadf8\ub807\uc9c0 \uc54a\ub2e4\uba74 DISCARD\ub85c \ub864\ubc31\ub41c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"Transaction \uc911\uc5d0 \uc2e4\ud589\ub41c \uba85\ub839\uc740 \ud050\uc5d0 \ub300\uae30\ud558\uace0 \ud2b8\ub79c\uc7ad\uc158\uc744 \ucee4\ubc0b\ud560 \ub54c\ub9cc \uc801\uc6a9\ub41c\ub2e4."))),(0,i.kt)("li",{parentName:"ul"},"Spring Data Redis\ub294 Transaction \uc911\uc5d0 \uc77d\uae30 \uba85\ub839\uacfc \uc4f0\uae30 \uba85\ub839\uc744 \ubd84\ub9ac\ud55c\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc77d\uae30 \uc804\uc6a9 \uba85\ub839\uc758 \uacbd\uc6b0 \uc0c8\ub85c\uc6b4 RedisConnection\uacfc pipe\ub418\uace0 \uc4f0\uae30 \uba85\ub839\uc758 \uacbd\uc6b0 RedisTemplate\uc5d0 \uc758\ud574 Queue\uc5d0 \ub300\uae30\ud558\uace0 commit\uc744 \uae30\ub2e4\ub9b0\ub2e4.")))),(0,i.kt)("h2",{id:"09-pipelining"},"09. Pipelining"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"multiple commands\ub97c \uc751\ub2f5 \ub300\uae30 \uc5c6\uc774 \ud55c\ubc88\uc5d0 server\uc5d0 \uc804\ub2ec\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc81c\uacf5\ud55c\ub2e4.")),(0,i.kt)("h2",{id:"10-redis-scripting"},"10. Redis Scripting"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lua script\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub294 Redis Version(2.6 \uc774\uc0c1)\uc758 \uacbd\uc6b0 Script\ub97c \ud65c\uc6a9\ud55c \uc694\uccad\ub3c4 \uac00\ub2a5\ud558\ub2e4.")),(0,i.kt)("h2",{id:"11-redis-cache"},"11. Redis Cache"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Spring Redis\ub294 Spring Cache Abstraction \uad6c\ud604\uccb4\ub97c \uc81c\uacf5\ud55c\ub2e4.")),(0,i.kt)("h2",{id:"12-\uc9c0\uc6d0-class\ub4e4"},"12. \uc9c0\uc6d0 Class\ub4e4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"org.springframework.data.redis.support"),"\ub294 redis \ubc31\uc5c5 \uc800\uc7a5\uc18c\ub85c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \ud074\ub798\uc2a4\ub97c \uc81c\uacf5\ud55c\ub2e4.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"atomic counter"),": Redis \ud0a4 \uc99d\ubd84\uc744 \uc27d\uac8c \ub798\ud551\ud558\uc5ec \uc27d\uac8c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RedisSet"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"RedisZSet"),": \uad50\uc9d1\ud569, \uc720\ub2c8\uc628\uacfc \uac19\uc740 Redis \uc9c0\uc6d0 \uc5f0\uc0b0\uc744 \uc27d\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\ub3c4\ub85d \ub3d5\ub294\ub2e4."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RedisList"),": List, Queue, Deque \uc0c1\ud638\uc791\uc6a9\uc744 \uad6c\ud604\ud558\uc5ec \ucd5c\uc18c\ud55c\uc758 \uc124\uc815\uc73c\ub85c \uc800\uc7a5\uc18c\ub97c FIFO, LIFO, \uc81c\ud55c \uceec\ub809\uc158\uc73c\ub85c \ub300\uccb4\ud55c\ub2e4"),(0,i.kt)("li",{parentName:"ul"},"Redis \uad6c\ud604\uc744 \uc778\uba54\ubaa8\ub9ac \uad6c\ud604\uc73c\ub85c \ub300\uccb4\ud560 \ub54c \uc0ac\uc6a9 \uac00\ub2a5\ud560\ub4ef")))),(0,i.kt)("h2",{id:"13-observability"},"13. Observability"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lettuce \ub4dc\ub77c\uc774\ubc84\ub97c \ud1b5\ud574 Redis \uc0c1\ud638\uc791\uc6a9\uc744 \uad00\ucc30\ud558\uace0 Micrometer\ud1b5\ud574 \uc9c0\ud45c\ub97c \uc81c\uacf5\ud55c\ub2e4.")),(0,i.kt)("h2",{id:"\uc815\ub9ac"},"\uc815\ub9ac"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uacb0\uad6d Spring Boot + Redis\ub97c \ud65c\uc6a9\ud560 \ub54c \uc544\ub798 3\uac00\uc9c0 \ubc29\ubc95 \uc911 1\uac00\uc9c0\ub97c \uc120\ud0dd\ud560 \uc218 \uc788\uc744\ub4ef",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"RedisTemplate"),(0,i.kt)("li",{parentName:"ul"},"RedisRepository"),(0,i.kt)("li",{parentName:"ul"},"RedisCacheManager")))),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-data/redis/docs/3.0.11/reference/html/#redis"},"Spring Data Redis"))))}u.isMDXComponent=!0},557:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/vs-d6dada4ff620daf6a5960d34e63f1a49.jpg"}}]);