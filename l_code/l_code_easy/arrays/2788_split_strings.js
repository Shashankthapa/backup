words = ["one.two.three","four.five","six"], separator = "."

// let new_words = [];

// const sep = (str) => {
//     let arr = str.split(separator);
//     for(let word of [...arr]){
//         if(word != "")
//             new_words.push(word);
//     }
// }


// words.map((e) => {
//     if(e.includes(separator)){
//         sep(e);
//     }else{
//         new_words.push(e)
//     }
// });

// .split(separator).filter(e => e.length)
console.log(words.join(separator).split(separator).filter(e => e.length));