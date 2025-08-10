---
title: "[Data-Oriented Programming] Chapter 11: Polymorphism"
description: "Analysis of how to implement OOP polymorphism in DOP and how to utilize multi-method libraries"
date: "2025-02-06"
draft: false
---

In OOP, polymorphism allows multiple implementation classes to be handled through the same interface. In contrast, DOP separates OOP objects (classes) into data and code, handling data only as generic data structures. Therefore, rather than having different classes based on data types, it aims to distinguish based on field values.

So how can DOP enjoy the benefits that OOP polymorphism provides?

<br></br>

## The Core of Polymorphism

The core of polymorphism is calling appropriate methods according to the actual type of objects. While OOP implements this through interfaces or abstract classes, DOP can achieve the same effect based on data structure and values.

<br></br>

## Multi-Methods

To utilize all the benefits of polymorphism in DOP, the book recommends using multi-method libraries.

### Single Dispatch

Single dispatch is a method that determines which method to call based on the type of one argument. This is similar to traditional OOP method overriding.

### Multiple Dispatch

Multiple dispatch is a method that determines which method to call by simultaneously considering the types of multiple arguments. This enables more detailed conditional logic implementation.

### Dynamic Dispatch

Dynamic dispatch is a method that calls appropriate methods by checking the actual type of objects at runtime. This greatly improves code flexibility.

<br></br>

## My Thoughts

Chapter 13 allowed me to reflect once again on what the benefits of polymorphism were. Also, even if not developing in DOP style, I thought it might be a method worth trying when working with JavaScript or Python. However, since it's an unfamiliar concept, I think I'd need to get agreement from surrounding team members before using it at work.