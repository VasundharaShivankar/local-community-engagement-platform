import React from 'react';
import './Home.css';
import bgimg from './bgimg.jpg';
import front from './front.jpg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="home-container">
      {/* Existing sections */}

      {/* Footer */}
      <footer className="footer-section">
        <div className="footer-content">
          <div className="footer-about">
            <h3>About Us</h3>
            <p>
              Discover the finest home decor items to transform your living space. Join our community for exclusive offers and updates.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p><i className="fas fa-map-marker-alt"></i> 123 Home Decor St, Your City</p>
            <p><i className="fas fa-phone-alt"></i> +1 234 567 890</p>
            <p><i className="fas fa-envelope"></i> info@homedecor.com</p>
          </div>

          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <p>Stay updated with our latest trends and offers.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" className="primary-button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Home Decor Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
