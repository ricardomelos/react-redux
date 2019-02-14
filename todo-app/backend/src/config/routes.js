const express = require('express')
module.exports = function(server){
    // API Routes
    const router = express.Router()
    server.use('/api', router) //router para todas as urls com "/api"

    // TODO Routes
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
    
}