import React from 'react';
import Banner from '../components/Banner'

function Card (){
    return (
        <div className='cardAppartment'>
        <Banner />
            <div className="cardTittle"> 
            </div>
            <div className='cardOwner'>
                <h3> Alexandre Dumas</h3>
                 <div className='cardOwnerBadge'>
                    <div className='cardOwnerStars'>
                         <span>★</span>
                         <span>★</span>
                         <span>★</span>
                         <span>★</span>
                         <span>★</span>
                     </div>
                </div>
            </div>
            <div className='cardDescription'>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque voluptatibus eum officiis sequi autem qui unde soluta corporis, dolorum quae doloribus debitis id ea corrupti voluptate accusantium facere, quo illo molestias. Vel et quaerat temporibus magni corporis similique nam id consequatur ad voluptatum dignissimos dicta, fuga commodi rem sint!</p>
            </div>
            <div className='cardDescription'>
                <p>Description</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque voluptatibus eum officiis sequi autem qui unde soluta corporis, dolorum quae doloribus debitis id ea corrupti voluptate accusantium facere, quo illo molestias. Vel et quaerat temporibus magni corporis similique nam id consequatur ad voluptatum dignissimos dicta, fuga commodi rem sint!</p>
            </div>

        </div>
    )
};

export default Card;

