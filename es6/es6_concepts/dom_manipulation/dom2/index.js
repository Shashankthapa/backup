// function to append elements.

const add_func = (word) => {
    let ol1 = document.createElement("ol");
    ol1.appendChild(document.createTextNode(`${word}`));
    document.querySelector("#list").appendChild(ol1);
}


// function to edit elements.

const edit_func = (word,newWord) => {
    let arr1 = [];
    let arr = document.getElementById("list").querySelectorAll("li");
    for(let idx in arr){
        console.log(idx);
        if(arr[idx].textContent == word) arr1.push(Number(idx));
    }
    for(let idx of arr1){
        let txt = `li:nth-child(${idx+1})`;
        document.querySelector(txt).textContent = newWord;
    }
}

// function to delete elements.

const del_func = (word) => {
    
    // let selector = document.getElementById("list").querySelectorAll("li");

    // let arr = Array.from(selector);

    let li = document.getElementById("list").querySelectorAll("li");
    for(let selector of li){
        if(selector.textContent == word) {
            selector.remove();
        }        
    }
}

del_func("First");

// edit_func("First","Haha");
// edit_func("Third","Sad")

// add_func("Second");
// add_func("Third");
