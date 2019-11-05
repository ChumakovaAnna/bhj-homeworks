const element = document.getElementById("cookie")

let begine = document.getElementById("clicker__counter");

let loadTime;
let startTime;
let start = 0;
let endTime = 0;
let end = 0;

let speed = document.getElementById("speed");

window.addEventListener("load", timeLoad);

function timeLoad() {
	let load = new Date;
	loadTime = load.getTime();
	return loadTime;
}

function clicker() {
	begine.textContent ++;

	if (begine.textContent == 1) {
		element.width = 150;
		startTime = new Date;
		startFirstClick = startTime.getTime();
		end = loadTime;
	}
	
	if (begine.textContent % 2 !== 0) {
		element.width = 150;
		startTime = new Date;
		start = startTime.getTime();
	} else {
		element.width = 200;
		endTime = new Date;
		end = endTime.getTime();
	}
	
	let time;
	time = end - start;

	let newTime;
	if (time < 0) {
		newTime = 0 - time;
	} else {
		newTime = time;
	}

	speed.textContent = newTime / 1000;
}

element.onclick = clicker;