import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { createContext, useEffect, useState } from "react";
import { data } from "autoprefixer";
export const AssetContext = createContext();

const Root = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    const getStoredCart = () => {
        const storedCartStr = localStorage.getItem('cart-list');
        if (storedCartStr) {
            const storedCart = JSON.parse(storedCartStr);
            return storedCart;
        }
        else {
            return [];
        }

    }

    const addToCart = (id) => {
        const storedCart = getStoredCart();
        // console.log('added to cart', id);
        if (storedCart.includes(id)) {
            console.log(id, 'already exists in the list.');
        }
        else {
            storedCart.push(id); const storedCartStr = JSON.stringify(storedCart); localStorage.setItem('cart-list', storedCartStr);
        }
    }

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });

        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    const handleSelectCategory = (category) => {
        if (category === 'All Products') {
            setFilteredProducts(products);
        }
        else {
            const filtered = products.filter(product => product.categories === category);
            setFilteredProducts(filtered);
        }
    }

    return (
        <div>
            <AssetContext.Provider value={{ products, categories, filteredProducts, handleSelectCategory, addToCart, getStoredCart }}>
                <div className="lg:mx-10 mt-8">
                    <Nav />
                </div>

                <div className="lg:mx-10">
                    <Outlet />
                </div>

                <div className="mt-20">
                    <Footer />
                </div>
            </AssetContext.Provider>
        </div>
    );
};

export default Root;