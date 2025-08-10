---
title: "[책] 데이터 지향 프로그래밍 - 4장 상태 관리"
description: "DOP의 핵심 원리인 데이터 불변성을 통한 다중 버전 시스템 데이터 관리와 구조적 공유에 대해 알아봅니다."
date: "2024-11-12"
draft: false
---

> **DOP 원리 3  
> 데이터는 불변이다**

<br></br>

## 다중 버전 시스템 데이터와 구조적 공유

DOP에서 데이터는 불변이다. 때문에 데이터의 변경이 생기면 새로운 버전이 생성된다. 이런 방식으로 데이터를 관리하면 모든 데이터 변경 작업은 아래의 과정을 거치게 된다. 연산 단계에서는 조회와 같은 방식으로 범용 함수를 활용해 변경이 반영된 형태의 차기 버전을 만든다. 이후 반영 단계에서는 산출된 차기 버전을 참조하도록 시스템에 반영한다.

1. **연산 단계:** 시스템 데이터의 차기 버전을 산출한다.
2. **반영 단계:** 연산된 시스템 데이터의 차기 버전을 참조하도록 이동시킨다.

DOP에서 선택한 방식이 가지는 몇 가지 장점을 나열하자면 아래와 같다. 이 방식은 Git이 commit 이력을 관리하여 버전 이력을 추적하는 방식과 굉장히 유사하다.

- 연산 / 반영을 구분하여 상태를 가지는 부분을 최소로 줄일 수 있다.
- 반영 단계의 구현은 모든 변경 작업에 공통적으로 사용할 수 있다.
- 이전 버전의 이력을 추적할 수 있다.

### 구조적 공유

불변 데이터 구조에서는 데이터가 변경될 때 전체를 복사하지 않고 변경되지 않은 부분은 공유하고 변경된 부분만 새로운 객체를 생성한다. 이를 구조적 공유라고 한다.

구조적 공유를 사용할 때 주의해야 할 점은 의도치 않게 데이터가 수정되는 것을 방지해야 한다는 것이다. 이를 위해 영속 데이터 구조 라이브러리 사용을 권장한다.

<br></br>

## 데이터 반영 단계와 이전 상태 복원

다음 코드 예시를 통해 시스템 데이터의 버전 관리와 상태 복원 방법을 살펴보자.

```java
class System {
    addMember(member) {
        let previous = SystemState.get();
        let next = Library.addMember(previous, member);
        SystemState.commit(previous, next);
    }
}

class SystemState {
    previousSystemData;
    systemData;
    
    get() {
        return this.SystemData;
    }
    
    commit(previous, next) {
        let systemDataBeforeUpdate = this.systemData;
    
        if (!SystemValidity.validate(previous, next)) {
            throw "유효하지 않은 시스템 데이터로 변경하려고 해요.";
        }
        
        this.systemData = next;
        this.previousSystemData = systemDataBeforeUpdate;
    }
    
    undoLastMutation() {
        this.systemData = this.previousSystemData;
    }
}
```

`commit` 메서드는 새로운 버전을 시스템에 반영하는 역할을 한다. 이 과정에서 유효성 검사를 중앙에서 처리하고, 이전 버전으로의 복원도 간단하게 구현할 수 있다.

<br></br>

## 내 생각

아직 이해가 부족한 부분들이 있어서 계속 궁금한 점들이 생긴다. DB 스키마와 메모리 관리 등에 대한 의문점들이 있지만, 지속적인 학습을 통해 해결해 나가고자 한다.