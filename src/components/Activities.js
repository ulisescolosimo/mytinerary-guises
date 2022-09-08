import React from 'react'
import '../styles/Activity.css'
import { useGetActivitiesQuery } from '../features/activitiesAPI'

 const Activities = ({id}) => {

      let idItinerary = id
      const { data: activities } = useGetActivitiesQuery(idItinerary)
      let activitiesEach = activities?.response

      return (
        <div className="container-activities-cards">
            { activitiesEach?.length > 0 ?
                activitiesEach?.map((activity)=>{
                    return (
                          <div className='container-activity' style={{background: `url(${activity.photo})`}}>
                            <p className="p-tira">{activity.name}</p>
                          </div>
                    )
                })
                :
                <div className="no-activities">
                  <p>This itinerary has no activities yet!</p>
                </div>
            }
        </div>
      )
    }

export default Activities