const popup = document.getElementById("subscribe-modal");
const close = document.querySelector(".modal__close");

popup.classList.add("modal_active");

const closed = close.addEventListener("click", () => {
	popup.classList.remove("modal_active");
	document.cookie = "popup=true";
});

window.addEventListener("load", () => {
	if (document.cookie.split(';').some((item) => item.trim().startsWith('popup='))) {
		popup.classList.remove("modal_active");
	}
});

