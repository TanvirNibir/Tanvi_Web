const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const users = User.getAll();
  res.json(users);
};

// POST /users
const createUser = (req, res) => {
  const newUser = User.addOne({...req.body});

  if(newUser){
    res.json(newUser);
  } else{
    res.status(500).json({ message: 'User not created'});
  }
};

// GET /users/:userId
const getUserById = (req, res) => {
  const userId = req.params.userId;
  const user = User.findById(userId);

  if(user){
    res.json(user);
  } else{
    res.status(404).json({ message: 'User not found'});
  }
};


// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, {...res.body});

  if(updatedUser){
    res.json(updateUser);
  } else {
    res.status(404).json({ message: 'User not found'});
  }
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const isDeleted = User.deleteOneById(userId);

  if(isDeleted){
    res.json({ message: 'User deleted successfully'});
  } else{
    res.status(404).json({ message: 'User not found'});
  }
 
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};