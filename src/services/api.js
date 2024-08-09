export const fetchProducts = async (sitemapUrl) => {
    const response = await fetch(`/api/products?sitemapUrl=${encodeURIComponent(sitemapUrl)}`);
    return response.json();
  };
  
  export const summarizeContent = async (productUrl) => {
    const response = await fetch(`/api/summary?productUrl=${encodeURIComponent(productUrl)}`);
    return response.json();
  };
  