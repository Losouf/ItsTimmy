import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id='Accueil'>
        <video className="hero-video" autoPlay muted loop playsInline>
            <source src="/videos/FondHero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div className="container hero-content">
            <h1 className="hero-title">ItsTimmy !</h1>
            <p className="hero-subtitle">Boostez votre image en ligne avec des solutions sur-mesure.</p>
            <a href="#" className="btn-a-propos">À propos de Timmy</a>
        </div>
    </section>
  );
};

export default Hero;
