let reveals = document.querySelectorAll(".reveal");
const viewportHeight = window.innerHeight;

window.addEventListener("scroll", openReveal);
 
function openReveal() {
	reveals.forEach(function (ele) {
		const elementTop = ele.getBoundingClientRect().top;
		if (elementTop < viewportHeight && elementTop > 0) {
			ele.classList.add("reveal_active");
		} else {
			ele.classList.remove("reveal_active");
		}
	});
}