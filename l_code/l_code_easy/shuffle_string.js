let str1 = "codeleet";
let no = [4,5,6,7,0,2,1,3];

let arr = [];
if(str1.length == no.length && no.indexOf(0) != -1){
    for(let i = 0; i < str1.length; i++){
        arr[no[i]] = str1[i]; 
    }
}

console.log(arr.join(""));

// let og_str = "";


// let map = new Map();

// if(str1.length == no.length){
//     for(let i = 0; i < str1.length;i++){
//         map.set(no[i],str1[i]);
//     }
// }

// // let sorted_map = [...map.entries()].sort();

// let s_idx = [...map.keys()].sort();

// let i = 0;

// while(s_idx[i] < s_idx.length){
//     og_str += map.get(i);
//     i++;
// }

// console.log(og_str);