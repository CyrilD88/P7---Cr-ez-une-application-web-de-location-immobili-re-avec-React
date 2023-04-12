import React from "react";
import Logo from '../assets/Logo.png';
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
        <div className="navbar__logo">
          <img src={Logo} alt="logo_de_kasa"/>
        </div>
            <div className="navbar__links">
             <p>Accueil</p>
             <p>A propos</p>
           </div>
    </nav>
  );
}

export default Navbar;

