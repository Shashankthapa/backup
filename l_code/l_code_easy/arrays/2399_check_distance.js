

// let set_dt = new Set();
// let flag = true;
// // check the distanace between the chars
// for(let i = 0; i < s.length; i++){
//     for(let j = i+1; j < s.length; j++){
//         if(s[i] == s[j] && !(set_dt.has(s[i]))){
//             let diff = (j - i) - 1;
//             set_dt.add(i);
//             if(!(distance[(s[i].charCodeAt(0)-"a".charCodeAt(0))] == diff))
//                 flag = false;
//             break;
//         }
//     }
// }

// console.log(flag);

s = "aab", distance = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

var checkDistances = function(s, distance) {
    let arr = Array(26).fill(0)
    for(let i=0; i<s.length; i++){
        // if(arr[s.charCodeAt(i) - 97] != 0 && i - arr[s.charCodeAt(i) - 97] != distance[s.charCodeAt(i) - 97])    
        //     return false
        // arr[s.charCodeAt(i) - 97] = i+1
        console.log(arr[s.charCodeAt(i) - 97], i - arr[s.charCodeAt(i) - 97],distance[s.charCodeAt(i) - 97]);
    }
    return true;
};

console.log(checkDistances(s,distance));