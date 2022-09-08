import React from 'react'
import '../styles/Itinerary.css'
import Activities from '../components/Activities'
import Comments from '../components/Comments'

const Itinerary = ({city}) => {

      console.log(city);

      return (
            <div className='container-detail'>
                  {city?.map((item) => (
                        <>
                        <div className='container-card'>                      
                        <div className='container-itinerary' style={{background: 'linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)))'}}>
                              <div className='container-name'>
                                    <p>{item?.name}</p>                      
                              </div>
                              <div className='container-price'>
                                    <p>Price: ${item?.price}</p>
                              </div>                                                      
                              <div className='container-duration'>
                                    <p>Duration: {item?.duration} minutes</p>
                              </div>
                              <div className='container-likes'>
                                    <p>{item?.likes} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg></p>
                              </div>   
                              <div className='container-tags'>
                                    {item?.tags?.map((item) => <span className="tags">{item}</span>)}
                              </div>
                        </div>
                        <div className='container-profile'>    
                              <div className='container-user'>
                                    <p className="name-user">{item?.user?.name}</p>  
                              </div>
                              <div className='imgProfile'>
                                    <img className="img-user" style={{height: '100%', width: '100%'}} src={item?.user?.photo} />
                              </div>
                        </div>
                  </div>
                  <Activities id={item._id} />
                  <Comments/>
                  </>
                  ))}                          
            </div>
      )
}

export default Itinerary