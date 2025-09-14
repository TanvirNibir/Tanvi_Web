const express = require("express");
const router = express.Router();


const {
    getAllBlogs,
    getBlogById,
    createBlogs,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogControllers');


router.get("/", getAllBlogs);

router.post("/", createBlogs);

router.get("/:blogId", getBlogById);

router.put("/:blogId", updateBlog);

router.delete("/:blogId", deleteBlog);

// Update car using PATCH 
// router.patch('/:carId', patchCar)

module.exports = router;