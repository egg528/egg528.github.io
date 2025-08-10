---
title: "[Clean Architecture in Practice] Chapter 4: Implementing Use Cases"
description: "Learn about domain model implementation, use case structure, differences between input validation and business rule validation, and output model design."
date: "2023-02-27"
draft: false
---

## Implementing Use Cases

### 1. Implementing the Domain Model

- In the example, we create an Account class that supports deposits and withdrawals.
- The Account class has identifier/balance/activity fields and methods for withdrawal/deposit/transfer operations.
- Additionally, business validation logic to check whether withdrawal/deposit/transfer is possible exists within the Account class.
- This follows the DDD domain model concept.

### 2. Understanding Use Cases

- A typical use case follows these steps:
    1. Receive input.
    2. Validate business rules.
        - Perform validation together with domain entities.
    3. Manipulate model state.
    4. Return output.
- Looking at the above steps, there's no mention of `input validation`.
    - The author's position is that use cases should focus on business rule validation.
    - `So where and how does the author want input validation to be done?`

### 3. Business Rule Validation

- `Business rule validation` vs `Input validation`
  - Business rules are domain-specific logic that determines whether an operation is allowed based on current state and business context.
  - Input validation ensures that incoming data meets syntactic and format requirements.

#### Business Rule Examples:
- "Cannot withdraw more than the current balance"
- "Cannot transfer to a closed account"
- "Daily transaction limit cannot exceed $10,000"

#### Input Validation Examples:
- "Account ID must not be null"
- "Amount must be a positive number"
- "Email must be in valid format"

### 4. Where to Place Input Validation

The author suggests input validation should happen at the **adapter layer**:

```java
// Web adapter performs input validation
@RestController
public class SendMoneyController {
    
    @PostMapping("/accounts/{accountId}/send")
    public ResponseEntity sendMoney(
            @PathVariable Long accountId,
            @RequestBody @Valid SendMoneyRequest request) {
        
        // Input validation happens via @Valid annotation
        SendMoneyCommand command = new SendMoneyCommand(
            accountId,
            request.getTargetAccountId(),
            request.getAmount()
        );
        
        sendMoneyUseCase.sendMoney(command);
        return ResponseEntity.ok().build();
    }
}

// Use case focuses on business validation
@Service
public class SendMoneyService implements SendMoneyUseCase {
    
    @Override
    public boolean sendMoney(SendMoneyCommand command) {
        Account sourceAccount = loadAccountPort.loadAccount(command.getSourceAccountId());
        Account targetAccount = loadAccountPort.loadAccount(command.getTargetAccountId());
        
        // Business rule validation
        if (!sourceAccount.mayWithdraw(command.getAmount())) {
            throw new InsufficientFundsException();
        }
        
        if (targetAccount.isClosed()) {
            throw new AccountClosedException();
        }
        
        // Perform business operation
        sourceAccount.withdraw(command.getAmount());
        targetAccount.deposit(command.getAmount());
        
        // Save changes
        updateAccountStatePort.updateActivities(sourceAccount);
        updateAccountStatePort.updateActivities(targetAccount);
        
        return true;
    }
}
```

### 5. Use Case Structure

#### Input Models
- Should be immutable
- Contain only the data needed for the use case
- Validated at the adapter layer

```java
public class SendMoneyCommand {
    private final AccountId sourceAccountId;
    private final AccountId targetAccountId;
    private final Money amount;
    
    // Constructor and getters
}
```

#### Output Models
- Should represent the result of the operation
- Can include both success data and failure information
- Should not expose internal domain model details

```java
public class SendMoneyResult {
    private final boolean success;
    private final String transactionId;
    private final Money newBalance;
    
    // Constructor and getters
}
```

### 6. Benefits of This Approach

#### 1. **Clear Separation of Concerns**
- Input validation is separated from business logic
- Each layer has a single responsibility

#### 2. **Better Testability**
- Business logic can be tested without HTTP concerns
- Input validation can be tested separately

#### 3. **Reusability**
- Use cases can be called from different adapters (web, CLI, message queues)
- Business logic is not tied to specific input formats

#### 4. **Maintainability**
- Changes to validation rules don't affect business logic
- Changes to business rules don't affect input handling

## Conclusion

Implementing use cases with clear separation between input validation and business rule validation creates more maintainable and testable code. By placing input validation at the adapter layer and business validation in the domain layer, we achieve better separation of concerns and enable the use case to focus on orchestrating business operations.

The key insight is that **where you validate matters as much as what you validate**. Input validation belongs at the boundaries, while business validation belongs in the core.