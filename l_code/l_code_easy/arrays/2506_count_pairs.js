const compare = (w1,w2) => {
    let set1 = new Set(w1);
    let set2 = new Set(w2);

    if(set1.size != set2.size){
        return false;
    }
    return [...set1].every(e => set2.has(e));
}


// find similar words

let words = ["nba","cba","dba"]

for(let i = 0 ; i < words.length; i++){
    for(let j = i+1; j < words.length; j++){
        compare(words[i],words[j]);
    }
}






// const obj = {};
// Part one.
// for(w in words){
//     let obj1 = {};
//     obj1 = {};
//     words[w].split("").map(e => {
//         if(obj1[e] == 1) obj1[e] += 1
//         else obj1[e] = 1; 
//     })
//     obj[w] = obj1; 
// }

// let opt = 0;

// // console.log(obj);

// // console.log(Object.keys(obj[0]).length)

// // part 2
// for(let i = 0; i < words.length; i++){
//     for(let j = i+1; j < words.length; j++){
//         if(Object.keys(obj[i]).length <= Object.keys(obj[j]).length) condition(obj[j],obj[i]);
//         else condition(obj[i],obj[j]);
//     }
// }

// function condition(obj1, obj2){
//     let flag = 0;
//     for(keys of Object.keys(obj1)){
//         if(!Object.keys(obj2).includes(keys)){
//             flag = 1;
//             break;
//         }
//     }
//     if(flag == 0){
//         opt++;
//     }
// }

// console.log(opt);

