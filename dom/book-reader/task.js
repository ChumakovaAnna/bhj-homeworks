const book = document.querySelector(".book");
const fontSizes = document.querySelectorAll(".font-size");
const textColors = document.querySelectorAll(".book__control_color .color");
const backgroundColors = document.querySelectorAll(".book__control_background .color");
const classSizeActive = "font-size_active";
const classColorActive = "color_active";

function deactivateCurrentElement (elements, className) {
	console.log(elements.length);
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

fontSizes.forEach(function (ele) {
	ele.addEventListener("click", changeFontSize);
	
	function changeFontSize(event) {
		let previousActive = deactivateCurrentElement(fontSizes, classSizeActive);
		console.log(previousActive);
		let previousDataStyle = previousActive.dataset.size;
		if (previousDataStyle) {
			book.classList.remove(`book_fs-${previousDataStyle}`);
		}
		let eventTarget = event.target;
		changeActive(fontSizes, eventTarget, classSizeActive);
		
		let dataStyle = eventTarget.dataset.size;
		if (dataStyle) {
			book.classList.add(`book_fs-${dataStyle}`);
		}

// запрещаем переход по ссылке
		event.preventDefault();
	}
});

textColors.forEach(function(ele) {
	ele.addEventListener("click", changeTextColor)

	function changeTextColor(event) {
		deactivateCurrentElement(textColors, classColorActive);
		let eventTarget = event.target;
		console.log(eventTarget);
		changeActive(textColors, eventTarget, classColorActive);

		let dataStyle = eventTarget.dataset.color;
		console.log(dataStyle);

		book.className = "book"

		if (dataStyle) {
			book.classList.add(`book_color-${dataStyle}`);
		}

		event.preventDefault();
	}
});