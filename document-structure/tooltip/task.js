const allTooltips = document.querySelectorAll(".has-tooltip");
const newTooltip = document.createElement("div");
newTooltip.className = "tooltip tooltip_active";

allTooltips.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		const oldTooltips = document.querySelectorAll(".tooltip");
		oldTooltips.forEach((ele) => {
			ele.remove();
		});

		const activeLink = e.target;
		newTooltip.innerText = activeLink.getAttribute("title");
		activeLink.insertAdjacentElement("afterEnd", newTooltip);
		newTooltip.style.left = `${activeLink.offsetLeft}px`;

		event.preventDefault();
	});
});

window.addEventListener("click", (e) => {
	if (!e.target.closest(".has-tooltip")) {
		if (document.querySelector(".tooltip")) {
			document.querySelector(".tooltip").remove();
		}
	}
});