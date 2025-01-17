import biryaniImage from "../assets/images/Biryani_of_Lahore.webp";
import nihariImage from "../assets/images/Mutton_Nihari.webp";
import karahiImage from "../assets/images/Pakistani_Food_Karahi_Beef.webp";
import haleemImage from "../assets/images/Haleem_hyderabadi.webp";
import kebabImage from "../assets/images/Chapli_Kebab.webp";

function* createCards(data) {
    for (let index in data) {
        let value = data[index];


        const card = document.createElement("div");
        card.className = "card";


        const image = document.createElement("img");
        image.className = "card-image";
        image.src = value.image;
        image.alt = value.description;
        image.width = 100;


        const textDiv = document.createElement("div");
        textDiv.className = "card-text";

        const nameDiv = document.createElement("div");
        nameDiv.className = "card-name";

        const name = document.createElement("h3");
        name.textContent = value.name;

        const cost = document.createElement("span");
        cost.textContent = `$${value.cost}`;

        nameDiv.appendChild(name);
        nameDiv.appendChild(cost);

        const desc = document.createElement("p");
        desc.textContent = value.description;
        
        textDiv.appendChild(nameDiv);
        textDiv.appendChild(desc);


        card.appendChild(image);
        card.appendChild(textDiv);


        yield card;
    };
}

function createMenu() {
    // Function data
    const data = [
        {
            name: "Biryani",
            cost: 4,
            description: `A fragrant rice dish cooked with tender meat,
            aromatic spices, and herbs.`,
            image: biryaniImage,
        },
        {
            name: "Nihari",
            cost: 7,
            description: `A rich, slow-cooked stew made with succulent
            beef or lamb, infused with spices.`,
            image: nihariImage,
        },
        {
            name: "Karahi",
            cost: 5,
            description: `A spicy curry prepared with tomatoes, garlic,
            ginger, and your choice of chicken or mutton.`,
            image: karahiImage,
        },
        {
            name: "Haleem",
            cost: 2,
            description: `A hearty blend of wheat, barley, lentils, and
            meat, slow-cooked to perfection.`,
            image: haleemImage,
        },
        {
            name: "Chapli Kebab",
            cost: 8,
            description: `Flavorful minced meat patties, seasoned with
            spices and herbs.`,
            image: kebabImage,
        },
    ];

    // Container div
    const menu = document.createElement("div");
    menu.className = "wrapper";

    // Main content
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "Menu";

    const cardContainer = document.createElement("div");
    cardContainer.className = "card-container";

    for (let card of createCards(data)) {
        cardContainer.appendChild(card);
    }

    // Add main content to container div
    menu.appendChild(heading);
    menu.appendChild(cardContainer);

    // Return the container div
    return menu;
}

export default createMenu;
