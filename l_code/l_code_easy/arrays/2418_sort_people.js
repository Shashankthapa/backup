names = ["Alice","Bob","Bob"], heights = [155,185,150]

let arr = [];

for(let i = 0; i < names.length; i++){
    arr.push([names[i], heights[i]]);
}

console.log(arr);

arr.sort((a,b) => b[1] - a[1]); 

arr = arr.map(x => x[0]);

console.log(arr);

// ah hoc soln

// function swap(arr,i,j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
// }

// for(let i = 0; i < heights.length; i++){
//     for(let j = i+1; j < heights.length; j++){
//         if(heights[i] < heights[j]){
//             swap(heights,i,j);
//             swap(names,i,j);
//         }
//     }
// }


// console.log(heights, names);

