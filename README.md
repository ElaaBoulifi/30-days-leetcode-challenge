# 🧠 30-Day LeetCode Challenge

Welcome to my 30-day LeetCode challenge!  
Every day, I solve one algorithmic problem and share the solution in JavaScript.

> 📌 Follow my journey and challenge yourself too — consistency is key 💪

---

## ✅ Daily Progress

| Day | Problem | Difficulty | Solution |
|-----|---------|------------|----------|
| 1 | [2138. Divide a String Into Groups of Size k](https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/) | Easy | [Day01_DivideString.js](./Day01_DivideString.js) |
| 2 | [2081. Sum of k-Mirror Numbers](https://leetcode.com/problems/sum-of-k-mirror-numbers/) | Hard | [Day02_KMirrorNumbers.js](./Day02_KMirrorNumbers.js) |
| 3 | [2200. Find All K-Distant Indices in an Array](https://leetcode.com/problems/find-all-k-distant-indices-in-an-array/) | Easy | [Day03_KDistantIndices.js](./Day03_KDistantIndices.js) |
| 4 | [2040. Kth Smallest Product of Two Sorted Arrays](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/) | Hard | [Day04_KthSmallestProduct.js](./Day04_KthSmallestProduct.js) |
| 5 | [2311. Longest Binary Subsequence Less Than or Equal to K](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/) | Medium | [Day05_LongestBinarySubsequence.js](./Day05_LongestBinarySubsequence.js) |
| 6 | [2014. Longest Subsequence Repeated k Times](https://leetcode.com/problems/longest-subsequence-repeated-k-times/) | Hard | [Day06_LongestSubsequenceRepeatedK.js](./Day06_LongestSubsequenceRepeatedK.js) |
| 7 | [2099. Find Subsequence of Length K With the Largest Sum](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/) | Easy | [Day07_MaxSubsequence.js](./Day07_MaxSubsequence.js) |
---

### Day 1 Explanation

**Input**:  
`s = "abcdefg", k = 3, fill = "x"`

**Goal**: Divide the string into chunks of 3.  
If the last part is too short, fill it with "x".

**Output**:  
`["abc", "def", "gxx"]`

**Key Concepts**:
- `.slice(start, end)` to extract a part of the string
- `.repeat(n)` to fill missing characters
- `for` loop with `i += k` to move in chunks
