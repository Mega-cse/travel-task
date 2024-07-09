import React from 'react';
import './Footer.css';

const Footer = () => {
    return (

        <div className="footer">
            <div className="footer-columns">
                <div className="footer-column">
                    <h3>Touro</h3>
                    <ul>
                        <li>Travel is fatal to prejudice,</li>
                        <li>and narrow mindness.</li>
                        <li>And many of our people.</li>

                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>Home</li>
                        <li>Category</li>
                        <li>Blog</li>
                        <li>About us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Link</h3>
                    <ul>
                        <li>FAQ'S</li>
                        <li>Privacy policy</li>
                        <li>Terms and conditions</li>
                        <li>Support</li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>342 Blane Street,Wisconsing <p>United Statids</p></li>
                        <li>2145-5467-5378</li>
                        <li>touro@agency.com</li>
                    </ul>
                </div>
            </div>
            <div className="footer-underline"></div>
            <div class="footer-bottom" >
                <p>Copyright@touro@agency.com by nasir jamshed</p>
            </div>
        </div>

    );
};

export default Footer;