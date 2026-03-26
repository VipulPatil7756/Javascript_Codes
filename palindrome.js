// A palindrome is word that reads the same forward and backward.

console.log(isPalindrome("racecar"));

function isPalindrome(str){
    const reverseString = str.split("").reverse().join("");
    return str === reverseString;
}
