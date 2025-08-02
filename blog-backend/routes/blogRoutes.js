const express = require("express");
const { createBlog, getAllBlogs } = require("../controllers/blogController");
const router = express.Router();

// Public
router.get("/", getAllBlogs);

// Protected (for admin, add auth middleware later)
router.post("/create", createBlog);

module.exports = router;
