import "./style.css";
import createHome from "./components/home/home.js";
import createMenu from "./components/menu/menu.js";
import createAbout from "./components/about/about.js";


class App {
    // Private Variables
    #header;
    #content;
    #activeTabContents;

    // Constructor
    constructor() {
        this.#activeTabContents = createHome();

        this.#cacheDOM();
        this.#bindEvents();
        this.#render();
    }

    // Private methods
    #cacheDOM() {
        this.#header = document.querySelector("#header");
        this.#content = document.querySelector("#content");
    }

    #bindEvents() {
        this.#header.addEventListener("click", this.#handleHeader.bind(this));
    }

    #render() {
        this.#content.textContent = "";
        this.#content.appendChild(this.#activeTabContents);
    }

    // Private API
    #handleHeader(event) {
        if (event.target.className.includes("nav-button")) {
            // If already active, No need to re-render
            if (event.target.className.includes("active")) {
                return;
            }

            // Change Active Link
            const activeLink = event.target.parentNode.querySelector(".active");
            activeLink.className = activeLink.className.replace(" active", "");
            event.target.className += " active";

            // Switch to Relevant Tab
            if (event.target.id === "home") {
                this.#switchToHome();
            } else if (event.target.id === "menu") {
                this.#switchToMenu();
            } else if (event.target.id === "about") {
                this.#switchToAbout();
            }
        }
    }

    #switchToHome() {
        this.#activeTabContents = createHome();
        this.#render();
    }

    #switchToMenu() {
        this.#activeTabContents = createMenu();
        this.#render();
    }

    #switchToAbout() {
        this.#activeTabContents = createAbout();
        this.#render();
    }
}

const app = new App();
