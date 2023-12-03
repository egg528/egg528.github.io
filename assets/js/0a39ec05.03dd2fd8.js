"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(n),g=i,m=u["".concat(p,".").concat(g)]||u[g]||d[g]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},906:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const a={title:"3. Spring Batch \ubcd1\ub82c \ucc98\ub9ac",sidebar_position:3,tag:["lecture","spring batch"]},l=void 0,o={unversionedId:"lecture/spring-batch/3",id:"lecture/spring-batch/3",title:"3. Spring Batch \ubcd1\ub82c \ucc98\ub9ac",description:"Spring Batch \ubcd1\ub82c \ucc98\ub9ac \uc885\ub958",source:"@site/docs/resource/lecture/spring-batch/3.md",sourceDirName:"lecture/spring-batch",slug:"/lecture/spring-batch/3",permalink:"/resource/lecture/spring-batch/3",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"3. Spring Batch \ubcd1\ub82c \ucc98\ub9ac",sidebar_position:3,tag:["lecture","spring batch"]},sidebar:"tutorialSidebar",previous:{title:"2. Spring Batch \uc790\uc138\ud788 \uc0b4\ud3b4\ubcf4\uae30",permalink:"/resource/lecture/spring-batch/2"},next:{title:"cs",permalink:"/resource/category/cs"}},p={},s=[{value:"Spring Batch \ubcd1\ub82c \ucc98\ub9ac \uc885\ub958",id:"spring-batch-\ubcd1\ub82c-\ucc98\ub9ac-\uc885\ub958",level:2},{value:"1. Multi Thread Step (single process)",id:"1-multi-thread-step-single-process",level:3},{value:"2. Parallel Step (single process)",id:"2-parallel-step-single-process",level:3},{value:"3. Remote Chunking (multi process)",id:"3-remote-chunking-multi-process",level:3},{value:"4. Partitioning (single process or multi process)",id:"4-partitioning-single-process-or-multi-process",level:3}],c={toc:s},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"spring-batch-\ubcd1\ub82c-\ucc98\ub9ac-\uc885\ub958"},"Spring Batch \ubcd1\ub82c \ucc98\ub9ac \uc885\ub958"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-batch/docs/current/reference/html/index-single.html#scalability"},"Spring \ubcd1\ub82c \ucc98\ub9ac \uacf5\uc2dd \uac00\uc774\ub4dc"))),(0,i.kt)("h3",{id:"1-multi-thread-step-single-process"},"1. Multi Thread Step (single process)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"single process \ub0b4\uc5d0\uc11c multi process\ub97c \ud65c\uc6a9\ud568"),(0,i.kt)("li",{parentName:"ul"},"\ud55c Step \ub0b4\uc5d0\uc11c Chunk\ub2e8\uc704\ub85c \ubcd1\ub82c \ucc98\ub9ac\uac00 \ub41c\ub2e4."),(0,i.kt)("li",{parentName:"ul"},"\uac00\uc7a5 \uad6c\ud604\uc774 \uac04\ub2e8\ud55c")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic TaskExecutor taskExecutor() {\n    return new SimpleAsyncTaskExecutor("spring_batch");\n}\n\n@Bean\npublic Step sampleStep(TaskExecutor taskExecutor, JobRepository jobRepository, PlatformTransactionManager transactionManager) {\n    return new StepBuilder("sampleStep", jobRepository)\n                .<String, String>chunk(10, transactionManager)\n                .reader(itemReader())\n                .writer(itemWriter())\n                .taskExecutor(taskExecutor) // TaskExecutor \uc124\uc815\n                .build();\n}\n')),(0,i.kt)("h3",{id:"2-parallel-step-single-process"},"2. Parallel Step (single process)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step \ub2e8\uc704\ub85c \ubcd1\ub82c \ucc98\ub9ac\uac00 \ub41c\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\npublic Job job(JobRepository jobRepository) {\n    return new JobBuilder("job", jobRepository)\n        .start(splitFlow())\n        .next(step4())\n        .build()        //builds FlowJobBuilder instance\n        .build();       //builds Job instance\n}\n\n@Bean\npublic Flow splitFlow() {\n    return new FlowBuilder<SimpleFlow>("splitFlow")\n        .split(taskExecutor())\n        .add(flow1(), flow2()) / \ubd84\uae30 \ucc98\ub9ac\ud560 flow \uc815\uc758, \ud55c flow\ub294 \uac19\uc740 thread\ub85c \uc2e4\ud589\ub428,\n        .build();\n}\n\n@Bean\npublic Flow flow1() {\n    return new FlowBuilder<SimpleFlow>("flow1")\n        .start(step1())\n        .next(step2())\n        .build();\n}\n\n@Bean\npublic Flow flow2() {\n    return new FlowBuilder<SimpleFlow>("flow2")\n        .start(step3())\n        .build();\n}\n\n@Bean\npublic TaskExecutor taskExecutor() {\n    return new SimpleAsyncTaskExecutor("spring_batch");\n}\n')),(0,i.kt)("h3",{id:"3-remote-chunking-multi-process"},"3. Remote Chunking (multi process)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RemoteChunking.png",src:n(1901).Z,width:"1928",height:"1042"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"master - slave \ubc29\uc2dd\uc73c\ub85c \uac01 slave\uc5d0 master\uac00 \uc791\uc5c5\uc744 \ub098\ub220\uc8fc\ub294 \ubc29\uc2dd"),(0,i.kt)("li",{parentName:"ul"},"master\uc5d0\uc11c \uc9c0\uc5f0\uc774 \ubc1c\uc0dd\ud558\uba74 \uc758\ubbf8\uac00 \uc5c6\uc5b4\uc9c4\ub2e4.")),(0,i.kt)("h3",{id:"4-partitioning-single-process-or-multi-process"},"4. Partitioning (single process or multi process)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"partitioning.png",src:n(2920).Z,width:"1854",height:"964"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\ub2e8\uc77c \ud504\ub85c\uc138\uc2a4\uc5d0\uc11c \ub9c8\uc2a4\ud130 \uc2a4\ud15d\uacfc \uc6cc\ud06c \uc2a4\ud15d\uc744 \ub450\uace0, \ub9c8\uc2a4\ud130 \uc2a4\ud15d\uc5d0\uc11c \uc0dd\uc131\ud574\uc900 \ud30c\ud2f0\uc158 \ub2e8\uc704\ub85c \uc2a4\ud15d\uc744 \ubcd1\ub82c\ucc98\ub9ac\ud55c\ub2e4.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    private static final int PARTITION_SIZE = 100;\n\n    @Bean\n    public Job partitioningJob(Step masterStep) {\n        return jobBuilderFactory.get("partitioningJob")\n                .incrementer(new RunIdIncrementer())\n                .start(masterStep) // Master Step \ud558\ub098\ub9cc\n                .build();\n    }\n\n\n    @JobScope\n    @Bean // Master Step\n    public Step masterStep(Partitioner partitioner,\n                           PartitionHandler partitionHandler) {\n        return stepBuilderFactory.get("masterStep")\n                .partitioner("anotherStep", partitioner)\n                .partitionHandler(partitionHandler)\n                .build();\n    }\n\n\n    @StepScope\n    @Bean\n    public Partitioner partitioner() {\n        SimplePartitioner partitioner = new SimplePartitioner();\n        partitioner.partition(PARTITION_SIZE); // \ud30c\ud2f0\uc158 \n        return partitioner;\n    }\n\n\n    @StepScope\n    @Bean\n    public TaskExecutorPartitionHandler partitionHandler(Step anotherStep,\n                                                         TaskExecutor taskExecutor) {\n        TaskExecutorPartitionHandler partitionHandler = new TaskExecutorPartitionHandler();\n        partitionHandler.setStep(anotherStep); // \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud560 Step \uc9c0\uc815\n        partitionHandler.setGridSize(PARTITION_SIZE); // Partitioner\uc5d0 \uc9c0\uc815\ud55c \uac12\uacfc \uac19\uac8c\n        partitionHandler.setTaskExecutor(taskExecutor);\n        return partitionHandler;\n    }\n    \n    @Bean\n    public TaskExecutor taskExecutor() {\n        SimpleAsyncTaskExecutor taskExecutor = new SimpleAsyncTaskExecutor("spring-batch-task-executor");\n        taskExecutor.setConcurrencyLimit(4); // \ub3d9\uc2dc\uc5d0 \uc2e4\ud589\ud558\ub294 Thread \uac1c\uc218 \uc81c\ud55c\n        return taskExecutor;\n    }\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"anotherStep\uc774 100\uac1c(PARTITION_SIZE)\uac00 \uc0dd\uc131\ub3fc\uc11c \uc2e4\ud589\ub428")))}d.isMDXComponent=!0},1901:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/RemoteChunking-3f180472fe7dc8daaf1555d615de07a5.png"},2920:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/partitioning-f479e8253d11bc3750f341398233f802.png"}}]);