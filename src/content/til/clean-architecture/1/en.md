---
title: "[Clean Architecture in Practice] Chapter 1: Problems with Layered Architecture"
description: "Exploring the limitations of 3-layer architecture including database-driven design problems, shortcut risks, testing difficulties, use case hiding, and concurrent development challenges."
date: "2023-02-01"
draft: false
---

## Problems That Layered Architecture Can Cause

- The book defines ideal architecture as one that `widens the scope of choice and can quickly adapt to changing requirements and external factors`.
  - Can quickly reflect changing business logic
  - Can rapidly change the technology of a single layer
- The 3-layer structure can also satisfy the above conditions.
  - However, the following problems exist.

### 1. Leads to Database-Driven Design

- In the 3-layer structure, the domain layer depends on the persistence layer.
  - Naturally, the domain layer becomes dependent on the database.
  - Also, the domain layer becomes tightly coupled with the persistence layer.
    - Transactions, loading, cache flushing, etc.
- `Domain Logic` vs `Database`
  - What should be the center of architectural design?
  - In the 3-layer structure, according to dependency direction, it's appropriate to design the database first

### 2. Prone to Taking Shortcuts

- In projects with tight deadlines, it's common to bypass the domain layer and directly implement business logic in the web layer.
- The problem is that once shortcuts are taken, it becomes increasingly easier to take more shortcuts.
- As shortcuts accumulate, the codebase becomes more complex and harder to maintain.

### 3. Testing Becomes Difficult

- Since all layers are tightly coupled, unit testing individual layers becomes challenging.
- Testing the domain layer requires setting up the entire persistence layer infrastructure.
- Integration testing becomes the primary testing method, which is slower and more complex.

### 4. Use Cases Are Hidden

- In traditional layered architecture, use cases are not clearly visible at the code structure level.
- Business requirements are scattered across different layers, making it difficult to understand what the system actually does.
- The relationship between business requirements and code becomes unclear.

### 5. Makes Concurrent Development Difficult

- When multiple developers work on the same layer simultaneously, conflicts frequently occur.
- Changes in one layer can unexpectedly affect other layers, making parallel development risky.
- The lack of clear boundaries between different features makes it difficult to divide work among team members.

## Conclusion

While the traditional 3-layer architecture has its merits, it also has significant limitations that can hinder long-term maintainability and development productivity. Understanding these problems is the first step toward adopting more flexible architectural patterns like Clean Architecture.

The key insight is that dependency direction matters greatly in determining how easily we can adapt to change and maintain our codebase over time.