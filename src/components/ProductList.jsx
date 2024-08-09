import React, { useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sitemapUrl, setSitemapUrl] = useState('');

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://shopifybackend-06p6.onrender.com', { sitemapUrl });
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Filter products to include only those with a non-empty title
  const filteredProducts = products.filter(product => product.title.trim() !== '');

  return (
    <div className="container mx-auto p-4">
      <input
        type="text"
        value={sitemapUrl}
        onChange={(e) => setSitemapUrl(e.target.value)}
        placeholder="Enter sitemap URL"
        className="p-2 border border-gray-300 rounded"
      />
      <button
        onClick={fetchProducts}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Fetch Products
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredProducts.slice(0, 10).map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            summary={product.summary}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
