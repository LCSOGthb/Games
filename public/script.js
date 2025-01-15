const devUsername = "LCSdev";
const devPassword = "LCSdev";

// Toggle Developer Mode Login Screen
function toggleDevMode() {
    const loginContainer = document.getElementById("login-container");
    loginContainer.style.display = loginContainer.style.display === "block" ? "none" : "block";
}

// Developer Authentication
function authDev() {
    const username = document.getElementById("dev-username").value;
    const password = document.getElementById("dev-password").value;

    if (username === devUsername && password === devPassword) {
        alert("Access Granted! Welcome, Developer.");
        // You can add further developer features here
    } else {
        alert("Access Denied! Incorrect username or password.");
    }
}

// Cancel Developer Mode Login
function cancelLogin() {
    document.getElementById("dev-username").value = "";
    document.getElementById("dev-password").value = "";
    toggleDevMode(); // Hide the login screen
}

// Placeholder function for starting games
function startGuessTheNumber() {
    alert("Guess The Number game is starting...");
}

function startMinecraft() {
    alert("Minecraft is starting...");
}
