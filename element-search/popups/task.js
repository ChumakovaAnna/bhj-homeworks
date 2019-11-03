let modal = document.getElementById("modal_main");
console.log(modal);
modal.classList.add("modal_active");

let allCloses = document.getElementsByClassName("modal__close");
console.log(allCloses);
let button = document.getElementsByClassName("show-success");
console.log(button);
let modalSucces = document.getElementById("modal_success");
console.log(modalSucces);

let oneClose;
let faq;
for (let i = 0; i < allCloses.length; i ++) {
	console.log(i);
	oneClose = allCloses.item(i)
	console.log(oneClose);
	 faq = oneClose.classList.contains("show-success")
	 console.log(faq);
	oneClose.onclick = function () {
		if (oneClose.classList.contains("show-success")) {
			// modal.classList.remove("modal_active");
			// modalSucces.classList.add("modal_active");
			console.log("rkbr");
		} else {
			// modal.classList.remove("modal_active");
			console.log("jj");
		}
	}
}