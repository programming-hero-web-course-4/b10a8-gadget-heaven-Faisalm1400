
const Footer = () => {
    return (
        <footer className="footer footer-center bg-neutral-600 text-primary-content p-10">
            <aside>
                <p className="text-4xl font-bold">
                    Gadget Heaven
                </p>
                <p>Leading the way in cutting-edge technology and innovation</p>
            </aside>
            <div className="border w-11/12 text-white"></div>
            <div className="footer p-10 text-white">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;