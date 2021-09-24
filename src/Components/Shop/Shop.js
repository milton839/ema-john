import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../Utilities/Fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [searchProducts, setSearchProducts] = useState([]);

    useEffect(() => {
        fetch('./products.json')
        .then(res => res.json())
        .then(data => {
            setProducts(data)
            setSearchProducts(data)
        })
    },[])

    useEffect(() => {
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for(const key in savedCart) {
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
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

    const handleSearch = (event) =>{
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setSearchProducts(matchedProducts)
    }
    return (
        <>
            <div className="search-content pb-2">
                <div class="d-flex">
                    <input 
                        class="form-control me-2" 
                        type="search" 
                        placeholder="Search Products" 
                        aria-label="Search"
                        onChange={handleSearch} 
                    />
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </div>
            </div>
            <div className="container shop">
                <div>
                    {
                        searchProducts.map(product =><Products 
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
        </>
    );
};

export default Shop;