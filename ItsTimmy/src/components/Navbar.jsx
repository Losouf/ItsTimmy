import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {

    useEffect(() => {
    const links = document.querySelectorAll('.nav ul li a');
    const checkbox = document.getElementById('menu-icon');

    links.forEach(link => {
      link.addEventListener('click', () => {
        if (checkbox.checked) checkbox.checked = false;
      });
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', () => {
          if (checkbox.checked) checkbox.checked = false;
        });
      });
    };
  }, []);

  return (
    <section>
      <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
      <label htmlFor="menu-icon"></label>
      <nav className="nav"> 		
          <ul>
              <li><a href="#Accueil">Accueil</a></li>
              <li><a href="#Services">Nos Services</a></li>
              <li><a href="#">Nos Réalisations</a></li>
              <li><a href="#APropos">Qui Somme Nous ?</a></li>
              <li><a href="#Contact">Contact</a></li>
          </ul>
      </nav>
    </section>
  );
};

export default Navbar;
