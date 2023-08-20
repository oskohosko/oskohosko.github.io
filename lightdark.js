/**
 * Little program that uses the lightsaber image to switch between light and dark mode.
 */

const themeImage = document.getElementById("theme-image");

function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        // Change image
        themeImage.src = "images/lightsaber.png";
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkModeEnabled", "false");
    }
    else {
        // Enable dark mode and change image
        document.body.classList.add("dark-mode");
        themeImage.src = "images/darksaber.png";
        localStorage.setItem("darkModeEnabled", "true");
    }
}

themeImage.addEventListener("click", toggleDarkMode);

// Check if dark mode was enabled and apply it on page load
window.addEventListener("DOMContentLoaded", () => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled");

    if (darkModeEnabled === "true") {
        themeImage.src = "images/darksaber.png";
        document.body.classList.add("dark-mode");
    }
});
