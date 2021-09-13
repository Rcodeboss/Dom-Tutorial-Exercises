let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
let x = document.createElement("div");
x.innerHTML = "Hello World";
x.style.background = "yellow";
document.body.appendChild(x);



});