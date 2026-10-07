# Errors, Exceptions & Debugging

### Syntax Error
- Code can't be parsed.

### Runtime Error
- Something goes wrong while running.

### Logical Error
- Program runs, but gives wrong result.

### `throw`
- Create/raise an error.

### `try`
- Run risky code.

### `catch`
- Handle the error.

### `finally`
- Run cleanup code regardless.

### Error
- Object containing error information.
- `Error`, `TypeError`, `RangeError`, `ReferenceError`, `SyntaxError`.

### Custom Error
- Your own meaningful error type.

```js
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

try {
  throw new ValidationError("Email is required", "email");
} catch (error) {
  console.log(error.name); // ValidationError
  console.log(error.message); // Email is required
  console.log(error.field); // email
}
```
