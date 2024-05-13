// Create web server
// Create a web server that listens to port 3000 and returns the comments array
// at the path /comments as JSON.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol that is so funny' },
  { username: 'FishBoi', comment: 'plz stop posting such funny things' },
  { username: 'Tammy', comment: 'rofl' },
  { username: 'BigBen', comment: 'haha' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: comments.js
// Create a web server that listens to port 3000 and returns the comments array
// at the path /comments as JSON.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol that is so funny' },
  { username: 'FishBoi', comment: 'plz stop posting such funny things' },
  { username: 'Tammy', comment: 'rofl' },
  { username: 'BigBen', comment: 'haha' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: comments.js
// Create a web server that listens to port 3000 and returns the comments array
// at the path /comments as JSON.

const express = require('express');
const app = express();
const port = 3000;

const comments = [
  { username: 'Tammy', comment: 'lol that is so funny' },
  { username: 'FishBoi', comment: 'plz stop posting such funny things' },
  { username: 'Tammy', comment: 'rofl' },
  { username: 'BigBen', comment: 'haha' }
];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Path: comments.js
// Create a web
