import React from 'react'
import '../styles/MyTinerary.css'
import { useGetItinerariesUserQuery } from '../features/myTineraryAPI'

const MyTinerary = () => {

    
    let user
    if(localStorage.length > 0) {
        user =  JSON.parse(localStorage.getItem('userLogged'))
    } 
    
    const { data: myitineraries } = useGetItinerariesUserQuery(user?._id)

    let myitinerariesDetail = myitineraries?.response

return (
    <>
        <div className='container-mytiGeneral'>
            <div className='container-mytiTitle'>
                <h1 style={{textAlign: 'center'}}>My Tineraries</h1>
            </div>
            <div className="container-user-iti">
                <h2>{user?.name}</h2>
                <img style={{borderRadius: '20px'}} src={user?.photo} />
            </div>
            <div className='container-mytinerary' >
                { myitinerariesDetail?.length > 0 ?
                    myitinerariesDetail?.map((item)=>{
                        return (<>
                            <div className="container-myti">
                                    <div className='itinerary-div-p myItineraries-text' >
                                        <h3 className="Itinerary-p"> {item.name} </h3>
                                        <div className='text-itinerary'>
                                        <p className="Itinerary-p"> Duration: {item.duration} minutes </p>
                                        <p className="Itinerary-p"> Price: $ {item.price} </p>
                                        <p className="Itinerary-p">  {item.likes}  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg> </p>
                                        <div className='container-tags'>
                                            {item?.tags?.map((item) => <span className="tags">{item}</span>)}
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