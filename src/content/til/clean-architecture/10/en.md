---
title: "[Clean Architecture in Practice] Chapter 10: Enforcing Architecture Boundaries"
description: "Learn methods for enforcing architecture boundaries through access modifiers, post-compile checks, and build artifacts."
date: "2023-04-19"
draft: false
---

## Enforcing Architecture Boundaries
- Enforcing boundaries means forcing dependencies to always point inward.
- What methods exist for enforcing boundaries?

### 1. Access Modifiers
- Access modifiers are basic boundary enforcement tools provided by Java (public, protected, package-private, private)
- The author particularly emphasizes package-private because it creates cohesive modules through packages.
  - Only classes that serve as module entry points need to be public.
  - This configuration reduces the risk of dependencies pointing in the wrong direction.

#### Package Structure Strategy:
```java
// Account feature package structure
com.example.account/
├── domain/
│   ├── Account.java              // public - domain entity
│   └── AccountService.java       // package-private - internal service
├── application/
│   ├── SendMoneyUseCase.java     // public - port interface  
│   └── SendMoneyService.java     // package-private - implementation
└── adapter/
    ├── web/
    │   └── SendMoneyController.java    // public - web entry point
    └── persistence/
        └── AccountPersistenceAdapter.java  // package-private - internal adapter
```

#### Visibility Rules:
```java
// ✅ Good: Public interfaces, package-private implementations
public interface SendMoneyUseCase {
    boolean sendMoney(SendMoneyCommand command);
}

class SendMoneyService implements SendMoneyUseCase {  // package-private
    // Implementation hidden from other packages
}

// ✅ Good: Public entry points
@RestController
public class SendMoneyController {  // Entry point for web layer
    private final SendMoneyUseCase sendMoneyUseCase;
}

// ✅ Good: Package-private internal classes  
class AccountMapper {  // Internal utility, not exposed
    Account toDomain(AccountJpaEntity entity) { ... }
}
```

#### Benefits of Package-Private:
- **Encapsulation**: Internal implementation details are hidden
- **Cohesion**: Related classes are grouped together
- **Reduced Coupling**: External packages cannot depend on internal classes
- **Refactoring Safety**: Internal classes can be changed without affecting other packages

### 2. Post-Compile Checks
- Means checking at runtime after compilation
- ArchUnit is a representative tool
  - Provides APIs to check whether dependency directions are properly configured

#### ArchUnit Example:
```java
@Test
public void testArchitecture() {
    JavaClasses classes = ClassFileImporter().importPackages("com.example");
    
    // Rule: Application layer should not depend on web layer
    ArchRule rule1 = noClasses()
        .that().resideInAPackage("..application..")
        .should().dependOnClassesThat()
        .resideInAPackage("..web..");
    
    // Rule: Application layer should not depend on persistence layer
    ArchRule rule2 = noClasses()
        .that().resideInAPackage("..application..")
        .should().dependOnClassesThat()
        .resideInAPackage("..persistence..");
    
    // Rule: Domain should not depend on any infrastructure
    ArchRule rule3 = noClasses()
        .that().resideInAPackage("..domain..")
        .should().dependOnClassesThat()
        .resideInAPackage("..infrastructure..");
    
    rule1.check(classes);
    rule2.check(classes);
    rule3.check(classes);
}
```

#### Complex Architecture Rules:
```java
@Test
public void testCleanArchitectureRules() {
    JavaClasses classes = ClassFileImporter().importPackages("com.example");
    
    // Layered architecture rule
    LayeredArchitecture architecture = layeredArchitecture()
        .layer("Domain").definedBy("..domain..")
        .layer("Application").definedBy("..application..")
        .layer("Infrastructure").definedBy("..infrastructure..")
        .layer("Web").definedBy("..web..")
        
        .whereLayer("Web").mayNotBeAccessedByAnyLayer()
        .whereLayer("Application").mayOnlyBeAccessedByLayers("Web")
        .whereLayer("Domain").mayOnlyBeAccessedByLayers("Application")
        .whereLayer("Infrastructure").mayNotAccessAnyLayer();
    
    architecture.check(classes);
}
```

#### Port and Adapter Rules:
```java
@Test
public void testPortAdapterRules() {
    JavaClasses classes = ClassFileImporter().importPackages("com.example");
    
    // Rule: Only interfaces should be in port packages
    ArchRule portRule = classes()
        .that().resideInAPackage("..port..")
        .should().beInterfaces()
        .because("Ports should only contain interfaces");
    
    // Rule: Adapters should implement ports
    ArchRule adapterRule = classes()
        .that().resideInAPackage("..adapter..")
        .should().implement(JavaClass.Predicates.resideInAPackage("..port.."))
        .because("Adapters should implement port interfaces");
    
    // Rule: Use cases should only depend on ports
    ArchRule useCaseRule = classes()
        .that().resideInAPackage("..usecase..")
        .should().onlyDependOnClassesThat()
        .resideInAnyPackage("..domain..", "..port..", "java..", "javax..")
        .because("Use cases should only depend on domain and ports");
    
    portRule.check(classes);
    adapterRule.check(classes);
    useCaseRule.check(classes);
}
```

