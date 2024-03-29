---
title: N+1 문제
tag: [backend, jpa, n+1]
---
## 내용 정리
- @OneToMany 관계에서 생기는 문제
- 노선(One) -- 역(Many) 관계를 가정해보자
    - jpaRepository의 findAll()을 사용하면 JPQL을 통해 엔티티(노선)와 필드를 바탕으로 쿼리를 만든다.
    - 이때 노선을 조회하는 쿼리 (1개)와
    - 조회된 노선이 가진 열들을 조회하는 쿼리 (N개)가 발생한다.
- 해결책
    - `FetchJoin`
        - 단, FetchType을 사용할 수 없다. 무조건 EAGER
        - 페이징 쿼리 불가능
    - `EntityGraph`
    - `FetchMode.SUBSELECT`
        - 2번의 쿼리 사용
    - `BatchSize 설정`
        - IN절을 사용
        - EX) 배치 사이즈 5, 노선 10개라면
            - 노선 조회 쿼리 (1개)
            - 역 조회 쿼리 (1개 - 5개 노선에 대한)
            - 역 조회 쿼리 (1개 - 5개 노선에 대한)
            - 총 3개 쿼리가 실행된다.

## Reference
- [JPA N+1 문제](https://incheol-jung.gitbook.io/docs/q-and-a/spring/n+1)