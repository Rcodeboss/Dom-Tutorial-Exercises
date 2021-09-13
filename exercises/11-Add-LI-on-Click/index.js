let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here
let x = document.getElementById("myList");
let list = document.createElement("li");
let text = document.createTextNode("Forth element")
x.appendChild(list);
list.appendChild(text);


});