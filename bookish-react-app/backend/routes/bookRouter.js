const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
  // patchBook
} = require("../controllers/bookControllers");
 
// GET /books
router.get("/", getAllBooks);

// POST /books
router.post("/", createBook);

// GET /books/:bookId
router.get("/:bookId", getBookById);

// PUT /books/:bookId
router.put("/:bookId", updateBook);

// DELETE /books/:bookId
router.delete("/:bookId", deleteBook);

module.exports = router;