import React, { useState } from 'react';
import productService from '../services/productService';

const ProductSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await productService.searchProducts(query);
    setResults(response.data);
  };

  return (
    <div>
      <h3>Rechercher des Produits</h3>
      <input 
        type="text" 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
        placeholder="Rechercher un produit" 
      />
      <button onClick={handleSearch}>Rechercher</button>
      <ul>
        {results.map((product) => (
          <li key={product._id}>{product.name} - {product.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductSearch;
