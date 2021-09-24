import React from 'react';

const Cart = (props) => {
    // console.log(props.cart);

    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;
    for(const product of cart){
        console.log(product);
        if (!product.quantity) {
            product.quantity = 1;
        }
        totalQuantity = totalQuantity + product.quantity;
        total = total + product.price * product.quantity;
    }
    // const reducer = (previous, current) => previous + current.price * current.quantity=current.quantity ? current.quantity:1;
    // const total = props.cart.reduce(reducer, 0).toFixed(2);
    const tax = total * 0.1;
    const shippingCost = total > 0 ? 20 : 0;
    const grandTotal = parseFloat(total) + parseFloat(tax) + parseFloat(shippingCost);
    return (
        <div className="text-center">
            <h2>Order Summury</h2>
            <h2>Total order: {totalQuantity}</h2>
            <p>Total: {total.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Shipping: {shippingCost}</p>
            <p>Total Amount: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;