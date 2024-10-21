import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import images from '../constant/images.jsx';
import AOS from 'aos'; 

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  return (
    <>
      <section className="hero-section">
        <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
          <ol className="carousel-indicators">
            <li data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#heroCarousel" data-bs-slide-to="2"></li>
          </ol>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={images.service} className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption">
                <h1 data-aos="fade-up">IT Solutions for Your Business</h1>
                <p data-aos="fade-up" data-aos-delay="100">Delivering high-quality and sustainable software solutions.</p>
                <a href="#About" className="btn btn-primary m-2" data-aos="fade-up" data-aos-delay="200">Learn More</a>
                <a href="#Service" className="btn btn-secondary m-2" data-aos="fade-up" data-aos-delay="300">Our Services</a>
              </div>
            </div>

            <div className="carousel-item">
              <img src={images.car} className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption">
                <h1 data-aos="fade-up">Innovative Solutions for IT Growth</h1>
                <p data-aos="fade-up" data-aos-delay="100">Helping businesses scale with reliable solutions.</p>
                <a href="#Contact" className="btn btn-primary m-2" data-aos="fade-up" data-aos-delay="200">Contact Us</a>
                <a href="#Contact" className="btn btn-secondary m-2" data-aos="fade-up" data-aos-delay="300">Location</a>
              </div>
            </div>

            <div className="carousel-item">
              <img src={images.group} className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption">
                <h1 data-aos="fade-up">Reliable IT Services</h1>
                <p data-aos="fade-up" data-aos-delay="100">Ensuring your business runs smoothly.</p>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </a>
        </div>
      </section>

      <section className="company-section">
        <div className="text-content" data-aos="fade-up">
          <h2>About our company</h2>
          <h1>Efficiency | Expansion | Evolution</h1>
          <p>Accelerate your productivity and amplify your business growth potential with our full-spectrum digitalisation and automation offering.</p>
          <p>Founded by expert software architects and developers, we are all about creating an ecosystem that increases efficiencies in your organisation.</p>
          <button className="read-more-btn">Read More</button>
        </div>
        <div className="images" data-aos="fade-up">
          <img src={images.gil} alt="Working on a laptop" />
        </div>
      </section>

      <section className="services-section">
        <div className="container text-center">
          <h4 className="text-primary">Our Services</h4>
          <h2 className="mb-4">We assist with Microsoft's Power Platform</h2>
          <div className="card mb-4" data-aos="fade-up">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon-container">
                  <img
                    src="https://powerapps.microsoft.com/assets/images/logos/powerapps.svg"
                    alt="PowerApps Icon"
                    className="icon"
                  />
                </div>
                <div className="content-container">
                  <h5 className="card-title">ITApps</h5>
                  <p className="card-text">
                    Power Apps is a suite of apps, services, and connectors, as well as a data platform, that provides a rapid development environment to build custom apps for your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-4" data-aos="fade-up">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="icon-container">
                  <img
                    src="https://powerapps.microsoft.com/assets/images/logos/powerautomate.svg"
                    alt="PowerAutomate Icon"
                    className="icon"
                  />
                </div>
                <div className="content-container">
                  <h5 className="card-title">ITServices</h5>
                  <p className="card-text">
                    Power Automate allows you to automate workflows between apps and services to sync files, get notifications, collect data, and much more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-between contact-section">
            <div className="col-md-4">
              <div className="card mb-4" data-aos="fade-up">
                <div className="card-body text-center">
                  <PhoneIcon size={24} className="mb-3" />
                  <h5>Call Now</h5>
                  <p>(012) 345 6789</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4" data-aos="fade-up">
                <div className="card-body text-center">
                  <EmailIcon size={24} className="mb-3" />
                  <h5>Write to us</h5>
                  <p>company@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card mb-4" data-aos="fade-up">
                <div className="card-body text-center">
                  <LocationOnIcon size={24} className="mb-3" />
                  <h5>Address</h5>
                  <p>14 Sxgfhjh Ln, Affkuygu, Sandton, 2191</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose Us</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="card-body text-center shadow p-4" data-aos="fade-up">
                <h4 className="card-title">High-Quality Hardware</h4>
                <p className="card-text">Top-notch hardware for efficient apps.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-body text-center" data-aos="fade-up">
                <h4 className="card-title">24/7 Dedicated Support</h4>
                <p className="card-text">We offer around-the-clock support for all issues.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card-body text-center" data-aos="fade-up">
                <h4 className="card-title">30-Day Money-Back Guarantee</h4>
                <p className="card-text">If you're not satisfied, we'll return your money within 30 days.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
