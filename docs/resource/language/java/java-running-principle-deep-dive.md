---
title: Java의 실행 원리 deep dive
tag: [language, java, jdk, jre, jvm]
---
## 생각 정리
- Java 실행 원리가 정말 잘 정리되어 있다.
- 특히 Java 메모리 구조와 Garbage Collector 내용이 자세해서 좋았다.
  - Heap 영역에서 minor gc 과정에서 eden + s0 -> s1 또는 eden + s1 -> s0 방식으로 객체를 이동시키는데
    - 그 이유가 파편화에 의한 압축 과정을 생략하기 위한 작업이라는 점이 새로웠다.
  - Garbage Collector의 경우 stop the world 현상을 최소화 하는 방식으로 발전한 것 같다.
    - 글에 명시된 버전 중 가장 최신 GC는 G1 GC이다.
      - G1 GC의 핵심 개념은 Heap 영역을 작게 나눠 독립적인 GC를 두어 stop the world 현상을 최소화 한다.

## Reference
- [Java의 실행원리 Deep Dive](https://code-run.tistory.com/61#2.3.4.%20Garbage%20Collector%C2%A0)