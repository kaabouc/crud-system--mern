import React, { useState } from 'react';
import categoryService from '../services/categoryService';

const CategoryForm = () => {
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCategory = { name };
    await categoryService.createCategory(newCategory);
    alert('Catégorie créée avec succès');
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Ajouter une Catégorie</h3>
      <div>
        <label>Nom: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default CategoryForm;
