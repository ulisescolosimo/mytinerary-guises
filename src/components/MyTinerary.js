import React from 'react'
import '../styles/MyTinerary.css'
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
        <div className='container-mytiGeneral'>
            <div className='container-mytiTitle'>
                <h2>My Tineraries</h2>
            </div>
            <div className='container-mytinerary' >
                { myitinerariesDetail ?
                    myitinerariesDetail?.map((item)=>{
                        return (<>
                            <div className="container-user-iti">
                                <p>User: {item.user.name}</p>
                                <img src={item.user.photo} />
                            </div>
                            <div className="container-myti">
                                <div className='container-mytiText' >
                                    <div className='itinerary-div-p myItineraries-text' >
                                        <h3 className="Itinerary-p"> {item.name} </h3>
                                        <div className='text-itinerary'>
                                        <p className="Itinerary-p"> Duration: {item.duration} minutes </p>
                                        <p className="Itinerary-p"> Price: $ {item.price} </p>
                                        <p className="Itinerary-p">  {item.likes}  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg> </p>
                                        <p className="Itinerary-p"> {item.tags} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </>
                        )
                    })
                    : <p> No itineraries for this user</p>
                } 
            </div>
        </div>    
    </>
    
)
}

export default MyTinerary