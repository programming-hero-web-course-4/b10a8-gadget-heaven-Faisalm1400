import Wishlist from "../Wishlist/Wishlist";

const WishlistContainer = ({wishlist, setWishlist}) => {
    return (
        <div className='mt-7 grid grid-cols-1 gap-3'>
            {
                wishlist.map(wish => <Wishlist key={wish.product_id}
                    wish={wish}
                    setWishlist={setWishlist}
                />)
            }
        </div>
    );
};

export default WishlistContainer;