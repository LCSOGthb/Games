document.getElementById("devModeButton").addEventListener("click", function() {
    document.getElementById("loginScreen").style.display = "flex";  // Show login screen as overlay
});

document.getElementById("loginButton").addEventListener("click", function() {
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
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Hide the login screen and apply developer mode styling
            document.getElementById("loginScreen").style.display = "none";
            document.body.classList.add("dev-mode");
        } else {
            // Show an error message if credentials are incorrect
            document.getElementById("errorMessage").textContent = data.message;
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

document.getElementById("uselessButton").addEventListener("click", function() {
    const text = document.getElementById("uselessText");
    text.textContent = "You clicked the button... for no reason!";
});
