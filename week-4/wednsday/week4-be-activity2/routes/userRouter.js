const express = require("express");
const router = express.Router();


const {
    getAllUsers, 
    getUserById, 
    createUsers, 
    updateUser, 
    deleteUser, 
} = require("../controllers/userControllers");
 
router.get("/", getAllUsers);

router.post("/", createUsers);

router.get("/:userId", getUserById);

router.put("/:userId", updateUser);

router.delete("/:userId", deleteUser);


// router.patch('/:userId', patchCar)

module.exports = router;
