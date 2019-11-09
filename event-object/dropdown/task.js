let value = document.getElementsByClassName("dropdown__value");
let valueItem = value.item(0);
let allMenu = document.getElementsByClassName("dropdown__list");
let allMenuItem = allMenu.item(0);

valueItem.addEventListener("click", openMenu);

function openMenu() {
	if (allMenuItem.classList.contains("dropdown__list_active")) {
		allMenuItem.classList.remove("dropdown__list_active");
	} else {
		allMenuItem.classList.add("dropdown__list_active");
	}	
}

let menuItems = document.querySelectorAll(".dropdown__item");

menuItems.forEach(function (element) {
	element.addEventListener("click", changeLink);
});

function changeLink(event) {
	event.preventDefault();
	let target = event.target;
	valueItem.textContent = target.textContent;
	allMenuItem.classList.remove("dropdown__list_active");
}