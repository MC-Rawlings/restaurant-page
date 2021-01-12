const renderMenuItem = (img, name, info) => {

    const menuItem = document.createElement("div");
    menuItem.classList.add("item-container");

    const itemName = document.createElement("h2");
    itemName.classList.add("item-name");
    itemName.textContent = name;

    const itemInfo = document.createElement("p");
    itemInfo.classList.add("item-info");
    itemInfo.textContent = info;

    const itemImage = document.createElement("img");
    itemImage.setAttribute("src", img);

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemInfo);
    menuItem.appendChild(itemImage);

    return menuItem;
    
}

const renderMenu = () => {

    const menu = document.createElement("main");
    menu.classList.add("menu");

    const burger = renderMenuItem("../src/images/burger.jpg",
    "Beef Burger", "200g burger, served with chips");

    const pizza = renderMenuItem("../src/images/pizza.jpg", 
    "Pizza", "Chourico, olives and tomato topped with basil");

    const salad = renderMenuItem("../src/images/salad.jpg", 
    "Salad", "Mediterranean style stopped wity parsley");

    menu.appendChild(burger);
    menu.appendChild(pizza);
    menu.appendChild(salad);

    return menu;

}

export default renderMenu;