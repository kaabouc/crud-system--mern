const express = require('express');
const { createCategory, getCategories, searchCategories, updateCategory, deleteCategory } = require('../controllers/categoryController');
const router = express.Router();

router.post('/', createCategory);
router.get('/', getCategories);
router.get('/search', searchCategories);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
