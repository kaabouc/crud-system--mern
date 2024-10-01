const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const router = express.Router();

// Route pour créer un produit
router.post('/', createProduct);

// Route pour obtenir tous les produits
router.get('/', getProducts);

module.exports = router;
