import React from "react";
import {Link} from "react-router-dom";
import AppartementCard from '../assets/Banner.png';
import "../styles/Card.css";

function ApartmentCards() {
  return (
    <div className="housing"> 
     <Link to='Card'> 
             <div className="housing__card">
                 <img src={AppartementCard} alt="a mettre"/>
                 <h3>Titre de la location</h3>
            </div>
     </Link>
        <div className="housing__card">
        <img src={AppartementCard} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={AppartementCard} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={AppartementCard} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={AppartementCard} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
        <div className="housing__card">
        <img src={AppartementCard} alt="a mettre"/>
            <h3>Titre de la location</h3>
        </div>
     
    </div>
  );
}

export default ApartmentCards;

