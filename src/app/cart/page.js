'use client'
import { useEffect, useState } from 'react';
import Footer from "../components/Includes/Footer";
import Header from "../components/Includes/Header";
import { deleteCartItem, retrieveCartDetails } from '../../../lib/api/cart/cart';
import AlertMessage from '../components/AlertMessage/AlertMessage';

export default function Cart() {
    const [cartData, setCartData] = useState(null);
    const [successAlert, setSuccessAlert] = useState(null);
    const [errorAlert, setErrorAlert] = useState(null);

    const removeItem = async (id) => {
        try {
            const apiResponse = await deleteCartItem(id);
            if (apiResponse.status === 200) {
                getCartData();
                setSuccessAlert('Delete Item Successfully!')
            } else {
                alert('Failed to add item to cart. Please try again.');
            }
        } catch (error) {
            console.error('Error while adding to cart:', error);
            setErrorAlert(error.message, "error");
        }
    };

    const getCartData = async () => {
        try {
            const apiResponse = await retrieveCartDetails();
            if (apiResponse.status === 200) {
                setCartData(apiResponse?.data);
            } else {
                alert('Failed to add item to cart. Please try again.');
            }
        } catch (error) {
            console.error('Error while adding to cart:', error);
            setErrorAlert(error.message, "error");
        }
    }
    useEffect(() => {
        getCartData();
        console.log(cartData, 'cartData');

        const storedCartData = cartData;
        console.log(storedCartData, 'storedCartData');

        if (storedCartData) {
            setCartData(JSON.parse(storedCartData));
        }
    }, []);

    return (
        <>
            <main className="">
                <div id="page">
                    <Header />
                    <AlertMessage
                        successAlert={successAlert}
                        setSuccessAlert={setSuccessAlert}
                        errorAlert={errorAlert}
                        setErrorAlert={setErrorAlert}
                    />
                    <div className="breadcrumbs">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <p className="bread"><span><a href="index.html">Home</a></span> / <span>Shopping Cart</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="colorlib-product">
                        <div className="container">
                            <div className="row row-pb-lg">
                                <div className="col-md-10 offset-md-1">
                                    <div className="process-wrap">
                                        <div className="process text-center active">
                                            <p><span>01</span></p>
                                            <h3>Shopping Cart</h3>
                                        </div>
                                        <div className="process text-center">
                                            <p><span>02</span></p>
                                            <h3>Checkout</h3>
                                        </div>
                                        <div className="process text-center">
                                            <p><span>03</span></p>
                                            <h3>Order Complete</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-pb-lg">
                                <div className="col-md-12">
                                    <div className="product-name d-flex">
                                        <div className="one-forth text-left px-4">
                                            <span>Product Details</span>
                                        </div>
                                        <div className="one-eight text-center">
                                            <span>Price</span>
                                        </div>
                                        <div className="one-eight text-center">
                                            <span>Quantity</span>
                                        </div>
                                        <div className="one-eight text-center">
                                            <span>Total</span>
                                        </div>
                                        <div className="one-eight text-center px-4">
                                            <span>Remove</span>
                                        </div>
                                    </div>

                                    {cartData ? (
                                        cartData.map((item, index) => (
                                            <div className="product-cart d-flex" key={index}>
                                                <div className="one-forth">
                                                    <div className="product-img" style={{ backgroundImage: `url(/images/item-1.jpg)` }}>
                                                    </div>
                                                    <div className="display-tc">
                                                        <h3>{item.name}</h3>
                                                    </div>
                                                </div>
                                                <div className="one-eight text-center">
                                                    <div className="display-tc">
                                                        <span className="price">{item.price}</span>
                                                    </div>
                                                </div>
                                                <div className="one-eight text-center">
                                                    <div className="display-tc">
                                                        <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value={item.quantity} min="1" max="100" readOnly />
                                                    </div>
                                                </div>
                                                <div className="one-eight text-center">
                                                    <div className="display-tc">
                                                        <span className="price">{item.quantity * item.price}</span>
                                                    </div>
                                                </div>
                                                <div className="one-eight text-center">
                                                    <div className="display-tc">
                                                        <a href="#" className="closed" onClick={() => removeItem(item.id)}
                                                        ></a>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div>No items in the cart</div>
                                    )}

                                </div>
                            </div>
                            <div className="row row-pb-lg">
                                <div className="col-md-12">
                                    <div className="total-wrap">
                                        <div className="row">
                                            <div className="col-sm-8">
                                                <form action="#">
                                                    <div className="row form-group">
                                                        <div className="col-sm-9">
                                                            <input type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
                                                        </div>
                                                        <div className="col-sm-3">
                                                            <input type="submit" value="Apply Coupon" className="btn btn-primary" />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="col-sm-4 text-center">
                                                <div className="total">
                                                    <div className="sub">
                                                        <p><span>Subtotal:</span> <span>$200.00</span></p>
                                                        <p><span>Delivery:</span> <span>$0.00</span></p>
                                                        <p><span>Discount:</span> <span>$45.00</span></p>
                                                    </div>
                                                    <div className="grand-total">
                                                        <p><span><strong>Total:</strong></span> <span>$450.00</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                                    <h2>Related Products</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 col-lg-3 mb-4 text-center">
                                    <div className="product-entry border">
                                        <a href="#" className="prod-img">
                                            {/* <img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"> */}
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
                                            {/* <img src="images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"> */}
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
                                            {/* <img src="images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"> */}
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
                                            {/* <img src="images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"> */}
                                        </a>
                                        <div className="desc">
                                            <h2><a href="#">Russ Men's Sneakers</a></h2>
                                            <span className="price">$139.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </main>
        </>
    );
}
