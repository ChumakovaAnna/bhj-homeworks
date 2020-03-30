const welcom = document.getElementById("welcome");
const user = document.getElementById("user_id");
const signin = document.getElementById("signin");
const btnSindIn = document.getElementById("signin__btn");
const btnLogOut = document.getElementById("logout__btn")

window.addEventListener("load", () => {

	const welcomOpen = (userId) => {
		signin.classList.remove("signin_active");
		welcom.classList.add("welcome_active");
		user.textContent = userId;
	}

	if (localStorage.getItem("user")) {
		welcomOpen(localStorage.getItem("user"));
	} else {
		signin.classList.add("signin_active");

		btnSindIn.addEventListener("click", (e) => {
			e.preventDefault();
			const form = document.getElementById("signin__form")
			const formData = new FormData(form);
			const xhr = new XMLHttpRequest();

			xhr.addEventListener("load", () => {
				const response = xhr.response;
				if (response.success) {
					localStorage.setItem("user", response.user_id)
					form.reset();
					welcomOpen(localStorage.getItem("user"));
				} else {
					alert(`Неверный логин/пароль`);
					form.reset();
				}
			});
			xhr.responseType = "json"
			xhr.open("POST", "https://netology-slow-rest.herokuapp.com/auth.php");
			xhr.send(formData);
		});
	}

	btnLogOut.addEventListener("click", () => {
		localStorage.removeItem("user");
		welcom.classList.remove("welcome_active");
		signin.classList.add("signin_active");
	});
});


