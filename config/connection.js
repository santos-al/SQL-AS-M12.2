const mysql = require('mysql2');

// Add dotenv functionality to hide sensitive info
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });



// Connect to mySQL databse
const db = mysql.createConnection(
    {
      host: 'localhost',
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
    },
    console.log(`Connected to my_company database`)
  );