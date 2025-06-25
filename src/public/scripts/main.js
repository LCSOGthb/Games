// This file contains the JavaScript code for client-side functionality, such as handling user interactions and making API calls.

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('start-game');
    const scoreDisplay = document.getElementById('score');
    let score = 0;

    startButton.addEventListener('click', () => {
        score = 0;
        scoreDisplay.textContent = `Score: ${score}`;
        startGame();
    });

    function startGame() {
        // Game logic goes here
        // Example: Increment score every second
        setInterval(() => {
            score++;
            scoreDisplay.textContent = `Score: ${score}`;
        }, 1000);
    }
});