let modal = document.getElementById("modal_main");
modal.classList.add("modal_active");

let allCloses = document.getElementsByClassName("modal__close");
let crossFirst = allCloses.item(0);
// let button = document.getElementsByClassName("show-success");
let button = allCloses.item(1);
let crossSecond = allCloses.item(2);
let modalSucces = document.getElementById("modal_success");

function closeBlock() {
	modal.classList.remove("modal_active");
}

function closeAndOpen() {
	modal.classList.remove("modal_active");
	modalSucces.classList.add("modal_active");
}

function closeSuccess() {
	modalSucces.classList.remove("modal_active");
}

crossFirst.onclick = closeBlock;
button.onclick = closeAndOpen;
crossSecond.onclick = closeSuccess;