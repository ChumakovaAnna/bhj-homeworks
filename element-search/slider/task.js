let arrows = document.querySelectorAll("div.slider__arrow");
let leftArrow = arrows.item(0);
let rightArrow = arrows.item(1);

let images = document.querySelectorAll("img.slider__image");
let index = 0;
let activeImage;
let parentActiveImage;
let dots = document.querySelectorAll("div.slider__dot");
let activeDot = dots.item(index);
activeDot.classList.add("slider__dot_active");

function removeActive() {
	activeImage = images.item(index);
	parentActiveImage = activeImage.parentElement;
	if (parentActiveImage.classList.contains("slider__item_active")) {
		parentActiveImage.classList.remove("slider__item_active");
	}
}

function changeIndexMinus() {
	index --;
	if (index < 0) {
		index = images.length - 1;
	}
}

function changeIndexPlus() {
	index ++;
	if (index >= images.length) {
		index = 0;
	}
}

function changeActive() {
	let newImage = images.item(index);
	let parentNewImage = newImage.parentElement;
	parentNewImage.classList.add("slider__item_active");
}

function removeDot() {
	dots.forEach(function (dot, index) {
		let activeDot = dots.item(index);
		if (activeDot.classList.contains("slider__dot_active")) {
			activeDot.classList.remove("slider__dot_active");
		}
	});
}

function changeDot() {
	activeDot = dots.item(index);
	activeDot.classList.add("slider__dot_active");
}

function changeBack() {
	removeActive();
	removeDot();
	changeIndexMinus();
	changeDot();
	changeActive();
}

function changeForward() {
	removeActive();
	removeDot();
	changeIndexPlus();
	changeDot();
	changeActive();
}

leftArrow.onclick = changeBack;
rightArrow.onclick = changeForward;
	
dots.forEach(function (dot) {
	dot.onclick = clickDot;
	
	function clickDot(event) {
		let arrDots = Array.from(dots);
		let index = arrDots.indexOf(event.currentTarget);
		
		removeDot()

		let activeDot = dots.item(index);
		activeDot.classList.add("slider__dot_active");

		images.forEach(function (imag, index) {
			activeImage = images.item(index);
			parentActiveImage = activeImage.parentElement;
			if (parentActiveImage.classList.contains("slider__item_active")) {
				parentActiveImage.classList.remove("slider__item_active");
			}
		});

		let newImage = images.item(index);
		let parentNewImage = newImage.parentElement;
		parentNewImage.classList.add("slider__item_active");
	}
});