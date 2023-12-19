s = "loveleetcode", c = "e"
// [3,2,1,0,1,0,0,1,2,2,1,0]

// leetcode soln

let n_arr = [];

let prev = Infinity;

for(let i = 0; i < s.length; i++){
    if(s[i] == c){
        prev = i; 
        n_arr[i] = 0;
    }else n_arr[i] = Math.abs(prev - i);
}

prev = Infinity;

for(let i = s.length-1; i >= 0; i--){
    if(s[i] == c) prev = i;
    else n_arr[i] = Math.min(n_arr[i],prev - i);
}

console.log(n_arr);






// arry to be filled
// let new_arr = [];

// let check = "";

// for(let i = 0; i < s.length; i++){
//     if(s[i] == c){
//         new_arr[i] = 0;
//         check = i;
//     }
//     if(s[0] == c){
//         if(s[check] != s[i]){
//             new_arr[i] =  i - check;
//         }
//     }else if(s[check] != s[i] && check != ""){ 
//         new_arr[i] =  i - check;
//     }
// }


// // part 2

// for(let i = s.length-1; i >= 0; i--){
//     if(s[i] == c){
//         check = i;
//     }
//     if((check - i) < new_arr[i] || new_arr[i] == null){
//         if((check - i) < 0) 
//             new_arr[i] = (check - i) * (-1);
//         else
//             new_arr[i] = check - i;
//     }   
// }

// console.log(new_arr);
