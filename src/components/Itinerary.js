import React from 'react'
import '../styles/Itinerary.css'
import Activities from '../components/Activities'
import Comments from '../components/Comments'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'


const Itinerary = ({itinerary}) => {

      let data = Array.from(itinerary)

      console.log(data);

      const [activities, setActivities] = useState({})

      useEffect(() =>{
                  async function fetchActivities() {
                        const acts = await axios.get(`http://localhost:4000/activities/`)
                        setActivities(acts.data.response)
                  }
                        fetchActivities();
                  }, []);

      return (
            <div className='container-detail'>
                  {data.map((item) => (
                        <>
                        <div className='container-card'>                      
                        <div className='container-itinerary' style={{background: 'linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)))'}}>
                              <div className='container-name'>
                                    <h2>{item.name}</h2>                      
                              </div>
                              <div className='container-price'>
                                    <h4>Price: ${item.price}</h4>
                              </div>                                                      
                              <div className='container-duration'>
                                    <h4>Duration: {item.duration} minutes</h4>
                              </div>
                              <div className='container-likes'>
                                    <h4>{item.likes} <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                    </svg></h4>
                              </div>   
                              <div className='container-tags'>
                                    <h4>{item.tags.map((item) => <span className="tags">{item}</span>)}</h4>
                              </div>
                        </div>
                        <div className='container-profile'>    
                              <div className='container-user'>
                                    <h3>{item.user.name}</h3>  
                              </div>
                              <div className='container-id'>
                                    <h3>ID: {item.user._id}</h3>  
                              </div>
                              <div className='imgProfile'>
                                    
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
