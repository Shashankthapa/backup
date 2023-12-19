// let val = 0;

// new Promise((res, rej) => {
//     if(val == 0) res(val)
//     else rej(val)
// }).then((msg) => console.log(`The value of val is : ${msg}`)
// ).catch((msg) => console.log(`The rejected value of val is : ${msg}`));


console.log('start');

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
  resolve(5)
})

promise1.then(res => {
  console.log(res)
})

console.log('end');