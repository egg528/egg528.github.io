---
title: "Book Review: Data-Oriented Programming - Chapter 4: State Management"
description: "Learn about multi-version system data management through data immutability, a core principle of DOP, and structural sharing."
date: "2024-11-12"
draft: false
---

> **DOP Principle 3  
> Data is immutable**

<br></br>

## Multi-version System Data and Structural Sharing

In DOP, data is immutable. Therefore, when data changes occur, a new version is created. Managing data this way means all data change operations go through the following process. In the computation phase, generic functions are used like queries to create the next version reflecting the changes. Then, in the commitment phase, the system is updated to reference the computed next version.

1. **Computation Phase:** Generate the next version of system data.
2. **Commitment Phase:** Move to reference the computed next version of system data.

The advantages of the approach chosen by DOP are as follows. This method is very similar to how Git manages commit history to track version history.

- By separating computation/commitment, stateful parts can be minimized.
- The implementation of the commitment phase can be commonly used for all change operations.
- Previous version history can be tracked.

### Structural Sharing

In immutable data structures, when data changes, the entire structure is not copied. Instead, unchanged parts are shared and only changed parts create new objects. This is called structural sharing.

When using structural sharing, care must be taken to prevent unintended data modification. For this reason, using persistent data structure libraries is recommended.

<br></br>

## Data Commitment Phase and Previous State Restoration

Let's examine system data version management and state restoration methods through the following code example.

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
            throw "Attempting to change to invalid system data.";
        }
        
        this.systemData = next;
        this.previousSystemData = systemDataBeforeUpdate;
    }
    
    undoLastMutation() {
        this.systemData = this.previousSystemData;
    }
}
```

The `commit` method is responsible for applying new versions to the system. In this process, validation is handled centrally, and restoration to previous versions can be implemented simply.

<br></br>

## My Thoughts

There are still parts I don't fully understand, so I continue to have questions. I have doubts about DB schema and memory management, but I want to resolve them through continuous learning.