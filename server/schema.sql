USE Udemy;

CREATE TABLE IF NOT EXISTS Users(
    id INT PRIMARY KEY,
    username VARCHAR(100),
    password VARCHAR(255),
    email VARCHAR(255),
    role enum('Admin', 'Student', 'Tutor')
);