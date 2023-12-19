
// arr.sort(function hello(a,b)
// { 
//     b-a; 
// });

// let new_arr = arr.toSorted((a,b) => b - a) // will not sort the original array but will create a copy

// let new_arr1 = arr.toReversed();

// console.log(new_arr1);

let arr = [9,1,2,10];
//reverse logic

let temp = 0;
for(let i = 0, j = arr.length-1; i < arr.length/2, j > arr.length/2; i++,j--){
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp; 
}

console.log(arr);









