import Cart from "../Cart/Cart";

const CartContainer = ({cartList, setCartList}) => {
    return (
        <div className='mt-7 grid grid-cols-1 gap-3'>
            {
                cartList.map(cart => <Cart key={cart.product_id}
                    cart={cart}
                    setCartList={setCartList}
                />)
            }
        </div>
    );
};

export default CartContainer;