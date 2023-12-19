let ele = document.getElementById("show-button");

const func = new Promise((res, rej) => {
    rej("Button not pressed in 5 seconds");
});

func.then((msg) => {
  ele.addEventListener("click", () => {
    setTimeout( () => {
        document.getElementById("show-button").style.display = "none";
        document.getElementById("show-text").innerHTML = msg;
    },10000);

  })   
}).catch((msg) => {
    setTimeout(() => {
        document.getElementById("show-button").style.display = "none";
        document.getElementById("show-text").innerHTML = msg;
    },5000);
});
