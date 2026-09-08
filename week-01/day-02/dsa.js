// Sum - Array Traversal
// Time Complexity: O(n)
// Space Complexity: O(1)
function findSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

// First Occurrence - Linear Search
// Time Complexity: O(n)
// Space Complexity: O(1)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Maximum Number
// Time Complexity: O(n)
// Space Complexity: O(1)
function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// Minimum Number
// Time Complexity: O(n)
// Space Complexity: O(1)
function findMin(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}

// Count Occurrences
// Time Complexity: O(n)
// Space Complexity: O(1)
function countOccurrences(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  return count;
}

// Array Reversal - Two Pointers
// Time Complexity: O(n)
// Space Complexity: O(1)
function arrayReversal(arr) {
  const length = arr.length;

  for (let i = 0, j = length - 1; i < length / 2; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

// Example:
const array = [1, 2, 3, 2, 5];

console.log(findSum(array));
console.log(linearSearch(array, 6));
console.log(linearSearch([], 6));
console.log(findMax(array));
console.log(findMax([]));
console.log(findMin(array));
console.log(countOccurrences(array, 2));
console.log(countOccurrences([], 2));

arrayReversal(array);
console.log(array);
