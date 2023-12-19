word1  = ["abc", "d", "defg"], word2 = ["abcddefg"]

const bool1 = (word1,word2) => word1.join("") == word2.join("")

console.log(bool1(word1, word2));

// Method 2

// const bool = (word1,word2) => {
    
//     let str1, str2;
// 	let len = Math.max(word1.length, word2.length);

// 	for (let i = 0; i < len; i++) {
// 		const char1 = word1[i];
// 		const char2 = word2[i];

// 		if (char1) str1 += char1;
// 		if (char2) str2 += char2;
// 	}

// 	return str1 === str2;
// }

// console.log(bool(word1,word2));

// adhoc 
// const val1 = word1.reduce((acc, itr) => {
//     return acc + itr;
// });

// const val2 = word2.reduce((acc, itr) => {
//     return acc + itr;
// });

// console.log(val1 == val2);


