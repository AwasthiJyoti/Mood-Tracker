const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the public directory

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'your_username',
    password: 'your_password',
    database: 'mood_canvas'
});

// Connect to MySQL
db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// API to get moods
app.get('/api/moods', (req, res) => {
    db.query('SELECT * FROM moods ORDER BY id DESC', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

// API to add a mood
app.post('/api/moods', (req, res) => {
    const { canvas_data, note } = req.body;
    db.query('INSERT INTO moods (canvas_data, note) VALUES (?, ?)', [canvas_data, note], (err) => {
        if (err) return res.status(500).send(err);
        res.status(201).send('Mood added');
    });
});

// API to delete a mood
app.delete('/api/moods/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM moods WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send('Mood deleted');
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
