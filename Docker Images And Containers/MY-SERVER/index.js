const express = require('express');

// Create an Express application
const app = express();
const port = 8080; // You can change the port number if needed

// Define a route handler for the "hello" route
app.get('/hello', (req, res) => {
    console.log("hello world")
    res.send('Hello, world!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
