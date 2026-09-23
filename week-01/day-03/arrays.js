// User Statistics Processor
function getAverageAge(users) {
  return users.reduce((total, user) => total + user.age, 0) / users.length;
}

function getUsersByRole(users, role) {
  return users.filter((user) => user.role === role);
}

function getUniqueRoles(users) {
  return [...new Set(users.map((user) => user.role)).values()];
}

function getOldestUser(users) {
  return users.find(
    (user) => user.age === Math.max(...users.map((user) => user.age)),
  );
}

function getUserById(users, id) {
  return users.find((user) => user.id === id);
}

function getRoleCountsUsingObject(users) {
  const roleCounts = {};

  for (const user of users) {
    roleCounts[user.role] = (roleCounts[user.role] || 0) + 1;
  }

  return roleCounts;
}

function getRoleCountsUsingMap(users) {
  const roleCounts = new Map();

  for (const user of users) {
    roleCounts.set(user.role, (roleCounts.get(user.role) || 0) + 1);
  }

  return Object.fromEntries(roleCounts);
}

// Example:
const users = [
  { id: 1, name: "A", age: 25, role: "developer" },
  { id: 2, name: "B", age: 30, role: "manager" },
  { id: 3, name: "C", age: 25, role: "developer" },
  // ...
];

console.log(getAverageAge(users));
console.log(getUsersByRole(users, "developer"));
console.log(getUsersByRole(users, "engineer"));
console.log(getUniqueRoles(users));
console.log(getOldestUser(users));
console.log(getUserById(users, 3));
console.log(getUserById(users, 7));
console.log(getRoleCountsUsingObject(users));
console.log(getRoleCountsUsingMap(users));
