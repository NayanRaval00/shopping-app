'use client'
import { useEffect, useRef, useState } from 'react'
import Footer from "@/app/components/Includes/Footer";
import Header from "@/app/components/Includes/Header";
import Image from "next/image";
import Slider from "react-slick";
import { addToCart } from '../../../../lib/api/cart/cart';
import AlertMessage from '@/app/components/AlertMessage/AlertMessage';
import { useSearchParams } from 'next/navigation';

export default function ProductDetails() {
    const sliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)
    const items = [1, 2, 3, 4, 5];

    const sizes = ['7', '7.5', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '12.5', '13', '13.5', '14'];
    const widths = ['S', 'M', 'L', 'XL', 'XXL'];

    const [activeTab, setActiveTab] = useState('description');
    const [count, setCount] = useState(1);

    const [selectedSize, setSize] = useState('');
    const [color, setColor] = useState('white');
    const [selectedWidth, setWidth] = useState('');


    const [cartCount, setCartCount] = useState();
    const [errorAlert, setErrorAlert] = useState(null);
    const [successAlert, setSuccessAlert] = useState(null);

    const urlParams = useSearchParams();

    const error = urlParams.get('error');


    const handleSizeChange = (selectedSize) => {
        setSize(selectedSize);
        setColor('pink');
    };

    const handleWidthChange = (selectedWidth) => {
        setWidth(selectedWidth);
    };


    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleIncrease = () => {
        if (count < 7) {
            setCount(count + 1);
        }
    };
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    let settings = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        initialSlide: 0,
        //variableWidth: true,
        afterChange: current => {
            setCurrentSlide(current)
        }
    };


    const handleAddToCart = async () => {
        const newObject = { "size": selectedSize, "width": selectedWidth, "quantity": count };
        console.log(newObject, 'newObject');
        if (!newObject.size || !newObject.width || !newObject.quantity) {
            alert('Please select size, width, and quantity!');
            return;
        }

        const existingDataJSON = localStorage.getItem('cart_data');
        let existingData = existingDataJSON ? JSON.parse(existingDataJSON) : [];

        if (!Array.isArray(existingData)) {
            existingData = [];
        }

        existingData.push(newObject);
        // localStorage.setItem('cart_data', JSON.stringify(existingData));

        try {
            const apiResponse = await addToCart(newObject);
            console.log(apiResponse, 'apiResponse');
            if (apiResponse.status === 201) {
                localStorage.setItem('cart_data', JSON.stringify(existingData));
                setSuccessAlert('Item added to cart.')

                setCartCount(existingData.length);
            } else {
                alert('Failed to add item to cart. Please try again.');
            }
        } catch (error) {
            console.error('Error while adding to cart:', error);
            setErrorAlert(error.message, "error");
        }
    };
    useEffect(() => {
        if (error) {
            setErrorAlert(error);
        }
    }, [error]);
    return (
        <>
            <main className="">
                <div id="page">
                    <Header cartCount={cartCount} />
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
                                    <p className="bread"><span>Home</span> / <span>Product Details</span></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="colorlib-product">
                        <div className="container">
                            <div className="row row-pb-lg product-detail-wrap">
                                <div className="col-sm-8">
                                    <Slider className='owl-carousel' {...settings} ref={sliderRef}>
                                        {items.map((item, index) => (
                                            <div key={index} className="item">
                                                <Image src={`/images/item-${item}.jpg`} width={450} height={450} alt={`Item ${item}`} />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="col-sm-4">
                                    <div className="product-desc">
                                        <h3>Women's Boots Shoes Maca</h3>
                                        <p className="price">
                                            <span>$68.00</span>
                                            <span className="rate">
                                                <i className="icon-star-full"></i>
                                                <i className="icon-star-full"></i>
                                                <i className="icon-star-full"></i>
                                                <i className="icon-star-full"></i>
                                                <i className="icon-star-half"></i>
                                                (74 Rating)
                                            </span>
                                        </p>
                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                        <div className="size-wrap">
                                            <div className="block-26 mb-2">
                                                <h4>Size</h4>
                                                <ul>
                                                    {sizes.map((size, index) => (
                                                        <li key={index}
                                                            style={{
                                                                cursor: 'pointer',
                                                                backgroundColor: size === selectedSize ? color : 'rgb(136, 200, 188)',
                                                                color: size === selectedSize ? 'white' : 'black'
                                                            }}
                                                            onClick={() => handleSizeChange(size)}>{size}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="block-26 mb-4">
                                                <h4>Width</h4>
                                                <ul>
                                                    {widths.map((width, index) => (
                                                        <li key={index} onClick={() => handleWidthChange(width)}
                                                            style={{
                                                                cursor: 'pointer',
                                                                backgroundColor: width === selectedWidth ? color : 'rgb(136 200 188)'
                                                            }}
                                                        >{width}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="input-group mb-4">
                                            <span className="input-group-btn">
                                                <button type="button" className="quantity-left-minus btn" onClick={handleDecrease}>
                                                    <h3 className="">-</h3>
                                                </button>
                                            </span>
                                            <input
                                                type="text"
                                                id="quantity"
                                                name="quantity"
                                                className="form-control input-number"
                                                value={count}
                                                readOnly
                                            />
                                            <span className="input-group-btn ml-1">
                                                <button type="button" className="quantity-right-plus btn" onClick={handleIncrease}>
                                                    <h3 className="">+</h3>
                                                </button>
                                            </span>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 text-center">
                                                <p className="addtocart"><button className="btn btn-primary btn-addtocart" onClick={handleAddToCart}><i className="icon-shopping-cart"></i> Add to Cart</button></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="row">
                                        <div className="col-md-12 pills">
                                            <div className="bd-example bd-example-tabs">
                                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                                    <li className="nav-item">
                                                        <a className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} onClick={() => handleTabClick('description')} id="pills-description-tab" data-toggle="pill" role="tab" aria-controls="pills-description" aria-expanded="true">Description</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className={`nav-link ${activeTab === 'manufacturer' ? 'active' : ''}`} onClick={() => handleTabClick('manufacturer')} id="pills-manufacturer-tab" data-toggle="pill" role="tab" aria-controls="pills-manufacturer" aria-expanded="true">Manufacturer</a>
                                                    </li>
                                                    <li className="nav-item">
                                                        <a className={`nav-link ${activeTab === 'review' ? 'active' : ''}`} onClick={() => handleTabClick('review')} id="pills-review-tab" data-toggle="pill" role="tab" aria-controls="pills-review" aria-expanded="true">Review</a>
                                                    </li>
                                                </ul>

                                                <div className="tab-content" id="pills-tabContent">
                                                    <div className={`tab-pane border fade ${activeTab === 'description' ? 'show active' : ''}`} id="pills-description" role="tabpanel" aria-labelledby="pills-description-tab">

                                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                        <ul>
                                                            <li>The Big Oxmox advised her not to do so</li>
                                                            <li>Because there were thousands of bad Commas</li>
                                                            <li>Wild Question Marks and devious Semikoli</li>
                                                            <li>She packed her seven versalia</li>
                                                            <li>tial into the belt and made herself on the way.</li>
                                                        </ul>
                                                    </div>

                                                    <div className={`tab-pane border fade ${activeTab === 'manufacturer' ? 'show active' : ''}`} id="pills-manufacturer" role="tabpanel" aria-labelledby="pills-manufacturer-tab">

                                                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                                                    </div>

                                                    <div className={`tab-pane border fade ${activeTab === 'review' ? 'show active' : ''}`} id="pills-review" role="tabpanel" aria-labelledby="pills-review-tab">

                                                        <div className="row">
                                                            <div className="col-md-8">
                                                                <h3 className="head">23 Reviews</h3>
                                                                <div className="review">
                                                                    <div className="user-img" style={{ backgroundImage: 'url(images/person1.jpg)' }}></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span className="text-left">Jacob Webb</span>
                                                                            <span className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-half"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                            </span>
                                                                            <span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="user-img" style={{ backgroundImage: 'url(images/person2.jpg)' }}></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span className="text-left">Jacob Webb</span>
                                                                            <span className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-half"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                            </span>
                                                                            <span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                                <div className="review">
                                                                    <div className="user-img" style={{ backgroundImage: 'url(images/person3.jpg)' }}></div>
                                                                    <div className="desc">
                                                                        <h4>
                                                                            <span className="text-left">Jacob Webb</span>
                                                                            <span className="text-right">14 March 2018</span>
                                                                        </h4>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-half"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                            </span>
                                                                            <span className="text-right"><a href="#" className="reply"><i className="icon-reply"></i></a></span>
                                                                        </p>
                                                                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrov</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-4">
                                                                <div className="rating-wrap">
                                                                    <h3 className="head">Give a Review</h3>
                                                                    <div className="wrap">
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                (98%)
                                                                            </span>
                                                                            <span>20 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                (85%)
                                                                            </span>
                                                                            <span>10 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                (70%)
                                                                            </span>
                                                                            <span>5 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                (10%)
                                                                            </span>
                                                                            <span>0 Reviews</span>
                                                                        </p>
                                                                        <p className="star">
                                                                            <span>
                                                                                <i className="icon-star-full"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                <i className="icon-star-empty"></i>
                                                                                (0%)
                                                                            </span>
                                                                            <span>0 Reviews</span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
    )
}