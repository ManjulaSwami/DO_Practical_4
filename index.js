const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Added environment variable fallback

// Add this to handle all network interfaces
const HOST = '0.0.0.0'; // Important for Jenkins/Windows environments

app.get('/', (req, res) => {
  res.send('Hello from Node.js Application!');
});

app.listen(PORT, HOST, () => {  // Modified to include HOST
  console.log(`Server running on http://${HOST}:${PORT}`);
});
