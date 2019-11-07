let menuLinks = document.querySelectorAll("a.menu__link");
let about = menuLinks.item(1);
let servieces = menuLinks.item(5);


let menuSub = document.querySelectorAll("ul.menu_sub");

let menuSubAbout = menuSub.item(0);
let menuSubServices = menuSub.item(1);

menuLinks.forEach( function(ele) {
	ele.onclick = function() {
		if (ele == about) {
			menuSubAbout.classList.add("menu_active");
			menuSubServices.classList.remove("menu_active");
			return false
		} else if (ele == servieces) {
			menuSubServices.classList.add("menu_active");
			menuSubAbout.classList.remove("menu_active");
			return false
		} else {
			menuSubServices.classList.remove("menu_active");
			menuSubAbout.classList.remove("menu_active");
		}
	}
});