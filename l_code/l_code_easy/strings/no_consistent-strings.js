allowed = "ab", words = ["ad","bd","aaab","baa","badab"]

// const countConsistentStrings = (allowed, words) => {
//     let set = new Set(allowed)
//     return words.reduce((a, w) => {
//         return w.split('').every(l => set.has(l)) ? ++a : a;
//     }, 0)
// }

// console.log(countConsistentStrings(allowed,words));


let set = new Set(allowed);

console.log(words.reduce((a,b) => {
   return a + b.split("").every(l => set.has(l));
}, 0));

