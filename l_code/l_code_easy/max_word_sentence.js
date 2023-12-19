const sentences = ["hi and hello","alice and bob love leetcode", "i think so too", "this is great thanks very much"];

const no = [1,2,3,4,5]

// Method 1
const max_w = sentences.reduce((acc, arr) => {
    return acc.split(" ").length > arr.split(" ").length ? acc : arr;
});

console.log(max_w.split(" ").length);

// Method 2
// returns an array with the length.
// let mostWordsFound = sentences.map(item=>item.split(" ").length);

// console.log(Math.max(...mostWordsFound));


// demo reduce...

// const val = sentences.reduce((a,b) => {
//     return a.split(" ").length > b.split(" ").length ? a : b;
// })

// console.log(val);