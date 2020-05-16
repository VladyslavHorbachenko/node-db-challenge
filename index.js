const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db_models')

const server = express();

server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.send('welcome')
})

server.post('/api/resource', (req, res) => {
    const data = req.body;

    db.addResource(data)
        .then(respond => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'Cannot add the resource'})
        })
})

server.get('/api/resource', (req, res) => {
    db.gettAllResources()
        .then(respond => {
            res.status(200).json(respond);
        })
        .catch(err => {
            res.status(400).json({message: 'Cannot get resources'})
        })
})

server.post('/api/project', (req, res) => {
    const data = req.body;

    db.addProject(data)
        .then(respond => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(404).json({message: 'Cannot add to the projects'})
        })
})

server.get('/api/project', (req, res) => {
    db.getAllProjects()
        .then(respond => {
            res.status(200).json(respond);
        })
        .catch(err => {
            res.status(400).json({message: 'Cannot get projects'})
        })
})

server.post('/api/project/:id/task', (req, res) => {
    db.addTask(req.body, req.params.id)
        .then(respond => {
            res.status(201).json(req.body)
        })
        .catch(err => {
            res.status(404).json({message: 'Cannot add the resource'})
        })
})

server.listen(5000, () => console.log('server is running on port 5000'))