import React, { useState } from 'react'
import chevronUp from "../assets/VectorUp.png"
import chevronDown from "../assets/VectorDown.png"
import "../styles/Collapse.css"



function Collapse({title, content}) {
    //  le collapse est définit par défaut comme fermé
    const [collapseVisible, setcollpseVisible] = useState(false)

    // au clique sur le collapse, la valeur est inversée 
    const affichageCollapse = () => { 
        setcollpseVisible(!collapseVisible) // inverse la valeur actuelle
    }

    // définition des classes et du chevron: visible ou caché
    const collapseContent = (collapseVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (collapseVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>

            {/* affiche le titre et le chevron */}
            <div className='collapse__header' onClick={affichageCollapse}>
                <span>{title}</span>
                <div className="chevronValue">
                    <img src={collapseChevron} alt="image_de_chevron"/>
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse


