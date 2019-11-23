const allCheckbox = document.querySelectorAll(".interest__check");

allCheckbox.forEach(function (ele) {
	ele.addEventListener("change", () => {
		console.log(ele);
		let allParentsCheckbox = [];
		
		function searchParentsCheckbox(element) {
			const parent = element.parentElement;
			console.log(parent);

			// search all parents
			if (parent) {
				
				// search all parent's checkboxs
				if (parent.classList.contains("interest")) {
					const firstChildLabel = parent.firstElementChild;
					const firstChildCheckbox = firstChildLabel.firstElementChild;
					allParentsCheckbox.push(firstChildCheckbox);
				};

				searchParentsCheckbox(parent);
			} else {
				console.log(allParentsCheckbox);
				return allParentsCheckbox;
			}
		}

		searchParentsCheckbox(ele);
	});
})

