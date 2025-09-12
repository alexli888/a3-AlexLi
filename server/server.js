// Express server setup for task management
const express = require('express');
const path = require('path');
const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config({ path: path.join(__dirname, 'config.env') });

const app = express();
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);
let tasksCollection;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Function to calculate derived field [Baseline Req] (deadline based on priority and creation date)
function calculateDeadline(creation_date, priority) {
    const createDate = new Date(creation_date);
    let daysToAdd;

    switch(priority) { // Determine days to add based on priority
        case 'high': daysToAdd = 3; break;
        case 'medium': daysToAdd = 7; break;
        case 'low': daysToAdd = 14; break;
        default: daysToAdd = 7;
    }
    
    createDate.setDate(createDate.getDate() + daysToAdd);
    return createDate.toISOString().split('T')[0]; 
}

async function startServer() {
    try {
        await client.connect();
        const db = client.db('Webware');
        tasksCollection = db.collection('tasks');
        
        // Serve index.html and results.html explicitly (for direct navigation)
        app.get('/', (req, res) => {
            res.sendFile(path.join(__dirname, '../public', 'index.html'));
        });
        app.get('/results', (req, res) => {
            res.sendFile(path.join(__dirname, '../public', 'results.html'));
        });

        // API routes
        app.get('/api/tasks', async (req, res) => {
            try {
                const tasks = await tasksCollection.find({}).toArray();
                res.json(tasks);
            } catch (err) {
                res.status(500).json({ error: 'Failed to fetch tasks' });
            }
        });

        app.post('/api/tasks', async (req, res) => {
            const data = req.body;
            const newTask = {
                task: data.task,
                priority: data.priority,
                creation_date: data.creation_date,
                deadline: calculateDeadline(data.creation_date, data.priority)
            };
            try {
                const result = await tasksCollection.insertOne(newTask);
                newTask._id = result.insertedId;
                res.json(newTask);
            } catch (err) {
                res.status(500).json({ error: 'Failed to add task' });
            }
        });

        app.delete('/api/tasks/:id', async (req, res) => {
            try {
                const id = req.params.id;
                await tasksCollection.deleteOne({ _id: new ObjectId(id) });
                res.json({ success: true });
            } catch (err) {
                res.status(500).json({ error: 'Failed to delete task' });
            }
        });

        app.put('/api/tasks/:id', async (req, res) => {
            try {
                const id = req.params.id;
                const data = req.body;
                const updatedTask = {
                    task: data.task,
                    priority: data.priority,
                    creation_date: data.creation_date,
                    deadline: calculateDeadline(data.creation_date, data.priority)
                };
                const result = await tasksCollection.findOneAndUpdate(
                    { _id: new ObjectId(id) },
                    { $set: updatedTask },
                    { returnDocument: 'after' }
                );
                if (result.value) {
                    res.json(result.value);
                } else {
                    res.status(404).json({ error: 'Task not found' });
                }
            } catch (err) {
                res.status(500).json({ error: 'Failed to update task' });
            }
        });

        // 404 handler
        app.use((req, res) => {
            res.status(404).send('Not Found');
        });

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    }
}

startServer();
