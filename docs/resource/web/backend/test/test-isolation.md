---
title: 인수테스트에서 테스트 격리하기
tag: [ATDD, Test]
---
## 테스트 격리
- 테스트가 제대로 격리되어 있지 않으면? -> 비결정적 테스트가 된다.
  - `비결정적 테스트`: 같은 입력값에 대해 항상 같은 결과를 출력하지 않는 테스트

- Mock 프레임 워크를 활용해 계층을 격리하여 테스트가 가능하다.


## 인수테스트에서 테스트 격리
- `인수 테스트`: 실제 운영 환경에서 사용될 준비가 되었는지를 통합적으로 확인하는 테스트
  - 때문에 인수 테스트에서의 테스트 격리는 Mock을 활용한 계층간의 격리와는 다른 접근이 필요하다.

- 인수 테스트의 격리 방법
  1. @Transactional - 롤백
     - 인수테스트에서는 사용이 불가
     - SpringBootTest는 띄우는 서버와 Http 클라이언트(테스트에서 요청을 받아 처리하는)가 분리되어 있다. (다른 Thread에서 실행됨)
     - 즉, @Transactional을 사용해도 롤백되지 않음
  2. Fixture Data 추가/삭제
     - @BeforeEach, @AfterEach를 활용해 테스트 이전 이후에 적절히 테스트 데이터를 추가/삭제한다.
     - 데이터가 많거나 연관 관계가 복잡하다면 비효율이 발생할 수 있다.
  3. Truncate 쿼리로 테이블 초기화
     - @SQL 어노테이션 활용
       - 테이블이 추가되면 일일이 쿼리를 작성해줘야 함.
     - EntityManager로 직접 Truncate 쿼리 실행
  4. DirtiesContext로 Spring Bean Reload


## 테스트 격리 고도화 TestExcutionLinsener를 통한 테스트 개입
- 시점
  - beforeTestClass:  테스트 클래스 내의 어떠한 테스트도 실행되기 전에 테스트 클래스를 전처리하기 위해 사용된다.
  - prepareTestInstance: 테스트 객체를 생성하기 위한 전처리 작업을 위해 사용된다.
  - beforeTestMethod: BeforeEach와 같은 Before 콜백들이 실행되기 전에 테스트를 전처리 할 때 사용된다.
  - beforeTestExecution: BeforeEach와 같은 Before 콜백들이 실행된 후에 테스트를 전처리 할 때 사용된다.
  - afterTestExecution: AfterEach와 같은 After 콜백들이 실행되기 전에 테스트를 후처리 할 때 사용된다.
  - afterTestMethod:  AfterEach와 같은 After 콜백들이 실행된 후에 테스트를 후처리 할 때 사용된다.
  - afterTestClass: 모든 테스트의 실행이 끝나고, 테스트 클래스를 후처리할 때 사용된다.

- 이 방식은 결국 반복 실행이 필요한 부분(TRUNCATE)을 한 곳에서 관리하고, Test 코드에서 해당 파트를 줄이는 이점이 있다.
- 꼭 필요한 부분은 아닌 것 같다. 또한 어노테이션으로 로직을 표기하면 코드를 알아보기 더 어려울 것 같기도...

## Reference
- [인수테스트에서 테스트 격리하기](https://tecoble.techcourse.co.kr/post/2020-09-15-test-isolation/)
- [@SpringBootTest의 테스트 격리시키기(TestExecutionListener), @Transactional로 롤백되지 않는 이유](https://mangkyu.tistory.com/264)