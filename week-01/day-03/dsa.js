// Contains Duplicate - Nested Loop
// Time Complexity: O(n²)
// Space Complexity: O(1)
function containsDuplicateBruteForce(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
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

// function containsDuplicate(values) {
//   const uniqueValues = new Set(values);

//   return uniqueValues.size !== values.length;
// }

// Valid Anagram - Sort
// Time Complexity: O(n log n)
// Space Complexity: O(n)
function validAnagramBruteForce(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

// Valid Anagram - Map
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
console.log(containsDuplicateBruteForce([1, 2, 3, 1]));
console.log(containsDuplicateBruteForce([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));

console.log(validAnagramBruteForce("anagram", "nagaram"));
console.log(validAnagramBruteForce("rat", "car"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("rat", "car"));
