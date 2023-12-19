// let acc = new Promise(function(reso, rej) {
//     setTimeout(() => {
//         console.log("Value rejected.")
//         // reso("Hahah im resolved");
//         rej(1);
//     }, 2000);
// })

// let rej = new Promise(function(reso, rej) {
//     setTimeout(() => {
//         console.log("Value rejected.");
//         // reso("Hahah im resolved");
//         rej(new Error("there is an error"));
//     }, 2000);
// })

// acc.then(e => console.log(e)).catch(e => console.log("There is an error with value " + e));

// rej.catch(e => console.log("There is an error."));

document.body.onload = addElement

function addElement(){
    let f_div = document.createElement("div");
    let msg = "Hello and Goodbye and Goodnight";
    let f_p = document.createTextNode(msg);
    f_div.appendChild(f_p);
    let s_div = document.getElementById("div1");
    document.body.insertBefore(f_div,s_div);
}