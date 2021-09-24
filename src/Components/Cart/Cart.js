import React from 'react';

const Cart = (props) => {
    const reducer = (previous, current) => previous + current.price;
    const total = props.cart.reduce(reducer, 0).toFixed(2);
    const tax = total * 0.1;
    const shippingCost = total > 0 ? 20 : 0;
    const grandTotal = parseFloat(total) + parseFloat(tax) + parseFloat(shippingCost);
    return (
        <div className="text-center">
            <h2>Order Summury</h2>
            <h2>Total order: {props.cart.length}</h2>
            <p>Total: {total}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Shipping: {shippingCost}</p>
            <p>Total Amount: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;