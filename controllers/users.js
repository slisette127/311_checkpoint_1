const users = require ('../data/index.js')
const newUser = require('../data/sampleUser')


// Should retrieve the entire array from data/index
const listUsers = (req, res) => {
    res.json(users)
};



// Should retrieve just the user that matches the passed-in id
const showUser = (req, res) => {
  const found = users.some(user => user.id == req.params.id)
    if (found){
        res.send(users.filter(user => user.id == req.params.id))
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }
}


//Should add a user to the array
const createUser = (req, res) => {
  users.unshift(newUser)
  res.json(users)

}

// Should add a user to the array
const updateUser = (req, res) => {
  const found = users.some(user => user.id == req.params.id)
    if (found){
      const updateThis = users.filter(user => user.id == req.params.id)
      updateThis[0].id = req.body.id
      updateThis[0].name = req.body.name; 
      res.json(users)
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }

}

// Should delete one user from the array based on its id
const deleteUser = (req, res) => {
  const found = users.some(user => user.id == req.params.id)
    if (found){
      const itemIndex = users.findIndex(({id}) => id === req.params.id);
      users.splice(itemIndex, 1);
    } else {
        res.status(404).json({msg: `User id ${req.params.id} not found.`})
    }


}


module.exports = {listUsers, showUser, createUser, updateUser, deleteUser}

// Make sure that you are handling common use cases. For example, if we try to find a user by its id and no id exists, we should return a 404 status code and no data. Likewise for the PUT and DELETEs, if a user doesn't exist return a 400 (bad request) status code.