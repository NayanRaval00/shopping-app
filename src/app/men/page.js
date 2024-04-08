'use client'
import Image from "next/image";
import Footer from "../components/Includes/Footer";
import Header from "../components/Includes/Header";

export default function Men() {
    return (
        <>
            <div id="page">
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="index.html">Home</a></span> / <span>Men</span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="breadcrumbs-two">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="breadcrumbs-img" style={{ backgroundImage: `url(/images/cover-img-1.jpg)` }}
                                >
                                    <h2>Men's</h2>
                                </div>
                                <div className="menu text-center">
                                    <p><a href="#">New Arrivals</a> <a href="#">Best Sellers</a> <a href="#">Extended Widths</a> <a href="#">Sale</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="colorlib-featured">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2" style={{ backgroundImage: `url(/images/men.jpg)` }}
                                    >
                                        <h2>Casuals</h2>
                                        <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2"
                                        style={{ backgroundImage: `url(/images/women.jpg)` }}>
                                        <h2>Dress</h2>
                                        <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 text-center">
                                <div className="featured">
                                    <div className="featured-img featured-img-2" style={{ backgroundImage: `url(/images/item-11.jpg)` }}>
                                        <h2>Sports</h2>
                                        <p><a href="#" className="btn btn-primary btn-lg">Shop now</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="colorlib-product">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                <h2>View All Products</h2>
                            </div>
                        </div>
                        <div className="row row-pb-md">
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-1.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-2.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Minam Meaghan</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-3.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />

                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Men's Taja Commissioner</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-4.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />

                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Russ Men's Sneakers</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-5.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />

                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-6.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-7.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-8.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />

                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-9.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-10.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-11.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-12.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-100"></div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-13.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />
                                    </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-14.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />                            </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-15.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />                            </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-3 mb-4 text-center">
                                <div className="product-entry border">
                                    <a href="#" className="prod-img">
                                        <Image
                                            className="img-fluid"
                                            src="/images/item-16.jpg"
                                            width={500}
                                            height={500}
                                            alt="Picture of the author"
                                        />                            </a>
                                    <div className="desc">
                                        <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                                        <span className="price">$139.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <div className="block-27">
                                    <ul>
                                        <li><a href="#"><i className="ion-ios-arrow-back"></i></a></li>
                                        <li className="active"><span>1</span></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#">5</a></li>
                                        <li><a href="#"><i className="ion-ios-arrow-forward"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="colorlib-partner">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                <h2>Trusted Partners</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col partner-col text-center">
                                <Image
                                    className="img-fluid"
                                    src="/images/brand-1.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col partner-col text-center">
                                <Image
                                    className="img-fluid"
                                    src="/images/brand-2.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col partner-col text-center">
                                <Image
                                    className="img-fluid"
                                    src="/images/brand-3.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col partner-col text-center">
                                <Image
                                    className="img-fluid"
                                    src="/images/brand-4.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className="col partner-col text-center">
                                <Image
                                    className="img-fluid"
                                    src="/images/brand-5.jpg"
                                    width={500}
                                    height={500}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}