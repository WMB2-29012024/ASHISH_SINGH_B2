function countOccurrences(str, char) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }

    return count > 0 ? count : -1;
}

// Example usage
console.log(countOccurrences("hello world", "o")); // Output: 2
console.log(countOccurrences("apple", "p")); // Output: 2
console.log(countOccurrences("banana", "a")); // Output: 3

