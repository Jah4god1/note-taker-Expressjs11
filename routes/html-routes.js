// Import the necessary modules
const router = require('express').Router();
const path = require ('path')
// const express = require('express');

// Create an Express application
// const app = express();

// Define a route for the home page ("/")
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Define a route for the "/notes" page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// Start the server
// app.listen(3001, () => {
//   console.log('Server is running on http://localhost:3001');
// });

module.exports = router;