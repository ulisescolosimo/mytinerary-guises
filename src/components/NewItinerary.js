import { useCreateItineraryMutation } from '../features/itineraryAPI';
import { useGetAllCitiesQuery } from '../features/citiesApi';
import React, { useRef, useState } from 'react'
import '../styles/newItinerary.css'
import Alerts from './Alerts'

function NewItinerary() {

  const [error, setError] = useState("");

  let user

  if(localStorage.length > 0) {
    user =  JSON.parse(localStorage.getItem('userLogged'))
  } 

  const [createNewItinerary] = useCreateItineraryMutation()

  const { data: cities } = useGetAllCitiesQuery()

  let allCities = cities?.response

  const [cityId, setCityId] = useState({
      id: "",
      value: "",
  });

  const nameItineraryRef = useRef()
  const priceItineraryRef = useRef()
  const durationItineraryRef = useRef()
  const tagsItineraryRef = useRef()
  const formRef = useRef()

  const arrayForm = [
    {
        id: "_name",
        name: "Name",
        type: "text",
        value: nameItineraryRef,
    },
    {
        id: "_price",
        name: "Price",
        type: "text",
        value: priceItineraryRef,
    },
    {
        id: "_duration",
        name: "Duration",
        type: "text",
        value: durationItineraryRef,
    },
    {
        id: "_tags",
        name: "Tags",
        type: "text",
        value: tagsItineraryRef,
    }
]

const handleSelectCity = (e) => {
  e.preventDefault();
  setCityId({
    value: e.target.value,
    id: e.target[e.target.selectedIndex].id,
  });
}
  const arrayTags = []

const formView = (e) => {
  return (
      <label key={e.id}>
          Enter {e.name}: <br />
          <input
              className="btn-form"
              type={e.type}
              name={e.name}
              ref={e.value}
          />
      </label>
  );
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    arrayTags.push(tagsItineraryRef.current.value)

    let newitinerary = {
        name: nameItineraryRef.current.value,
        user: user.id,
        city: cityId.id,
        price: priceItineraryRef.current.value,
        duration: durationItineraryRef.current.value,
        tags: arrayTags,
        likes: []
    };

    if(nameItineraryRef.current.value == "" || priceItineraryRef.current.value == "" || durationItineraryRef.current.value == "" || arrayTags.length == 0){
      setError('Please fill all credentials')
    } else {
      await createNewItinerary(newitinerary)
      setError('Itinerary created successfully')
      formRef.current.reset()
    }


  }

  return (
    <div className="container-newitineraries">
      <div className='container-profileNew'>
        <div className="profile-card">
          <div className="prof-img">
            <img src={user?.photo} style={{borderRadius: '20px'}} alt="profile-img" />
          </div>
          <div className="profile-data">
            <h2>{user?.name}</h2>
          </div>
        </div>
      </div>
      <div className="profile-creation">
        <div className="MyTineraries-d iv">
          
        <form id="form-new-users" onSubmit={handleSubmit} ref={formRef}>
          <div className="container-new-user">

              <p style={{textAlign: 'center'}}>Add New Itinerary</p>

              <div className="container-selects">
              <select onChange={handleSelectCity} className="btn-form">
          <option>Select a city</option>

          {allCities?.map((city) => {
            return (
              <option key={city?._id} id={city?._id} value={city?.city}>
                {city?.city}
              </option>
            );
          })}
        </select>
        </div>
              <div className="new-user-input">{arrayForm.map(formView)}</div>
              <input className="btn-formSumb" type="submit" value="Create!" />
          </div>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', width:'100%', marginBottom:'30px'}}>
          <Alerts error={error} color={'black'} style={{margin:'20px'}} />
        </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default NewItinerary