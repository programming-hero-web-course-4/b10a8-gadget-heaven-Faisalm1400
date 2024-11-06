import { Helmet } from "react-helmet";
import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <Banner />
            <div className="mt-80">
                <CategoriesContainer />
            </div>
        </div>
    );
};

export default Home;