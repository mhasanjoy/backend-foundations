// const json = '{"name":"Alice","age":25}';

function parseUser(json) {
  let user;

  try {
    user = JSON.parse(json);
  } catch (error) {
    throw new Error("Invalid JSON");
  }

  if (typeof user !== "object" || user === null || Array.isArray(user)) {
    throw new TypeError("User data must be an object");
  } else if (typeof user.name !== "string" || user.name.trim() === "") {
    throw new Error("User name is required");
  } else if (
    typeof user.age !== "number" ||
    !Number.isInteger(user.age) ||
    user.age < 0
  ) {
    throw new Error("User age must be a non-negative integer");
  }

  return user;
}

// Example:
try {
  parseUser('{"name":"Alice",');
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  parseUser('{"age":25}');
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  parseUser('{"name":"Alice","age":"25"}');
} catch (error) {
  console.error(error.name + ":", error.message);
}
