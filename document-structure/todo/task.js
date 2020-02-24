const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function changeStorage() {
	localStorage.clear();
	localStorage.setItem("tasks", tasksList.innerHTML);
};

const removeTask = (e) => {
	e.target.closest(".task").remove();
	changeStorage();
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
			changeStorage();
			e.preventDefault();
		}
	}
};

taskInput.addEventListener("keypress", addTask);
taskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", removeTask);

window.addEventListener("load", () => tasksList.insertAdjacentHTML("beforeend", localStorage.getItem("tasks")));
