words = ["a","b","c","ab","bc","abc","abcd"], s = "abc"

// let arr_pref = [];
// for(word of words){
//     if(word.length < s.length){
//         if(word == s.slice(0,word.length)) arr_pref.push(word);
//     }else{
//         if(word == s) arr_pref.push(word);
//     }
// }

// console.log(arr_pref);

let counter = 0
for (let i = 0; i < words.length; i++) {
    if (words[i] === s.slice(0,words[i].length)) {
        console.log(words[i]);
       counter++
   }
}
console.log(counter);







// let flag = 0;

// let pref_arr = []

// for(let idx1 = 0; idx1 < words.length; idx1++){
//     for(let idx2 = 0; idx2 < words[idx1].length; idx2++){
//         // console.log(words[idx1][idx2], s[idx2]);
//         if(words[idx1][idx2] == s[idx2]){
//             flag = 1;
//         }else if(flag == 1 && words[idx1][idx2] != s[idx2]){
//             flag = 0;
//             break;
//         }else{
//             break;
//         }
//     }
//     if(flag == 1){
//         pref_arr.push(words[idx1]);
//     }
//     flag = 0;
// }

// console.log(pref_arr);
// console.log(pref_arr.length);
