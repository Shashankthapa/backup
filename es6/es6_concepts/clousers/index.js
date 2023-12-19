// function myFunc(){
//     let firstVar = 10;
//     return function myFunc2(){
//         console.log(firstVar);    
//     }
// }

// const func = myFunc(); // func has the reference of its own lexical scope and its parent

// func();
// console.log(func);

// "abc".split("")

// console.log("abc".split("").reverse("").join(""));

let count = 0;

function myFunc(){
    return () => {
        count++;
    }
}

const myf1 = myFunc();
const myf2 = myFunc();
const myf3 = myFunc();

myf1();
myf1();

console.log(count);
