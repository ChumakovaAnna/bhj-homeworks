let arrows = document.querySelectorAll("div.slider__arrow");
console.log(arrows);
let leftArrow = arrows.item(0);
let rightArrow = arrows.item(1);

let images = document.querySelectorAll("img.slider__image");
console.log(images);
let dots = document.querySelectorAll("slider__dot");

function previous() {
		images.forEach( function (ele, index) {
		console.log(ele);
		console.log(index);
		let parentEle = ele.parentElement;
		if (parentEle.classList.contains("slider__item_active")) {
			parentEle.classList.remove("slider__item_active");
			console.log(parentEle);
			if (index == 0) {
				index = images.length;
			}
			let previousImag = images.item(index - 1);
			let parentPrevious = previousImag.parentElement;
			parentPrevious.classList.add("slider__item_active");
		}
	}
	);
}

leftArrow.onclick = previous;
