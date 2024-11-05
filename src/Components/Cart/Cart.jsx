import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AssetContext } from "../Root/Root";
import { toast } from "react-toastify";

const Cart = ({ cart,setCartList }) => {
    const { getStoredCart } = useContext(AssetContext);
    const { product_id, product_title, product_image, description, price } = cart;

    const handleRemoveFromCart = (id) => {
        const storedCart = getStoredCart();

        const updatedCart = storedCart.filter(cartId => cartId !== id);

        localStorage.setItem('cart-list', JSON.stringify(updatedCart));

        setCartList(prevCartList => prevCartList.filter(item => item.product_id !== id));
        
        toast.info('Product is removed from your Wishlist', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });


    };
    return (
        <div className="card md:card-side flex-col bg-base-200 p-3">
            <div className="flex justify-end p-2 pt-0 md:hidden">
                <button className="btn rounded-full">
                    <IoMdCloseCircleOutline onClick={() => handleRemoveFromCart(product_id)} className="text-red-500 font-bold text-2xl" />
                </button>
            </div>
            <figure>
                <img
                    src={product_image}
                    alt="" className=" md:w-40 md:h-36 rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="space-y-2">
                        <h2 className="card-title">{product_title}</h2>
                        <p>{description}</p>
                        <h3>Price: {price}</h3>
                    </div>
                    <div className="max-sm:hidden">
                        <button onClick={() => handleRemoveFromCart(product_id)} className="btn btn-xs sm:btn-sm md:btn-md rounded-full"><IoMdCloseCircleOutline className="text-red-500 font-bold text-2xl" /></button>
                        {/* <button className="btn rounded-full p-0">
                            <IoMdCloseCircleOutline className="text-red-500 font-bold text-2xl" />
                        </button> */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Cart;