# Functions, scope & closures

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
