---
title: "[Clean Architecture in Practice] Chapter 3: Organizing Code"
description: "Compare the pros and cons of layer-based and feature-based organization, and learn effective code organization strategies."
date: "2023-02-18"
draft: false
---

## Organizing Code

### 01. Organizing by `Layer` and `Feature`

- When organized only by layer (domain, persistence, web)

  - There are no boundaries that distinguish functions/features.
  - It's impossible to understand what use cases are provided.
  - Incoming and outgoing ports are hidden within the code.

- When organized only by feature (by domain like account...)

  - Since there's no layer distinction, the underlying architecture is not visible.

  - Package-private can prevent unnecessary dependencies between features, but cannot enforce dependencies between layers.

### 02. Organizing by Feature and Layer

The most effective approach is to combine both strategies:

```
src/
├── account/
│   ├── domain/
│   │   ├── Account.java
│   │   └── AccountService.java
│   ├── application/
│   │   ├── SendMoneyService.java
│   │   └── port/
│   │       ├── in/
│   │       │   └── SendMoneyUseCase.java
│   │       └── out/
│   │           └── LoadAccountPort.java
│   └── adapter/
│       ├── in/
│       │   └── web/
│       │       └── SendMoneyController.java
│       └── out/
│           └── persistence/
│               └── AccountPersistenceAdapter.java
└── user/
    ├── domain/
    ├── application/
    └── adapter/
```

### 03. Benefits of Feature-Layer Organization

#### 1. **Clear Use Cases**
- Each feature package clearly shows what use cases the system supports.
- Business requirements are directly reflected in the code structure.

#### 2. **Enforced Architecture**
- The layered structure within each feature maintains architectural integrity.
- Dependencies between layers are clearly defined and enforced.

#### 3. **Independent Development**
- Different teams can work on different features without conflicts.
- Feature boundaries provide natural separation for parallel development.

#### 4. **Better Testability**
- Each feature can be tested independently.
- Mock implementations can be easily created for ports.

### 04. Port and Adapter Pattern

#### Incoming Ports (Use Cases)
- Define what the application can do.
- Located in the application layer.
- Implemented by service classes.

#### Outgoing Ports
- Define what the application needs from external systems.
- Also located in the application layer.
- Implemented by adapters in the infrastructure layer.

#### Adapters
- **Incoming Adapters**: Web controllers, REST APIs, CLI interfaces.
- **Outgoing Adapters**: Database repositories, external API clients, message queues.

### 05. Package Visibility Rules

Use package-private visibility to enforce architectural boundaries:

```java
// ✅ Good: Port interface is public
public interface SendMoneyUseCase {
    boolean sendMoney(SendMoneyCommand command);
}

// ✅ Good: Service implementation is package-private
class SendMoneyService implements SendMoneyUseCase {
    // Implementation
}

// ✅ Good: Domain entities can be public if needed by other features
public class Account {
    // Domain logic
}
```

### 06. Dependency Rules

1. **Adapters depend on ports** (not the other way around).
2. **Application layer defines ports** but doesn't implement outgoing ports.
3. **Domain layer has no dependencies** on other layers.
4. **Infrastructure layer implements** outgoing ports.

## Conclusion

Organizing code by feature first, then by layer within each feature, provides the best of both worlds:

- **Feature boundaries** make use cases visible and enable parallel development.
- **Layer boundaries** within features maintain architectural integrity.
- **Port and Adapter pattern** provides clear interfaces and dependency direction.

This organization makes the codebase more maintainable, testable, and understandable while supporting concurrent development by multiple teams.