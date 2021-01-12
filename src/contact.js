const renderContact = () => {
    
    const contactPage = document.createElement("main");
    contactPage.classList.add("contact-page");

    const container = document.createElement("div");
    container.classList.add("contact-container");

    const heading = document.createElement("header");
    heading.classList.add("contact-heading");
    heading.textContent = "BOOK A TABLE";

    const contactForm = document.createElement("form");
    contactForm.classList.add("contact-form");

    const formUnorderedList = document.createElement("ul");
    
    let formList = addFormInput("Name");
    formUnorderedList.appendChild(formList);

    formList = addFormInput("Email");
    formUnorderedList.appendChild(formList);

    formList = document.createElement("li");
    const queryLabel = document.createElement("label");
    queryLabel.setAttribute("for", "query");
    queryLabel.textContent = "Query:";
    const queryInput = document.createElement("textarea");
    queryInput.setAttribute("id", "query");
    formList.appendChild(queryLabel);
    formList.appendChild(queryInput);
    formUnorderedList.appendChild(formList);

    contactForm.appendChild(formUnorderedList);
    container.appendChild(heading);
    container.appendChild(contactForm);

    contactPage.appendChild(container);

    return contactPage;

}

const addFormInput = (input) => {

    const list = document.createElement("li");

    const formLabel = document.createElement("label");
    formLabel.setAttribute("for", `${input.toLowerCase()}`);
    formLabel.textContent = `${input}:`;

    const formInput = document.createElement("input");
    formInput.setAttribute("id", `${input.toLowerCase()}`);

    list.appendChild(formLabel);
    list.appendChild(formInput);

    return list;
}

export default renderContact;

