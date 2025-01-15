let correctNumber; // Randomly generated number for the game

// Initialize the game when it's loaded
function initializeGame() {
    correctNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    document.getElementById("reset-button").style.display = "none"; // Hide the "Play Again" button
    document.getElementById("player-input").value = ""; // Clear input field
    console.log(`Correct Number (for debugging): ${correctNumber}`); // Debugging purpose
}

// Start the game and switch to the game section
function startGame() {
    alert("Game is starting...");
    document.getElementById("menu").style.display = "none"; // Hide the menu
    document.getElementById("guess-game").style.display = "block"; // Show the game section
    initializeGame(); // Initialize the game
}

// Check the player's guess
function checkGuess() {
    const playerInput = document.getElementById("player-input");
    const playerGuess = parseInt(playerInput.value);

    // Validate the input
    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 10) {
        alert("Please enter a valid number between 1 and 10!");
        return;
    }

    // Check if the player's guess matches the correct number
    if (playerGuess === correctNumber) {
        alert("Congratulations! You guessed it!");
    } else {
        alert(`Wrong guess! The correct number was ${correctNumber}.`);
    }

    // Show the "Play Again" button after the game ends
    document.getElementById("reset-button").style.display = "inline-block";
}

// Reset the game to its initial state
function resetGame() {
    alert("Game reset! Try again.");
    initializeGame(); // Reinitialize the game
}

// Fetch the version info from your GitHub repo (simulating version tracking)
async function fetchVersionInfo() {
    try {
        const response = await fetch("https://api.github.com/repos/LCSOGthb/Games/commits");
        if (response.ok) {
            const data = await response.json();
            const latestCommit = data[0];
            const commitHash = latestCommit.sha.substring(0, 7); // Shortened commit hash
            const commitDate = new Date(latestCommit.commit.author.date).toLocaleDateString();
            document.getElementById("version-info").textContent = `v1.0 (${commitHash} - ${commitDate})`;
        } else {
            document.getElementById("version-info").textContent = "Error fetching version";
        }
    } catch (error) {
        document.getElementById("version-info").textContent = "Error fetching version";
        console.error(error);
    }
}

// Run version fetching on page load
fetchVersionInfo();
