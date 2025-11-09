---
title: "[Data-Oriented Programming] Chapter 13: Debugging"
description: "Learn about the debugging advantages of DOP, REPL utilization, and context capture methods. Introduces effective debugging strategies using data immutability."
date: "2025-02-29"
draft: false
---

Once logic is written, the process of checking whether it works as intended is essential. This would be true regardless of programming paradigm, whether OOP or DOP. However, DOP has advantages in this process. Since data in DOP is immutable, method arguments are the sole cause of result values. That is, in DOP, you can verify behavior by checking method arguments and their result values.

<br></br>

## Context Capture

Method arguments can be verified through logging. Simply using `console.log()` at the beginning of methods to output arguments suffices. However, during console output, data sometimes changes to a form that's difficult to copy and paste directly. For example, strings need to be in `"string"` format for use, but console only displays them as string.

To solve this problem, `JSON.stringify()` can be used. This allows outputting data in a form that can be copied and used directly.

```javascript
function hasWordStartingWith(sentence, prefix) {
    console.log(JSON.stringify(sentence));
    console.log(JSON.stringify(prefix));
    
    var words = sentence.split(" ");
    
    return _.find(words, function(word) {
        return word.startsWith(prefix);
    }) != null;
}
```

Using `JSON.stringify()` as above outputs strings including quotes, making them directly usable in code.

<br></br>

## Debugging with REPL

REPL (Read-Eval-Print Loop) is an interactive environment where you can input code and execute it immediately. REPL is particularly useful in DOP because data is immutable, so you always get the same results for the same inputs.

Advantages of debugging with REPL:

- Guaranteed identical results for each method call
- Step-by-step exploration of complex data structures possible
- Quick problem solving through immediate feedback

You can copy logged data and test it directly in browser developer tools or Node.js REPL environment. This allows deeper understanding of method behavior and quick identification of problems.

<br></br>

## Unit Testing and External Data Testing

In DOP, methods have pure function characteristics, making unit testing very easy. This is because the same input always guarantees the same output.

Advantages of unit testing:
- Easy test case creation with predictable results
- Natural test isolation without side effects
- Guaranteed functional accuracy during refactoring

DOP's advantages are also evident when handling external data. By converting externally received data to immutable structures before processing, you can debug while ensuring data integrity.

<br></br>

## My Thoughts

Actually, I've been using REPL since I started development until now, but I think I learned the exact term for the first time. It was good that they mentioned REPL debugging that I was always doing but was never explained anywhere, and I was able to learn tips for good utilization and how to use it in DOP.

Particularly, the logging method using `JSON.stringify()` was a useful tip that could be immediately applied in practice. It's much more practical than using only `console.log()`.

I was able to clearly understand what advantages DOP's core concept of data immutability provides in the debugging process. The fact that method arguments are the sole cause of result values makes debugging very predictable and systematic.

I plan to actively utilize what I learned in this chapter when debugging complex logic in the future. Particularly, I want to apply step-by-step debugging using REPL and effective logging methods through JSON.stringify() to practical work.