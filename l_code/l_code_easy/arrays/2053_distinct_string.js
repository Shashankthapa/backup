let arr = ["a","a","c","c","d"], k = 1

// let arr1 = Object.entries(

// );

console.log(Object.entries(arr.reduce((acc, str) => {
    acc[str] = acc[str] === undefined;
    return acc;
}, {})));



// console.log(arr2);
// console.log(arr1.filter(([, isDistinct]) => isDistinct));


// let obj = new Map();

// arr.forEach(e => {
//     if(obj.has(e))
//         obj.set(e, obj.get(e) + 1);
//     }else{
//         obj.set(e, 1);
//     }
// });

// let arr1 = [...obj.keys()];

// const distinct = arr1.filter(e => obj.get(e) == 1);

// const val = (distinct[k-1] == null) ? "" : distinct[k-1];

// console.log(val);
