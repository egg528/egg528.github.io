---
title: "Chapter 5: Implementing Web Adapters"
description: "Learn about the role of web adapters, dependency inversion principles, HTTP request processing, and the necessity of port interfaces."
date: "2023-03-07"
draft: false
---

## Implementing Web Adapters

### 1. What is a Web Adapter?
- Plays the role of communicating with the outside world
- HTTP API is one way of implementing an adapter
- Think of it as similar to the Controller in the MVC model

### 2. Dependency Inversion
![web-adapter](./diagram-1.webp)
- The web adapter communicates with the application service through a dedicated port (interface) implemented by the application service.
- Why is a port necessary in this structure?
  - The book's logic states that ports serve as specifications for how the application layer communicates with the outside world.
  - It clearly documents how the application layer communicates externally, preserving intent.
  - Also, since the web adapter only depends on the port, it's not affected by changes in the application layer logic.
- In the case of web sockets, the web adapter is both an incoming adapter that receives requests and an outgoing adapter that actively sends responses.
  - In this case, ports are essential to maintain the correct direction of dependencies.

### 3. Web Adapter Responsibilities

A web adapter typically handles these responsibilities:

```
1. Listen to HTTP requests
2. Deserialize request data into objects
3. Perform input validation
4. Map input to use case input model
5. Call the use case
6. Map use case output to HTTP response
7. Serialize response and return to client
```

### 4. Implementation Example

```java
@RestController
@RequestMapping("/accounts")
public class SendMoneyController {
    
    private final SendMoneyUseCase sendMoneyUseCase;
    
    public SendMoneyController(SendMoneyUseCase sendMoneyUseCase) {
        this.sendMoneyUseCase = sendMoneyUseCase;
    }
    
    @PostMapping("/{accountId}/send")
    public ResponseEntity<Void> sendMoney(
            @PathVariable("accountId") Long accountId,
            @RequestBody @Valid SendMoneyRequest request) {
        
        // Map HTTP request to use case command
        SendMoneyCommand command = SendMoneyCommand.builder()
            .sourceAccountId(new AccountId(accountId))
            .targetAccountId(new AccountId(request.getTargetAccountId()))
            .amount(Money.of(request.getAmount()))
            .build();
        
        // Call use case through port interface
        sendMoneyUseCase.sendMoney(command);
        
        return ResponseEntity.ok().build();
    }
}

// Input validation model
public class SendMoneyRequest {
    @NotNull
    private Long targetAccountId;
    
    @NotNull
    @Positive
    private BigDecimal amount;
    
    // Constructors, getters, setters
}
```

### 5. Port Interface Design

The port interface should be designed from the application's perspective:

```java
public interface SendMoneyUseCase {
    boolean sendMoney(SendMoneyCommand command);
}

public class SendMoneyCommand {
    private final AccountId sourceAccountId;
    private final AccountId targetAccountId;
    private final Money amount;
    
    // Constructor and getters
}
```

### 6. Benefits of Port-based Design

#### 1. **Testability**
```java
@Test
public void testSendMoney() {
    // Mock the port interface
    SendMoneyUseCase mockUseCase = mock(SendMoneyUseCase.class);
    SendMoneyController controller = new SendMoneyController(mockUseCase);
    
    // Test without the actual application service
    ResponseEntity<Void> response = controller.sendMoney(1L, createValidRequest());
    
    verify(mockUseCase).sendMoney(any(SendMoneyCommand.class));
    assertEquals(HttpStatus.OK, response.getStatusCode());
}
```

#### 2. **Flexibility**
- Multiple web adapters can implement the same port
- Easy to add new input mechanisms (REST, GraphQL, gRPC)
- Application logic remains unchanged

#### 3. **Clear Contracts**
- Port interfaces make the application's capabilities explicit
- Documentation becomes easier
- API changes are tracked through interface changes

### 7. Error Handling

Web adapters should translate domain exceptions to appropriate HTTP responses:

```java
@RestController
public class SendMoneyController {
    
    @ExceptionHandler(InsufficientFundsException.class)
    public ResponseEntity<ErrorResponse> handleInsufficientFunds(
            InsufficientFundsException e) {
        return ResponseEntity.badRequest()
            .body(new ErrorResponse("INSUFFICIENT_FUNDS", e.getMessage()));
    }
    
    @ExceptionHandler(AccountNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleAccountNotFound(
            AccountNotFoundException e) {
        return ResponseEntity.notFound().build();
    }
}
```

### 8. Multiple Web Adapters

Different web adapters can serve different purposes:

```java
// REST API for external clients
@RestController
@RequestMapping("/api/v1/accounts")
public class AccountRestController {
    // REST implementation
}

// Admin interface
@RestController
@RequestMapping("/admin/accounts")
public class AccountAdminController {
    // Admin-specific implementation
}

// Public API with rate limiting
@RestController
@RequestMapping("/public/accounts")
public class AccountPublicController {
    // Public API implementation
}
```

## Conclusion

Web adapters serve as the boundary between the HTTP world and the application core. By implementing them correctly with proper dependency inversion through port interfaces, we achieve:

- **Clear separation** between HTTP concerns and business logic
- **High testability** through mockable interfaces
- **Flexibility** to support multiple input mechanisms
- **Maintainability** through well-defined contracts

The key principle is that **the web adapter adapts the outside world to the application, not the other way around**. This keeps the application core independent of delivery mechanisms and enables it to evolve separately from the web layer.