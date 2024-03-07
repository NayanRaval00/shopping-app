import Image from "next/image";
import '../../../../src/app/globals.css';
import '../../../../public/css/animate.css';
import '../../../../public/css/ionicons.min.css';
import '../../../../public/css/bootstrap.min.css';
import '../../../../public/css/magnific-popup.css';
import '../../../../public/css/flexslider.css';
import '../../../../public/css/owl.carousel.min.css';
import '../../../../public/css/owl.theme.default.min.css';
import '../../../../public/css/bootstrap-datepicker.css';
import '../../../../public/fonts/flaticon/font/flaticon.css';
import '../../../../public/css/style.css';


const Header = () => {
    return (
        <header>
            {/* Your header content */}
            {/* <div className="colorlib-loader"></div> */}

                <nav className="colorlib-nav" role="navigation">
                    <div className="top-menu">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-7 col-md-9">
                                    <div id="colorlib-logo"><a href="#">Footwear</a></div>
                                </div>
                                <div className="col-sm-5 col-md-3">
                                    <form action="#" className="search-wrap">
                                        <div className="form-group">
                                            <input type="search" className="form-control search" placeholder="Search" />
                                            <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 text-left menu-1">
                                    <ul>
                                        <li className="active"><a href="#">Home</a></li>
                                        <li className="has-dropdown">
                                            <a href="#">Men</a>
                                            <ul className="dropdown">
                                                <li><a href="#">Product Detail</a></li>
                                                <li><a href="#">Shopping Cart</a></li>
                                                <li><a href="#">Checkout</a></li>
                                                <li><a href="#">Order Complete</a></li>
                                                <li><a href="#">Wishlist</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="#">Women</a></li>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li className="cart"><a href="#"><i className="icon-shopping-cart"></i> Cart [0]</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sale">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 offset-sm-2 text-center">
                                    <div className="row">
                                        <div className="owl-carousel2">
                                            <div className="item">
                                                <div className="col">
                                                    <h3><a href="#">25% off (Almost) Everything! Use Code: Summer Sale</a></h3>
                                                </div>
                                            </div>
                                            <div className="item">
                                                <div className="col">
                                                    <h3><a href="#">Our biggest sale yet 50% off all summer shoes</a></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
                <aside id="colorlib-hero">
                    <div className="flexslider">
                        <ul className="slides">
                            <li style={{ backgroundImage: 'url(images/img_bg_1.jpg)' }}>
                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6 offset-sm-3 text-center slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">Men's</h1>
                                                    <h2 className="head-2">Shoes</h2>
                                                    <h2 className="head-3">Collection</h2>
                                                    <p className="category"><span>New trending shoes</span></p>
                                                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/img_bg_2.jpg)' }}>

                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6 offset-sm-3 text-center slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">Huge</h1>
                                                    <h2 className="head-2">Sale</h2>
                                                    <h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
                                                    <p className="category"><span>Big sale sandals</span></p>
                                                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li style={{ backgroundImage: 'url(images/img_bg_3.jpg)' }}>

                                <div className="overlay"></div>
                                <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-6 offset-sm-3 text-center slider-text">
                                            <div className="slider-text-inner">
                                                <div className="desc">
                                                    <h1 className="head-1">New</h1>
                                                    <h2 className="head-2">Arrival</h2>
                                                    <h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
                                                    <p className="category"><span>New stylish shoes for men</span></p>
                                                    <p><a href="#" className="btn btn-primary">Shop Collection</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </aside>
        </header>
    );
};

export default Header;
