import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import '../styles/Itinerary.css'
import axios from "axios";


const Itinerary = () => {
      
      const { id } = useParams();
      const [itinerary, setItinerary] = useState({}) 

      useEffect(() =>{
            async function fetchData() {
                  const itineraries = await axios.get(`http://localhost:4000/itineraries/${id}`)
                  setItinerary(itineraries.data.response)
                }
                fetchData();
            }, []);
      return (
            <div className='container-detail'>                             
                  <div className='container-card'>
                        <div className='container-profile'>    
                              <div className='container-user'>
                                    <h3>{itinerary.user}Diego Armando</h3>  
                              </div>
                              <div className='imgProfile'>
                                    <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/muere-maradona-1606326764.jpg?crop=0.845xw:1.00xh;0.0783xw,0&resize=640:*'/>
                              </div>
                        </div>
                        <div className='container-itinerary'>
                              <div className='container-name'>
                                    <h2>{itinerary.name}Napoli</h2>                      
                              </div>
                              <div className='container-city'>
                                    <h3>{itinerary.city}</h3>
                              </div>
                              <div className='container-price'>
                                    <h4>{itinerary.price}</h4>
                              </div>
                              <div className='container-likes'>
                                    <h4>{itinerary.likes}</h4>
                              </div>
                              <div className='container-tags'>
                                    <h4>{itinerary.tags}</h4>
                              </div>
                              <div className='container-duration'>
                                    <h4>{itinerary.duration}</h4>
                              </div>
                        </div>
                  </div>
            </div>
                  
        
            
      )
}

export default Itinerary
