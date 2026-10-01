function cloneUser(user) {
  return structuredClone(user);
}

function updateUser(user, updates) {
  for (key in updates) {
    if (
      user[key] &&
      typeof user[key] === "object" &&
      !Array.isArray(user[key]) &&
      updates[key] &&
      typeof updates[key] === "object" &&
      !Array.isArray(updates[key])
    ) {
      user[key] = updateUser(user[key], updates[key]);
    } else {
      user[key] = updates[key];
    }
  }

  return user;
}

function mergeUsers(user1, user2) {
  return { ...user1, ...user2 };
}

// Example:
const user = {
  name: "Rahim",
  address: {
    city: "Dhaka",
    country: "Bangladesh",
  },
};

const clonedUser = cloneUser(user);
clonedUser.address.city = "Chittagong";
console.log(user);
console.log(clonedUser);

console.log(
  updateUser(user, { name: "Jamil", address: { city: "Chittagong" } }),
);

// Shallow Copy
const copy = { ...user };
copy.address.country = "Japan";
console.log(user);
