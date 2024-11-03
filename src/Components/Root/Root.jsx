import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="mx-20">
            <Header />

            <Outlet />

            <Footer />
        </div>
    );
};

export default Root;