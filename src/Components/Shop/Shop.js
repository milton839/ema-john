import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className="container shop">
            <div>
                {
                    products.map(product =><Products 
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    >
                    </Products>)
                }
            </div>
            <div className="carts-section">
                <Cart 
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;