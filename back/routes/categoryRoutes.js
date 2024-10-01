const express = require('express');
const { createCategory, getCategories } = require('../controllers/categoryController');
const router = express.Router();

// Route pour créer une catégorie
router.post('/', createCategory);

// Route pour obtenir toutes les catégories
router.get('/', getCategories);

module.exports = router;
