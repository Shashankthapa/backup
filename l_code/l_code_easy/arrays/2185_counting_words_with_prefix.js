let words = ["leetcode","leetwin","loops","success"];
let pref = "leet"


console.log(words.filter(e => {return e.startsWith(pref)}));


// ad hoc/bruteforce

// let itr = 0;
// let pref1 = [];

// for(let i = 0; i < words.length; i++){
//     for(let j = 0; i < pref.length; j++){
//         if(words[i][j] != pref[j]){
//             break;
//         }
//         else 
//             itr++;
//     }
//     if(itr == pref.length) {
//         pref1.push(words[i]); 
//         itr = 0;
//     }
// }

// console.log(pref1);