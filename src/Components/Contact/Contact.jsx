import { Helmet } from "react-helmet";
import contactImage from "../../assets/hello.png"

const Contact = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="hero bg-purple-500 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={contactImage}
                        className="max-w-sm rounded-lg" />
                    <div className="text-white">
                        <h1 className="text-5xl font-bold">Reach out and say hello</h1>
                        <p className="py-6 pr-48">
                            Get in touch thought any of the channels below. We're eager to hear form you!
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:justify-between mt-14">
                <div className="card bg-base-100 w-full lg:w-96 border">
                    <div className="card-body">
                        <h2 className="card-title">Customer support</h2>
                        <p>If you are unable to log into your account, please contact our support team.</p>
                        <div className="card-actions">
                            <button className="btn bg-black rounded-full text-white">Contact support</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 w-full lg:w-96 border">
                    <div className="card-body">
                        <h2 className="card-title">Help center</h2>
                        <p>Navigate our help center articles for assistance on various platform and partnership topics.</p>
                        <div className="card-actions">
                            <button className="btn bg-black rounded-full text-white">Visit our help center</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;