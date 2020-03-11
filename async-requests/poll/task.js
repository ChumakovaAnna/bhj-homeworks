let getPoll = new XMLHttpRequest;
getPoll.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
getPoll.responseType = "json";
getPoll.send();
let getStatistic = new XMLHttpRequest;
const answers = document.querySelector(".poll__answers");
const dialog = document.querySelector(".dialog");
const statistic = document.createElement("div");

function getRequest() {
	if (getPoll.readyState === 4) {
		let poll = getPoll.response.data;
		const title = document.querySelector(".poll__title");
		title.insertAdjacentText("beforeend", `${poll.title}`);
		const pollAnswers = poll.answers;
		
		let idPoll = getPoll.response.id;

		pollAnswers.forEach(ele => {
			let button = document.createElement("button");
			button.classList.add("poll__answer");
			button.innerText = ele;
			button.dataset.id = pollAnswers.indexOf(ele);
			answers.appendChild(button);
		});

		const allAnswers = document.querySelectorAll(".poll__answer");
		allAnswers.forEach(ele => {
			ele.addEventListener("click", () => {
				dialog.classList.add("open");

				getStatistic.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
				getStatistic.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				getStatistic.send(`vote=${idPoll}&answer=${ele.dataset.id}`);
			});
		});
	}
}

function getStatisticRequest() {
	if (getStatistic.readyState === 4) {
		const stats = JSON.parse(getStatistic.response).stat;
		console.log(stats);
		statistic.classList.add("statistic");
		let allVotes = 0;
		stats.forEach((ele) => {
			allVotes += ele.votes;
		});

		stats.forEach((ele) => {
			const statLine = document.createElement("div");
			const statPrecent = (ele.votes * 100 / allVotes).toFixed(2);
			console.log(statPrecent);
			statLine.innerText = `${ele.answer}: ${statPrecent}%`;
			statistic.appendChild(statLine);
		});
	}
}

getPoll.addEventListener("readystatechange", getRequest);
getStatistic.addEventListener("readystatechange", getStatisticRequest);

const close = document.querySelector(".close");

close.addEventListener("click", () => {
	if (dialog.classList.contains("open")) {
		dialog.classList.remove("open");
		answers.replaceWith(statistic);
	}
});