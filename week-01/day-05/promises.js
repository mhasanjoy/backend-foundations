function getUser() {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("User details.");
    }, 2000),
  );
}

function getOrders(userId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Orders.");
    }, 1000),
  );
}

function getPayments(userId) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve("Payments.");
    }, 3000),
  );
}

async function getUserDashboard(userId) {
  const user = await getUser();

  console.log(user);

  const [orders, payments] = await Promise.all([
    getOrders(userId),
    getPayments(userId),
  ]);

  console.log(orders);
  console.log(payments);
}

await getUserDashboard();
