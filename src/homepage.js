const renderHomepage = () => {

    const heroSection = document.createElement("main");
    heroSection.classList.add("hero-section");

    const name = document.createElement("h1");
    name.classList.add("hero-title");
    name.textContent = "That Food Place";

    const description = document.createElement("p");
    description.classList.add("hero-description");
    description.textContent = "Join us for some of that food at that table with that sauce!";


    heroSection.appendChild(name);
    heroSection.appendChild(description);

    return heroSection;

};

export default renderHomepage;