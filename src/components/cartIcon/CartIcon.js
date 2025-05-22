import React from 'react';
import './CartIcon.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
const cartItem = useSelector((store) => store.cart.items)
const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/cart")} className="cart-icon">
      <i className="bi bi-cart"></i>
     {cartItem.length > 0 && <span className="cart-count">{cartItem.length}</span>}
    </div>
  );
};

export default CartIcon;


