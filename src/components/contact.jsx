import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/contact.css';
import emailjs from "@emailjs/browser";
import AOS from 'aos'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const form = useRef(); 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []); 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('All fields are required.');
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID, 
        import.meta.env.VITE_EMAIL_TEMPLATE_ID, 
        form.current, 
        import.meta.env.VITE_EMAIL_PUBLIC_KEY 
      )
      .then((result) => {
        console.log(result.text);
        alert("Message sent successfully!");
        setSubmissionStatus('Thank you for your message! We will get back to you soon.');
        setErrorMessage('');
        setFormData({ name: '', email: '', subject: '', message: '' }); 
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        setErrorMessage('Failed to send your message. Please try again later.');
      });
  };

  return (
    <>
      <h2 className="text-center mb-5 contact-headers" data-aos="fade-up">Contact Us</h2>
      <section className="contact-container" data-aos="fade-up">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Enquire now to find out how we can automate your business processes using Microsoft's Power Platform.</p>
          <p><strong>IT-Services</strong></p>
          <p>Address: 14 FTHVG uj, aertt, Sandton, 0000</p>
          <p>Call: 012 345 6789</p>
          <p>Mail: Company@gmail.com</p>
          <p><strong>Opening Hours</strong></p>
          <p>Mon-Fri: 08:00 – 17:00 (GMT+2)</p>
        </div>

        <div className="contact-form">
          <h2>Leave your message</h2>
          {submissionStatus && <div className="alert alert-success">{submissionStatus}</div>}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      <section>
        <div className="map-container">
          <h2 className="text-center mb-5 location-header" data-aos="fade-up">Our Location</h2>
          <iframe
            title="Powerverse Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.705817677628!2d28.083838315347947!3d-26.058755983415877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e95ef707c3d43b%3A0x9f491c03cce87d43!2s14%20Stirrup%20Ln%2C%20Woodmead%2C%20Sandton%2C%202191!5e0!3m2!1sen!2sza!4v1639560293178!5m2!1sen!2sza"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Contact;
