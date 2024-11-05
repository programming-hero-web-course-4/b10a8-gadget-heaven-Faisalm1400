import { useContext } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { AssetContext } from "../Root/Root";
import { MdOutlineShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";

const Wishlist = ({ wish, setWishlist }) => {
    const { getStoredWishList } = useContext(AssetContext);
    const { product_id, product_title, product_image, description, price } = wish;

    const handleRemoveFromWish = (id) => {
        const storedWish = getStoredWishList();

        const updatedWish = storedWish.filter(wishId => wishId !== id);

        localStorage.setItem('cart-list', JSON.stringify(updatedWish));

        setWishlist(prevWishList => prevWishList.filter(item => item.product_id !== id));

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
        <div className="card card-side bg-base-100 shadow-xl">
            <div className="flex justify-end p-2 pt-0 md:hidden">
                <button className="btn rounded-full">
                    <IoMdCloseCircleOutline onClick={() => handleRemoveFromWish(product_id)} className="text-red-500 font-bold text-2xl" />
                </button>
            </div>
            <figure>
                <img
                    src={product_image}
                    alt="" className=" md:w-40 md:h-36 rounded-xl" />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="space-y-3">
                        <h2 className="card-title">{product_title}</h2>
                        <p>{description}</p>
                        <h3>Price: {price}</h3>
                        <div className="">
                            <button onClick={() => addToCart(product_id)} className="btn bg-purple-500 rounded-full">Add To Cart <MdOutlineShoppingCart /></button>
                        </div>
                    </div>
                    <div className="max-sm:hidden">
                        <button onClick={() => handleRemoveFromWish(product_id)} className="btn btn-xs sm:btn-sm md:btn-md rounded-full"><IoMdCloseCircleOutline className="text-red-500 font-bold text-2xl" /></button>
                        {/* <button className="btn rounded-full p-0">
                            <IoMdCloseCircleOutline className="text-red-500 font-bold text-2xl" />
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wishlist;