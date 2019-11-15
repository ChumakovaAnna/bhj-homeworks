const texts = document.querySelectorAll(".rotator__case");
let speeds = [];
texts.forEach(function (ele) {
	let eleColor = ele.dataset.color;
	ele.style.color = eleColor;
	let eleTime = ele.dataset.speed;

	return speeds.push(Number(eleTime));
});
console.log(speeds);

function changeActiveText() {
	let index;

	texts.forEach(function (ele) {
		const arrTexts = Array.from(texts);

		if (ele.classList.contains("rotator__case_active")) {
			index = arrTexts.indexOf(ele);
			ele.classList.remove("rotator__case_active");
		}

		return index;
	});
	
	index ++;
	
	if (index == texts.length) {
		index = 0;
	}
	
	let nextEle = texts.item(index);	
	nextEle.classList.add("rotator__case_active");

	setTimeout(changeActiveText, speeds[index]);
}

setTimeout(changeActiveText, speeds[0]);