#### Custom Architecture Rules:
```java
@Test
public void testCustomRules() {
    JavaClasses classes = ClassFileImporter().importPackages("com.example");
    
    // Rule: Services should not be called directly from controllers
    ArchRule noDirectServiceCalls = noClasses()
        .that().resideInAPackage("..web..")
        .should().dependOnClassesThat()
        .resideInAPackage("..service..")
        .because("Controllers should only depend on use case interfaces");
    
    // Rule: Entities should not depend on services  
    ArchRule entityIndependence = noClasses()
        .that().resideInAPackage("..domain..")
        .should().dependOnClassesThat()
        .resideInAPackage("..service..")
        .because("Domain entities should be independent of services");
    
    noDirectServiceCalls.check(classes);
    entityIndependence.check(classes);
}
```

### 3. Build Artifacts
- Each layer can be made into separate build modules to enforce boundaries.

#### Gradle Multi-Module Structure:
```gradle
// settings.gradle
include ':domain'
include ':application'  
include ':infrastructure'
include ':web'

// domain/build.gradle
dependencies {
    // Domain has no dependencies on other modules
    implementation 'org.springframework:spring-context'
}

// application/build.gradle
dependencies {
    implementation project(':domain')
    // Application can only depend on domain
}

// infrastructure/build.gradle  
dependencies {
    implementation project(':domain')
    implementation project(':application')
    implementation 'org.springframework.boot:spring-boot-starter-data-jpa'
}

// web/build.gradle
dependencies {
    implementation project(':application')
    implementation 'org.springframework.boot:spring-boot-starter-web'
    // Web cannot directly depend on infrastructure
}
```

#### Maven Multi-Module Structure:
```xml
<!-- Parent pom.xml -->
<modules>
    <module>domain</module>
    <module>application</module>
    <module>infrastructure</module>
    <module>web</module>
</modules>

<!-- application/pom.xml -->
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>domain</artifactId>
        <version>${project.version}</version>
    </dependency>
    <!-- No direct dependency on infrastructure -->
</dependencies>

<!-- infrastructure/pom.xml -->
<dependencies>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>domain</artifactId>
        <version>${project.version}</version>
    </dependency>
    <dependency>
        <groupId>com.example</groupId>
        <artifactId>application</artifactId>
        <version>${project.version}</version>
    </dependency>
</dependencies>
```

#### Benefits of Build Artifacts:
- **Compile-Time Enforcement**: Impossible to violate dependency rules
- **Clear Module Boundaries**: Physical separation of concerns  
- **Independent Deployment**: Modules can be deployed separately
- **Team Independence**: Different teams can work on different modules

#### Drawbacks:
- **Build Complexity**: More complex build configuration
- **Development Overhead**: More modules to manage
- **Integration Complexity**: Need to manage inter-module communication

### 4. Continuous Integration Checks

#### Pipeline Integration:
```yaml
# GitHub Actions example
name: Architecture Tests
on: [push, pull_request]

jobs:
  architecture-tests:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Set up JDK
      uses: actions/setup-java@v2
      with:
        java-version: '11'
    - name: Run Architecture Tests
      run: ./gradlew archTest
    - name: Fail on Architecture Violations
      run: exit 1
      if: failure()
```

#### Quality Gates:
```java
@Test
public void architectureComplianceGate() {
    JavaClasses classes = ClassFileImporter().importPackages("com.example");
    
    // Critical rules that must pass for deployment
    ArchRule criticalRules = CompositeArchRule.of(
        layeredArchitectureRule(),
        noCyclicDependencies(),
        portAdapterCompliance()
    );
    
    // Will fail build if violated
    criticalRules.check(classes);
}
```

### 5. Documentation and Communication

#### Architecture Decision Records (ADRs):
```markdown
# ADR-001: Package Structure for Clean Architecture

## Status
Accepted

## Context
We need to enforce clean architecture boundaries in our codebase.

## Decision
- Use package-private visibility for implementation classes
- Public interfaces for ports only
- ArchUnit tests for boundary enforcement
- Separate build modules for major layers

## Consequences
- Stronger encapsulation
- Better testability
- More complex build setup
- Clear architectural boundaries
```

#### Code Comments and Annotations:
```java
/**
 * This package contains domain entities and business rules.
 * Classes in this package should NOT depend on:
 * - Infrastructure concerns (databases, web frameworks)
 * - Application services
 * - External libraries (except standard Java libraries)
 */
package com.example.domain;

@ArchitectureLayer("domain")
public class Account {
    // Domain logic only
}
```

## Recommendation Strategy

### 1. **Start with Access Modifiers**
- Easiest to implement
- No additional tooling required
- Immediate feedback during development

### 2. **Add Automated Testing**
- ArchUnit for architecture compliance
- Run as part of CI/CD pipeline
- Catches violations early

### 3. **Consider Build Modules for Large Projects**
- When team grows beyond 5-10 developers
- When codebase exceeds manageable size
- When strict boundaries are critical

### 4. **Combine Multiple Approaches**
```java
// Package-private implementation
class SendMoneyService implements SendMoneyUseCase {
    
    @ArchitectureCompliant("use-case")
    public boolean sendMoney(SendMoneyCommand command) {
        // Implementation
    }
}
```

## Conclusion

Enforcing architecture boundaries requires a combination of:

- **Package Structure**: Organizing code to reflect architecture
- **Access Control**: Using visibility modifiers appropriately  
- **Automated Testing**: ArchUnit for continuous validation
- **Build Structure**: Module separation for strict enforcement
- **Team Discipline**: Code review and documentation

The goal is to make architectural violations **impossible or immediately visible**, creating feedback loops that guide developers toward correct implementations.

Choose the enforcement level that matches your team size, project complexity, and long-term maintenance requirements. Start simple and add stricter enforcement as your project grows and matures.