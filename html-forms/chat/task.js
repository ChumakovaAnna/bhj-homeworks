const chatWidget = document.querySelector(".chat-widget");
const chatMessages = document.querySelector(".chat-widget__messages");

document.addEventListener("click", openWidget);

function openWidget(eve) {
	let event = eve.target;
	let parentEvent = event.closest(".chat-widget");
	if (parentEvent) {
		chatWidget.classList.add("chat-widget_active");
	} else {
		chatWidget.classList.remove("chat-widget_active");
	};
}

const chatInput = document.querySelector(".chat-widget__input");

chatInput.addEventListener("keydown", (e) => {
	// listen to click enter
	if (e.keyCode == 13) {

		chatInput.addEventListener("change", () => {
			let messangeClient = chatInput.value;

			if (messangeClient) {
				let allMessages = document.querySelectorAll(".message");
				chatMessages.innerHTML += `
					<div class="message message_client">
						<div class="message__time">09:21</div>
						<div class="message__text"></div>
					</div>
				`;
				
				function getMessageTime(index) {
					let messageTime = document.querySelectorAll(".message__time");
					let date = new Date;
					let timeHours = date.getHours();
					let timeMinuts = date.getMinutes();
					let nextMessageTime = messageTime.item(index);
					nextMessageTime.textContent = `${timeHours}:${timeMinuts}`;
				}
				
				let nextIndex = allMessages.length;
				getMessageTime(nextIndex);
				
				function getMessageText(index, text) {
					let messageText = document.querySelectorAll(".message__text");
					let nextMessageText = messageText.item(index);
					nextMessageText.textContent = text;
				}

				getMessageText(nextIndex, messangeClient);

				// add message from bot
				chatMessages.innerHTML += `
					<div class="message">
						<div class="message__time">09:21</div>
						<div class="message__text"></div>
					</div>
				`;

				let indexBot = nextIndex + 1;
				getMessageTime(indexBot);
				
				// bot answer options
				const textsBot = [
					"Мы не рады вас видеть.",
					"У нас есть дела поинтереснее, чем общаться с вами.",
					"Почему вы нас отвлекаете от игры в покер?",
					"Мы занимаемся важным делом. У нас обед!",
					"Все ваши проблемы нас не касаются."
				];

				function getRundomTextfromBot(arr) {
					const maxIndex = arr.length;

					function getRandomIndex(max) {
						min = 0;
						max = Math.floor(max);
						return Math.floor(Math.random() * (max - min)) + min;
					}
					return textsBot[getRandomIndex(maxIndex)];
				}

				getMessageText(indexBot, getRundomTextfromBot(textsBot));
			}
			chatInput.value = "";
		});
	};
});