// expense-analyzer
function getTotalExpenses(expenses) {
  const validExpenses = expenses.filter((expense) => expense.amount);

  return validExpenses.reduce(
    (total, currentValue) => currentValue.amount + total,
    0,
  );
}

function getAverageExpense(expenses) {
  return expenses.length ? getTotalExpenses(expenses) / expenses.length : 0;
}

function getLargestExpense(expenses) {
  let largest = expenses[0]?.amount || 0;

  for (let i = 1; i < expenses.length; i++) {
    if (largest < expenses[i].amount) {
      largest = expenses[i].amount;
    }
  }

  return largest;
}

function getExpensesByCategory(expenses) {
  const map = new Map();
  const validExpenses = expenses.filter(
    (expense) => expense.category && expense.amount,
  );

  for (const expense of validExpenses) {
    map.set(
      expense.category,
      (map.get(expense.category) || 0) + expense.amount,
    );
  }

  return Object.fromEntries(map);
}

function getCategoryTotals(expenses) {
  const validExpenses = expenses.filter((expense) => expense.category);

  return [...new Set(validExpenses.map((expense) => expense.category))].length;
}

function getTopCategories(expenses) {
  const categoryExpenses = getExpensesByCategory(expenses);

  return Object.entries(categoryExpenses).reduce(
    (accumulator, currentValue) =>
      accumulator[1] > currentValue[1] ? accumulator : currentValue,
    [],
  )[0];
}

// Example:
const expenses = [
  { description: "Food", category: "food", amount: 500 },
  { description: "Bus", category: "transport", amount: 100 },
  { description: "Lunch", category: "food", amount: 300 },
  { description: "Internet", category: "utility", amount: 1000 },
];
// const expenses = [];
// const expenses = [
//   { description: "Food", category: "food" },
//   { description: "Bus", amount: 300 },
//   { description: "Lunch", category: null, amount: null },
//   { description: "Internet", category: "utility", amount: 1000 },
// ];

console.log(getTotalExpenses(expenses));
console.log(getAverageExpense(expenses));
console.log(getLargestExpense(expenses));
console.log(getExpensesByCategory(expenses));
console.log(getCategoryTotals(expenses));
console.log(getTopCategories(expenses));
