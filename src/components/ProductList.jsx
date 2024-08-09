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
      const response = await axios.post('https://shopifybackend-06p6.onrender.com/api/products', { sitemapUrl });
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
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <input
        type="text"
        value={sitemapUrl}
        onChange={(e) => setSitemapUrl(e.target.value)}
        placeholder="Enter sitemap URL"
        className="p-2 border border-gray-300 rounded-lg shadow-sm mb-4 w-full md:w-1/2 lg:w-1/3"
      />
      <button
        onClick={fetchProducts}
        className="ml-2 p-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Fetch Products
      </button>

      {loading && <p className="mt-4 text-gray-700">Loading...</p>}

      <div className="mt-6 space-y-6">
        {filteredProducts.slice(0, 10).map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row p-4 border border-gray-200"
          >
            <div className="md:w-2/3 p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h2>
              <p className="text-gray-600">{product.summary}</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
