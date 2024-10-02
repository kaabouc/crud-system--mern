import React, { useEffect, useState } from 'react';
import productService from '../services/productService';
import categoryService from '../services/categoryService';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryService.getCategories();
        setCategories(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des catégories :", error);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await productService.createProduct({ name, description, category: selectedCategory });
      // Réinitialise le formulaire après soumission
      setName('');
      setDescription('');
      setSelectedCategory('');
    } catch (error) {
      console.error("Erreur lors de la création du produit :", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Nom du Produit</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          className="form-control"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Catégorie</label>
        <select
          className="form-select"
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name} {/* Nom visible */}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Créer Produit</button>
    </form>
  );
};

export default ProductForm;
