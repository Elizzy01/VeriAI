// Placeholder for Node.js/Express server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Welcome to the Hedera + Node.js Backend!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
