'use client'
import { useRef, useState } from 'react'
import Header from "./components/Includes/Header";
import Footer from "./components/Includes/Footer";
import Image from 'next/image'
import Slider from 'react-slick'

export default function Home() {

  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderRef = useRef(null)

  var settings = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    //variableWidth: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false
        }
      }
    ],
    afterChange: current => {
      setCurrentSlide(current)
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="page">
        <Header />
        <Slider className='thankyou-order-slider' {...settings} ref={sliderRef} >
          <div>
            <Image
              src="/images/img_bg_1.jpg"
              sizes="50vw"
              width={50}
              height={50}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src="/images/img_bg_2.jpg"
              sizes="50vw"
              width={50}
              height={50}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="Picture of the author"
            />
          </div>
          <div>
            <Image
              src="/images/img_bg_3.jpg"
              sizes="50vw"
              width={50}
              height={50}
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt="Picture of the author"
            />
          </div>
        </Slider>


        <div className="colorlib-intro" style={{ textAlign: "center" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <span className="featured-img" style={{ backgroundImage: "url(images/men.jpg)" }}></span>
                  <div className="desc">
                    <h2><span >Shop Men's Collection</span></h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <span className="featured-img" style={{ backgroundImage: "url(images/women.jpg)" }}></span>
                  <div className="desc">
                    <h2><span >Shop Women's Collection</span></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                <h2>Best Sellers</h2>
              </div>
            </div>
            <div className="row row-pb-md">
              {/* Add your product entries here */}
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <span className="prod-img">
                    {/* <img src="images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template"> */}
                    <Image
                      src="/images/item-1.jpg"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />
                  </span>
                  <div className="desc">
                    <h2><span >Women's Boots Shoes Maca</span></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <span className="prod-img">
                    <Image
                      src="/images/item-5.jpg"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />

                  </span>
                  <div className="desc">
                    <h2><span>Women's Minam Meaghan</span></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <span className="prod-img">
                    <Image
                      src="/images/item-2.jpg"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />

                  </span>
                  <div className="desc">
                    <h2><span >Men's Taja Commissioner</span></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <span className="prod-img">
                    <Image
                      src="/images/item-3.jpg"
                      width={200}
                      height={200}
                      alt="Picture of the author"
                    />

                  </span>
                  <div className="desc">
                    <h2><span >Men's Taja Commissioner</span></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p><span className="btn btn-primary btn-lg">Shop All Products</span></p>
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
              {/* Add your partner logos here */}

              <div className="col partner-col text-center">
                {/* <img src="images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"> */}
                <Image
                  src="/images/brand-1.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col partner-col text-center">
                {/* <img src="images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"> */}
                <Image
                  src="/images/brand-2.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col partner-col text-center">
                {/* <img src="images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"> */}
                <Image
                  src="/images/brand-3.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col partner-col text-center">
                {/* <img src="images/brand-4.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"> */}
                <Image
                  src="/images/brand-4.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
              <div className="col partner-col text-center">
                {/* <img src="images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template"> */}
                <Image
                  src="/images/brand-5.jpg"
                  width={200}
                  height={200}
                  alt="Picture of the author"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
