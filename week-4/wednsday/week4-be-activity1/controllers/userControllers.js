const User = require('../models/userModels');


const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({ created: -1 });
    res.status(200).json(users);
}

const createUsers = async (req, res) => {
    const newUser = await User.create({ ...req.body });
    res.status(201).json(newUser);
}

const getUserById = async (req, res) => {
    const { userId } = req.params;

    const user = await User.findById(userId);
    if (userId) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

const updateUser= async (req, res) => {
    const { userId } = req.params;

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
};


const deleteUser = async (req, res) => {
    const { userId } = req.params;

    const deletedUser = await User.findOneAndDelete({ _id: userId });
    if (deletedUser) {
        res.status(200).json({ message: "User deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};


module.exports = {
    getAllUsers, 
    getUserById, 
    createUsers, 
    updateUser, 
    deleteUser, 
};