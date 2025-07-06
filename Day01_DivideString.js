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
console.log(divideString("abcdefghij", 2, "z")); // ["ab", "cd", "ef", "gh", "ij"]
console.log(divideString("hello", 2, "*"));      // ["he", "ll", "o*"]
console.log(divideString("a", 3, "z"));          // ["azz"]
