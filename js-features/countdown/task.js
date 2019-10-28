const begin = document.getElementById("timer");

let clockTimer;

const countdown = function() {
	begin.textContent -= 1;
		if (begin.textContent == 0) {
			alert("Вы победили в конкурсе!");
			clearInterval(clockTimer);
		}
}

clockTimer = setInterval(countdown, 1000);

const hours = document.getElementById("hours");
const minuts = document.getElementById("minuts");
const seconds = document.getElementById("seconds");

let hoursTimer;
let minutsTimer;
let secondsTimer;
let clockFullTimer

let newLocation = "https://netology.ru";

const fullTimeTimer = function() {
	seconds.textContent -= 1;
	if (hours.textContent == 0 && minuts.textContent == 0 && seconds.textContent == 0) {
		alert("Отсчет закончен.");
		window.location = newLocation;
		clearInterval(clockFullTimer);
	} 

	if (seconds.textContent == 0 && minuts.textContent > 0 && hours.textContent >= 0) {
			minuts.textContent -= 1;
			seconds.textContent = 59;
		}
	
	if (seconds.textContent == 0 && minuts.textContent == 0 && hours.textContent > 0) {
			seconds.textContent = 59;
			minuts.textContent = 59;
			hours.textContent -= 1;
	}
}

clockFullTimer = setInterval(fullTimeTimer, 1000)