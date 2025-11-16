---
title: "Chapter 3: Basic Data Manipulation"
description: "DOP Principle 2: Learn how to represent data objects with generic data structures and their advantages and disadvantages."
date: "2024-11-02"
draft: false
---

> **DOP Principle 2**  
> Represent data objects with generic data structures  

## Representing Data with Generic Data Structures

DOP has assertions about how to represent data. First, data objects are represented as records, and relationships between records are represented as sequential collections and indices. The important thing is that records must be represented by generic data structures. There are no claims about how indices and collections should be implemented. (The book implements collections as arrays and indices using homogeneous maps.) However, it states that records should be represented as homogeneous maps.

Typically, records are represented as instances of classes, and each field becomes a member variable of the class. However, in DOP, all records are represented as maps, and each field is expressed in key-value form.

![DOP Data Representation Method](./diagram-1.webp)

The advantage of this approach is that there's no need to create classes and it provides the flexibility to dynamically add/modify/delete fields. On the other hand, as much freedom is gained, stability decreases.