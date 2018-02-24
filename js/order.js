// Подсчет стоимости в зависимости от количества
function changeQuantity(tag, operation) {
    var element = tag.parentNode.firstElementChild;
    var quantity = +element.textContent;
    switch (operation) {
        case "minus":
            quantity--;
            break;
        case "plus":
            quantity++;
            break;
    }
    if (quantity < 0) {
        quantity = 0;
    }
    element.textContent = quantity;

    //Расчет итого по товару
    var priceTag = tag.closest("li").previousElementSibling.previousElementSibling;
    var totalTag = tag.closest("li").nextElementSibling.nextElementSibling;
    totalTag.textContent = (parseFloat(priceTag.textContent) * quantity).toFixed(2) + " руб";

    //Расчет итого по всем товарам
    var cartItems = document.getElementsByClassName("cart-items");
    var total = 0;
    for (var i = 0; i < cartItems.length; i++) {
        total += +parseFloat(cartItems[i].lastElementChild.textContent);
        total = +total.toFixed(2);
    }
    document.getElementById("totalPrice").textContent = total.toFixed(2) + " руб";
}