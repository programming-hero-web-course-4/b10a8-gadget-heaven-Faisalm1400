
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'
import { useContext, useEffect, useState } from 'react';
import { GiSettingsKnobs } from 'react-icons/gi';
import { AssetContext } from '../Root/Root';
import CartContainer from '../CartContainer/CartContainer';
import WishlistContainer from '../WishlistContainer/WishlistContainer';


const Dashboard = () => {
    const { getStoredCart, products, getStoredWishList } = useContext(AssetContext);


    const [cartList, setCartList] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    useEffect(() => {
        const storedCartList = getStoredCart();
        const storedWishList = getStoredWishList();
        // console.log(storedCartList)

        const storedCartListInt = storedCartList.map(id => parseInt(id));
        const productCartList = products.filter(product => storedCartListInt.includes(product.product_id));

        const storedWishListInt = storedWishList.map(id => parseInt(id));
        const productWishList = products.filter(product => storedWishListInt.includes(product.product_id));

        setCartList(productCartList);

        setWishlist(productWishList);
    }, [getStoredCart, products]);

    const totalPrice = cartList.reduce((total, products)=> total + products.price, 0);

    const [isActive, setActive] = useState({
        available: true,
        status: "cart",
        title: "Cart"
    });

    const handleSortByPrice = () => {
        const sortedCartList = [...cartList].sort((a,b)=>{return b.price - a.price});
        setCartList(sortedCartList);
    };

    const handleIsActiveStatus = (status) => {
        if (status === "cart") {
            setActive({
                available: true,
                status: "cart",
                title: "Cart"
            }
            )
        }
        else {
            setActive({
                available: false,
                status: "wishlist",
                title: "Wishlist"
            }
            )
        }
    }
    return (
        <div>
            <div className="hero bg-purple-500">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Dashboard</h1>
                        <p className="py-6">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        {/* btn rounded-full md:w-28" */}
                        {/* btn rounded-full md:w-28 */}
                        <div className='flex gap-2 justify-center'>
                            <button onClick={() => handleIsActiveStatus("cart")} className={`${isActive.available ? "btn active md:w-28" : "btn btn-1 md:w-28"}`}>Cart</button>
                            <button onClick={() => handleIsActiveStatus("wishlist")} className={`${isActive.available ? "btn btn-1 md:w-28" : "btn md:w-28 active"}`}>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='flex max-sm:flex-col justify-between items-center pt-10'>
                    <h2 className="text-2xl font-bold">{isActive.title}</h2>
                    <div className='flex max-sm:flex-col items-center gap-6'>
                        <div className="flex font-bold gap-1">
                            <h2 className="">Total cost:</h2>
                            <h2 className="">{totalPrice}</h2>
                        </div>
                        <div className='flex max-sm:flex-col items-center gap-4'>
                            <button onClick={handleSortByPrice} className="btn btn-xs sm:btn-sm md:btn-md rounded-full bg-gradient-to-tr from-violet-400 to-rose-400 text-white lg:w-36">Sort by Price <GiSettingsKnobs /></button>
                            <button className="btn btn-xs sm:btn-sm md:btn-md rounded-full bg-gradient-to-tr from-violet-400 to-rose-400 text-white lg:w-36">Purchase</button>
                        </div>
                    </div>
                </div>
                <div>
                    {
                        isActive.available ? <CartContainer
                            setCartList={setCartList}
                            cartList={cartList} /> : <WishlistContainer
                            setWishlist={setWishlist}
                            wishlist={wishlist}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;