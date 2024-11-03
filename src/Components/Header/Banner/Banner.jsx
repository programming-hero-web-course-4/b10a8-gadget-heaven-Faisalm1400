import BannerImg from "./BannerImg/BannerImg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen bg-purple-500 rounded-b-2xl">
            <div className="hero-content text-center flex-col">
                <div className="max-w-4xl text-white absolute">
                    <h1 className="text-5xl font-bold">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                    <p className="py-6">
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                    </p>
                    <button className="btn bg-white text-purple-500 rounded-full font-bold">Shop Now</button>
                </div>
                <div className="relative w-1/2 top-96">
                    <BannerImg />
                </div>
            </div>

        </div>
    );
};

export default Banner;