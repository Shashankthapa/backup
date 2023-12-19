let obj = {"name1" : "Shashank", "name2" : "Sujana"}


new Promise((res, rej) => { 
    // res(2);
    rej("The value is rejected");
}).then((ful) => {
    console.log(ful);
}).catch(e => console.log(e));