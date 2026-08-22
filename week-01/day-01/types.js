// typeof operator
console.log(typeof 10);
console.log(typeof "10");
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// type coercion (== vs ===)
console.log(1 == "1");
console.log(1 === "1");

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));
console.log(Boolean([]));
console.log(Boolean({}));

function describeValue(value) {
  return {
    type: typeof value,
    isTruthy: Boolean(value),
  };
}

// falsy values
console.log(describeValue(null));
console.log(describeValue(undefined));
console.log(describeValue(false));
console.log(describeValue(NaN));
console.log(describeValue(0));
console.log(describeValue(-0));
console.log(describeValue(0n));
console.log(describeValue(""));

// truthy values
console.log(describeValue({}));
console.log(describeValue([]));
