const mysql=require('mysql')


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

  module.exports=db;