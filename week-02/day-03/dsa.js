// Contains Duplicate - Nested Loop
// Time Complexity: O(n²)
// Space Complexity: O(1)
function containsDuplicateBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }

  return false;
}

// Contains Duplicate - Set
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
console.log(containsDuplicateBruteForce([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

// Two Sum - Nested Loop
// Time Complexity: O(n²)
// Space Complexity: O(1)
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

// Valid Anagram
// Time Complexity: O(n)
// Space Complexity: O(k), distinct characters
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const frequency = new Map();

  for (const char of str1) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (const char of str2) {
    const count = frequency.get(char);

    if (!count) {
      return false;
    }

    frequency.set(char, count - 1);
  }

  return true;
}

// Example:
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));

// Group Anagrams
// Time Complexity: O(n * k log k)
// Space Complexity: O(n * k)
function groupAnagrams(strings) {
  const grouped = new Map();

  for (const word of strings) {
    const sorted = word.split("").sort().join("");

    if (!grouped.has(sorted)) {
      grouped.set(sorted, []);
    }

    grouped.get(sorted).push(word);
  }

  return Array.from(grouped.values());
}

// Example:
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
