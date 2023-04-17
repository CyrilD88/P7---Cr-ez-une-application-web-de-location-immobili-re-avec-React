import React from 'react'
import Banner from '../components/Banner'
import ApartmentCards from '../components/Card' 
// import Data from '../Données.json'

import "../styles/Home.css"

function Home() {
    return (
        <div >
               
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <ApartmentCards/>
               {/* <section className='card-container'>
                {Data.map((apart)=>(
                    <ApartmentCards key={apart.id} data={apart}/>
                ))}
               </section>  */}
          
        </div>
    )
}

export default Home