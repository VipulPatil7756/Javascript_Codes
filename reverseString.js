// Reverse String

console.log(reverseString("India is my Country"));

// Reverse String Using Reverse Function.

function reverseString(str){
    return str.split("").reverse().join("");
}

// Reverse String Using For Loop

function reverseString1(str){
    let reversed = "";
    for (let i=str.length-1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString1("Great to have you..!!"));

