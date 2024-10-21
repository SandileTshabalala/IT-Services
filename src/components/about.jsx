import React, { useEffect } from 'react';
import '../styles/style.css';
import images from '../constant/images';
import AOS from 'aos'; 

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  return (
    <>
      <section id="about" className="py-5">
        <h2 className="text-center mb-5 about-header" data-aos="fade-up">About Us</h2>
        <div className="about-page">
          <div className="about-content">
            <div className="about-text" data-aos="fade-up">
              <h2 className="about-title">Welcome to ITService</h2>
              <p className="about-description">
                At ITService, we specialize in delivering top-tier SaaS and PaaS solutions, enabling businesses to scale and operate with greater agility in today’s fast-evolving digital landscape.
              </p>
              <p className="about-details">
                Our team of skilled experts provides innovative cloud-based services that help organizations streamline their operations, enhance productivity, and reduce costs. With our SaaS solutions, 
                we offer software applications accessible via the cloud, while our PaaS platforms enable businesses to develop,
                run, and manage their applications without the complexity of building and maintaining the underlying infrastructure.
              </p>
              <p className="about-details">
                We have successfully implemented our services across various industries including finance,
                healthcare, retail, and more. Whether you're looking to adopt SaaS for business automation or leverage PaaS to build custom applications, ITService is here to support your journey to the cloud.
              </p>
              <a href="/contact" className="about-button">Contact Us</a>
            </div>
            <div className="about-image" data-aos="fade-up" data-aos-delay="100">
              <img
                src={images.co}  
                alt="Cloud Solutions"
                className="office-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
