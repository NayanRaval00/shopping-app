import Slider from "react-slick";
import { useRef, useState } from 'react';
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);

    let settings = {
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ],
        afterChange: current => {
            setCurrentSlide(current);
        }
    };

    const images = [
        '/images/img_bg_1.jpg',
        '/images/img_bg_2.jpg',
        '/images/img_bg_3.jpg',
    ];

    return (
        <div className="container mx-auto px-4 w-96">
            <Slider className='thankyou-order-slider' {...settings} ref={sliderRef}>
                {images.map((image) => (
                    <div key={image}> {/* Add unique key prop */}
                        <Image
                            src={image}
                            sizes="50vw"
                            width={50}
                            height={50}
                            className="w-full h-48"
                            alt="Slide image"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default HomeSlider;
