// console.log("Hello");
// setTimeout(() => console.log("setTimeout"), 2000);
// Promise.resolve().then(_ => console.log("This is a micro task"));
// console.log("Bye");


// new Promise((res,rej) => {
//     res(1);
//     rej(2);
// }).then(val => console.log(val)).then(val2 => console.log(val2));

// const startTime = Math.floor(performance.now());

// let i = 0;

// while(i < 1000000000){
//     i++;
// }

// const endTime = Math.floor(performance.now());

// console.log(`${endTime - startTime} ms`);

let startTime = Math.floor(performance.now());
let endTime = 0;


function func1(func){
    func();
}

function funcexe(){
    console.log("loops done 0");
    console.log(`${Math.floor(Math.abs(performance.now() - startTime))} ms`);
}

function funcexe_1(){
    console.log("loops done 1");
    console.log(`${Math.floor(Math.abs(performance.now() - startTime))} ms`);
}


func1(funcexe);

const func2 = () => {
    return Promise.resolve().then(v => {
        let i = 0; 
        while(i < 1000){
            i++;
        }
        return "loops done promise";
    }).then(_ => console.log(`${_} \n${Math.abs(Math.floor(performance.now() - startTime))} ms`));
}

func1(func2);

func1(funcexe_1);