words = ["alice","bob","charlie"], s = "abc"

// Best approach.

// console.log(words.map(e => e[0]).join(""));

// My approach

// const val = words.reduce((acc, itr) => {
//     // console.log(acc,itr);
//     return acc + itr[0];
// },"");

// console.log(val == s);

// let acronym = "";

// words.forEach(e => acronym += e[0]);

// console.log(acronym);

