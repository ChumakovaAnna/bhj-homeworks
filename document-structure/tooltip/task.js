const allTooltips = document.querySelectorAll(".has-tooltip");
const newTooltip = document.createElement("div");
newTooltip.className = "tooltip tooltip_active";

allTooltips.forEach((ele) => {
	ele.addEventListener("click", (e) => {
		const oldTooltips = document.querySelectorAll(".tooltip");
		oldTooltips.forEach((ele) => {
			ele.remove();
		});

		const element = e.target;
		newTooltip.innerText = element.getAttribute("title");
		console.log(newTooltip);

		element.insertAdjacentElement("afterEnd", newTooltip);

		event.preventDefault();
	});
});
