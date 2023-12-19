const arr = ["++X","++X","X++"]

const val = arr.reduce((total, sum) => {
    return sum[1] == "+" ? ++total : total--;
}, 0);

console.log(val);

// String numbering...
const str1 = "1234";
const str = str1.split("");

let temp = str[2];
str[2] = str[3];
str[3] = temp;

console.log(str.join(""));

// let X = 0;

// for(val of arr){
//     if(val === '--X' || val === 'X--')
//         X--;
//     else
//         X++;
// }

// console.log(X);

// func(arr);

// *****************************

// Learning reduce in javascript

// const price = [
//     {name : "Monitor", price : 100},
//     {name : "CPU", price : 300},
//     {name : "Mouse", price : 50},
//     {name : "Table", price : 90}
// ]

// const mp_reduc = price.reduce((tot_price, price) => {
//     return tot_price + price.price;
// },0);

// console.log(mp_reduc);