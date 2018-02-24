/*Вывод нужного телефонного номера*/
function showPhone(select) {
    var city = select.options[select.selectedIndex].value;
    var phone;
    switch (city) {
        case "1":
            phone = "+375 16 216 16 16";
            break;
        case "2":
            phone = "+375 21 221 21 21";
            break;
        case "3":
            phone = "+375 23 223 23 23";
            break;
        case "4":
            phone = "+375 15 215 15 15";
            break;
        case "5":
            phone = "+375 17 217 17 17";
            break;
        case "6":
            phone = "+375 22 222 22 22";
            break;
    }
    var p = document.getElementsByClassName("header-info__phone__number")[0];
    p.innerHTML = phone;
}

/*Переключение нужного товара*/
function getItems(element) {
    var items = document.getElementsByClassName("items-menu__li"); // пункты меню
    var itemsUl = document.getElementsByClassName("items-content__ul"); // ul с товаром
    var id = element.id; //id выбранного пункта меню
    for (var i = 0; i < items.length; i++) {
        if (itemsUl[i].id != (id + "_ul")) { // еcли id пункта != выбраннному id пункта (все пункты кроме выбранного)
            items[i].classList.remove("active");
            $("#" + itemsUl[i].id).hide(1000);
        }
    }
    element.classList.add("active");
    $("#" + id + "_ul").show(1000);
}

/*Переключение мобильного меню*/
function showHideMenu(id) {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0]; // блок для мобильного меню
    var info = document.getElementsByClassName("header-info__li-ul")[0]; // блок с опциями
    var menu = document.getElementsByClassName("header-menu")[0]; // блок с меню

    var element; // текущее меню для кнопки
    var closeElement; // меню для другой кнопки
    if (id == "option-button") {
        element = info;
        closeElement = menu;
    } else if (id == "menu-button") {
        element = menu;
        closeElement = info;
    }

    if (closeElement.classList.contains("active-element")) { // если был открыт другой, закрываем
        closeElement.classList.remove("active-element");
    }

    if (!element.classList.contains("active-element")) {
        mobileMenu.classList.add("mobile-margin");
        element.classList.add("active-element");
    } else {
        mobileMenu.classList.remove("mobile-margin");
        /*element.style = "z-index: -1";
        setTimeout(function () {
            element.removeAttribute("style");
        }, 1000);*/
        setTimeout(function () {
            element.classList.remove("active-element");
        }, 1000);

    }
}
