import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Dashboard.css'
import { useState } from 'react';


const Dashboard = () => {

    const [isActive, setActive] = useState({
        available: true,
        status: "cart",
        title: "Cart"
    });

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
                <h2 className="text-2xl font-bold">{isActive.title}</h2>
            </div>
        </div>
    );
};

export default Dashboard;