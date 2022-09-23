import React from 'react'
import { useState, useRef } from 'react'
import Input from './Input'
import '../styles/Edit.css'
import { useGetAllCitiesQuery, useUpdateCityMutation } from '../features/citiesApi' 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditCity = () => {

  const {data: items} = useGetAllCitiesQuery()
  const [selected, setSelected] = useState({
    value: '',
    id: ''
  })

const countryRef = useRef()
const cityRef = useRef()
const populationRef = useRef()
const foundationRef = useRef()
const imageRef = useRef()
const descriptionRef = useRef()
const formRef = useRef()

  const inputsArray = [
    {name: "photo", ref: imageRef, typeText:'text'},
    {name: "city", ref: cityRef, typeText:'text'},
    {name: "country", ref: countryRef, typeText:'text'},
    {name: "population", ref: populationRef, typeText:'text'},
    {name: "foundation", ref: foundationRef, typeText:'text'},
    {name: "description", typeText:'textarea', minlength:"10", cols: "27", rows:"5", ref: descriptionRef}
    ]

  const handleSelected = (e) => {
    setSelected({
      value: e.target.value,
      id: e.target[e.target.selectedIndex].id
    })
  }

  const showEditedCity = (msj) => {
    toast.success(msj, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const showErrorEditedCity = (msj) => {
    toast.error(msj, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const [editCity] = useUpdateCityMutation()

  const edited = async(editedCity) => {
    await editCity(editedCity)
      .unwrap()
      .then((succes) => {
        showEditedCity("City edited successfully")
        formRef.current.reset()
    })
    .catch((error) => {
      showErrorEditedCity(error.data.message);
    });
}

  const handleSubmit = async(e) => {

    e.preventDefault()

    let editedCity = {
      country : countryRef.current.value,
      city: cityRef.current.value,
      population: populationRef.current.value,
      foundation: foundationRef.current.value,
      description: descriptionRef.current.value,
      photo: imageRef.current.value,
      id: selected.id
    }

    if(cityRef.current.value == "" || countryRef.current.value == "" || populationRef.current.value == "" || foundationRef.current.value == "" || descriptionRef.current.value == "" || imageRef.current.value == ""){
      showErrorEditedCity('Please fill all inputs')
    }else{
      edited(editedCity);
    }
    }

  return (
    <div className='edit-container'>
          <div className='container-intro'>
            <div className='container-add'>
                <h3> Edit your city !</h3>
                <img src='./assets/travel.png' />
            </div>          
          </div>
          <div className="form-edit-container">
          <form className="edit-form-cities" onSubmit={handleSubmit} ref={formRef}>
            <select className="select-form" onChange={handleSelected}>
                <option disabled>Select city</option>
                {items?.response.map(item => 
                        <option value={item.city} id={item._id}>{item.city}</option>
                    )}
            </select>
            <div className="container-forms">
                    {inputsArray.map((item => 
                            <Input myRef={item.ref} name={item.name} typeText={item.typeText} />
                        ))}
            </div>
            <button className="btn-edit" style={{cursor: 'pointer', padding: '15px'}}>Edit!</button>
          </form>
          </div>   
    </div>
  )
}

export default EditCity