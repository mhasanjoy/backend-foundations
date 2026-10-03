function getOrderAmounts(orders) {
  return orders.map((order) => order.amount);
}

function getPaidOrders(orders) {
  return orders.filter((order) => order.status === "paid");
}

function getTotalRevenue(orders) {
  return orders.reduce((revenue, order) => {
    return order.status === "paid" ? revenue + order.amount : revenue;
  }, 0);

  //   let revenue = 0;
  //   for (const order of orders) {
  //     if (order.status === "paid") {
  //       revenue = revenue + order.amount;
  //     }
  //   }
  //   return revenue;
}

function getLargestOrder(orders) {
  if (orders.length === 0) {
    return undefined;
  }

  return orders.reduce((largest, order) => {
    return order.amount > largest.amount ? order : largest;
  });
}

function hasPendingOrders(orders) {
  return orders.some((order) => order.status === "pending");
}

function areAllOrdersPositive(orders) {
  return orders.every((order) => order.amount > 0);
}

function findOrderById(orders, id) {
  return orders.find((order) => order.id === id);
}

// Example:
const orders = [
  { id: 1, customer: "A", amount: 500, status: "paid" },
  { id: 2, customer: "B", amount: 1200, status: "pending" },
  { id: 3, customer: "C", amount: 800, status: "paid" },
  { id: 4, customer: "A", amount: 300, status: "cancelled" },
];

console.log(getOrderAmounts(orders));
console.log(getPaidOrders(orders));
console.log(getTotalRevenue(orders));
console.log(getLargestOrder(orders));
console.log(hasPendingOrders(orders));
console.log(areAllOrdersPositive(orders));
console.log(findOrderById(orders, 4));
