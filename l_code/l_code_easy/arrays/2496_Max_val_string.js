strs = ["1","01","001","0001"]

let arr = strs.map(e => Number.isInteger(+e)  ? +e : e.length);
console.log(Math.max(...arr));


//5
// if numeric than cal the number

// adhoc solution...

// let max = 0;

// strs.map(e => {
//     if(e == +e){
//             if(e.startsWith("0")){
//                 if(e > max) max = e * 1;
//             }else{
//                 if(e > max) max = e * 1;
//             }
//     }else{
//         if(e.length > max) max = e.length;
//     }

// })

// console.log(max);

// console.log(strs[0] == +strs[0]);

// console.log(strs[4].split("0").join(""));