import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import '../styles/Edit.css'

const EditCity = () => {

    const [items, setItems] = useState([])

  useEffect(() => {
      axios.get(`http://localhost:4000/cities/all`)
          .then(response => setItems(response.data.response))
  }, [])

const countryRef = useRef()
const cityRef = useRef()
const populationRef = useRef()
const foundationRef = useRef()
const imageRef = useRef()
const descriptionRef = useRef()

  const inputsArray = [
    {name: "photo", ref: imageRef, typeText:'text'},
    {name: "city", ref: cityRef, typeText:'text'},
    {name: "country", ref: countryRef, typeText:'text'},
    {name: "population", ref: populationRef, typeText:'text'},
    {name: "foundation ", ref: foundationRef, typeText:'text'},
    {name: "description", typeText:'textarea', minlength:"10", cols: "27", rows:"5", ref: descriptionRef}
    ]


  return (
    <div className='edit-container'>
          <div className='container-intro'>
            <div className='container-add'>
                <h3> Edit your city !</h3>
                <img src='./assets/travel.png' />
            </div>          
          </div>
          <div className="form-edit-container">
          <form className="edit-form-cities">
            <select>
                {items.map(item => 
                        <option value={item.city}>{item.city}</option>
                    )}
            </select>
            <div className="container-forms">
                    {inputsArray.map((item => 
                        <label className="input-label">{item.name}
                            <input value={item.country} />
                        </label>
                        ))}
            </div>
            <button className="btn-edit">Editar!</button>
          </form>
          </div>   
    </div>
  )
}

export default EditCity