import { useLoaderData, useParams } from 'react-router-dom';
// import Details from "./Details/Details";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const CardDetails = () => {
    const { productID } = useParams();
    const data = useLoaderData();

    const id = parseInt(productID);
    // console.log(data, id)
    const product = data.find(product => product.product_id === id);
    // console.log(product)

    const { product_id, product_title, product_image, price, description, Specification, availability, rating } = product;


    return (
        <div className="hero bg-purple-500 pb-10 mb-96">
            <div className="hero-content text-center items-baseline md:items-center">
                <div className="max-w-2xl absolute">
                    <h1 className="text-5xl font-bold">Product Details</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                </div>
                <div className="relative top-60 md:top-72 sm:max-w-xl lg:max-w-4xl">
                    <div className="card card-side max-sm:flex-col bg-base-200">
                        <figure className="p-4">
                            <img
                                src={product_image}
                                alt="" className="rounded-2xl h-96" />
                        </figure>
                        <div className="card-body text-start">
                            <h2 className="card-title text-2xl font-bold">{product_title}</h2>
                            <h4 className='font-semibold text-lg'>Price: ${price}</h4>
                            <div className='badge outline outline-green-400 bg-green-200'>
                                { availability ? "In Stock":"Out of Stock"}
                            </div>
                            <p className='font-medium text-gray-400'>{description}</p>
                            <h5 className='font-semibold'>Specification:</h5>
                            <ol>
                                {
                                    Specification.map((specify, index) => <li key={index}> {specify} </li>)
                                }
                            </ol>
                            <h5 className='flex items-center gap-1'><span className='font-semibold'>Rating:</span> {rating}<FaRegStar/></h5>
                            <div className="card-actions justify-start mt-4">
                                <button className="btn bg-purple-500 rounded-full">Add To Cart <MdOutlineShoppingCart /></button>
                                <button className="btn rounded-full bg-white"><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CardDetails;