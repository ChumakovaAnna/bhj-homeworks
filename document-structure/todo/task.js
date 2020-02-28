const taskInput = document.getElementById("task__input");
const taskButton = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");
const savedTasks = []

function changeStorage() {
	localStorage.clear();
	localStorage.setItem("tasks", tasksList.innerHTML);
};

const removeTask = (e) => {
	const taskTitle = e.target.closest(".task").querySelector(".task__title");
	console.log(taskTitle.textContent);
	e.target.closest(".task").remove();
	// не понимаю, почему не находится индекс
	savedTasks.indexOf(taskTitle.textContent);
	console.log(savedTasks.indexOf(taskTitle.textContent));
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
			savedTasks.push(taskInput.value);
			taskInput.value = "";
			console.log(savedTasks);
			changeStorage();
			e.preventDefault();
		}
	}
};

taskInput.addEventListener("keypress", addTask);
taskButton.addEventListener("click", addTask);
tasksList.addEventListener("click", removeTask);

// window.addEventListener("load", () => tasksList.insertAdjacentHTML("beforeend", localStorage.getItem("tasks")));
