let getItems = new XMLHttpRequest;
getItems.open("GET", "https://netology-slow-rest.herokuapp.com");
getItems.responseType = "json";
getItems.send();

function getRequest() {
	if (getItems.readyState === 4) {
		const request = getItems.response.response.Valute;
		let memory = [];
		for (let key in request) {
			memory.push({
				"key": key,
				"value": request[key].Value
			});
		}
		let serialMemory = JSON.stringify(memory);
		localStorage.setItem("money", serialMemory);
		removeLoader();
		if (!document.querySelector(".item")) {
			newItem(memory);
		}
	}
}

function removeLoader() {
	const loader = document.querySelector(".loader");
	if (loader.classList.contains("loader_active")) {
		loader.classList.remove("loader_active");
	}
}

getItems.addEventListener("readystatechange", getRequest);

window.addEventListener("load", () => {
	const items = document.querySelector(".items");
	let memory = JSON.parse(localStorage.getItem("money"));
	if(!memory) {
		getItems.addEventListener("readystatechange", getRequest);
	}else{
		removeLoader();
		newItem(memory);
	}
});

function newItem(memory) {
	memory.forEach(ele => {
		const loadItem = document.createElement("div");
		loadItem.classList.add("item");
		loadItem.innerHTML = `
			<div class="item__code">
				${ele.key}
			</div>
			<div class="item__value">
				${ele.value}
			</div>
			<div class="item__currency">
				руб.
			</div>
		`;
		items.appendChild(loadItem);
	});
}