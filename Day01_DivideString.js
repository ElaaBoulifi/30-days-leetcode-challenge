/**
 * Day 1 – LeetCode 2138: Divide a String Into Groups of Size k
 * 
 * Problem: Given a string s, divide it into groups of size k.
 * If the last group is too short, fill it with the fill character.
 * Return an array of the groups.
 */

function divideString(s, k, fill) {
    const result = [];

    for (let i = 0; i < s.length; i += k) {
        let chunk = s.slice(i, i + k);
        if (chunk.length < k) {
            chunk += fill.repeat(k - chunk.length);
        }
        result.push(chunk);
    }

    return result;
}

//  TEST CASES
console.log(divideString("abcdefg", 3, "x"));   // ["abc", "def", "gxx"]
console.log(divideString("hello", 2, "*"));     // ["he", "ll", "o*"]
console.log(divideString("javascript", 4, "z")); // ["java", "scri", "ptzz"]
