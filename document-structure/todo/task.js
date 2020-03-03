const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const savedTasks = []

const removeTask = (e) => {
	if (e.target.closest(".task__remove")) {
		e.target.closest(".task").remove();
	};
	e.target.closest(".task").querySelector(".task__remove");
};

const addTask = (e) => {
	const taskHTML = 
		`<div class="task">
			<div class="task__title">
				${taskInput.value}
			</div>
			<a href="#" class="task__remove">&times;</a>
		</div>`;

	if (e.keyCode === 13 || e.type === "click") {
		if (taskInput.value.trim() != "") {
			tasksList.insertAdjacentHTML("beforeend", taskHTML);
			taskInput.value = "";
			e.preventDefault();
		}
	}
};

taskInput.addEventListener("keypress", addTask);
taskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", removeTask);

function loadTasks() {
	const memory = localStorage.getItem("tasks");
	const arr = memory.split(",");
	if (!arr[1] == "") {
		arr.forEach((ele) => {
			const div = document.createElement("div");
			div.classList.add("task");
			div.innerHTML = `
			<div class="task__title">
				${ele}
			</div>
			<a href="#" class="task__remove">&times;</a>`;
			tasksList.appendChild(div);
		});
	}
}

window.addEventListener("load", loadTasks);

function onunloadTasks() {
	const allSavedTasks = document.querySelectorAll(".task__title");
	if (allSavedTasks) {
		allSavedTasks.forEach((ele) => {
			savedTasks.push(ele.innerText.trim());
		});
		localStorage.setItem("tasks", savedTasks);
	};
}

window.addEventListener("unload", onunloadTasks);