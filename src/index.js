import renderHomepage from './homepage';
import renderNavBar from './navBar';
import renderMenu from './menu';
import renderContact from './contact';

const content = document.querySelector("#content");

content.appendChild(renderNavBar());
content.appendChild(renderHomepage());

const navLinks = document.querySelectorAll(".nav-link");
console.log(navLinks);

navLinks.forEach(nav => {
    
    nav.addEventListener("click", () => {
        content.removeChild(content.lastChild);
        console.log(nav.textContent);
        if (nav.textContent === "HOME") {
            content.appendChild(renderHomepage());
        } else if (nav.textContent === "MENU") {
            content.appendChild(renderMenu());
        } else if (nav.textContent === "CONTACT") {
            content.appendChild(renderContact());
        }
    });
})

