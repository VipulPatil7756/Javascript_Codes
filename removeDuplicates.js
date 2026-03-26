const number = [1,2,5,2,3,5,9];
const str = ["mike", "vikas", "mike", "john"];

// using spread operators
const resultNumArr = [...new Set(number)];
console.log(resultNumArr);

const resultStrArr = [...new Set(str)];
console.log(resultStrArr);

// using filter method

const removeDuplicates = (arr) => {
    return arr.filter((element,index) => arr.indexOf(element) === index);
};

// remove duplicate numbers
const uniqueNumber = removeDuplicates(number);
console.log(uniqueNumber);

// remove duplicate string
const uniqueStr = removeDuplicates(str);
console.log(uniqueStr);
