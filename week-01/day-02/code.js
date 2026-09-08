// Closure
function createCounter() {
  let counter = 0;

  return function () {
    counter++;
    return counter;
  };
}

const increment = createCounter();
console.log(increment());
console.log(increment());
console.log(increment());

function createMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const triple = createMultiplier(3);
console.log(triple(5));

// Memoization
function once(fn) {
  let cache = false;

  return function () {
    if (!cache) {
      cache = true;
      return fn();
    }
  };
}

const initialize = once(() => {
  console.log("initialized");
});

initialize();
initialize();
initialize();

// Function Composition
function compose(fn1, fn2) {
  return function (x) {
    return fn1(fn2(x));
  };
}

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleThenSquare = compose(square, double);

console.log(doubleThenSquare(3));
