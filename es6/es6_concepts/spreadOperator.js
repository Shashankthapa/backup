// spread operator.. used to copy the value of the array.

// es6
let arr1 = [1,2,3]
let arr2 = [4,5,6]

arr1 = [...arr1, ...arr2,7,8];
console.log(arr1);

let arr3 = ["bhel", "panipuri", "ragda pattis"];

function whatToEat(val1,val2,val3){
    console.log("I will eat " + val1 + "," + val2 + "," + val3);
}

whatToEat(...arr3);
// invidual values from the array are distributed.
