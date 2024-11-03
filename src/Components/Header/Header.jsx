
import Banner from './Banner/Banner';
import Nav from './Nav/Nav';

const Header = () => {
    return (
        <div className='pt-8'>
            <Nav />
            <Banner />
        </div>
    );
};

export default Header;