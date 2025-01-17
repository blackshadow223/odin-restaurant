function createHome() {
    // Wrapper div
    const home = document.createElement("div");
    home.className = "wrapper";

    // Main content
    const heading = document.createElement("h1");
    heading.className = "heading";
    heading.textContent = "Welcome to \"The Gourmet\"";

    const description = document.createElement("p");
    description.className = "desc";
    description.textContent = `
        Welcome to "The Gourmet," where every moment is a celebration of
        tasty food mixed with warm hospitality. Whether you're here for
        a cozy dinner or a quick bite, we promise you taste of our
        traditional cuisine.
    `;

    // Add main content to wrapper div
    home.appendChild(heading);
    home.appendChild(description);

    // Return the wrapper div
    return home;
}

export default createHome;
