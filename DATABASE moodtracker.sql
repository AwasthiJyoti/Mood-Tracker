CREATE DATABASE mood_canvas;

USE mood_canvas;

CREATE TABLE moods (
    id INT AUTO_INCREMENT PRIMARY KEY,
    canvas_data TEXT NOT NULL,
    note TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);