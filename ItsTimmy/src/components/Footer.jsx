import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h3>ItsTimmy</h3>
          <p>Votre partenaire pour réussir votre transition numérique.</p>
        </div>

        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#Accueil">Accueil</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Projects">Réalisations</a></li>
            <li><a href="#About">À propos</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Suivez-nous</h4>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 ItsTimmy. Tous droits réservés. | <a href="/mentions-legales">Mentions légales</a></p>
      </div>
    </footer>
  );
};

export default Footer;
