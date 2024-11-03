import CategoriesContainer from "../CategoriesContainer/CategoriesContainer";
import Banner from "./Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner />
            <div className="mt-80">
                <CategoriesContainer />
            </div>
        </div>
    );
};

export default Home;