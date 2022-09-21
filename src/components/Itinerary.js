import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/Itinerary.css'
import Activities from '../components/Activities'
import Comments from '../components/Comments'
import { useLikeOrDislikeMutation, useGetItisMutation } from '../features/itineraryAPI'

const Itinerary = () => {

      const { id } = useParams()

      const [likeOrDislike] = useLikeOrDislikeMutation()

      const [getCity] = useGetItisMutation();

      const [city,setData] = useState()
      const [reload,setReload] = useState(true)

      useEffect(()=>{
            getEvent()
      },[reload])

      async function getEvent() {
            await getCity(id)
                  .then((res)=>{
                        if (res.data?.success) {
                              setData(res.data.response)
                              setReload(!reload)
                        } else {
                        console.log(res.error)
                        }
            })
      }

      async function like(event) {
            await likeOrDislike(event.target.id)
            console.log("Click");
            console.log(city);
      }


      return (
            <div className='container-detail'>
                  {city?.map((item) => 
                  (
                        <>
                        <div className='container-card'>                      
                        <div className='container-itinerary' style={{background: 'linear-gradient(rgba(0,0,0,.85),rgba(0,0,0,.5)))'}}>
                              <div className='container-name'>
                                    <p>{item.name}</p>                      
                              </div>
                              <div className='container-price'>
                                    <p>Price: ${item.price}</p>
                              </div>                                                      
                              <div className='container-duration'>
                                    <p>Duration: {item.duration} minutes</p>
                              </div>
                              <div className='container-likes'>
                                    {item.likes.includes(item.user._id) ? 
                                    <button className={'Itinerary-like-btn'} style={{cursor:'pointer'}} onClick={like} id={item._id}>Like</button>
                                    :
                                    <button className={'Itinerary-dislike-btn'} style={{cursor:'pointer'}} onClick={like} id={item._id}>Dislike</button>      
                                    }
                              </div>   
                              <div className='container-tags'>
                                    {item.tags.map((item) => <span className="tags">{item}</span>)}
                              </div>
                        </div>
                        <div className='container-profile'>    
                              <p className="name-user">{item?.user?.name}</p>  
                              <img className="img-user" style={{height: '100%', width: '100%'}} src={item?.user?.photo} />
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