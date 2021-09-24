import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Rating from 'react-rating';
import './Products.css';
const Products = (props) => {
    const {name, img, seller, price, stock, star} = props.product;
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
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star font-icons"
                    fullSymbol="fas fa-star font-icons"
                    readonly
                />
                <br />
                <button className="btn btn-warning text-white" onClick={() =>props.handleAddToCart(props.product)}><FaShoppingCart /> Add To Cart</button>
            </div>
        </div>
    );
};

export default Products;