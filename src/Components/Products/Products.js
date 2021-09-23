import React from 'react';
import './Products.css';

const Products = (props) => {
    const {key, category, name, img, seller, price, stock} = props.product;
    return (
        <div className="products-item mt-3 me-2">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="ms-5">
                <h2 className="product-name fs-4">{name}</h2>
                <p className="">by: {seller}</p>
                <p className="fs-3">${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className="btn btn-warning text-white" onClick={() =>props.handleAddToCart(props.product)}>Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;