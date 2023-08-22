const btnPurchase = document.getElementById("btn-purchase");
const totalPrice = document.getElementById("total-price");
const selectedProduct = document.getElementById("selected-product");
const btnApply = document.getElementById("btn-apply");
const couponField = document.getElementById("coupon-field");
const discountValue = document.getElementById("discount");
const grandTotalValue = document.getElementById("grand-total");
const btnModal = document.getElementById("btn-modal");

function cardClickBtn(target) {
  const card = target.parentNode.querySelector(".card");
  const productName = card.querySelector(".product-name").innerText;

  const li = document.createElement("li");
  li.innerText = productName;
  selectedProduct.appendChild(li);

  const productPrice = card
    .querySelector(".product-price")
    .innerText.split(" ")[0];
  const itemPrice = parseFloat(productPrice);

  const totalPriceString = totalPrice.innerText;
  const previousTotalPrice = parseFloat(totalPriceString);

  const currentTotalPrice = itemPrice + previousTotalPrice;
  totalPrice.innerText = currentTotalPrice.toFixed(2);

  if (currentTotalPrice > 0) {
    btnPurchase.removeAttribute("disabled");
  }

  if (currentTotalPrice >= 200) {
    btnApply.removeAttribute("disabled");
  }
}

btnApply.addEventListener("click", function () {
  const couponValue = couponField.value;
  const currentTotalPrice = parseFloat(totalPrice.innerText);
  
  if (couponValue === "SELL200") {
    const discountAmount = (currentTotalPrice / 100) * 20;
    const grandTotal = currentTotalPrice - discountAmount;

    discountValue.innerText = discountAmount.toFixed(2);
    grandTotalValue.innerText = grandTotal.toFixed(2);
  }
  couponField.value = "";
});

btnModal.addEventListener("click", function () {
  discountValue.innerText = "0.00";
  grandTotalValue.innerText = "0.00";
  totalPrice.innerText = "0.00";
  selectedProduct.innerHTML = "";
  couponField.value=''

  btnApply.setAttribute("disabled", true);
  btnPurchase.setAttribute("disabled", true);
});
