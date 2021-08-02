const express = require('express')
const app = express()

app.use((req, res, next) => {
  next()
})



//GET /users
//Return all users
app.get()


// GET /users/:id
// Return just the user that matches the path param (id)
app.get()



// POST /users
// Create a new user (sampleUser). Find a way to increment the id so that we always insert the next available id in the list. Currently we have users 1-10 (data/index). The next user should be 11
app.post()


// PUT /users/:id
// Update one user matching the path param (id). You may again use the sampleUser code as your "body" for this request
app.put()



// DELETE /users/:id
// Delete one user by its id
app.delete()

app.listen(4000, () => {
  console.log('Server is listening on port 4000.')
})