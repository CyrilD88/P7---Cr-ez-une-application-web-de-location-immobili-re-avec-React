import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import Collapse from '../components/Collapse'
import Carousel from '../components/Carousel'

import "../styles/Apartment.css"
import Data from "../Données.json"

const arrayStars = [1, 2, 3, 4, 5]

function Card() {
    // récupération des paramètres
    const [searchParams] = useSearchParams();

     // récupération de l'ID de l'URL
    const [apartmentID,] = useState(searchParams.get('_id'));
    

    // On recherche l'id dans le fichier logements.json
    const record = Data.find(element => element.id === apartmentID)
    
   

    // Const pour maper les équipements
    const equipements = record.equipments.map((element, index) => (
          <li className='contenuEquipement' key={"equipement-"+index.toString()}>{element}</li>
        ))
    

    return (
                <div className="main">
                <div className='apartement'>
        

                {/* affichage du carousel d'images */}
                <Carousel pictures={record.pictures}/>

                {/*  affichage du titre, de l'emplacement et des tags */}
                <div className='apartmentCard'>
                    <div className='description'>
                        <h1>{record.title}</h1>
                        <h4>{record.location}</h4>
                        <div className='tagsContent'>
                            { record.tags.map((element, index) => {
                                return(<p className='tags' key={"tags-"+index}>{element}</p>)
                            })}
                        </div>
                    </div>


                    {/* affichage du nom du propriétaireet sa photo */}
                    <div className='blocStars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        
                        {/* affichage des étoiles */}
                        <div className='stars'>
                            {
                                arrayStars.map(element => {
                                    const nbreEtoiles = parseInt(record.rating)
                                    return(<span key={"star-"+element} className={element <= nbreEtoiles ? 'span1' : 'span2'}>★</span>)
                                })
                            }
                        </div>
                    </div>
                </div>


                {/* affichage de la description et les équipements */}
                <div className='collapseLogement'>
                    <Collapse title="Description" content={record.description} />
                    <Collapse title="Equipements" content={equipements} />
                </div>

           
        </div>
        </div>
    )
}

export default Card


