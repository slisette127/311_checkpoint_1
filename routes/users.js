const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users.js')





//GET /users
//Return all users
router.get('/users', usersController.listUsers)


// GET /users/:id
// Return just the user that matches the path param (id)
router.get('/users/:id', usersController.showUsers)



// POST /users
// Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (data/index). The next user should be 11
router.post("/users", usersController.createUsers)


// PUT /users/:id
// Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
router.put("/users/:id", usersController.updateUsers)



// DELETE /users/:id
// Delete one user by its id
router.delete("/users/:id", usersController.deleteUsers)



module.exports = router