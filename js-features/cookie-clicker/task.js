const element = document.getElementById("cookie")

let begine = document.getElementById("clicker__counter");

let startTime;
let start = 0;
let endTime = 0;
let end = 0;

let speed = document.getElementById("speed");
console.log(`speed.textContent ${speed.textContent}`);

function clicker() {
	begine.textContent ++;

	if (begine.textContent % 2 == 0) {
		element.width = 150;
		startTime = new Date;
		start = startTime.getTime();
		console.log(`start ${start}`);
	} else {
		element.width = 200;
		endTime = new Date;
		end = endTime.getTime();
		console.log(`end ${end}`);
	}
	
	let time;
	time = end - start;
		console.log(`time ${time}`);

	let newTime;
	if (time < 0) {
		newTime = 0 - time;
	} else {
		newTime = time;
	}

	console.log(`newTime ${newTime}`);
	speed.textContent = newTime / 1000;
}

element.onclick = clicker;