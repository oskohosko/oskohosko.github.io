const themeImage = document.getElementById("theme-image");


function toggleDarkMode() {
    if (document.body.classList.contains("dark-mode")) {
        themeImage.src = "images/lightsaber.png"
        document.body.classList.remove("dark-mode");
    }
    else {
        document.body.classList.add("dark-mode");
        themeImage.src = "images/darksaber.png"
    }
}

themeImage.addEventListener("click", toggleDarkMode);