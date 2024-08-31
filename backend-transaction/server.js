const express = require('express');
const sequelize = require('./config/config');
const cors=require('cors');
const app = express();
// require('dotenv').config();
const port = 3000;


sequelize.authenticate().then(() => {
  console.error('Database connected successfully')
})
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })
// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Import routes
// const itemRoutes = require('./routes/itemRoutes');
const itemRoutes = require('./routes/routes');

// Use routes
app.use('/api', itemRoutes);

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`Server is running on port http://localhost:${port}`);
});

module.exports = sequelize;














// const express = require('express');
// const mysql = require('mysql2');
// const app = express();
// const port = 3000;

// // Middleware to parse JSON requests
// app.use(express.json());

// // MySQL connection
// const db = mysql.createConnection({
//   host: '107.180.51.85',
//   user: 'test-school',
//   password: '1-zb{_%%eFZa',
//   database: 'test-school'

//   // host: "localhost",
//   // user: "root",
//   // // MODE="development",
//   // database: "transactions",
//   // password: "HellO2#$%"
// });


// // Define your routes here
// // Get all items
// app.get('/api/items', (req, res) => {
//   db.query('SELECT * FROM items', (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Get a specific item by ID
// app.get('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   db.query('SELECT * FROM items WHERE id = ?', [itemId], (err, results) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json(results[0]);
//     }
//   });
// });


// // Add a new item
// app.post('/api/items', (req, res) => {
//   const newItem = req.body;
//   db.query('INSERT INTO items SET ?', [newItem], (err, result) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json({ id: result.insertId, ...newItem });
//     }
//   });
// });

// // Update an item
// app.put('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   const updatedItem = req.body;
//   db.query('UPDATE items SET ? WHERE id = ?', [updatedItem, itemId], (err) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json({ id: itemId, ...updatedItem });
//     }
//   });
// });

// // Delete an item
// app.delete('/api/items/:id', (req, res) => {
//   const itemId = req.params.id;
//   db.query('DELETE FROM items WHERE id = ?', [itemId], (err) => {
//     if (err) {
//       res.status(500).json({ error: err.message });
//     } else {
//       res.json({ message: 'Item deleted successfully', id: itemId });
//     }
//   });
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL: ', err);
//   } else {
//     console.log('Connected to MySQL');
//     createItemsTable(); // Call the function to create the 'items' table
//   }
// });
// // Function to create 'items' table
// function createItemsTable() {
//   const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS items (
//       name VARCHAR(255) NOT NULL DEFAULT '',
//       id INT AUTO_INCREMENT PRIMARY KEY,
//    derce VARCHAR(255) NOT NULL DEFAULT '',
//    price INT NOT NULL
//     )`;



//   db.query(createTableQuery, (err) => {
//     if (err) {
//       console.error('Error creating items table: ', err);
//     } else {
//       console.log('Items table created successfully');
//     }
//   });
// }


// app.listen(port, (err) => {

//   if (err) {
//     console.error(err)
//   }
//   console.log(`Server is running on port http://localhost:${port}/api/items`);
// });

