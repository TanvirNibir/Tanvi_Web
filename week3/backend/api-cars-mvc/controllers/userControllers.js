const User = require("../models/userModel");

// GET /users
const getAllUsers = (req, res) => {
  const user = User.getAll();
  res.json(user)
};

// POST /users
const createUser = (req, res) => {
const user = User.addOne({...req.body});
if (user) {
  res.json(user);
} else {
  res.status(500).json({message: "Unable to post"});
}

};

// GET /users/:userId
const getUserById = (req, res) => {
const userId = req.params.userId;
const user = User.findById(userId);
if (user) {
  res.json(user);
} else {
  res.status(404).json({message: "Unable to find by id"});
}
};

// PUT /users/:userId
const updateUser = (req, res) => {
  const userId = req.params.userId;
  const updatedUser = User.updateOneById(userId, {...req.body});
if (updatedUser){
  res.json(updatedUser);
} else {
  res.json(500).json({message: "Unable to update"});
}
};

// DELETE /users/:userId
const deleteUser = (req, res) => {
  const userId = req.params.userId;
  const deleteUser = User.deleteOneById(userId);
  if (deleteUser){
    res.json(deleteUser);
  } else {
    res.status(500).json({message: "cannot find this user to delete"});
  }

};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
