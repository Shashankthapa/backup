
// | cd dc | ac ca | result = 2.

// function rev(str){
    //     let arr = str.split("")
    //     for(let i = 0, j = arr.length-1; i < j, j > i; i++, j--){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//     }
//     return arr.join("");
// }


// let output = 0;

// for(let i = 0; i < words.length; i++){
    //     let end_w = words[i][words[i].length-1];
    //     for(let j = i+1; j < words.length; j++){
        //         if(end_w == words[j][0]){
            //             if(rev(words[i]) == words[j]){
                //                 output++;
                //             }
                //         }
                //     }
                // }
                
                // console.log(output);
                
                // traverse the array.
                // take the last element of the string.
                // match the last element to the string to the first element of the rem strings.
                // if match the reverse the first element and match to the later string.
                // if above condition matches then increse the counter.
                
            //     let words = ["ab","ba","cc"]

            // let word_dict = {};
            // let pairs = 0;

            // word_dict["ab"] = 2
            // console.log(word_dict["ab"] || 0);
            // word_dict["vc"] = 2
            // console.log(word_dict);

// for (let word of words) {
//     let reversed_word = word.split('').reverse().join('');
//     console.log(word_dict[reversed_word]);
//     if (word_dict[reversed_word]) {
//         word_dict[reversed_word]--;
//         pairs++;
//     }
//     else {
//         word_dict[word] = (word_dict[word] || 0) + 1;word_dict["ab"] 
//     }
//     console.log(word_dict, word_dict[word]);
// }
// console.log(pairs);   


words = ["aa","ab"];

let n_w = new Map();

let output = 0;
words.map((e) => {
        let r_w = e.split("").reverse().join("");
        if(n_w.has(r_w)){
            n_w.set(r_w,n_w.get(r_w) + 1);
            output++;
        }
        else
            n_w.set(e,1);
        console.log(n_w);   
    }
)

console.log(output)





// console.log(words.map(e => 
    
//     obj[words[e]] = words[e]
    
// ));




