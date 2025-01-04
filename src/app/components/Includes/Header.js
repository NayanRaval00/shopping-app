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
import { signOut, useSession } from 'next-auth/react';
import useAuthUserSettings from '../../../../lib/useAuthUserSettings';
import { FaSearch } from "react-icons/fa";
import { useSidebar } from '@/context/SidebarContext';
import { addToCart, retrieveCartDetails } from '../../../../lib/api/cart/cart';
import AlertMessage from '../AlertMessage/AlertMessage';

const Header = (props) => {
    const [cartValue, setCartValue] = useState(props.initialValue);

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const { showSideBarData, toggleSidebar } = useSidebar();
    const { AuthUserData } = useAuthUserSettings()
    const [errorAlert, setErrorAlert] = useState(null);
    const [successAlert, setSuccessAlert] = useState(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    const toggleProfileDropdown = () => {
        setProfileDropdownOpen(!profileDropdownOpen);
    };
    const handleLogout = () => {
        signOut()
    }

    const getCartDetails = async () => {

        try {
            const apiResponse = await retrieveCartDetails();
            if (apiResponse.status === 200) {
                setCartValue(apiResponse?.data.length);
            } else {
                alert('Failed to add item to cart. Please try again.');
            }
        } catch (error) {
            console.error('Error while adding to cart:', error);
            setErrorAlert(error.message, "error");
        }
    };

    const appName = process.env.NEXT_PUBLIC_APP_NAME ? process.env.NEXT_PUBLIC_APP_NAME : "NAYAN";
    useEffect(() => {
        getCartDetails();
        const handleOutsideClick = (event) => {
            if (!event.target.closest('.has-dropdown') && !event.target.closest('.profile-dropdown')) {
                setDropdownOpen(false);
                setProfileDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener('click', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [dropdownOpen]);

    return (
        <header>
            <AlertMessage
                successAlert={successAlert}
                setSuccessAlert={setSuccessAlert}
                errorAlert={errorAlert}
                setErrorAlert={setErrorAlert}
            />
            <title>{appName}</title>
            <nav className="colorlib-nav" role="navigation">
                <div className="top-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 col-md-9">
                                <div id="colorlib-logo"><Link href="/">Footwear</Link></div>
                            </div>
                            <a
                                href='#'
                                onClick={toggleSidebar}
                                className={`js-colorlib-nav-toggle colorlib-nav-toggle ${showSideBarData ? "active" : "colorlib-nav-white"}`}
                            >
                                <i></i>
                            </a>
                            <div className="col-sm-5 col-md-3">
                                <form action="#" className="search-wrap">
                                    <div className="form-group ">
                                        <input type="search" className="form-control search" placeholder="Search" />
                                        <button className="btn btn-primary submit-search text-center" type="submit"><FaSearch className='w-full' /></button>
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
                                            <Link href={'/men'}>Men</Link>
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
                                    <li className="cart"><span><i className="icon-shopping-cart"></i> <Link href="/cart">Cart [{cartValue}]</Link></span></li>
                                    <li>
                                        <Link href={'/login'}>Login/Register</Link>
                                    </li>
                                    <li className={dropdownOpen ? 'profile-dropdown has-dropdown active' : 'profile-dropdown has-dropdown'}>
                                        <span style={{ cursor: 'pointer', marginRight: '12px' }} onClickCapture={toggleProfileDropdown}>
                                            <span>Profile</span>
                                        </span>
                                        <ul className={profileDropdownOpen ? 'dropdown active animated-fast fadeInUpMenu' : 'dropdown'} style={profileDropdownOpen ? { display: 'block' } : {}}>
                                            <li><Link href="/product/1">Profile Details</Link></li>
                                            {/* <li><span onClick={logoutUser()}>Logout</span></li> */}
                                            <li>

                                                <Link
                                                    href='#'
                                                    className='icon-with-menu'
                                                    onClick={e => {
                                                        e.preventDefault()
                                                        handleLogout()
                                                    }}
                                                >
                                                    Logout
                                                </Link>
                                            </li>
                                        </ul>
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
        </header >
    );
};

export default Header;
