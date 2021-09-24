import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/Fakedb';
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

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                storedCart.push(addedProduct);
            }
            setCart(storedCart);
        }
    },[products])

    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        //Save local storage
        addToDb(product.key)
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