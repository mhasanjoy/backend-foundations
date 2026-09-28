// First Duplicate
// Time Complexity: O(n)
// Space Complexity: O(n)
function firstDuplicate(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      return num;
    }

    set.add(num);
  }

  return undefined;
}

// Example:
console.log(firstDuplicate([5, 3, 4, 3, 2, 5]));
console.log(firstDuplicate([]));

// Two Sum
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example:
console.log(twoSum([3, 2, 4], 6));

// Character Frequency
// Time Complexity: O(n)
// Space Complexity: O(n)
function characterFrequency(string) {
  const frequency = new Map();

  for (const char of string) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  return Object.fromEntries(frequency);
}

// Most Frequent
// Time Complexity: O(n)
// Space Complexity: O(n)
function mostFrequent(nums) {
  const frequency = new Map();

  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  let mostFrequent;
  let maxCount = 0;

  for (const [num, count] of frequency) {
    if (count > maxCount) {
      maxCount = count;
      mostFrequent = num;
    }
  }

  return mostFrequent;
}

// Example:
console.log(mostFrequent([5, 3, 4, 3, 2, 5]));
console.log(mostFrequent([]));
