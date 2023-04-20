import React from 'react';
import Collapse from '../components/Collapse';
import Banner from '../components/Banner';
import DataAbout from '../DonnéesAbout.json';

import "../styles/About.css"



function About (){
   
      
  // contenu qui sera affiché dans les Collapse
    // const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    // const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    // const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    // const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    return (
        <>
        <div className="main">
        <div className='About'>
                <Banner>
                    <div className="bannerTwo banner"></div>
                </Banner>
                <div className='about'>
                {DataAbout.map((test) => (
          <Collapse
            key={test.id}
            title={test.title}
            content={test.description}
          />
        ))}
                    {/* <div><Collapse title="Fiabilité" content={fiabilite} /></div>
                    <div><Collapse title="Respect" content={respect} /></div>
                    <div><Collapse title="Service" content={service} /></div>
                    <div><Collapse title="Sécurité" content={securite} /></div> */}
                </div>
     
        </div>
        </div>
 
        </>
    )
};

export default About;