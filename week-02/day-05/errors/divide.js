function divide(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new TypeError("Both arguments must be numbers");
  } else if (!isFinite(a) || !isFinite(b)) {
    throw new TypeError("Both arguments must be finite numbers");
  } else if (b === 0) {
    throw new RangeError("Cannot divide by zero");
  }

  return a / b;
}

// Example:
try {
  console.log(divide("10", 2));
} catch (error) {
  console.log(error.name + ":", error.message);
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error(error.stack);
}

try {
  console.log(divide(NaN, 2));
} catch (error) {
  console.error(error);
}
