import React, { useState } from 'react'
import VectorLeft from "../assets/VectorLeft.png"
import VectorRight from "../assets/VectorRight.png"
import "../styles/Carousel.css"



// La fonction va pouvoir recevoir un tableau dans lequel les URL des images seront incorporés
function Carousel({pictures}) { 
   
    const totalPictures = pictures.length-1 // Définit le nombre d'images maximum
    const [picture, setpicture] = useState(0)  //  la variable de compteur. Elle est définie à 0 au départ



// si le nombre de photos est inférieur à zéro,  le total des photos définit le nombre d'images max (empêche d'aller dans le négatif)
    if (picture < 0) setpicture(totalPictures)

    // si le nombres de photos est supérieur au maximum d'images d'images, alors il revient à zéro (empêche d'aller dans le maximum)
    if (picture > totalPictures) setpicture(0)  
    


    return(
        <div className='carousel'>

            {/* affiche la première image */}
            <div className='div-image'>  
                <img className="firstImage" src={pictures[picture]}   alt={"photo "+picture} />
            </div>

            {/* si on clique sur le chevron et qu'on a plus d'une image*/}
            {totalPictures > 0 && ( 
                <div>
                    <button onClick={() => setpicture(picture - 1)}>{picture}
                        <img className='classChevronGauche' src={VectorLeft}  alt={'fleche_gauche' } />
                    </button>
                    <button onClick={() => setpicture(picture + 1)}>{picture}
                        <img className='classChevronDroit' src={VectorRight}  alt={'fleche_droite'} />
                    </button>
                </div>
            )}
            {totalPictures > 0 && (
                // affichage du compteur d'images (qui ne s'affiche qu'en version Desktop) et lorsqu'il y a plusieurs images
                <div className='div-compteur'> 
                    <p className='compteurImages'>
                        {picture+1}/{pictures.length}
                    </p>
                </div>
            )}
        </div>
    )
}

export default Carousel



