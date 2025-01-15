const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files (like HTML, CSS, JS)

app.get('/', (req, res) => {
  res.send('Welcome to A Useless Website Backend!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
