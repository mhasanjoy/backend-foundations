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

// Output:
// [
//   ["eat", "tea", "ate"],
//   ["tan", "nat"],
//   ["bat"]
// ]
