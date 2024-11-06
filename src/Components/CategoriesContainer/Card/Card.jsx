import { Link } from "react-router-dom";

const Card = ({ product }) => {
    const { product_id, product_image, product_title, price } = product
    

    // console.log(typeof(categories))
    return (
        <div className="card bg-base-200 w-11/12 border">
            <figure className="px-10 pt-10">
                <img src={product_image} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-start text-start">
                <h2 className="card-title">{product_title}</h2>
                <p>Price: ${price}</p>
                <Link to={`/product/${product_id}`} className="card-actions">
                    <button className="btn bg-gradient-to-tr from-violet-400 to-rose-400 rounded-full">View Details</button>
                </Link>
                {/* <div className="card-actions">

                </div> */}
            </div>
        </div>
    );
};

export default Card;