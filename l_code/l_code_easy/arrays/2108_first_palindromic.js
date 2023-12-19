// return the first palindrome in the array if not then return empty string.

let words = ["abc","car"];

let cond = words.find(words => words == words.split("").reverse("").join(""));

if(cond == null){
    console.log("s");
}