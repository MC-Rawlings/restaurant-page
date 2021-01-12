const renderNavBar = () => {

    const navBar = document.createElement("ul");
    navBar.classList.add("nav-bar");

    const homeLink = document.createElement("li");
    homeLink.classList.add("nav-link");
    homeLink.textContent = "HOME";

    const menuLink = document.createElement("li");
    menuLink.classList.add("nav-link");
    menuLink.textContent = "MENU";

    const contactLink = document.createElement("li");
    contactLink.classList.add("nav-link");
    contactLink.textContent = "CONTACT";

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink);

    return navBar;

};

export default renderNavBar;