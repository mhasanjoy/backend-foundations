// Two Sum - Nested Loop
// Time Complexity: O(n²)
// Space Complexity: O(1)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

// Two Sum - Map
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example:
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSumBruteForce(nums, target));
console.log(twoSum(nums, target));
