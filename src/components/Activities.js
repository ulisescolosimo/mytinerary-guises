import React from 'react'
import '../styles/Activity.css'
import { useGetActivitiesQuery } from '../features/activitiesAPI'

 const Activities = ({id}) => {

      let idItinerary = id
      const { data: activities } = useGetActivitiesQuery(idItinerary)
      let activitiesEach = activities?.response

      return (
        <>
            { activitiesEach?.length > 0 ?
                activitiesEach?.map((activity)=>{
                    return (
                        <div className='container-activities' key={activity._id}>
                          <div className='container-activity' style={{background: `url(https://images.unsplash.com/photo-1662487845610-d3ae5e19a828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)`}}>
                            <p>{activity.name}</p>
                          </div>
                        </div>
                    )
                })
                :
                <div className="no-activities">
                  <p>This itinerary has no activities yet!</p>
                </div>
            }
        </>
      )
    }

export default Activities