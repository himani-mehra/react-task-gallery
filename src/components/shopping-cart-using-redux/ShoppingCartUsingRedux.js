import React, { useEffect, useState } from 'react';
import './ShoppingCartUsingRedux.css';
import Cart from "../cartIcon/CartIcon";
import { addItem } from '../../utils/CartSlice';
import { useDispatch } from 'react-redux';

const ShoppingCartUsingRedux = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProduct] = useState([]);

  const dispatch = useDispatch()
  
  const handleProduct = (item) => {
    dispatch(addItem(item));
  }
  
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
        setIsLoading(false);
      } catch (error) {
        console.log("Error in fetching products");
        setIsLoading(false);
      }
    };
    handleProductList();
  }, []);

  const Shimmer = () => (
    <div
      style={{
        height: '40vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '90%',
          maxWidth: 500,
          padding: 40,
          borderRadius: 12,
          backgroundColor: '#fff',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Image shimmer */}
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '5%',
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
            marginBottom: 20,
          }}
        />
        {/* Line one shimmer */}
        <div
          style={{
            height: 24,
            width: '60%',
            marginBottom: 15,
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
        {/* Line 2 shimmer */}
        <div
          style={{
            height: 18,
            width: '80%',
            background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }}
        />
  
        <style>{`
          @keyframes shimmer {
            0% { background-position: 200% 0 }
            100% { background-position: -200% 0 }
          }
        `}</style>
      </div>
    </div>
  );
  if (isLoading) {
    return (
      <div className="shimmer-container">
        {Array.from({ length: 10}).map((_, index) => (
          <Shimmer key={index}/>
        ))}
      </div>
    );
  }
  
  return (
   <>
   <div className='cart-section'><Cart/></div>
    <div className="product-grid">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="price">${product.price}</p>
          <p className="stock">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
          <button
          onClick={() => handleProduct(product)}
           disabled={product.stock === 0}>
            Add to Cart
          </button>
        </div>
      ))}
    </div></>
  );
};

export default ShoppingCartUsingRedux;
