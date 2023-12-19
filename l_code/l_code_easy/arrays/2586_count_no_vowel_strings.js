words = ["iih","aeu","mu","ooo","artro"]
let left = 0;
let right = 2;

// let vowel = ['a','e','i','o','u']
// let output = 0;
// for(let i = left; i <= right; i++){
//     if(vowel.includes(words[i][0]) && vowel.includes(words[i][words[i].length-1]))
//        output++;
// }

// console.log(output);


const vowels = { a: true, e: true, i: true, o: true, u: true };

let count = 0
for (let index = left; index <= right; index++) {
    if (vowels[words[index][0]] && vowels[words[index][words[index].length - 1]]) {
        count++
    } else {
        if (!index) {
            words[index] = 0;
        } else {
            words[index] = words[index - 1];
        }
    }
}
console.log(words);