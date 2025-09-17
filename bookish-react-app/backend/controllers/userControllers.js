const User = require('../models/userModel');
const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); // for hashing password

// GET /users
const getAllUsers = async (req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error){
        res.status(500).json({message: "Failed to retrieve users"});
    }
};

// POST /uars
// const createUser = async (req, res) => {
//     try {
//     const newUser = await User.create({...req.body})
//     res.status(201).json(newUser);
//     } catch (error) {
//         res.status(400).json({message: "Failed to create user", error: error.message})
//     }
// };

const createUser = async (req, res) => {
    try {
        // destructuring password and the rest of user datas
        const {password, ...userData} = req.body;
        // hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // creating user with the hashed password
        const newUser = await User.create({...userData, password: hashedPassword})
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({message: "Failed to create user", error: error.message})
    }
};


// GET /users/:userId
const getUserById = async (req,res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid User ID" });
    }

    try {
        const user  = await User.findById(userId);
        if (user) {
        res.status(200).json(user);
        } else {
        res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({message: "Failed to retrieve user"});
    }
};

 // PUT /users/:userId
const updateUser = async (req,res) => {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid User ID" });
    }

    try{

    const updatedUser = await User.findOneAndUpdate(
    { _id: userId },
    { ...req.body },
    { new: true }
    );
    
    if(updatedUser) {
        res.status(204).json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
    } catch(error){
        res.status(500).json({message: "Failed to update User"})
    }
};

// DELETE /users/:userId
const deleteUser = async (req,res) => {
    const {userId} = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: "Invalid User ID" });
    }

    try{

        const deletedUser = await User.findOneAndDelete({_id: userId});
        if(deletedUser){
            res.status(200).json({message: "User deleted successfully"});
        } else{
            res.status(404).json({message: "User not found"});
        }
    } catch(error){
        res.status(500).json({message: "Failed to delete user"})
    }
       
 };

 module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
};