let menuLinks = document.querySelectorAll("a.menu__link");
console.log(menuLinks);
let about = menuLinks.item(1);
let servieces = menuLinks.item(5);


let menuSub = document.querySelectorAll("ul.menu_sub");
console.log(menuSub);

let menuSubAbout = menuSub.item(0);
console.log(menuSubAbout);
let menuSubServices = menuSub.item(1);
console.log(menuSubServices);

menuLinks.forEach( function(ele) {
	console.log(ele);
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