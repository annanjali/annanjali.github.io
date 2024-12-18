// Function to dynamically load CSS files
function loadCSS(file) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = file;
    document.head.appendChild(link);
}

// Load the individual CSS files
loadCSS("styles/global.css");
loadCSS("styles/header.css");
loadCSS("styles/hero.css");
loadCSS("styles/about.css");
loadCSS("styles/experience.css");
loadCSS("styles/projects.css");
loadCSS("styles/contact.css");
loadCSS("styles/footer.css");