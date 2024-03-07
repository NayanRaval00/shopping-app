import Image from "next/image";
import Header from "./components/Includes/Header";
import Footer from "./components/Includes/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="page">
        <Header />
        <div className="colorlib-intro" style={{ textAlign: "center" }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="colorlib-product">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a href="#" className="featured-img" style={{ backgroundImage: "url(images/men.jpg)" }}></a>
                  <div className="desc">
                    <h2><a href="#">Shop Men's Collection</a></h2>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 text-center">
                <div className="featured">
                  <a href="#" className="featured-img" style={{ backgroundImage: "url(images/women.jpg)" }}></a>
                  <div className="desc">
                    <h2><a href="#">Shop Women's Collection</a></h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="colorlib-product">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
                <h2>Best Sellers</h2>
              </div>
            </div>
            <div className="row row-pb-md">
              {/* Add your product entries here */}
            </div>
            <div className="row">
              <div className="col-md-12 text-center">
                <p><a href="#" className="btn btn-primary btn-lg">Shop All Products</a></p>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
