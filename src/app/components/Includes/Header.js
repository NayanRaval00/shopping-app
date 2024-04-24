'use client'
import React, { useEffect, useState } from 'react';
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
import Link from 'next/link';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Header = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [batteryStatus, setBatteryStatus] = useState(null);
    const [batteryCharging, setBatteryCharging] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const appName = process.env.APP_NAME ? process.env.APP_NAME : "TITLE";

    useEffect(() => {
        let battery; // Define battery variable outside the promise callback

        // battery status update
        const updateBatteryStatus = () => {
            if (battery) { // Check if battery is defined
                setBatteryStatus(Math.round(battery.level * 100));
                setBatteryCharging(battery.charging);
            }
        };

        navigator.getBattery().then(function (bat) {
            battery = bat;
            updateBatteryStatus();
            battery.addEventListener('levelchange', updateBatteryStatus);
        });

        // dropdown click outside handler
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.has-dropdown')) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
            if (battery) {
                battery.removeEventListener('levelchange', updateBatteryStatus);
            }
        };
    }, [dropdownOpen]);

    return (
        <header>
            <title>{appName}</title>
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><Link href="/">Footwear</Link></div>
                            </div>
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group">
                                        <div className='battery-level'><span>Battery Level: {batteryStatus}</span></div>
                                        <div className='battery-charging'><span>Battery Charging: {batteryCharging ? 'Yes' : 'No'}</span></div>
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><i className="icon-search"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 text-left menu-1">
                                <ul>
                                    <li className="active"><Link href="/">Home</Link></li>
                                    <li className={dropdownOpen ? 'has-dropdown active' : 'has-dropdown'}>
                                        <span style={{ cursor: 'pointer', marginRight: '12px' }} onMouseEnter={toggleDropdown}>
                                            <Link href='/men'>Men</Link>
                                        </span>
                                        <ul className={dropdownOpen ? 'dropdown active animated-fast fadeInUpMenu' : 'dropdown'} style={dropdownOpen ? { display: 'block' } : {}}>
                                            <li><Link href="/product/1">Product Details</Link></li>
                                            <li><span >Shopping Cart</span></li>
                                            <li><span >Checkout</span></li>
                                            <li><span >Order Complete</span></li>
                                            <li><span >Wishlist</span></li>
                                        </ul>
                                    </li>
                                    <li><span style={{ cursor: 'pointer' }}><Link href="/women">women</Link></span></li>
                                    <li><Link href="/about">About</Link></li>
                                    <li><Link href="/contact">Contact</Link></li>
                                    <li className="cart"><span><i className="icon-shopping-cart"></i> <Link href="/cart">Cart [{props.cartCount}]</Link></span></li>
                                    <li>
                                        <Link href={'/login'}>Login/Register</Link>
                                    </li>
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
            <aside id="">
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


        </header >
    );
};

export default Header;
