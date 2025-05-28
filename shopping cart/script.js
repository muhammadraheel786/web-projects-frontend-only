const itemNameInput = document.getElementById("input1");
const itemPriceInput = document.getElementById("input2");
const addButton = document.getElementById("addchart");
const resultDisplay = document.getElementById("result");
const resetButton = document.getElementById("reset");

let cartItems = [];
let cartPrices = [];

function addItemToCart() {
    const itemName = itemNameInput.value.trim();
    const itemPrice = parseFloat(itemPriceInput.value);

    if (itemName === "" || isNaN(itemPrice) || itemPrice <= 0) {
        alert("Please enter a valid item name and price.");
        return;
    }

    cartItems.push(itemName);
    cartPrices.push(itemPrice);

    updateCartDisplay();
    clearInputs();
}

function updateCartDisplay() {
    let total = 0;
    let cartContent = "<h3>Your Shopping Cart:</h3><ul>";

    for (let i = 0; i < cartItems.length; i++) {
        cartContent += `<li>${cartItems[i]} - $${cartPrices[i].toFixed(2)}</li>`;
        total += cartPrices[i];
    }
    
    cartContent += `</ul><h3>Total: $${total.toFixed(2)}</h3>`;
    resultDisplay.innerHTML = cartContent;
}

function resetCart() {
    cartItems = [];
    cartPrices = [];
    resultDisplay.innerHTML = "<h3>Your Shopping Cart is Empty</h3>";
    clearInputs();
}

function clearInputs() {
    itemNameInput.value = "";
    itemPriceInput.value = "";
}

addButton.addEventListener("click", addItemToCart);
resetButton.addEventListener("click", resetCart);
