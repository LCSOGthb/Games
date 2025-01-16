// Show Developer Mode login screen when the Developer Mode button is clicked
document.getElementById("devModeButton").addEventListener("click", function() {
    document.getElementById("loginScreen").style.display = "flex";  // Show login screen as overlay
});

// Login button functionality to enable developer mode
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered credentials are correct
    if (username === "LCSdev" && password === "LCSdev") {
        // Hide the login screen and apply developer mode styling
        document.getElementById("loginScreen").style.display = "none";
        document.body.classList.add("dev-mode");
    } else {
        // Show an error message if credentials are incorrect
        document.getElementById("errorMessage").textContent = "Incorrect username or password!";
    }
});

// Useless button interaction
document.getElementById("uselessButton").addEventListener("click", function() {
    const text = document.getElementById("uselessText");
    text.textContent = "You clicked the button... for no reason!";
});
