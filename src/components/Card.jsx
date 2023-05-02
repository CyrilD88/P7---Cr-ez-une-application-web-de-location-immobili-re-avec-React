import React from "react";
import {Link} from "react-router-dom";

import Data from "../Données.json";
import "../styles/Card.css";

function ApartmentCards() {
  return (
   
    <div className="LogementsCard">

    {/* création de la liste pour la base de données */}
    {Data.map((apart) => {
        const { id, cover, title } = apart;

      // affichage de la description pour l'appartement sur la page d'accueil
        return (
            <div className="Logement" key={id}>
                <Link to={{ pathname: "Apartment", search: "?_id="+id }}>
                    <img src={cover} alt={title} />
                    <h3>{title}</h3>
                </Link>
            </div>
        )
    })}
    </div>

  );
}

export default ApartmentCards;

