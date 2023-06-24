const express = require('express');

const router = express.Router();

// In-memory data store
let tasks = [
    { id: 1, title: 'Cricket', description: 'Cricket is my favourite game', completed: false, priority: 3 },
    { id: 2, title: 'Football', description: 'Football is second favourite', completed: true, priority: 2 },
    { id: 3, title: 'Tennis', description: 'Tennis is last favourite', completed: false, priority: 1 },
];

// Retrieve all tasks
router.get('/', (req, res) => {
    res.json(tasks);
});

// Retrieve a single task by ID
router.get('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        res.json(task);
    }
});

// Create a new task
router.post('/', (req, res) => {
    const { id, title, description, completed, priority } = req.body;

    if (!id || !title || !description || completed === undefined || priority === undefined) {
        res.status(400).json({ error: 'Invalid request body' });
    } else {
        const parsedPriority = parseInt(priority);

        if (isNaN(parsedPriority)) {
            res.status(400).json({ error: 'Priority must be a number' });
            return;
        }

        const taskExists = tasks.some((task) => task.id === id);

        if (taskExists) {
            res.status(409).json({ error: 'Task ID already exists' });
        } else {
            const newTask = {
                id,
                title,
                description,
                completed,
                priority: parsedPriority,
            };

            tasks.push(newTask);
            res.status(201).json(newTask);
        }
    }
});

// Update an existing task
router.put('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, completed, priority } = req.body;

    if (!title || !description || completed === undefined || !priority) {
        res.status(400).json({ error: 'Invalid request body' });
    } else {
        const taskIndex = tasks.findIndex((task) => task.id === taskId);

        if (taskIndex === -1) {
            res.status(404).json({ error: 'Task not found' });
        } else {
            tasks[taskIndex] = { id: taskId, title, description, completed, priority };
            res.json(tasks[taskIndex]);
        }
    }
});


// Delete a task
router.delete('/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
        res.status(404).json({ error: 'Task not found' });
    } else {
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json(deletedTask[0]);
    }
});

// Retrieve tasks based on priority level
router.get('/priority/:level', (req, res) => {
    const priorityLevel = parseInt(req.params.level);

    if (isNaN(priorityLevel)) {
        res.status(400).json({ error: 'Priority level must be a number' });
        return;
    }

    const filteredTasks = tasks.filter((task) => task.priority === priorityLevel);
    res.json(filteredTasks);
});

module.exports = router;
