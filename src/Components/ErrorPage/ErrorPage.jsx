import { Link } from 'react-router-dom';
import errorImg from '../../assets/404 page.png'
const ErrorPage = () => {
    return (
        <div className="hero min-h-screen bg-purple-700 text-white">
            <div className="hero-content flex-col gap-8">
                <img
                    src={errorImg}
                    className="max-w-sm" />
                <div className='space-y-5'>
                    <h1 className="text-5xl font-bold">uh-oh! Nothing here..</h1>
                    {/* <p className="py-6">
                        uh-oh! Nothing here..
                    </p> */}
                    <div className='flex justify-center'>
                        <Link to="/">
                            <button className="btn bg-white rounded-full text-purple-700 font-bold">Go Back Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;