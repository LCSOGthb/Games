const translations = {
    en: {
        title: "Welcome to A Useless Website",
        gameButton: "Guess The Number",
        minecraftButton: "Minecraft",
        loginTitle: "Login to Developer Mode"
    },
    es: {
        title: "Bienvenido a A Useless Website",
        gameButton: "Adivina El Número",
        minecraftButton: "Minecraft",
        loginTitle: "Iniciar sesión en el Modo Desarrollador"
    }
};

function changeLanguage(language) {
    document.getElementById("title").textContent = translations[language].title;
    document.getElementById("game-button").textContent = translations[language].gameButton;
    document.getElementById("minecraft-button").textContent = translations[language].minecraftButton;
    document.getElementById("login-title").textContent = translations[language].loginTitle;
}

// Initialize the default language (English)
changeLanguage('en');

// Placeholder function for starting games
function startGuessTheNumber() {
    alert("Guess The Number game is starting...");
}

function startMinecraft() {
    alert("Minecraft is starting...");
}

function authDev() {
    const username = document.getElementById("dev-username").value;
    const password = document.getElementById("dev-password").value;

    const devUsername = "LCSdev";
    const devPassword = "LCSdev";

    if (username === devUsername && password === devPassword) {
        alert("Access Granted! Welcome, Developer.");
    } else {
        alert("Access Denied! Incorrect username or password.");
    }
}

function cancelLogin() {
    alert("Login canceled. Returning to main menu.");
}
