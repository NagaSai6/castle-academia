const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

const app = express();

// Parse the request body as JSON
app.use(express.json());

app.post('/login', (req, res) => {
  // Get the login data from the request body
  const loginData = req.body;

  // Check if the login data is valid
  if (!loginData || !loginData.username || !loginData.password) {
    return res.status(400).send('Invalid login data');
  }

  // Connect to the MySQL database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'password',
    database: 'dbname'
  });

  connection.connect();

  // Query the database to check if the username and password are correct
  connection.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [loginData.username, loginData.password],
    (error, results) => {
      connection.end();

      if (error) {
        return res.status(500).send('Error connecting to the database');
      }

      if (results.length === 0) {
        return res.status(401).send('Invalid username or password');
      }

      // If the username and password are correct, return a JWT token
      const token = jwt.sign({ username: loginData.username }, 'secret');
      res.send({ token });
    }
  );
});


app.post('/save', (req, res) => {
  // Get the form data from the request body
  const formData = req.body;

  // Check if the form data is valid
  if (!formData || !formData.name || !formData.email || !formData.message) {
    return res.status(400).send('Invalid form data');
  }

  // Connect to the MySQL database
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 'password',
    database: 'dbname'
  });

  connection.connect();

  // Insert the form data into the database
  connection.query(
    'INSERT INTO form (name, email, message) VALUES (?, ?, ?)',
    [formData.name, formData.email, formData.message],
    (error) => {
      connection.end();

      if (error) {
        return res.status(500).send('Error saving form data');
      }

      res.send('Form data saved');
    }
  );
});

const port = 3000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});