var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

//console.log(li);

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	createDeleteButton(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

function toggleListElement(event) {
	event.srcElement.classList.toggle("done");
}

function createDeleteButton(element) {
	var delBtn = document.createElement("button");
	delBtn.innerHTML = "Delete";
	delBtn.classList.add("delete");
	delBtn.addEventListener("click", deleteListElement);
	element.appendChild(delBtn);
	//console.log(element);
}

function deleteListElement(event) {
	event.srcElement.parentElement.parentElement.removeChild(event.srcElement.parentElement);
}

li.forEach(function(element) {
	createDeleteButton(element);
	element.addEventListener("click", toggleListElement);
});