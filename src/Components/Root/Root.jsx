import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Root = () => {
    return (
        <div>
            <div className="lg:mx-10 mt-8">
                <Nav />
            </div>

            <div className="lg:mx-10">
                <Outlet />
            </div>

            <div className="mt-20">
                <Footer />
            </div>
        </div>
    );
};

export default Root;