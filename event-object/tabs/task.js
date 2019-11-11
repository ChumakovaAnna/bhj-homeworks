const tabs = document.querySelectorAll(".tab");
const tabsContent = document.querySelectorAll(".tab__content")

tabs.forEach(function (tab) {
	tab.addEventListener("click", changeTabContent);
});

function changeTabContent(event) {
	let target = event.currentTarget;
	const arrTabs = Array.from(tabs);
	let index = arrTabs.indexOf(this);

	tabs.forEach(function (ele) {
		ele.classList.remove("tab_active");
	});

	target.classList.add("tab_active");

	tabsContent.forEach(function (ele) {
		ele.classList.remove("tab__content_active");
	});

	let activTabContent = tabsContent.item(index);
	activTabContent.classList.add("tab__content_active");
}