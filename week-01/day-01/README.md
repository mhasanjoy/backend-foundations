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

# Big-O
It's used to describe time or space complexity of algorithms. It focuses on the growth rate (upper bound), not exact seconds.
- `O(1)` - constant time
    - Same amount of work regardless of input size.
- `O(n)` - linear time
    - Work grows proportionally with input size (loop).
- `O(n²)` — quadratic time
    - Nested loops often become `O(n²)`.
- Hash map lookup is usually `O(1)` in average case.
