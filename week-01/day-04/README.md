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
