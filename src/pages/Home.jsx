import React from 'react'

import Banner from '../components/Banner'

import ApartmentCards from '../components/Card'

import "../styles/Home.css"

function Home() {
    return (
        <div role="main">
               
                <Banner>
                    <div className="banner banner-commun">
                        <h1>Chez vous, partout et ailleurs</h1>
                    </div>
                </Banner>
                <ApartmentCards />
          
        </div>
    )
}

export default Home