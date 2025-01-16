const express = require('express');
const app = express();
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../public')));

// Simple login endpoint for Developer Mode
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === 'LCSdev' && password === 'LCSdev') {
        // Login successful, return a success response
        res.json({ success: true });
    } else {
        // Invalid credentials, return an error response
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

// Start the server on a specific port
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});