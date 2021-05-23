import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    const{income} = props.cart
    console.log(cart);

    let totalIncome = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        totalIncome = totalIncome + element.income;
        
    }
    return (
        <div className="cart-section">
            <h2>Added: {cart.length}</h2>
            <h2>Total Income: ${totalIncome}</h2>
        </div>
    );
};

export default Cart;