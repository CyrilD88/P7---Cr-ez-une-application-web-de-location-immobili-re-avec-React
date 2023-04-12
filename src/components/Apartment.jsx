import React from "react";
import Appartement from '../assets/Banner.png';
import "../styles/Apartment.css";

function ApartmentCards() {
  return (
    <div className="housing">  
        <div className="housing__card">
            <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={Appartement} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
     
    </div>
  );
}

export default ApartmentCards;

