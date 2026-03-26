function countCharacterOccurrences(str) {
    // Create an empty object to store the character counts
    const charCount = {};

    // Loop through each character in the string
    for (let char of str) {
        // If the character is already in the object, increment its count
        if (charCount[char]) {
            charCount[char]++;
        } else {
            // Otherwise, set its count to 1
            charCount[char] = 1;
        }
    }

    return charCount;
}

// Example usage
const inputString = "hello world";
const result = countCharacterOccurrences(inputString);
console.log(result);
