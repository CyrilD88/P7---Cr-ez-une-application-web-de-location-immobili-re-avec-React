// import { useParams } from 'react-router-dom'
// import Data from '../Données.json';
import "../styles/Apartment.css"

function  Apartment(){
    // const { id } = useParams()
    // const getApartment = Data.find((apart) => {
    //   return apart.id === id
    // })

    return (
        <div className='apartmentPage'>
        <img src="https://picsum.photos/200/300" alt='photoAppartement'/>
        <div className='apartementHeader'>
            <div className="apartmentTittle"> 
            <h1>Crazy loft on Canal st Martin</h1>
            <h2>Paris, Ile de France</h2>
                <div className='apartmentTags'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris10</span>
                </div>
            </div>
            <div className='apartmentOwner'>
                <div className="apartmentOwnerDetails">
                    <h3> 
                        <span>Alexandre</span>
                        <span>Dumas</span> 
                    </h3>
                    <div className='apartmentOwnerBadge'></div> 
                </div>
                         <div className='apartmentOwnerStars'>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                            <span>★</span>
                         </div>
            </div>
        </div>    
            <div className='apartmentDescription'>
                <p className='apartmentDescriptionTitle'>Description</p>
                <p className="apartmentDescriptionText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque voluptatibus eum officiis sequi autem qui unde soluta corporis, dolorum quae doloribus debitis id ea corrupti voluptate accusantium facere, quo illo molestias. Vel et quaerat temporibus magni corporis similique nam id consequatur ad voluptatum dignissimos dicta, fuga commodi rem sint!</p>
            </div>
            <div className='apartmentEquipement'>
                <p className='apartmentEquipementTitle'>Equipement</p>
                <p className="apartmentEquipementText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste cumque voluptatibus eum officiis sequi autem qui unde soluta corporis, dolorum quae doloribus debitis id ea corrupti voluptate accusantium facere, quo illo molestias. Vel et quaerat temporibus magni corporis similique nam id consequatur ad voluptatum dignissimos dicta, fuga commodi rem sint!</p>
            </div>

        </div>
    )
};

export default Apartment;