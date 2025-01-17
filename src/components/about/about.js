function createAbout() {
    // Wrapper div
    const about = document.createElement("div");
    about.className = "wrapper";

    // Main content
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "About Us";

    const description = document.createElement("p");
    description.className = "desc";
    description.textContent = `
        With a passion for excellence, we aim to provide an atmosphere
        that feels like home, making every visit special and memorable.
    `;

    // Add main content to wrapper div
    about.appendChild(heading);
    about.appendChild(description);

    // Return the wrapper div
    return about;
}

export default createAbout;
