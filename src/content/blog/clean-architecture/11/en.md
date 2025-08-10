---
title: "[Clean Architecture in Practice] Chapter 11: Taking Shortcuts Consciously"
description: "Learn about practical uses of architectural shortcuts including sharing models between use cases, using domain entities as input/output models, and other strategic approaches."
date: "2023-04-28"
draft: false
---

## Taking Shortcuts Consciously
- Let's increase awareness of potential shortcuts and think about their impact
- Shortcuts can actually be more practical in some situations.
- However, to prevent them from being perceived as broken windows, clearly document the reasons for using shortcuts

### 1. Sharing Models Between Use Cases
- If 2 use cases use 1 command object
- The command object then has 2 reasons to change.
- However, if the 2 use cases are functionally related and share common concerns, it might be a good choice...

#### Example: Related Use Cases
```java
// Shared command for related operations
public class ManageAccountCommand {
    private final AccountId accountId;
    private final Money amount;
    private final String reason;
    
    // Constructor and getters
}

// Two related use cases sharing the same command
public interface WithdrawMoneyUseCase {
    boolean withdrawMoney(ManageAccountCommand command);
}

public interface DepositMoneyUseCase {
    boolean depositMoney(ManageAccountCommand command);
}
```

#### When This Shortcut Makes Sense:
- **Functionally coupled operations** that always change together
- **Simple domain** with minimal complexity
- **Team preference** for reduced boilerplate
- **High cohesion** between the use cases

#### When to Avoid:
- **Different validation rules** for each use case
- **Different data requirements** for operations
- **Independent evolution** expected for use cases

### 2. Using Domain Entities as Input/Output Models
- This shortcut also makes both use cases and services reasons for domain entity changes.
- Can be useful for simple create/update use cases...
- However, for complex logic, creating dedicated input/output models is recommended.
- This prevents domain entity changes due to use case modifications.

#### Example: Simple CRUD Operations
```java
// Domain entity used directly as input/output
public class Account {
    private AccountId id;
    private String ownerName;
    private Money balance;
    
    // Domain logic
    public boolean withdraw(Money amount) {
        if (balance.isGreaterThanOrEqual(amount)) {
            balance = balance.subtract(amount);
            return true;
        }
        return false;
    }
    
    // Getters and setters for CRUD operations
}

// Use case using domain entity directly
@Service
public class UpdateAccountService {
    
    public Account updateAccount(Account account) {
        // Simple validation
        if (account.getOwnerName() == null) {
            throw new IllegalArgumentException("Owner name is required");
        }
        
        return accountRepository.save(account);
    }
}
```

#### When This Shortcut Works:
```java
// ✅ Good for simple CRUD
@RestController
public class AccountController {
    
    @PostMapping("/accounts")
    public Account createAccount(@RequestBody Account account) {
        return createAccountUseCase.createAccount(account);
    }
    
    @PutMapping("/accounts/{id}")  
    public Account updateAccount(@PathVariable String id, @RequestBody Account account) {
        account.setId(new AccountId(id));
        return updateAccountUseCase.updateAccount(account);
    }
}
```

#### When to Use Dedicated Models:
```java
// ✅ Better for complex operations
public class TransferMoneyCommand {
    private final AccountId sourceAccountId;
    private final AccountId targetAccountId;
    private final Money amount;
    private final String transferReason;
    private final LocalDateTime scheduledDate;
    
    // Validation specific to transfer operation
    public void validate() {
        if (amount.isNegativeOrZero()) {
            throw new IllegalArgumentException("Transfer amount must be positive");
        }
        if (sourceAccountId.equals(targetAccountId)) {
            throw new IllegalArgumentException("Cannot transfer to same account");
        }
    }
}
```

### 3. Skipping Incoming Ports
- Outgoing ports are essential for dependency inversion
- But incoming ports (use case interfaces) might be skipped in certain situations

#### Direct Service Usage:
```java
// Skipping the port interface
@RestController
public class AccountController {
    
    private final SendMoneyService sendMoneyService; // Direct dependency on implementation
    
    @PostMapping("/accounts/{id}/send")
    public ResponseEntity<Void> sendMoney(@PathVariable String id, @RequestBody SendMoneyRequest request) {
        sendMoneyService.sendMoney(createCommand(id, request));
        return ResponseEntity.ok().build();
    }
}
```

#### When This Might Be Acceptable:
- **Single adapter** for each use case (no multiple entry points)
- **Simple applications** with minimal complexity
- **Prototyping** or proof-of-concept development
- **Team unfamiliarity** with interface-based design

#### Why Ports Are Usually Worth It:
```java
// ✅ With port interface - more flexible
@RestController
public class AccountController {
    
    private final SendMoneyUseCase sendMoneyUseCase; // Interface dependency
    
    // Same implementation, but more testable and flexible
}

// Easy to test with mocks
@Test
public void testSendMoney() {
    SendMoneyUseCase mockUseCase = mock(SendMoneyUseCase.class);
    AccountController controller = new AccountController(mockUseCase);
    // Test without service implementation
}
```

### 4. Skipping Application Services
- Sometimes web adapters call domain services directly

