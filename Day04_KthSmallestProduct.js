function kthSmallestProduct(nums1, nums2, k) {
  let left = -1e10, right = 1e10;

  function countLessEqual(x) {
    let count = 0;
    for (let a of nums1) {
      if (a > 0) {
        let l = 0, r = nums2.length;
        while (l < r) {
          const m = Math.floor((l + r) / 2);
          if (a * nums2[m] <= x) l = m + 1;
          else r = m;
        }
        count += l;
      } else if (a < 0) {
        let l = 0, r = nums2.length;
        while (l < r) {
          const m = Math.floor((l + r) / 2);
          if (a * nums2[m] <= x) r = m;
          else l = m + 1;
        }
        count += nums2.length - l;
      } else {
        if (x >= 0) count += nums2.length;
      }
    }
    return count;
  }

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const count = countLessEqual(mid);
    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}
const result = kthSmallestProduct([2, 5], [3, 4], 2);
console.log("Result:", result);
