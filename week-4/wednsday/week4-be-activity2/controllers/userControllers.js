const User = require('../models/userModels');
const mongoose = require("mongoose");


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).sort({ created: -1 });
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve users" });
    }
}

const createUsers = async (req, res) => {
    try {
        const newUser = await User.create({ ...req.body });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: "Failed to create user" });
    }
}

const getUserById = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }

        const user = await User.findById(userId);
        if (userId) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to retrieve user" });
    }
}

const updateUser = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const updatedUser = await User.findOneAndUpdate(
            { _id: userId },
            { ...req.body },
            { new: true }
        );
        if (updatedUser) {
            res.status(200).json(updatedUser);
        } else {
            res.status(404).json({ message: "Blog not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to update user" });
    }
};


const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const deletedUser = await User.findOneAndDelete({ _id: userId });
        if (deletedUser) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Failed to delete user" });
    }
};


module.exports = {
    getAllUsers,
    getUserById,
    createUsers,
    updateUser,
    deleteUser,
};