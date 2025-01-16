document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered credentials are correct
    if (username === "LCSdev" && password === "LCSdev") {
        // Hide the login screen and show the main content
        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        
        // Apply dev mode styling
        document.body.classList.add("dev-mode");
    } else {
        // Show an error message if credentials are incorrect
        document.getElementById("errorMessage").textContent = "Incorrect username or password!";
    }
});

document.getElementById("uselessButton").addEventListener("click", function() {
    const text = document.getElementById("uselessText");
    text.textContent = "You clicked the button... for no reason!";
});
