---
title: "[Clean Architecture in Practice] Chapter 8: Mapping Between Boundaries"
description: "Explore mapping strategy pros and cons including no mapping, two-way mapping, full mapping, and one-way mapping strategies between layers."
date: "2023-04-02"
draft: false
---

## Mapping Between Boundaries
- Developers in favor of mapping
  - Sharing models between different layers means the two layers are strongly coupled!
- Developers against mapping
  - Inter-layer mapping creates a lot of boilerplate code.
  - Most operations are just CRUD, so mapping between layers is excessive.

### 1. No Mapping Strategy
- An approach where both web and persistence layers access the domain model directly
- Code for web/persistence layers may be added to the domain model.
  - Example: Annotations for JSON serialization, annotations for DB mapping
- Violates the `Single Responsibility Principle` because it needs to change for reasons related to web, application, and persistence layers.
- However, if all layers have the same structure or for simple CRUD operations, the no mapping strategy can be a perfect choice.

### 2. Two-Way Mapping Strategy
- A strategy where each layer has its own dedicated model
- Each layer can evolve independently without affecting other layers
- However, requires mapping code between layers, which increases boilerplate

![Two-way Mapping](./diagram-1.webp)

#### Benefits:
- **Layer Independence**: Each layer can change without affecting others
- **Clear Contracts**: Explicit interfaces between layers
- **Testability**: Easy to create test doubles for each layer

#### Drawbacks:
- **Boilerplate Code**: Mapping code between layers
- **Maintenance Overhead**: Multiple models to maintain
- **Performance Impact**: Additional object creation and conversion

### 3. Full Mapping Strategy
- Each layer has its own model and maps to all other layers
- Provides maximum isolation but also maximum complexity

```java
// Web Layer Model
public class AccountWebModel {
    private Long id;
    private BigDecimal balance;
    // Web-specific fields and validation
}

// Application Layer Model  
public class Account {
    private AccountId id;
    private Money balance;
    private ActivityWindow activityWindow;
    // Domain logic and business rules
}

// Persistence Layer Model
@Entity
public class AccountJpaEntity {
    @Id
    private Long id;
    private Long balanceAmount;
    // Database-specific annotations and constraints
}
```

#### When to Use Full Mapping:
- Complex applications with distinct layer concerns
- When layers have very different data structures
- When maximum testability and isolation are required
- When team responsibilities are clearly separated by layers

### 4. One-Way Mapping Strategy
- Map in one direction only, typically from outer layers to inner layers
- Reduces mapping complexity while maintaining some isolation

```java
// Domain model (shared)
public class Account {
    private AccountId id;
    private Money balance;
    private ActivityWindow activityWindow;
}

// Web layer maps to domain
@RestController
public class AccountController {
    public void updateAccount(@RequestBody UpdateAccountRequest request) {
        Account account = mapRequestToDomain(request);
        accountService.updateAccount(account);
    }
}

// Persistence layer maps to domain  
@Repository
public class AccountPersistenceAdapter {
    public Account loadAccount(AccountId id) {
        AccountJpaEntity entity = repository.findById(id.getValue());
        return mapEntityToDomain(entity);
    }
}
```

#### Benefits:
- **Reduced Complexity**: Less mapping code than full mapping
- **Domain-Centric**: Domain model remains the core representation
- **Reasonable Trade-off**: Balance between isolation and complexity

### 5. Mapping Guidelines

#### When to Map:
```java
// ✅ Map when models serve different purposes
public class CreateAccountRequest {  // Web input
    @NotNull @Email
    private String email;
    @NotNull @Min(0)  
    private BigDecimal initialBalance;
}

public class Account {  // Domain model
    private AccountId id;
    private Email email;
    private Money balance;
    
    public boolean canWithdraw(Money amount) {
        return balance.isGreaterThanOrEqual(amount);
    }
}
```

#### When NOT to Map:
```java
// ❌ Don't map when models are identical
public class SimpleUserDto {
    private String name;
    private String email;
}

public class SimpleUser {  // Identical structure
    private String name;
    private String email;
}
```

### 6. Mapping Implementation Strategies

#### Manual Mapping:
```java
public class AccountMapper {
    public static Account toDomain(CreateAccountRequest request) {
        return Account.builder()
            .email(new Email(request.getEmail()))
            .balance(Money.of(request.getInitialBalance()))
            .build();
    }
    
    public static AccountResponse fromDomain(Account account) {
        return AccountResponse.builder()
            .id(account.getId().getValue())
            .balance(account.getBalance().getAmount())
            .build();
    }
}
```

#### Framework-Based Mapping:
```java
// Using MapStruct
@Mapper
public interface AccountMapper {
    
    @Mapping(source = "balance.amount", target = "balanceAmount")
    AccountJpaEntity toJpaEntity(Account account);
    
    @Mapping(source = "balanceAmount", target = "balance")
    Account toDomain(AccountJpaEntity entity);
}
```

### 7. Performance Considerations

#### Object Creation Cost:
```java
// Consider pooling for frequently created objects
public class AccountMapperOptimized {
    private final ObjectPool<AccountBuilder> builderPool;
    
    public Account toDomain(AccountJpaEntity entity) {
        AccountBuilder builder = builderPool.borrow();
        try {
            return builder
                .id(new AccountId(entity.getId()))
                .balance(Money.of(entity.getBalanceAmount()))
                .build();
        } finally {
            builderPool.return(builder.reset());
        }
    }
}
```

#### Lazy Loading:
```java
// Map only when needed
public class LazyAccountView {
    private final AccountJpaEntity entity;
    private Account domain; // Lazily loaded
    
    public Account getDomainModel() {
        if (domain == null) {
            domain = AccountMapper.toDomain(entity);
        }
        return domain;
    }
}
```

### 8. Testing Mapping Logic

```java
@Test
public void shouldMapAccountCorrectly() {
    // Given
    AccountJpaEntity entity = new AccountJpaEntity();
    entity.setId(1L);
    entity.setBalanceAmount(10000L);
    
    // When
    Account account = AccountMapper.toDomain(entity);
    
    // Then
    assertThat(account.getId().getValue()).isEqualTo(1L);
    assertThat(account.getBalance().getAmount()).isEqualByComparingTo(new BigDecimal("100.00"));
}

@Test
public void shouldRoundTripMapCorrectly() {
    // Given
    Account original = givenAccount();
    
    // When
    AccountJpaEntity entity = AccountMapper.toJpaEntity(original);
    Account mapped = AccountMapper.toDomain(entity);
    
    // Then
    assertThat(mapped).isEqualTo(original);
}
```

## Decision Framework

### Choose No Mapping when:
- Simple CRUD operations
- Models are essentially identical
- Performance is critical
- Small, simple applications

### Choose One-Way Mapping when:
- Moderate complexity
- Domain model should remain stable
- Some isolation is needed
- Reasonable performance requirements

### Choose Two-Way Mapping when:
- Complex domain logic
- Layers have distinct responsibilities
- Maximum testability required
- Performance is less critical than maintainability

### Choose Full Mapping when:
- Very complex applications
- Strict layer isolation required
- Different teams own different layers
- Long-term maintenance is critical

## Conclusion

Mapping strategy decisions should be based on:

- **Application complexity**
- **Team structure and responsibilities**  
- **Performance requirements**
- **Maintenance considerations**
- **Testing needs**

Remember that you can use different strategies in different parts of the same application. The key is to be consistent within each bounded context and make conscious decisions about the trade-offs you're accepting.

The goal is not to eliminate all coupling, but to manage it effectively and place it where it causes the least harm to your architecture's long-term evolution.