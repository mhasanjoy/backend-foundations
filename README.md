# Backend Foundations

# JavaScript Fundamentals: Values, Types & Variables

## Data Types
A JavaScript variable can hold 8 types of data, 7 primitive types or an Object type. Primitive values are `immutable`.

### Numeric Types:
- Number
    - Numbers are stored in a 64-bit floating point format.
- BigInt
    - Any size, limited only by available memory.
    - Arithmetic between a BigInt and a Number is not allowed (TypeError).
    - A BigInt cannot have decimals.
    - JSON.stringify() cannot handle BigInt.

### Non-Numeric Types:
- String
- Boolean
- Null
    - The `typeof` operator return object for null.
- Undefined
- Symbol
    - Unique identifier.

### Objects:
- Object
- Array
- Function
- Date
- RegExp
- Set
- Map

## The `typeof` operator finds the type of a JavaScript variable.

## Variables
- Data containers.
- `let`, `const`, `var`, automatically.

## Type Coercion
- Automatic conversion of values from one data type to another.
- If a string cannot be converted to a valid number, the result is `NaN`.
- `==` loose equality (value), `===` equality (value & type).

## Falsy Values
- `null`
- `undefined`
- `false`
- `NaN`
- `0`
- `-0`
- `0n`
- `""`

## Object
- Objects are `mutable`.
- In an object method, `this` refers to the object.
- Used alone or in function, `this` refers to the global object, in strict mode `undefined`.
- The `call()`, `apply()` & `bind()` method can be used to call a function with a specific this.
    - The `call()` & `apply()` method runs immediately. Does not return a reusable function.
    - The `bind()` method returns a new function.
    - The `call()` method takes arguments separately.
    - The `apply()` method takes arguments as an array.
- `Object.keys()`, `Object.values()`, `Object.entries()`.
- `Object.create()`, `Object.assign()`, `Object.fromEntries()`, `Object.groupBy()`.
- Property Management Methods
- Object Protection Methods
- Prototypes

<br>
<br>

# Big-O
It's used to describe time or space complexity of algorithms. It focuses on the growth rate (upper bound), not exact seconds.

- `O(1)` - constant time
    - Same amount of work regardless of input size.
- `O(n)` - linear time
    - Work grows proportionally with input size (loop).
- `O(n²)` — quadratic time
    - Nested loops often become `O(n²)`.
- Hash map lookup is usually `O(1)` in average case.

<br>
<br>

# Functions, Scope & Closures

## Function
- `Parameters` are the names listed in the function definition.
- `Arguments` are the real values passed to, and received by the function.
- Parameters can have `default` values.
- Functions have a built-in object called `arguments` object (array of the arguments).
- The rest parameter `(...)` allows a function to treat an indefinite number of arguments as an array.
- Function declarations are `hoisted` to the top of their scope.
- Function `expressions` are not hoisted in the same way as function declarations.
- Arrow functions allow shorter syntax for function expressions.
- Functions are `object methods`. The `typeof` operator return `function` for functions.
- A `callback function` is a function passed as an argument into another function.
- Normal function `this` is determined dynamically by the call site. Arrow function this is `lexical`.
- A `closure` is a function that has access to the parent scope, after the parent scope has closed.
- A `higher order function` is a function that either takes another function as an argument or returns another function as its result.
- `Currying` and `Memoization` uses `closure` and `higher order` function concepts.

## Scope
- Global, Function and Block scope.
- Variables declared with the `var` keyword cannot have `block` scope.
- Undeclared variables become `global`.
- JavaScript declarations are `hoisted`, initializations are not. Variables declared with `let` and `const` are hoisted to the top of the scope but not initialized. The variable is in a `Temporal Dead Zone` from the start of the scope until it is declared.
- The `"use strict"` directive is only recognized at the beginning of a script or a function.
- JavaScript uses `lexical` scope. This connects directly to `closures`.

<br>
<br>

# Arrays, Objects, Map & Set

## Array
- Arrays are `objects`.
- Arrays use `numbered` indexes, objects use `named` indexes.
- Array.includes() allows to check for `NaN` values. Unlike Array.indexOf().
- for ... of (loops over `entries`).
- for ... in (loops over `indexes`).

## Set
- Set is a collection of `unique` values.
- Sets are `objects`.
- `WeakSet` is a collection of values where the values must be `objects`.

## Map
- Map keys can be of `any data type`.
- Maps are `objects`.
- `WeakMap` is a collection of key/value pairs where the keys must be `objects`.

<br>
<br>

# JavaScript Execution + Synchronous/Asynchronous Thinking

## Asynchronous Programming
- JavaScript runs one task at a time.
- Callback is not asynchronous.
- `Callback hell`.
- Every Promise is always in one of three states (`pending`, `fulfilled`, `rejected`).
- `Promise chaining`.
- A Promise does not make code asynchronous. It represents the result of an asynchronous operation.
- `async` functions always return Promises.
- Promise.all() (`all fulfilled`), Promise.allSettled() (`all settled`), Promise.any() (`first fulfilled`), Promise.race() (`first settled`).
- Fetch only rejects on `network` errors, not on `HTTP` errors.
- The `AbortController` object lets you cancel asynchronous operations.
- A `Web Worker` runs JavaScript in a separate thread.
- `Call Stack`, `Web APIs`, `Event Loop`, `Task Queue` (`Callback Queue`) and `MicroTask Queue` (`Job Queue`).

<br>
<br>

# Git

### `git init`
- Initializes a new Git repository in the current folder.
- Creates a hidden `.git` directory.

### `git status`
- Shows the current state of the repository.

### `git add`
- Moves changes into Git's staging area.

### `git commit`
- Creates a permanent snapshot/commit of what's currently in the staging area.
- After the commit, it's stored in the local `.git` repository.

### `git log`
- Shows commit history. Each commit has a unique identifier called a commit hash.
- A useful shorter version `git log --oneline`.

### `git diff`
- It shows what has changed.
- `git diff` shows changes that haven't staged yet.
- `git diff --staged` shows changes that are staged.

### `git branch`
- A branch is simply a movable pointer to a commit.

### `git switch`
- It is used to move from one branch to another.
- Create and switch in one command `git switch -c`.

### `git merge`
- It combines the history of one branch into the current branch.
- It can create a new commit or result in fast-forward merge.

### `git restore`
- It discards or recover changes.
- Unstaged changes are discarded. `git restore --staged` changes staged file to unstaged.

### `git stash`
- It temporarily put changes aside.
