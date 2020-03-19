const editor = document.getElementById("editor");
const button = document.querySelector(".reset");

editor.addEventListener("blur", () => {
	localStorage.setItem("text", editor.value);
});

button.addEventListener("click", () => {
	localStorage.removeItem("text");
});

window.addEventListener("load", () => {
	editor.value = localStorage.getItem("text");
});