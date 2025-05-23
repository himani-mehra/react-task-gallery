import React, { useState, useEffect } from 'react';
import './Pagination.css';
import { isDisabled } from '@testing-library/user-event/dist/utils';

const Pagination = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const handleProductList = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        });
        const data = await response.json();
        setProduct(data.products);
        console.log("dta", data.response)
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetching products");
        setIsLoading(false);
      }
    };
    handleProductList();
  }, []);

  const totalPages = Math.ceil(products.length/itemsPerPage);
  const paginatedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage* itemsPerPage)

  return (
    <div className="product-list-container">
      <div className='text-3xl font-semibold flex justify-center mb-4'>Product list</div>
      <div className="product-list">
        {paginatedProducts.length === 0 ? (
          <p>No products to show.</p>
        ) : (
          paginatedProducts.map(product => (
            <div className="product-row" key={product.id}>
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled= {currentPage === 1} className='pagination-button'><i class="bi bi-caret-left-fill"></i></button>
        {Array.from({ length: Math.min(5, totalPages) }, (_, i) => (
          <button onClick={() => setCurrentPage(i + 1)} key={i}  className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}>{i + 1}</button>
        ))}
         {totalPages > 5 && <span className="pagination-ellipsis">...</span>}
          <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages} className='pagination-button'><i class="bi bi-caret-right-fill"></i></button>
      </div>
    </div>
  );
};

export default Pagination