"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[9638],{2085:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=t(4848),s=t(8453);const i={title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","strategy pattern"],date:new Date("2024-05-19T00:00:00.000Z")},a=void 0,l={permalink:"/observer-pattern",source:"@site/blog/observer-pattern.md",title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",date:"2024-05-19T00:00:00.000Z",tags:[{label:"design pattern",permalink:"/tags/design-pattern"},{label:"strategy pattern",permalink:"/tags/strategy-pattern"}],readingTime:10.88,hasTruncateMarker:!0,authors:[{name:"\uad8c\uc6b0\uc11d",title:"Server Developer",url:"https://github.com/egg528",imageURL:"https://avatars.githubusercontent.com/u/62459196?v=4",key:"woosuk"}],frontMatter:{title:"\ub514\uc790\uc778 \ud328\ud134 - Observer Pattern",description:"\ub514\uc790\uc778 \ud328\ud134 \uc911 Observer Pattern\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf8\ub2e4.",authors:["woosuk"],tags:["design pattern","strategy pattern"],date:"2024-05-19T00:00:00.000Z"},unlisted:!1,nextItem:{title:"\ub514\uc790\uc778 \ud328\ud134 - Strategy Pattern",permalink:"/strategy-pattern"}},p={authorsImageUrls:[void 0]},u=[{value:"Observer Pattern\uc740 \ubb34\uc5c7\uc778\uac00?",id:"observer-pattern\uc740-\ubb34\uc5c7\uc778\uac00",level:2},{value:"(1) \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Observer Pattern: Push \ubc29\uc2dd",id:"1-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-observer-pattern-push-\ubc29\uc2dd",level:3},{value:"(2) \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Observer Pattern: Pull \ubc29\uc2dd",id:"2-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-observer-pattern-pull-\ubc29\uc2dd",level:3},{value:"(3) \ub290\uc2a8\ud55c \uacb0\ud569",id:"3-\ub290\uc2a8\ud55c-\uacb0\ud569",level:3},{value:"Observer Pattern \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc: ApplicationEventPublisher\uc640 ApplicationListener",id:"observer-pattern-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc-applicationeventpublisher\uc640-applicationlistener",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2}];function o(e){const r={br:"br",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Observer Pattern\uc740 \ubb34\uc5c7\uc77c\uae4c?"}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h2,{id:"observer-pattern\uc740-\ubb34\uc5c7\uc778\uac00",children:"Observer Pattern\uc740 \ubb34\uc5c7\uc778\uac00?"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Observer Pattern"}),"\uc774\ub780 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc\uac00 \ubc14\ub00c\uba74 \uadf8 \uac1d\uccb4\uc5d0 \uc758\uc874\ud558\ub294 \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \ubcc0\uacbd \uc0ac\uc2e4\uc744 \uc54c\ub9ac\uace0 \uc790\ub3d9\uc73c\ub85c \uc5f0\uad00\ub41c \uc0c1\ud0dc\ub4e4\uc774 \ubc14\ub00c\ub3c4\ub85d \ud558\ub294 \uad6c\uc870\ub85c 1",":N","\uc758 \uc758\uc874 \uad00\uacc4\ub97c \uac00\uc9c4\ub2e4.\n\uc774 \uc124\uba85\uc744 \ub4e4\uc5c8\uc744 \ub54c \ucc98\uc74c Pub/Sub \uad6c\uc870\ub97c \ub5a0\uc62c\ub838\ub294\ub370 \uc544\ub798\uc640 \uac19\uc740 \uacf5\ud1b5\uc801\uc778 \ud2b9\uc9d5\ub4e4 \ub54c\ubb38\uc5d0 \uc774\ub7f0 \uc0dd\uac01\uc774 \ub4e4\uc5c8\ub358 \uac83 \uac19\ub2e4.\n\ud558\uc9c0\ub9cc Observer Pattern\uc5d0\uc11c\ub294 Message Queue \ud615\ud0dc\uc758 Broker\uac00 \uc5c6\ub2e4\ub294 \uc810\uc5d0\uc11c Pub/Sub \uad6c\uc870\uc640\ub294 \ud655\uc5f0\ud55c \ucc28\uc774\uac00 \uc788\ub2e4."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["1",":N"," \uad00\uacc4"]}),"\n",(0,n.jsx)(r.li,{children:"\ub290\uc2a8\ud55c \uacb0\ud569"}),"\n",(0,n.jsx)(r.li,{children:"\uc54c\ub9bc \uba54\ucee4\ub2c8\uc998"}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.p,{children:["Observer Pattern\uc5d0\ub294 ",(0,n.jsx)(r.code,{children:"Subject"}),"\uc640 ",(0,n.jsx)(r.code,{children:"Observer"}),"\ub77c\ub294 \uc8fc\uc694 \uac1c\ub150\uc774 \uc874\uc7ac\ud55c\ub2e4. \uc55e\uc11c \uc124\uba85\ud588\ub4ef\uc774 Observer Pattern\uc740 \ud55c \uac1d\uccb4\uc758 \uc0c1\ud0dc\uac00 \ubc14\ub00c\uba74 \uc774 \ubcc0\ud654\ub97c \ub2e4\ub978 \uac1d\uccb4\ub4e4\uc5d0\uac8c \uc54c\ub9ac\ub294 \uad6c\uc870\uc774\ub2e4.\n\uc774\ub54c \uc54c\ub9bc\uc758 \uc8fc\uccb4\uac00 \ub418\ub294 \uac1d\uccb4\ub97c Subject, \uc54c\ub9bc\uc744 \uc804\ub2ec \ubc1b\ub294 \uac1d\uccb4\uac00 Observer\uc774\uace0 Subject\uc640 Observer\uac00 1",":N"," \uad00\uacc4\uc778 \uac83\uc774\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.img,{alt:"observer-pattern.jpg",src:t(6012).A+"",width:"2174",height:"830"}),"\n\ub2e4\uc774\uc5b4\uadf8\ub7a8\uc744 \uc0b4\ud3b4\ubcf4\uba74 Subject\uc640 Observer Interface \uadf8\ub9ac\uace0 \uad6c\ud604\uccb4\ub4e4\uc774 \uc874\uc7ac\ud55c\ub2e4. Subject \uad6c\ud604\uccb4\uc778 WeatherData\ub294 List\ub85c Observer\ub4e4\uc744 \uad00\ub9ac\ud55c\ub2e4.\n\uadf8\ub9ac\uace0 \ub0b4\ubd80 \ud544\ub4dc\uc778 pressure, humidity, temperature\uac00 \ubcc0\ud560 \ub54c\ub9c8\ub2e4 \uad00\ub9ac\ud558\uace0 \uc788\ub294 Observer\ub4e4\uc5d0\uac8c \ubcc0\uacbd \uc0ac\uc2e4\uc744 \uc54c\ub9ac\uac8c \ub41c\ub2e4.\n\uac01 Observer\ub4e4\uc740 \uc54c\ub9bc\uc744 \ubc1b\uc740 \ud6c4 \ub0b4\ubd80 \ud544\ub4dc\uc778 Subject \uad6c\ud604\uccb4\ub97c \ud1b5\ud574 \ubcc0\uacbd\ub41c \ub370\uc774\ud130\ub97c \uc5bb\uac8c \ub41c\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.h3,{id:"1-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-observer-pattern-push-\ubc29\uc2dd",children:"(1) \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Observer Pattern: Push \ubc29\uc2dd"}),"\n",(0,n.jsx)(r.p,{children:"Observer Pattern\uc740 \ud06c\uac8c Push \ubc29\uc2dd\uacfc Pull \ubc29\uc2dd\uc73c\ub85c \uad6c\ud604\ud560 \uc218 \uc788\ub2e4. Push \ubc29\uc2dd\uc740 Subject\uac00 \uc54c\ub9bc\uacfc \ud568\uaed8 \uc54c\ub9ac\uace0\uc790 \ud558\ub294 \ub370\uc774\ud130\ub97c \uc77c\uad04\uc801\uc73c\ub85c \ub118\uae30\ub294 \ubc29\uc2dd\uc774\ub77c\uba74\nPoll \ubc29\uc2dd\uc740 Observer\uac00 \uc54c\ub9bc\uc744 \ubc1b\uc740 \ud6c4 \uc6d0\ud558\ub294 \ub370\uc774\ud130\ub97c \uac00\uc838\uac00\ub294 \ud615\uc2dd\uc774\ub2e4. \uc6b0\uc120 Push \ubc29\uc2dd\ubd80\ud130 \uc54c\uc544\ubcf4\uc790."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"public interface Subject {\n    void registerObserver(Observer o);\n    void removeObserver(Observer o);\n    void notifyObservers();\n}\n\npublic interface Observer {\n    void update(float temperature, float humidity, float pressure);\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"Push \ubc29\uc2dd\uc5d0\uc11c Subject, Observer \uc778\ud130\ud398\uc774\uc2a4\uc774\ub2e4. Subject\uc758 \uba54\uc11c\ub4dc\ub4e4\uc744 \uc0b4\ud3b4\ubcf4\uba74 Obrserver\ub97c \ub4f1\ub85d/\uc0ad\uc81c\ud558\ub294 \uba54\uc11c\ub4dc\uc640 \ubaa8\ub4e0 Observer\ub4e4\uc5d0\uac8c \uc54c\ub9bc\uc744 \ubcf4\ub0b4\ub294 \uba54\uc11c\ub4dc\uac00 \uc815\uc758\ub418\uc5b4\uc788\ub2e4.\nObserver \uc778\ud130\ud398\uc774\uc2a4\uc5d0\ub294 Subject\ub85c\ubd80\ud130 \uc54c\ub9bc\uc744 \ubc1b\uc740 \ud6c4 \ub118\uc5b4\uc628 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c \uc790\uc2e0\uc774 \uc218\ud589\ud560 \ub85c\uc9c1\uc744 \ub2f4\ub294 update \uba54\uc11c\ub4dc\uac00 \uc815\uc758\ub418\uc5b4 \uc788\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:'public class WeatherData implements Subject {\n    private List<Observer> observers;\n    private float temperature;\n    private float humidity;\n    private float pressure;\n\n    public WeatherData() {\n        observers = new ArrayList<>();\n    }\n\n    public WeatherData(List<Observer> observers) {\n        this.observers = observers;\n        this.temperature = -1;\n        this.humidity = -1;\n        this.pressure = -1;\n    }\n\n    @Override\n    public void registerObserver(Observer o) {\n        observers.add(o);\n    }\n\n    @Override\n    public void removeObserver(Observer o) {\n        observers.remove(o);\n    }\n\n    @Override\n    public void notifyObservers() {\n        if (!isAllSetup()) {\n            throw new IllegalStateException("\uae30\uc0c1 \ub370\uc774\ud130\uac00 \uc900\ube44\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4.");\n        }\n\n        observers.forEach(observer -> observer.update(temperature, humidity, pressure));\n    }\n\n    public void setMeasurements(float temperature, float humidity, float pressure) {\n        this.temperature = temperature;\n        this.humidity = humidity;\n        this.pressure = pressure;\n        notifyObservers();\n    }\n}\n\n'})}),"\n",(0,n.jsx)(r.p,{children:"Subject\uc758 \uad6c\ud604\uccb4\uc778 WeatherData \ucf54\ub4dc\uc774\ub2e4. Observer\uc758 \ub4f1\ub85d/\uc0ad\uc81c\ud558\ub294 \uac04\ub2e8\ud55c \uba54\uc11c\ub4dc\ub97c \ud655\uc778\ud560 \uc218 \uc788\uace0 notifyObserver\ub294 Observer\ub4e4\uc744 \uc21c\ud68c\ud558\uba70 update\ub97c \uc218\ud589\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c \uc54c\ub9bc\uc744 \ubcf4\ub0b4\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4.\nWeatherData\ub294 setMeasurements(...) \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 \ub0b4\ubd80 \ud544\ub4dc\uc5d0 \ubcc0\uacbd\uc774 \ubc1c\uc0dd\ud558\ub294 \uc2dc\uc810\uc5d0 notifyObservers()\ub97c \ud638\ucd9c\ud574 \uac01 Observer\ub4e4\uc5d0\uac8c \uc54c\ub9bc\uc744 \ubcf4\ub0b8\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"// CurrentConditionDisplay \uc911 \uc77c\ubd80\n@Override\npublic void update(float temperature, float humidity, float pressure) {\n    this.temperature = temperature;\n    this.humidity = humidity;\n    display();\n}\n    \n// StaticsDisplay \uc911 \uc77c\ubd80\n@Override\npublic void update(float temperature, float humidity, float pressure) {\n    this.temperature = temperature;\n    this.humidity = humidity;\n    this.pressure = pressure;\n    display();\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"Observer\uc758 \ub450 \uad6c\ud604\uccb4\uc758 update \uba54\uc11c\ub4dc\uc774\ub2e4. CurrentConditionDisplay\uc5d0\uc11c\ub294 temperature\uc640 humidity\ub9cc \ud544\uc694\ud558\uae30 \ub54c\ubb38\uc5d0 \ud30c\ub77c\ubbf8\ud130 \uc911 2\uac00\uc9c0 \uac12\uc744 \uc774\uc6a9\ud574 \uc6d0\ud558\ub294 \ub85c\uc9c1 (\ub0b4\ubd80 \ud544\ub4dc update)\uc744 \uc218\ud589\ud558\uace0,\nStaticsDisplay\ub294 \ubaa8\ub4e0 \uac12\uc744 \uc0ac\uc6a9\ud558\uc5ec \uc6d0\ud558\ub294 \ub85c\uc9c1\uc744 \uc218\ud589\ud55c\ub2e4. \ud558\uc9c0\ub9cc \uc774\ub807\uac8c \ub420 \uacbd\uc6b0 \uc544\uc26c\uc6b4 \uc810\uc774 \uc0dd\uae34\ub2e4. \ub9cc\uc57d \uc54c\ub9bc\uc744 \ud1b5\ud574 \uc0c8\ub85c\uc6b4 \ud544\ub4dc\ub97c \ub9e4\uac1c\ubcc0\uc218\ub85c \ub118\uaca8\uc57c \ud55c\ub2e4\uba74 \ubaa8\ub4e0 Display \uac1d\uccb4\uc758 update \ud544\ub4dc\uc5d0\ub294 \ubcc0\uacbd\uc774 \ud544\uc694\ud560 \uac83\uc774\ub2e4.\n\ub610\ud55c CurrentConditionDisplay\uc758 update \uba54\uc11c\ub4dc\uc640 \uac19\uc774 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \ub370\uc774\ud130\ub3c4 \ub9e4\uac1c\ubcc0\uc218\ub85c \ubc1b\uc544\uc640\uc57c \ud558\ub294 \uc810\ub3c4 \uc544\uc26c\uc6b4 \uc810 \uc911 \ud558\ub098\uc774\ub2e4."}),"\n",(0,n.jsx)(r.h3,{id:"2-\ucf54\ub4dc\ub85c-\uc54c\uc544\ubcf4\ub294-observer-pattern-pull-\ubc29\uc2dd",children:"(2) \ucf54\ub4dc\ub85c \uc54c\uc544\ubcf4\ub294 Observer Pattern: Pull \ubc29\uc2dd"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"public interface Observer {\n    \n    void update();\n}\n\npackage org.example.observer;\n\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class WeatherData implements Subject {\n    private List<Observer> observers;\n    private float temperature;\n    private float humidity;\n    private float pressure;\n\n    ...\n\n    public float getTemperature() {\n        return temperature;\n    }\n\n    public float getHumidity() {\n        return humidity;\n    }\n\n    public float getPressure() {\n        return pressure;\n    }\n}\n\n"})}),"\n",(0,n.jsx)(r.p,{children:"Push \ubc29\uc2dd\uc758 \uc544\uc26c\uc6b4 \uc810\ub4e4\uc744 \ud574\uacb0\ud560 \uc218 \uc788\ub294 \ubc29\uc2dd\uc774 Poll \ubc29\uc2dd\uc774\ub2e4. \uc6b0\uc120 \uc774\uc804\uacfc \ub2e4\ub974\uac8c Observer \uc778\ud130\ud398\uc774\uc2a4\uc758 update() \uba54\uc11c\ub4dc\uc758 \ud30c\ub77c\ubbf8\ud130\uac00 \ubaa8\ub450 \uc0ac\ub77c\uc9c4\ub2e4.\nSubject\uc758 \uad6c\ud604\uccb4\uc5d0\uc11c \uc54c\ub9bc\uc744 \ud1b5\ud574 \uc804\ub2ec\ud558\uace0\uc790 \ud588\ub358 \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 public getter \uba54\uc11c\ub4dc\ub97c \ucd94\uac00\ud574\uc900\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"// CurrentConditionDisplay \uc911 \uc77c\ubd80\n@Override\npublic void update() {\n    this.temperature = weatherData.getTemperature();\n    this.humidity = weatherData.getHumidity();\n    display();\n}\n    \n// StaticsDisplay \uc911 \uc77c\ubd80\n@Override\npublic void update() {\n    this.temperature = weatherData.getTemperature();\n    this.humidity = weatherData.getHumidity();\n    this.pressure = weatherData.getPressure();\n    display();\n}\n"})}),"\n",(0,n.jsxs)(r.p,{children:["\uc774\ud6c4 Observer \uad6c\ud604\uccb4\uc758 update() \uba54\uc11c\ub4dc\uc5d0\uc11c\ub294 \uc774\uc804\ucc98\ub7fc \ud30c\ub77c\ubbf8\ud130\ub85c \uc804\ub2ec\ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \uc544\ub2c8\ub77c Subject \uad6c\ud604\uccb4\uc758 getter \uba54\uc11c\ub4dc\ub97c \ud65c\uc6a9\ud574 \uc9c1\uc811 \ub370\uc774\ud130\ub97c \uac00\uc838\uc628\ub2e4.",(0,n.jsx)(r.br,{}),"\n","\uc774\ub807\uac8c \uad6c\ud604\ud560 \uacbd\uc6b0 \uac01 Observer \uad6c\ud604\uccb4\uc5d0\uc11c \uc790\uc2e0\uc5d0\uac8c \ud544\uc694\ud55c \ub370\uc774\ud130\uc5d0\ub9cc \uc811\uadfc\ud560 \uc218 \uc788\uae30 \ub54c\ubb38\uc5d0 \ub370\uc774\ud130\uac00 \ucd94\uac00\ub418\uc5b4\ub3c4 \ubaa8\ub4e0 Observer \uad6c\ud604\uccb4\uc758 \ucf54\ub4dc\ub97c \uc218\uc815\ud560 \ud544\uc694\uac00 \uc0ac\ub77c\uc9c4\ub2e4."]}),"\n",(0,n.jsx)(r.h3,{id:"3-\ub290\uc2a8\ud55c-\uacb0\ud569",children:"(3) \ub290\uc2a8\ud55c \uacb0\ud569"}),"\n",(0,n.jsxs)(r.p,{children:["Observer Pattern\uc758 \uc7a5\uc810\uc740 Subject\uc640 Observer\uac00 \ub290\uc2a8\ud55c \uacb0\ud569\uc73c\ub85c 1",":N"," \uad00\uacc4\ub97c \ub9fa\uace0 \uc0c1\ud638\uc791\uc6a9\uc744 \ud560 \uc218 \uc788\ub2e4\ub294 \uc810\uc774\ub2e4."]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.p,{children:"\ub290\uc2a8\ud55c \uac1d\uccb4\ub4e4\uc774 \uc11c\ub85c \uc0c1\ud638\uc791\uc6a9\uc740 \uac00\ub2a5\ud558\uc9c0\ub9cc \uc11c\ub85c\ub97c \uc798 \ubaa8\ub974\ub294 \uad00\uacc4\ub97c \ub73b\ud55c\ub2e4.\nObserver Pattern\uc5d0\uc11c Subject\uc640 Observer\uac00 \uc11c\ub85c \ub290\uc2a8\ud55c \uad00\uacc4\uc77c \uc218 \uc788\ub294 \uc774\uc720\ub294 Subject\uac00 Observer\uc758 \uc778\ud130\ud398\uc774\uc2a4\ub9cc \uc54c\uace0 \uc788\uae30 \ub54c\ubb38\uc774\ub2e4.\nSubject\uc640 Observer\uac00 \ub290\uc2a8\ud55c \uacb0\ud569\uc744 \uac00\uc9c0\uae30 \ub54c\ubb38\uc5d0 \uc544\ub798\uc640 \uac19\uc740 \uac15\uc810\uc744 \uac00\uc9c0\uac8c \ub418\ub294\ub370, \uc774\ub7ec\ud55c \uc774\uc810\ub4e4 \ub54c\ubb38\uc5d0 \uac1d\uccb4\ub4e4\uac04\uc758 \uad00\uacc4\ub294 \ucd5c\ub300\ud55c \ub290\uc2a8\ud558\uac8c \uac00\uc838\uac00\ub294 \uac83\uc774 \uc88b\ub2e4."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Subject\ub294 Observer\ub4e4\uc774 Observer \uc778\ud130\ud398\uc774\uc2a4\ub97c \uad6c\ud604\ud55c\ub2e4\ub294 \uc0ac\uc2e4\ub9cc \uc548\ub2e4."}),"\n",(0,n.jsx)(r.li,{children:"Observer\uc758 \uc0c8\ub85c\uc6b4 \uad6c\ud604\uccb4\ub294 \uc5b8\uc81c\ub4e0\uc9c0 \ucd94\uac00\ub420 \uc218 \uc788\uace0 Observer \uc778\ud130\ud398\uc774\uc2a4\ub9cc \ub9cc\uc871\ud55c\ub2e4\uba74 Subject\uc758 \ucf54\ub4dc \ubcc0\uacbd \uc5c6\uc774 \uc0c8\ub85c\uc6b4 \uad6c\ud604\uccb4\ub97c \uc774\uc6a9\ud560 \uc218 \uc788\ub2e4."}),"\n",(0,n.jsx)(r.li,{children:"Observer \uc778\ud130\ud398\uc774\uc2a4\ub97c \ub9cc\uc871\ud55c\ub2e4\uba74 Observer \uad6c\ud604\uccb4\ub294 \uc5b4\ub5bb\uac8c \ubcc0\uacbd\ub418\uc5b4\ub3c4 \ubb34\ubc29\ud558\ub2e4."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"observer-pattern-\uc2e4\uc81c-\uc0ac\uc6a9-\uc608\uc2dc-applicationeventpublisher\uc640-applicationlistener",children:"Observer Pattern \uc2e4\uc81c \uc0ac\uc6a9 \uc608\uc2dc: ApplicationEventPublisher\uc640 ApplicationListener"}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.p,{children:"Spring Framework\uc5d0\uc11c Observer Pattern\uc744 \ud65c\uc6a9\ud55c \ub300\ud45c\uc801\uc778 \uc608\uc2dc\ub294 ApplicationEventPublisher\uacfc ApplicationListener\uc774\ub2e4.\nApplicationEventPublisher\ub294 Subject\uc774\uace0 ApplicationListener\ub294 Observer \uadf8\ub9ac\uace0 ApplicationEvent\ub294 Subject\uac00 Observer\uc5d0 \uc804\ub2ec\ud558\ub294 \ub370\uc774\ud130\ub97c \uc758\ubbf8\ud55c\ub2e4.\nSpring\uc758 Event \uae30\ub2a5\uc5d0 \ub300\ud574\uc11c\ub294 \uae4a\uac8c \uc54c\uc544\ubcfc \uacc4\ud68d\uc774 \uc788\uae30\uc5d0 \uc5ec\uae30\uc11c\ub294 \uc0dd\ub7b5\ud558\ub824\uace0 \ud55c\ub2e4."}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"@FunctionalInterface\npublic interface ApplicationEventPublisher {\n    default void publishEvent(ApplicationEvent event) {\n        this.publishEvent((Object)event);\n    }\n\n    void publishEvent(Object event);\n}\n\n@FunctionalInterface\npublic interface ApplicationListener<E extends ApplicationEvent> extends EventListener {\n    void onApplicationEvent(E event);\n\n    default boolean supportsAsyncExecution() {\n        return true;\n    }\n\n    static <T> ApplicationListener<PayloadApplicationEvent<T>> forPayload(Consumer<T> consumer) {\n        return (event) -> {\n            consumer.accept(event.getPayload());\n        };\n    }\n}\n"})}),"\n",(0,n.jsx)(r.p,{children:"\uac04\ub2e8\ud788 Subject\uc640 Observer \uc5ed\ud560\uc744 \ud558\ub294 \ub450 \uc778\ud130\ud398\uc774\uc2a4\ub9cc \uc0b4\ud3b4\ubcf4\uc790\uba74, ApplicationEventPublisher\uc5d0\ub294 Event\ub97c publish\ud558\ub294 \uba54\uc11c\ub4dc\uac00 \uc874\uc7ac\ud558\uace0 \uc774 \uba54\uc11c\ub4dc\ub294 \uc774\uc804 \uc608\uc2dc\uc758 notifyObservers()\uc640 \uac19\uc740 \uc5ed\ud560\uc744 \ud55c\ub2e4.\nApplicationListener\uc5d0\uc11c \uc774\uc804 \uc608\uc2dc\uc758 update() \uc5ed\ud560\uc744 \ud558\ub294 \uba54\uc11c\ub4dc\ub294 void onApplicationEvent(E event)\uc774\uace0 Subject\uac00 \uc804\ub2ec\ud558\ub294 \ub370\uc774\ud130\ub97c \ubc1b\uc544 \uac01 Observer\uac00 \uc6d0\ud558\ub294 \ub85c\uc9c1\uc744 \uc218\ud589\ud558\ub294 \ubd80\ubd84\uc774\ub2e4.\nonApplicationEvent(E event) \uba54\uc11c\ub4dc\uc758 \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c\ub3c4 \uc54c \uc218 \uc788\ub4ef\uc774 Spring\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 Event \uae30\ub2a5\uc740 Push\uc640 Pull \ubc29\uc2dd \uc911 Push \ubc29\uc2dd\uc744 \uc0ac\uc6a9\ud55c\ub2e4."}),"\n",(0,n.jsx)(r.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,n.jsx)(r.p,{children:"\uc55e\uc11c \uc5b8\uae09\ud588\ub4ef\uc774 Observer Pattern\uc740 Pub/Sub \uad6c\uc870\uc640 \uc720\uc0ac\ud558\ub2e4\uace0 \ub290\uaef4\uc9c4\ub2e4. \ub450 \uad6c\uc870 \ubaa8\ub450 \uacb0\ud569\uc744 \ub290\uc2a8\ud558\uac8c \uac00\uc838\uac00\ub294 \uac83\uc5d0 \uac00\uc7a5 \ud070 \uc774\uc810\uc774 \uc788\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4.\n\ud558\uc9c0\ub9cc \uc911\uac04\uc5d0 Message Queue \ud615\ud0dc\uc758 Broker\uac00 \uc5c6\uace0 Observer\uac00 \uc6d0\ud558\ub294 \ub9cc\ud07c\uc758 \ub370\uc774\ud130\ub97c \uac00\uc838\uac00\ub294 \ud615\ud0dc\uac00 \uc544\ub2c8\uae30 \ub54c\ubb38\uc5d0 Observer\uac00 \ucc98\ub9ac\ud560 \uc218 \uc788\ub294 \uc591\uc744 Subject\uc5d0\uc11c \uace0\ub824\ud574\uc57c \ud55c\ub2e4\ub294 \uc0dd\uac01\uc774 \ub4e0\ub2e4.\n\uc804\ub7b5 \ud328\ud134\ub9cc\ud07c \uc790\uc8fc \uc0ac\uc6a9\ub420 \uac70\ub77c \uc0dd\uac01\ub418\ub294 \ud328\ud134\uc740 \uc544\ub2c8\uc9c0\ub9cc \uc790\uc8fc \uc0ac\uc6a9\ud558\ub294 Spring Framework\uc758 Event \uae30\ub2a5\uc774 \uc5b4\ub5a4 \uad6c\uc870\ub85c \uc774\ub8e8\uc5b4\uc84c\ub294\uc9c0 \uc54c\uc544\ubcfc \uc218 \uc788\uc5b4 \uc7ac\ubc0c\uc5c8\ub2e4."})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},6012:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/observer-pattern-c447357725f24b411c2adb60bcd6d96d.jpg"},8453:(e,r,t)=>{t.d(r,{R:()=>a,x:()=>l});var n=t(6540);const s={},i=n.createContext(s);function a(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);