import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../styles/Itinerary.css'
import Activities from '../components/Activities'
import Comments from '../components/Comments'
import { useLikeOrDislikeMutation, useGetDetailsMutation } from '../features/itineraryAPI'

const Itinerary = ({city}) => {

      const { id } = useParams()

      console.log(city);

      const [recharge, setRecharge] = useState(true)

      const [likeOrDislike] = useLikeOrDislikeMutation()
      const [getDetails] = useGetDetailsMutation()

      useEffect(()=>{
            getDetails(id)
      },[recharge])

      async function like(idItinerary) {
            if (localStorage.getItem('token')) {
            try {
                  let res = await likeOrDislike(idItinerary)
                  console.log(res);
                  if (res.data?.success) {
                        setRecharge(!recharge)
                        console.log(recharge);
                  } else {
                        console.log(res.error)
                  }
            } catch(error) {
                  console.log(error)
                  }
            }
      }

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
                                    <span style={{cursor:'pointer'}} onClick={()=>like(item?._id)} >
                                          {recharge ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                          </svg> :  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                          </svg>
                                          }
                                    </span>
                              </div>   
                              <div className='container-tags'>
                                    {item?.tags?.map((item) => <span className="tags">{item}</span>)}
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