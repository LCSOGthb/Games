// Select the dark mode button
const darkModeButton = document.getElementById("darkModeButton");

// Check for saved preference in localStorage
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    darkModeButton.textContent = "☀️"; // Set button to light mode icon
}

// Toggle Dark Mode
darkModeButton.addEventListener("click", function () {
    if (document.body.classList.contains("dark-mode")) {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
        darkModeButton.textContent = "🌙"; // Set button to dark mode icon
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        darkModeButton.textContent = "☀️"; // Set button to light mode icon
    }
});
