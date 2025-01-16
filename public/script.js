// Show the Developer Mode login screen
document.getElementById("devModeButton").addEventListener("click", function () {
    document.getElementById("loginScreen").style.display = "flex";
});

// Handle login button click
document.getElementById("loginButton").addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Send login credentials to the backend
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Hide the login screen and activate developer mode
                document.getElementById("loginScreen").style.display = "none";
                document.body.classList.add("dev-mode");
            } else {
                // Show error message
                document.getElementById("errorMessage").textContent = data.message;
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});

// Handle back button click
document.getElementById("backButton").addEventListener("click", function () {
    // Ensure the login screen is hidden
    const loginScreen = document.getElementById("loginScreen");
    if (loginScreen) {
        loginScreen.style.display = "none"; // Hide the login screen
    }

    // Reset the login form
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("errorMessage").textContent = "";
});
