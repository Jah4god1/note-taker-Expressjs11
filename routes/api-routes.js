// Import the necessary modules
// const express = require('express');
const router = require('express').Router();
const fs = require('fs');
const { uuid } = require('uuidv4');
// Create an Express application
// const app = express();

// Example API route for retrieving a list of notes
router.get('/notes', (req, res) => {
  // Code to retrieve the list of notes from a database or other data source
  // const notes = [
  //   { id: 1, title: 'Note 1', text: 'This is the content of note 1' },
  //   { id: 2, title: 'Note 2', text: 'This is the content of note 2' },
  //   { id: 3, title: 'Note 3', text: 'This is the content of note 3' }
  // ];

  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))

  // Send the retrieved notes as a JSON response
  res.json(notes);
});

// Example API route for creating a new note
router.post('/notes', (req, res) => {

  let notes = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))

  // Code to create a new note based on the request body
  let newNote = req.body;
  newNote.id = uuid();

  notes.push(newNote);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes))

  // Send a JSON response indicating the new note was created
  res.json(notes);
});

// Example API route for updating an existing note
// app.put('/api/notes/:id', (req, res) => {
//   // Code to update the note with the specified ID based on the request body
//   const updatedNote = {
//     id: req.params.id,
//     title: req.body.title,
//     content: req.body.content
//   };

//   // Send a JSON response indicating the note was updated
//   res.json(updatedNote);
// });

// Example API route for deleting a note
// router.delete('/notes/:id', (req, res) => {
//   // Code to delete the note with the specified ID
//   const deletedNote = {
//     id: req.params.id
//   };

//   // Send a JSON response indicating the note was deleted
//   res.json(deletedNote);
// });

// // Start the server
// app.listen(3001, () => {
//   console.log('Server is running on http://localhost:3001');
// });

module.exports = router;