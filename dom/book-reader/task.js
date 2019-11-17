const book = document.querySelector(".book");
const fontSizes = document.querySelectorAll(".font-size");
const textColors = document.querySelectorAll(".book__control_color .color");
const backgroundColors = document.querySelectorAll(".book__control_background .color");
const classSizeActive = "font-size_active";
const classColorActive = "color_active";
const sizeText = "book_fs-";
const colorText = "book_color-";
const backgrounText = "color_";

function deactivateActiveElement (elements, className) {
	console.log(elements);
	for (let i = 0; i < elements.length; i++ ) {
		let element = elements.item(i);
		if (element.classList.contains(className)) {
			element.classList.remove(className);
			return element;
		}
	}
}

function changeActive(elements, element, classActive) {
	// ищем индекс
	let arrElements = Array.from(elements);
	let index = arrElements.indexOf(element);
	// добавляем элементу класс
	let activeElement = elements.item(index);
	activeElement.classList.add(classActive);
}

function removeActiveStyle (previousElementStyle, textStyle) {
	if (previousElementStyle) {
		book.classList.remove(textStyle + previousElementStyle);
	}
}

function addStyle(elementStyle, textStyle) {
	if (elementStyle) {
		book.classList.add(textStyle + elementStyle);
	}
}

fontSizes.forEach(function (ele) {
	ele.addEventListener("click", changeFontSize);
	
	function changeFontSize(event) {
		let previousActive = deactivateActiveElement(fontSizes, classSizeActive);

		let previousDataStyle = previousActive.dataset.size;
		removeActiveStyle(previousDataStyle, sizeText);
		
		let eventTarget = event.target;
		changeActive(fontSizes, eventTarget, classSizeActive);
		
		let dataStyle = eventTarget.dataset.size;
		addStyle(dataStyle, sizeText);

		event.preventDefault();
	}
});

textColors.forEach(function(ele) {
	ele.addEventListener("click", changeTextColor)

	function changeTextColor(event) {
		let previousActive = deactivateActiveElement (textColors, classColorActive);

		let previousDataStyle = previousActive.dataset.color;
		removeActiveStyle(previousDataStyle, colorText);

		let eventTarget = event.target;
		changeActive(textColors, eventTarget, classColorActive);

		let dataStyle = eventTarget.dataset.color;
		addStyle(dataStyle, colorText);

		event.preventDefault();
	}
});

backgroundColors.forEach(function(ele) {
	ele.addEventListener("click", changeBackgroundColor)

	function changeBackgroundColor(event) {
		let previousActive = deactivateActiveElement (backgroundColors, classColorActive);

		let previousDataStyle = previousActive.dataset.color;
		removeActiveStyle(previousDataStyle, backgrounText);

		let eventTarget = event.target;
		changeActive(backgroundColors, eventTarget, classColorActive);

		let dataStyle = eventTarget.dataset.color;
		addStyle(dataStyle, backgrounText);

		event.preventDefault();
	}
});