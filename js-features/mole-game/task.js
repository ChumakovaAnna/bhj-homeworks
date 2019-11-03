let hole = [];
const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
dead.textContent = 0;
lost.textContent = 0;

function getHole() {
	for (let i = 1; i < 10; i ++) {
		hole.push(document.getElementById(`hole${i}`));
	}
	return hole;
}

getHole();

for (let i = 0; i < 9; i ++) {
	hole[i].onclick = sniper;
	function sniper() {
		if (hole[i].classList.contains("hole_has-mole")) {
			dead.textContent ++ ;
			console.log(dead.textContent);
		} else {
			lost.textContent ++ ;
			console.log(lost.textContent);
		}
		
		if (dead.textContent == 4) {
			alert("4 бобра убито! Вы не зачислены в GreenPeace, но Вы победили!");
			dead.textContent = 0;
			lost.textContent = 0;
		} else if (lost.textContent == 4) {
			alert("Вы промахнулись 4 раза. Вы проиграли!");
			dead.textContent = 0;
			lost.textContent = 0;
		}
	}
}