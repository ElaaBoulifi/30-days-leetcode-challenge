function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

function toBaseK(num, k) {
  return num.toString(k);
}

function kMirror(k, n) {
  let count = 0;
  let num = 1;
  let sum = 0;

  while (count < n) {
    let base10 = num.toString();
    let baseK = toBaseK(num, k);

    if (isPalindrome(base10) && isPalindrome(baseK)) {
      sum += num;
      count++;
    }

    num++;
  }

  return sum;
}
 //test
 console.log(kMirror(2, 5));  // Output: 25
 console.log(kMirror(10, 2)); // Output: 33  → (1 and 22)
