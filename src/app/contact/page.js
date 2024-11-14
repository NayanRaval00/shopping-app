import Footer from "../components/Includes/Footer";
import ContactUs from "../components/Form/ContactUs";
import Header from "../components/Includes/Header";

export default function Contact() {
    return (

        <main className="">
            <div id="page">
                <Header />
                <div className="breadcrumbs">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <p className="bread"><span><a href="index.html">Home</a></span> / <span>Conatct</span></p>
                            </div>
                        </div>
                    </div>
                </div>


                <div id="colorlib-contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3>Contact Information</h3>
                                <div className="row contact-info-wrap">
                                    <div className="col-md-3">
                                        <p><span><i className="icon-location"></i></span> 198 West 21th Street, <br /> Suite 721 New York NY 10016</p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-phone3"></i></span> <a href="tel://1234567920">+ 1235 2355 98</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-paperplane"></i></span> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
                                    </div>
                                    <div className="col-md-3">
                                        <p><span><i className="icon-globe"></i></span> <a href="#">yoursite.com</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-wrap">
                                    <h3>Get In Touch</h3>
                                    <ContactUs />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div id="map" className="colorlib-map">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31558035.52725055!2d36.986140026482595!3d15.086826604516473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1711704127151!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </main>
    )
}