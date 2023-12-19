// const a = (... args) => {
//     val = 0;
//     for(value of args){
//         val += value;
//     }
//     console.log(val);
// }

// a(1,2,3,4,5);

function fun(a,b,...c){
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
}

fun('Shashank', 'Sujana', 'Eshwar', 'Nama');