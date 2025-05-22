import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../utils/CartSlice';

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleRemoveItem = () => {
        dispatch(removeItem());
    }
    const calculateTotal = () =>
        cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="cart-page">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cartItems.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.images} alt={item.title} />
                            <div className="cart-details">
                                <h4>{item.title}</h4>
                                <p>Price: ${item.price}</p>
                                <p>Rating: {item.rating}</p>
                            </div>
                            <button onClick={handleRemoveItem} className="remove-btn">Remove</button>
                        </div>
                    ))}
                    <hr />
                    <div className="cart-total">
                        <h3>Total: ${calculateTotal()}</h3>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
