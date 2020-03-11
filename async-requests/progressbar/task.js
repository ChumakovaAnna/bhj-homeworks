const progressBar = document.getElementById("progress");
progressBar.value = 0;
const form = document.getElementById("form");

function addValue(xhr) {
	progressBar.value += 0.02;
	console.log(xhr);
}

function addListener(xhr) {
	xhr.addEventListener("loadstart", addValue);
	xhr.addEventListener("progress", addValue);
	xhr.addEventListener("load", () => {
		progressBar.value = 1;
		alert("Загрузка завершена.");
	});
	xhr.addEventListener("error", () => {
		alert("Error");
	});
	xhr.addEventListener("abort", () => {
		alert("Abort");
	});
	xhr.addEventListener("loadend", () => {
		progressBar.value = 0;
	});
}

form.addEventListener("submit", (ele) => {
	const formData = new FormData(form);
	let request = new XMLHttpRequest();
	addListener(request);
	request.open("POST", "https://netology-slow-rest.herokuapp.com/upload.php");
	request.send(formData);

	ele.preventDefault();
});