#### Direct Domain Service Access:
```java
@RestController
public class AccountController {
    
    private final AccountDomainService accountDomainService;
    private final LoadAccountPort loadAccountPort;
    private final UpdateAccountStatePort updateAccountStatePort;
    
    @PostMapping("/accounts/{id}/send")
    public ResponseEntity<Void> sendMoney(@PathVariable String id, @RequestBody SendMoneyRequest request) {
        // Controller orchestrating domain logic directly
        Account sourceAccount = loadAccountPort.loadAccount(new AccountId(id));
        Account targetAccount = loadAccountPort.loadAccount(new AccountId(request.getTargetAccountId()));
        
        boolean success = accountDomainService.transferMoney(
            sourceAccount, 
            targetAccount, 
            Money.of(request.getAmount())
        );
        
        if (success) {
            updateAccountStatePort.updateActivities(sourceAccount);
            updateAccountStatePort.updateActivities(targetAccount);
        }
        
        return success ? ResponseEntity.ok().build() : ResponseEntity.badRequest().build();
    }
}
```

#### Problems with This Approach:
- **Violation of Single Responsibility**: Controller handles both web concerns and orchestration
- **Reduced Testability**: Harder to test orchestration logic separately
- **Code Duplication**: Same orchestration might be needed in different controllers

### 5. Using Rich Domain Services
- Sometimes domain services become too rich and start orchestrating

#### Over-Rich Domain Service:
```java
@DomainService
public class AccountDomainService {
    
    private final LoadAccountPort loadAccountPort;
    private final UpdateAccountStatePort updateAccountStatePort;
    private final NotificationService notificationService;
    
    // This is actually application logic, not domain logic
    public boolean transferMoney(AccountId sourceId, AccountId targetId, Money amount) {
        Account sourceAccount = loadAccountPort.loadAccount(sourceId);
        Account targetAccount = loadAccountPort.loadAccount(targetId);
        
        if (sourceAccount.withdraw(amount, targetId)) {
            targetAccount.deposit(amount, sourceId);
            
            updateAccountStatePort.updateActivities(sourceAccount);
            updateAccountStatePort.updateActivities(targetAccount);
            notificationService.notifyTransfer(sourceAccount, targetAccount, amount);
            
            return true;
        }
        return false;
    }
}
```

#### Better Separation:
```java
// Pure domain service - only domain logic
@DomainService  
public class AccountDomainService {
    
    public boolean canTransfer(Account source, Account target, Money amount) {
        return source.getBalance().isGreaterThanOrEqual(amount) 
            && !target.isClosed();
    }
    
    public TransferResult performTransfer(Account source, Account target, Money amount) {
        if (!canTransfer(source, target, amount)) {
            return TransferResult.failed("Transfer not allowed");
        }
        
        source.withdraw(amount, target.getId());
        target.deposit(amount, source.getId());
        
        return TransferResult.successful();
    }
}

// Application service - orchestration
@Service
public class TransferMoneyService {
    
    public boolean transferMoney(TransferMoneyCommand command) {
        Account sourceAccount = loadAccountPort.loadAccount(command.getSourceAccountId());
        Account targetAccount = loadAccountPort.loadAccount(command.getTargetAccountId());
        
        TransferResult result = accountDomainService.performTransfer(
            sourceAccount, targetAccount, command.getAmount()
        );
        
        if (result.isSuccessful()) {
            updateAccountStatePort.updateActivities(sourceAccount);
            updateAccountStatePort.updateActivities(targetAccount);
            notificationService.notifyTransfer(sourceAccount, targetAccount, command.getAmount());
        }
        
        return result.isSuccessful();
    }
}
```

## Guidelines for Taking Shortcuts

### 1. **Document the Decision**
```java
/**
 * ARCHITECTURAL DECISION: Using domain entity as input model
 * 
 * Reason: Simple CRUD operation with no complex validation
 * Trade-offs: Couples web layer to domain model structure
 * Review date: 2024-06-01
 * 
 * TODO: Refactor to dedicated input model if validation complexity increases
 */
@PostMapping("/accounts")
public Account createAccount(@RequestBody Account account) {
    return createAccountUseCase.createAccount(account);
}
```

### 2. **Set Review Triggers**
```java
public class AccountService {
    
    // TODO: Split into separate use cases when this method exceeds 50 lines
    // TODO: Create dedicated command objects when parameter count > 5
    public Account updateAccount(Account account) {
        // Implementation
    }
}
```

### 3. **Measure the Impact**
```java
@Service
public class SimpleAccountService {
    
    // Metrics to track the impact of shortcuts
    private final MeterRegistry meterRegistry;
    
    public Account updateAccount(Account account) {
        Timer.Sample sample = Timer.start(meterRegistry);
        try {
            // Simple implementation using shortcuts
            return repository.save(account);
        } finally {
            sample.stop(Timer.builder("account.update").register(meterRegistry));
        }
    }
}
```

### 4. **Plan the Migration Path**
```markdown
## Shortcut Migration Plan

### Current State
- Using domain entities as input/output models
- Single service handling multiple use cases

### Migration Triggers  
- When use cases diverge in validation requirements
- When different error handling is needed
- When team size exceeds 5 developers

### Migration Steps
1. Extract command objects for complex operations
2. Split services by use case boundaries  
3. Add port interfaces for better testability
4. Introduce proper input/output models
```

## Conclusion

Shortcuts can be pragmatic choices when:

- **Team is small** and coordination is easy
- **Domain is simple** with minimal business logic
- **Time constraints** require faster delivery
- **Learning curve** of full architecture is too steep

However, always:

- **Document the reasons** for taking shortcuts
- **Set review dates** to reassess the decisions
- **Monitor the impact** on code quality and maintainability
- **Plan migration paths** when shortcuts become technical debt

The key is being **conscious and intentional** about architectural decisions rather than taking shortcuts out of convenience or ignorance. Clean architecture principles should guide your decisions, but they shouldn't become dogma that prevents pragmatic solutions.