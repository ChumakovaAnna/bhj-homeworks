const allCheckbox = document.querySelectorAll(".interest__check");

const changeCheckbox = (e) => {
	const ele = e.target;
	let allSiblings = [];

	const parent = (element) => element.closest(".interest");
	
	function searchPreviousSiblings(element) {
		const previousSibling = parent(element).previousElementSibling;
		if (previousSibling) {
			const previousSiblingCheckbox = previousSibling.querySelector(".interest__check");
			allSiblings.push({item: previousSiblingCheckbox, status: previousSiblingCheckbox.checked});
			searchPreviousSiblings(previousSibling);
		}
	}
	
	function searchNextSiblings(element) {
		const nextSibling = parent(element).nextElementSibling;
		if (nextSibling) {
			const nextSiblingCheckbox = nextSibling.querySelector(".interest__check");
			allSiblings.push({item: nextSiblingCheckbox, status: nextSiblingCheckbox.checked});
			searchNextSiblings(nextSibling);
		} else {
			allSiblings.push({item: ele, status: ele.checked});
		}
	}

	function searchChildren(element) {
		const allChildrenCheckbox = parent(element).querySelectorAll(".interest__check");
		allChildrenCheckbox.forEach(e => {
			e.indeterminate = false;
			e.checked = allChildrenCheckbox[0].checked;
		});
	}
	
	function changeParentCheckbox(element) {
		const parentSibling = parent(element).closest(".interests").previousElementSibling;
		if (parentSibling) {
			const parentCheckbox = parentSibling.querySelector(".interest__check");
			const statusAllSiblings = allSiblings.filter(item => item.status === true);
			if (statusAllSiblings.length === allSiblings.length) {
				parentCheckbox.indeterminate = false;
				parentCheckbox.checked = true;
			} else if(statusAllSiblings.length === 0) {
				parentCheckbox.indeterminate = false;
				parentCheckbox.checked = false;
			} else {
				parentCheckbox.indeterminate = true;
			}

			changeParentCheckbox(parent(parentCheckbox));
		}
	}

	searchPreviousSiblings(ele);
	searchNextSiblings(ele);
	changeParentCheckbox(ele);
	searchChildren(ele);
};

allCheckbox.forEach(ele => {
	ele.addEventListener("change", changeCheckbox, false);
});