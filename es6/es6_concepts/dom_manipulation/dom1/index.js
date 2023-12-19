// document.body.style.backgroundColor = "black";
const h1 = document.createElement("h1");

h1.innerHTML = "This is the heading.. <span> But not the first heading </span>";

document.body.appendChild(h1);

let nodes = document.getElementsByTagName("h2");

nodes[0].style.backgroundColor = "red";
nodes[1].style.backgroundColor = "maroon";
nodes[2].style.backgroundColor = "green";

document.body.style.backgroundColor = "black";
document.body.style.color = "white";

document.body.style.padding = "30px";
document.body.style.margin = "0px";

console.log(document.getElementsByTagName("h2"));

const div = document.createElement("div");
div.innerHTML = "This the div tag.";
div.className = "something";
div.id = ((Math.random() * 10));
