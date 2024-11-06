import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import { createContext, useEffect, useState } from "react";
import { data } from "autoprefixer";
import { toast } from "react-toastify";
export const AssetContext = createContext();

const Root = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isPurchase, setIsPurchase] = useState([]);



    



    const getStoredWishList = () => {
        const wishListStr = localStorage.getItem('wish-list');
        if (wishListStr) {
            const storedWishList = JSON.parse(wishListStr);
            return storedWishList;
        }
        else {
            return [];
        }
    }

    const addToWishList = (id) => {
        const storedWishList = getStoredWishList();
        if (storedWishList.includes(id)) {
            // console.log(id, 'already exist to wishlist.');
            toast.error('Product already exist to Wishlist.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            storedWishList.push(id);
            const wishListStr = JSON.stringify(storedWishList);
            localStorage.setItem('wish-list', wishListStr);
            toast.success('Product is added to your Wishlist', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            // const wishDisable = wishListStr;
            setIsDisabled(true);


        }
    }

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
            // console.log(id, 'already exists in the list.');
            toast.error('Product already exist to Cart list.', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
        else {
            storedCart.push(id);
            const storedCartStr = JSON.stringify(storedCart);
            localStorage.setItem('cart-list', storedCartStr);
            toast.success('Product is added to your Cart List', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
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
            <AssetContext.Provider value={{ products, categories, filteredProducts, handleSelectCategory, addToCart, getStoredCart, addToWishList, getStoredWishList, isDisabled }}>
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