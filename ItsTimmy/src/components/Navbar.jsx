import React from 'react';
import './Navbar.css';

const Navbar = () => {

  return (
    <>
        <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon"/>
        <label for="menu-icon"></label>
        <nav class="nav"> 		
            <ul class="pt-5">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Nos Services</a></li>
                <li><a href="#">Nos Réalisations</a></li>
                <li><a href="#">Qui Somme Nous ?</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </>
  );
};

export default Navbar;
