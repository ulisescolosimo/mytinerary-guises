import { useGetAllUsersQuery } from '../features/usersAPI';
import { useCreateItineraryMutation } from '../features/itineraryAPI';
import { useGetAllCitiesQuery } from '../features/citiesApi';
import React, { useRef, useState } from 'react'
import '../styles/newItinerary.css'

function NewItinerary() {

  let userLoggin

  if(localStorage.length > 0) {
      userLoggin =  JSON.parse(localStorage.getItem('userLogged'))
  } 

  const [createNewItinerary] = useCreateItineraryMutation()

  const { data: users } = useGetAllUsersQuery();

  let usersAll = users?.response;

  const { data: cities } = useGetAllCitiesQuery()

  let allCities = cities?.response

  const [cityId, setCityId] = useState({
      id: "",
      value: "",
  });

  const nameItineraryRef = useRef()
  const priceItineraryRef = useRef()
  const durationItineraryRef = useRef()
  const likesItineraryRef = useRef()
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
    },
    {
        id: "_Likes",
        name: "Likes",
        type: "text",
        value: likesItineraryRef,
    }
]

const handleSelectCity = (e) => {
  e.preventDefault();
  setCityId({
    value: e.target.value,
    id: e.target[e.target.selectedIndex].id,
  });
}

  const arrayLikes = []
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

    arrayLikes.push(likesItineraryRef.current.value)
    arrayTags.push(tagsItineraryRef.current.value)

    let newitinerary = {
        name: nameItineraryRef.current.value,
        user: userLoggin?.[0]._id,
        city: cityId.id,
        price: priceItineraryRef.current.value,
        duration: durationItineraryRef.current.value,
        likes: arrayLikes,
        tags: arrayTags,
    };

    await createNewItinerary(newitinerary)

    formRef.current.reset()

  }

  return (
    <div className="container-newitineraries">
      <div className="profile-card">
        <div className="prof-img">
          <img src={userLoggin?.[0].photo} style={{borderRadius: '20px'}} alt="profile-img" />
        </div>
        <div className="profile-data">
          <h2>{userLoggin?.[0].name}</h2>
          <p>
            <strong>Email: </strong> {userLoggin?.[0].email}
          </p>
          <p>
            <strong>User id: </strong>
            {userLoggin?.[0]._id}
          </p>
        </div>
      </div>
      <div className="profile-creation">
        <div className="MyTineraries-div">
          
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
              <input className="btn-form" type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default NewItinerary