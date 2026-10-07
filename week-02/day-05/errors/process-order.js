// const order = {
//   items: [
//     { name: "Keyboard", price: 50, quantity: 2 },
//     { name: "Mouse", price: 25, quantity: 1 }
//   ],
//   payment: {
//     amount: 125
//   }
// };

function processOrder(order) {
  if (typeof order !== "object" || order === null || Array.isArray(order)) {
    throw new TypeError("Order must be an object");
  } else if (!Array.isArray(order.items) || order.items.length === 0) {
    throw new Error("Order must contain at least one item");
  }

  let total = 0;

  for (const item of order.items) {
    if (typeof item !== "object" || item === null || Array.isArray(item)) {
      throw new TypeError("Each order item must be an object");
    } else if (typeof item.name !== "string" || item.name.trim() === "") {
      throw new Error("Each item must have a name");
    } else if (typeof item.price !== "number" || item.price < 0) {
      throw new Error(`Invalid price for ${item.name}`);
    } else if (
      typeof item.quantity !== "number" ||
      !Number.isInteger(item.quantity) ||
      item.quantity <= 0
    ) {
      throw new Error(`Invalid quantity for ${item.name}`);
    }

    total += item.price * item.quantity;
  }

  if (!order.payment || typeof order.payment.amount !== "number") {
    throw new Error("Payment amount is required");
  } else if (order.payment.amount < total) {
    throw new Error(
      `Insufficient payment. Required: ${total}, received: ${order.payment.amount}`,
    );
  }

  return {
    success: true,
    total,
    change: order.payment.amount - total,
  };
}

// Example:
try {
  processOrder(null);
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  processOrder({
    items: [],
    payment: {
      amount: 100,
    },
  });
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  processOrder({
    items: [
      {
        name: "Keyboard",
        price: -50,
        quantity: 1,
      },
    ],
    payment: {
      amount: 100,
    },
  });
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  processOrder({
    items: [
      {
        name: "Keyboard",
        price: 50,
        quantity: 0,
      },
    ],
    payment: {
      amount: 100,
    },
  });
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  processOrder({
    items: [
      {
        name: "Keyboard",
        price: 50,
        quantity: 1,
      },
    ],
  });
} catch (error) {
  console.error(error.name + ":", error.message);
}

try {
  processOrder({
    items: [
      {
        name: "Keyboard",
        price: 50,
        quantity: 2,
      },
    ],
    payment: {
      amount: 50,
    },
  });
} catch (error) {
  console.error(error.name + ":", error.message);
}
