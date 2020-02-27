const allproducts = document.querySelectorAll(".product");
let selectedProducts = [];
const cart = document.querySelector(".cart");

function workWithCart(e) {
	const parentProduct = e.target.closest(".product");
	const amountProduct = parentProduct.querySelector(".product__quantity-value");
	changeAmount(e);
	addProduct(e)
	
	function changeAmount(e) {
		if (e.target.closest(".product__quantity-control_dec")) {
			amountProduct.innerText = Number(amountProduct.innerText) - 1;
			
			if (amountProduct.innerText < 1) {
				amountProduct.innerText = 1;
			}
		} else if (e.target.closest(".product__quantity-control_inc")) {
			amountProduct.innerText = Number(amountProduct.innerText) + 1;
		}
	}
	
	function addProduct(e) {
		const cartProducts = document.querySelector(".cart__products");
		if(e.target.closest(".product__add")) {
			const search = selectedProducts.findIndex(ele => ele.index == Number(parentProduct.dataset.id));
			if (search == -1) {
				selectedProducts.push({
					index: Number(parentProduct.dataset.id),
					amount: Number(amountProduct.innerText),
					urlImag: parentProduct.querySelector(".product__image").getAttribute("src")
				});
				cartProducts.insertAdjacentHTML("beforeend",`
					<div class="cart__product" data-id="${selectedProducts[selectedProducts.length - 1].index}">
						<img class="cart__product-image" src="${selectedProducts[selectedProducts.length - 1].urlImag}">
						<div class="cart__product-count">${selectedProducts[selectedProducts.length - 1].amount}</div>
						<div class="cart__product-remove">X</div>
					</div>
					`);

					if (!cart.classList.contains("cart__view")) {
						cart.classList.add("cart__view");
					}

			} else {
				selectedProducts[search].amount += Number(amountProduct.innerText);
				const oldProductAmount = cartProducts.querySelector(`[data-id="${selectedProducts[search].index}"] .cart__product-count`);
				oldProductAmount.innerText = selectedProducts[search].amount;
			}
			amountProduct.innerText = 1;
		}
	}
}

allproducts.forEach((ele) => {
	ele.addEventListener("click", workWithCart);
});

cart.addEventListener("click", (ele) => {
	if (ele.target.closest(".cart__product-remove")) {
		const parentProductCart = ele.target.closest(".cart__product");
		const search = selectedProducts.findIndex(ele => ele.index == Number(parentProductCart.dataset.id));
		selectedProducts.splice(search, 1);
		parentProductCart.remove();
		
		if (selectedProducts.length == 0) {
			cart.classList.remove("cart__view");
		}
	}
});