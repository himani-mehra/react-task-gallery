import React from 'react';
import './ProductCardRedux.css';
import Cart from "../Cart"

const ProductCardRedux = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={"product.image"} alt={"product.title"} />
      <h3>{"product.title"}</h3>
      <p className="price">${"product.price"}</p>
      {/* <p className="stock">{product.stock > 0 ? "In Stock" : "Out of Stock"}</p> */}
      <button
        // disabled={product.stock === 0}
        // onClick={() => onAddToCart(product)}
      >
        Add to Cart
      </button>
      <Cart count={2}/>
    </div>
  );
};

export default ProductCardRedux;
