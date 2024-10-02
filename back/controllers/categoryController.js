const Category = require('../models/Category');

// Créer une catégorie
exports.createCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtenir toutes les catégories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Rechercher une catégorie par nom
exports.searchCategories = async (req, res) => {
  try {
    const { query } = req.query;
    const categories = await Category.find({ name: new RegExp(query, 'i') });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mettre à jour une catégorie
exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Supprimer une catégorie
exports.deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({ message: "Catégorie supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
