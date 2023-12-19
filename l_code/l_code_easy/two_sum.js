// nums = [1,2,3,4] target = 3 should yeild the index of the two
// no's whose addition is 3 like [1,2]

// let nums = [3,2,4];
// let target = 6;
// let flag = false;
// let arr = [];

// for(let i = 0; i < nums.length;i++){
//     if(flag){
//         break;
//     }
//     for(let j = i+1; j < nums.length;j++){
//         if(nums[i] + nums[j] == target){
//             arr[0] = i;
//             arr[1] = j;
//             flag = true;
//             break;
//         }
//     }
//     console.log(arr);
// }


// optimized solution
// nums = [1,2,3,4] target = 3 should yeild the index of the two
// no's whose addition is 3 like [1,2]

let nums = [3,4,11]; 
let target = 14;

function myFunc(){

    let h_map = new Map();
    // let val = [];

    for(let i = 0 ; i < nums.length; i++){
        let rem = nums[i] < target ? target - nums[i] : nums[i] - target;
        
        if(h_map.has(rem)){
           return [h_map.get(rem),i];
        }

        h_map.set(nums[i], i);
    }
}

console.log(myFunc());



