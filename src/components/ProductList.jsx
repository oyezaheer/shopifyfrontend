import React, { useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
// import ;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sitemapUrl, setSitemapUrl] = useState("");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://shopifybackend-06p6.onrender.com/api/products",
        { sitemapUrl }
      );
      setProducts(response.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  // Filter products to include only those with a non-empty title
  const filteredProducts = products.filter(
    (product) => product.title.trim() !== ""
  );

  return (
    <div className="container mx-auto p-4">
    <h1 className="flex mt-20 mb-10 align-center text-4xl  justify-center">
      Shopify Product Scapper
    </h1>
    <h2 className="flex justify-center align-center text-gray-800 m-5 text-[20px] font-sans ">Please paste sitemap URL of any shopify store to get the information of products</h2>
      <div className="flex  justify-center align-center">
        <input
          type="text"
          value={sitemapUrl}
          onChange={(e) => setSitemapUrl(e.target.value)}
          placeholder="Enter sitemap URL"
          className="p-2 border-2 border-gray-800 rounded w-1/2"
        />
        <button
          onClick={fetchProducts}
          className="ml-2 p-2 bg-blue-500 text-white rounded"
        >
          Fetch Products
        </button>
      </div>

      {loading && (
        <div className="flex justify-center mt-4 ">
          <div className="spinner"></div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 mt-20  mr-72 ml-72">
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

// suii
