const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const savedTasks = []

const removeTask = (e) => {
	const taskTitle = e.target.closest(".task").querySelector(".task__title");
	e.target.closest(".task").remove();
	savedTasks.splice(savedTasks.indexOf(taskTitle.innerText.trim()), 1);
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
			savedTasks.push(taskInput.value);
			taskInput.value = "";
			e.preventDefault();
		}
	}
};

taskInput.addEventListener("keypress", addTask);
taskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", removeTask);

function loadTasks() {
	console.log(localStorage.getItem("tasks"))
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
	const allSavedTasks = document.querySelectorAll("task__title");
	allSavedTasks.forEach((ele) => {
		savedTasks.push(ele.innerText.trim());
	});
	localStorage.removeItem("tasks");
	localStorage.setItem("tasks", savedTasks);
}

window.addEventListener("unload", onunloadTasks);