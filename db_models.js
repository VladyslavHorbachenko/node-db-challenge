const knex = require('knex');
const knexConfig = require('./knexfile')
const db = knex(knexConfig.development)

module.exports = {
    addResource,
    gettAllResources,
    addProject,
    getAllProjects,
    addTask
}

function addResource(resource) {
    return db('resources')
        .insert(resource)
}

function gettAllResources() {
    return db('resources')
}

function addProject(project) {
    return db('projects')
        .insert(project)
}

function getAllProjects() {
    return db('projects')
}

function addTask(task, project_id) {
    return db('tasks')
        .where({project_id: project_id})
        .insert(task)
}