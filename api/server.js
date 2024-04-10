const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "Rohit@2004",
  database: 'signup'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ', err);
    return;
  }
  console.log('Connected to database');
});



app.post("/signup", (req, res) => {
  const sql = "INSERT INTO login (name, email, password, cpassword) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.cpassword
  ];

  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json();
    }
    return res.status(201).json({ message: 'User created successfully', data });
  });
});


app.post("/signin", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  
  db.query(sql, [req.body.email, req.body.password], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Internal server error' });
    }
    if (results.length > 0) {
   
      return res.status(200).json({ message: 'User signed in successfully', user: results[0] });
    } else {
      
      return res.status(401).json({ message: 'Invalid email or password' });
    }
  });
});






app.listen(3000, () => {
  console.log("Server is running on port 3000");
});