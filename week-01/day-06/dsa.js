// Contains Duplicate
// Time Complexity: O(n)
// Space Complexity: O(n)
function containsDuplicate(nums) {
  const seen = new Set();

  for (const num of nums) {
    if (seen.has(num)) {
      return true;
    }

    seen.add(num);
  }

  return false;
}

// Example:
console.log(containsDuplicate([1, 2, 3, 1]));

// Two Sum
// Time Complexity: O(n)
// Space Complexity: O(n)
function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }

    map.set(nums[i], i);
  }

  return [];
}

// Example:
console.log(twoSum([2, 7, 11, 15], 9));
