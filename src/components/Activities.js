import React from 'react'
import '../styles/Activity.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

 const Activities = () => {

           /*  const { id } = useParams();
          
            const [activity, setActivities] = useState() 
            
              async function fetchData() {
                  let response = await axios(
                        `http://localhost:4000/activities/?itinerary=${id}`
                  );
                  let activities = await response.data;
                  setActivities(activities.response);
                  console.log(activities.name);
              }
          
              useEffect(() => {
                  fetchData(); /*  */

  return (
    <div className='container-activities'>
      <div className='container-activity' style={{background: `url(https://images.unsplash.com/photo-1662487845610-d3ae5e19a828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)`}}>
            <h3>Pic</h3>
      </div>
      <div className='container-activity' style={{background: `url(https://images.unsplash.com/photo-1662487845610-d3ae5e19a828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)`}}>
            <h3>Pic Eiffel Tower</h3>
      </div>
      <div className='container-activity' style={{background: `url(https://images.unsplash.com/photo-1662487845610-d3ae5e19a828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)`}}>
            <h3>Pic Eiffel Tower</h3>
      </div>
      
    </div>
  ) 
}

export default Activities


