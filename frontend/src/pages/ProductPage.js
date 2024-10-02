import React from 'react';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  return (
    <div>
      <h2>Gestion des Produits</h2>
      <ProductForm />
      <ProductList />
    </div>
  );
};

export default ProductPage;
