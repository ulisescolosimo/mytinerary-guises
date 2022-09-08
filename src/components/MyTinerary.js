import React from 'react'
import { useGetItinerariesUserQuery } from '../features/myTineraryAPI'

const MyTinerary = () => {

  let Roberto = "6319367fa84e9d66368eed97"

  let Ulises = "6319367fa84e9d66368eed95"

  let Guido = "6319367fa84e9d66368eed96"

  const { data: myitineraries } = useGetItinerariesUserQuery(Guido)

  let myitinerariesDetail = myitineraries?.response

  console.log(myitinerariesDetail);

  return (
    <>
        <div className='Mytineraries-div-title'>
            <h2>My Tineraries</h2>
        </div>
        <div className='MyTineraries-div' >
            { myitinerariesDetail ?
                myitinerariesDetail?.map((item)=>{
                    return (
                        <div className="Itinerary-detail">
                            <div className='itinerary-div-img' >
                                <img src={item?.photo} className="Itinerary-img" alt={item.city} />
                            </div>
                            <div className='itinerary-div-text-activities' >

                                <div className='itinerary-div-p myItineraries-text' >
                                    <h3 className="Itinerary-p"> {item.name} </h3>
                                    <div className='text-itinerary'>
                                    <p className="Itinerary-p"> Duration: {item.duration} </p>
                                    <p className="Itinerary-p"> Price: $ {item.price} </p>
                                    </div>

                                </div>


                            </div>

                        </div>
                        
                    )
                })
                : <p> You dont have Itineraries yet</p>
            } 
        </div>
    </>
    
  )
}

export default MyTinerary