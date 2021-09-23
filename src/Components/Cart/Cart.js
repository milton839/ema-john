import React from 'react';

const Cart = (props) => {
    console.log(props);
    const reducer = (previous, current) => previous + current.price;
    const total = props.cart.reduce(reducer, 0).toFixed(2);
    return (
        <div className="text-center">
            <h2>Order Summury</h2>
            <h2>cart length:{props.cart.length}</h2>
            <h2>{total}</h2>
        </div>
    );
};

export default Cart;