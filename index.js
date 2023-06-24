const express = require('express');
const bodyParser = require('body-parser');
const tasksRoute = require('./routes/tasks');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Task Manager App');
});

// Routes
app.use('/tasks', tasksRoute);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
