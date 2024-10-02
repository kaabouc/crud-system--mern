import React from 'react';
import CategoryList from '../components/CategoryList';
import CategoryForm from '../components/CategoryForm';

const CategoryPage = () => {
  return (
    <div>
      <h2>Gestion des Catégories</h2>
      <CategoryForm />
      <CategoryList />
    </div>
  );
};

export default CategoryPage;
