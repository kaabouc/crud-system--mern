import React, { useEffect, useState } from 'react';
import productService from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productService.getProducts();
        console.log(response.data); // Vérifie les données
        setProducts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Liste des Produits</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>{product.name} - {product.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
