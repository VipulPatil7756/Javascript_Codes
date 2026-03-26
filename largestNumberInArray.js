console.log(findLargestNumber([2,43,8,9,7]));

function findLargestNumber(arr){
    let largest = arr[0];
    for (let i=1; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i];
        }
    } return largest;
}