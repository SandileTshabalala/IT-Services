import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/style.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                   
                    <div className="col-md-4 mb-3">
                        <h5>About Us</h5>
                        <p>
                            We provide innovative IT solutions to enhance your business processes.
                        </p>
                    </div>

                    
                    <div className="col-md-4 mb-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#services" className="text-light">Services</a></li>
                            <li><a href="#about" className="text-light">About Us</a></li>
                            <li><a href="#contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>

                  
                    <div className="col-md-4 mb-3">
                        <h5>Contact</h5>
                        <p><PhoneIcon className="me-2" /> (012) 345 6789</p>
                        <p><EmailIcon className="me-2" /> company@gmail.com</p>
                        <p><LocationOnIcon className="me-2" /> 14 DFHCHY Ln, Shgjgjh, Sandton</p>
                    </div>
                </div>

                <hr className="bg-light" />

                <div className="d-flex justify-content-center mb-3">
                    <a href="#" className="text-light mx-3"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="text-light mx-3"><i className="bi bi-twitter"></i></a>
                    <a href="#" className="text-light mx-3"><i className="bi bi-linkedin"></i></a>
                </div>

                <div className="text-center">
                    <p>&copy; 2024 ITServices. All Rights Reserved.</p>
                    <p>Created by Sandile Tshabalala</p>
                    <a href="https://github.com/SandileTshabalala" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon fontSize="large" className="text-light" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
