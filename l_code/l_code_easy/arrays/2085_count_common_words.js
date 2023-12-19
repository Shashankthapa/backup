let w2 =  ["a","ab"];
let w1 =   ["a","a","a","ab"];

let opt = 0;
let occ1 = new Map();
let occ2 = new Map();

for(let word of w1){
    occ1.set(word , occ1.get(word)+1||1);
}

for(let word of w2){
    occ2.set(word, occ2.get(word)+1||1);
}

for(let w of w1){
    if(occ1.get(w) == 1 && occ2.get(w) == 1) opt++;
}

console.log(opt);

// for(words of w1){
//     if(occ1.has(words)) occ1.set(words, occ1.get(words) + 1);
//     else occ1.set(words, 1);
// }

// for(words of w2){
//     if(occ2.has(words)) occ2.set(words, occ2.get(words) + 1);
//     else occ2.set(words, 1);
// }

// for(a of [...occ1.keys()]){
//     if(occ1.get(a) > 1){
//         occ1.delete(a);
//     }
// }

// for(b of [...occ2.keys()]){
//     if(occ2.get(b) > 1){
//        occ2.delete(b);
//     }
// }



// let len = occ1.size >= occ2.size ? occ1 : occ2;
// let len1 = len == occ2 ? occ1 : occ2; 

// for(let word of [...len.keys()]){
//     if(len.get(word) == 1 && len1.has(word)){
//         opt++;
//     }
// }

// console.log(opt);


