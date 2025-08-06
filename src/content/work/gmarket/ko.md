---
company: "G마켓"
role: "Server Engineer"
logo: "/company-logos/gmarket.png"
dateStart: "2022-01-29"
dateEnd: "2024-09-01"
---
### G마켓 첫구매 주문 실시간 식별 시스템 구축
- Kafka Streams 기반 결제 승인 시점 첫구매 판단 Consumer App 개발
- Message Key 파티셔닝으로 동시 처리 제어 및 확장성 확보

### 판매자 주문 관리 시스템 Full-Stack 개발
- 발송 완료 주문 통합 관리 FE/BE 개발
- Redis + Lua Script 분산 Rate Limiter 및 Circuit Breaker 패턴 적용
- Prometheus, Grafana, Teams Alert 모니터링 시스템 구축

### G마켓 배송 추적창 통합
- 4개 분산 Application을 단일 Application으로 통합하여 변경점 일원화
- Query String + User Agent로 4가지 Client 환경 단일 처리

### G마켓 발송 예정일 계산 API 개발
- 상품 발송 시작 예정일 계산 API 개발
- 휴일/배송 정책 복합 로직 처리 및 Redis 캐싱으로 99.99P 700ms 달성