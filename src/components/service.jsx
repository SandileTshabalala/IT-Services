import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import '../styles/style.css';
import images from '../constant/images';
import AOS from 'aos'; 

const Services = () => {
  useEffect(() => {
   
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  return (
    <>
      <section>
        <div className="service-image">
          <img src={images.ser} className="w-100" alt="Service" />
        </div>
      </section>
      <section className="py-5" id="services">
        <div className="container">
          <h2 className="text-center mb-5" data-aos="fade-up">Our Services</h2>

          <div className="row">
            <div className="col-md-4" data-aos="fade-up">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title">Corporate Solutions</h5>
                  <p className="card-text">Custom software solutions for companies.</p>
                </div>
              </div>
            </div>

            <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title">Call Center Solutions</h5>
                  <p className="card-text">Custom products for call centers.</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <h5 className="card-title">Cloud Development</h5>
                  <p className="card-text">Reliable cloud solutions for your business.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Services;
