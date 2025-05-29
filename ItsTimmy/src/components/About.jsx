import React, { useState, useEffect, useCallback } from 'react';
import './About.css';

import loris from '../assets/images/loris.png';
import test from '../assets/images/test.jpg';

const teamMembers = [
  {
    name: "Livio Osouf",
    role: "Co-Fondateur",
    img: test
  },
  {
    name: "Loris Vernet",
    role: "Co-Fondateur",
    img: loris
  },
  {
    name: "Soon",
    role: "Soon",
    img: test
  },
  {
    name: "Soon",
    role: "Soon",
    img: test
  },
  {
    name: "Soon",
    role: "Soon",
    img: test
  },
  {
    name: "Soon",
    role: "Soon",
    img: test
  },
];

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = useCallback((index) => {
    setCurrentIndex((index + teamMembers.length) % teamMembers.length);
  }, []);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft') updateCarousel(currentIndex - 1);
    else if (e.key === 'ArrowRight') updateCarousel(currentIndex + 1);
  }, [currentIndex, updateCarousel]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="about-section" id='APropos'>
      <h2 className="about-title">QUI SOMME NOUS ?</h2>
      <p className='about-description'>Timmy est une entreprise fondée par deux étudiants en développement informatique, avec une mission : accompagner les entreprises dans leur transition numérique.
        <br/>Nous aidons les professionnels à renforcer leur image en ligne et à moderniser leurs outils grâce à des solutions simples, efficaces et adaptées.
        <br/>Chez Timmy, on mise sur la proximité, la réactivité et l’expertise pour proposer un numérique accessible à tous.</p>
      <div className="carousel-container">
        <button className="nav-arrow left" onClick={() => updateCarousel(currentIndex - 1)}>‹</button>
        <div className="carousel-track">
          {teamMembers.map((member, i) => {
            let className = "carousel-card";
            const offset = (i - currentIndex + teamMembers.length) % teamMembers.length;
            if (offset === 0) className += " center";
            else if (offset === 1) className += " right-1";
            else if (offset === 2) className += " right-2";
            else if (offset === teamMembers.length - 1) className += " left-1";
            else if (offset === teamMembers.length - 2) className += " left-2";
            else className += " hidden";

            return (
              <div key={i} className={className} onClick={() => updateCarousel(i)}>
                <img src={member.img} alt={member.name} />
              </div>
            );
          })}
        </div>
        <button className="nav-arrow right" onClick={() => updateCarousel(currentIndex + 1)}>›</button>
      </div>
      <div className="member-info">
        <h2 className="member-name">{teamMembers[currentIndex].name}</h2>
        <p className="member-role">{teamMembers[currentIndex].role}</p>
      </div>
      <div className="dots">
        {teamMembers.map((_, i) => (
          <div key={i} className={`dot ${i === currentIndex ? 'active' : ''}`} onClick={() => updateCarousel(i)}></div>
        ))}
      </div>
    </section>
  );
};

export default About;
