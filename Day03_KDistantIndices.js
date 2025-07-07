function findKDistantIndices(nums, key, k) {
  const keyIndices = [];

  // Step 1: Find where key appears
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === key) {
      keyIndices.push(i);
    }
  }

  const resultSet = new Set();

  // Step 2: For each key index, find nearby indices within distance k
  for (let j of keyIndices) {
    for (let i = j - k; i <= j + k; i++) {
      if (i >= 0 && i < nums.length) {
        resultSet.add(i);
      }
    }
  }

  // Step 3: Convert set to sorted array
  return Array.from(resultSet).sort((a, b) => a - b);
}

const nums = [3, 4, 9, 1, 3, 9, 5];
const key = 9;
const k = 1;

const result = findKDistantIndices(nums, key, k);
console.log(" Final Output:", result);
