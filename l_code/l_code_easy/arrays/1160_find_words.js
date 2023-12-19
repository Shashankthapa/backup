
words = ["cat","bt","hat","tree"], chars = "atach"


function check(){
    let wordlength = 0;
    const c_arr = new Array(26).fill(0);
    for(c of chars){
        c_arr[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    for(words of words){
        if(ifExist(words,c_arr)){
            wordlength += words.length;
        }
    }

    function ifExist(word, array){
        const w_arr = new Array(26).fill(0);
        for(c of word){
            let x = c.charCodeAt(0) - "a".charCodeAt(0);
            w_arr[x]++;     
               
            if(w_arr[x] > array[x]) return false;
        }
        
        return true;
    }

    return wordlength;
}



console.log(check());
    

























// var countCharacters = function(words, chars) {
//     const counts = new Array(26).fill(0);

//     // Step 1: Initialize Character Counts Array
//     for (ch of chars) {
//         counts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }

//     let result = 0;

//     // Step 3: Check Words
//     for (const word of words) {
//         if (canForm(word, counts)) {
//             // Step 4: Calculate Lengths
//             result += word.length;
//         }
//     }
//     return result;

//     function canForm(word, counts) {
//         const c = new Array(26).fill(0);

        // Step 2: Update Counts Array
        // for (const ch of word) {
        //     const x = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        //     c[x]++;
        //     if (c[x] > counts[x]) {
        //         return false;
        //     }
        // }

//         return true;
//     }
// };


// console.log(countCharacters(words,chars));

