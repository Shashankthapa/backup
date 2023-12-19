let msg = document.getElementById("msg");
let submit = document.getElementById("submit");
let scram_val = "";
let reset_f = false;
let idx_comp = 0;

let map = new Map();

let c_arr = ["python", "angular", "javascript", "cpp"];


const random_word = () => {
    let idx = Math.floor(Math.random() * c_arr.length);
    return c_arr[idx];
}


const scrambling = () => {
    let r_word = random_word();
    // set the index to compare the value
    idx_comp = c_arr.indexOf(r_word);
    let a_w = r_word.split("");

    for(let i = 0; i <= a_w.length-2; i++){
        temp = a_w[i];
        a_w[i] = a_w[i+1];
        a_w[i+1] = temp; 
    }
   return a_w.join("");
}


function scram(){
    scram_val = scrambling();
    msg.innerHTML = scram_val;
    // return scram_val;
}


function reset(){
    submit.value = "Submit";
    reset_f = true;
    scram();
}

submit.addEventListener("click", () => {

    if(msg.innerHTML === "Correct"){
        reset();    
    }

    if(!reset_f){
        console.log(document.getElementById("word").value);
        if(document.getElementById("word").value == c_arr[idx_comp]){
            msg.innerHTML = "Correct"
            submit.value = "Play Again"
        }else{
            msg.innerHTML = `Incorrect guess for ${scram_val}`;
            
        }
    }
    reset_f = false;
});


scram();