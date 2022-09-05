import React from 'react'
import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import Input from './Input'
import '../styles/Edit.css'

const EditCity = () => {

    const [items, setItems] = useState([])
    const [selected, setSelected] = useState({
      value: '',
      id: ''
    })

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

  const handleSubmit = (e) => {
    e.preventDefault()
    const url = 'http://localhost:4000/cities/'
    let id = selected.id
    axios.patch(url+id, {
      country : countryRef.current.value,
      city: cityRef.current.value,
      population: populationRef.current.value,
      foundation: foundationRef.current.value,
      description: descriptionRef.current.value,
      photo: imageRef.current.value
      })
        .then(response => {
            console.log("Update SUCCESS!")
        })
        .catch(error => {
            console.log(error)
        })
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
            <select onChange={handleSelected}>
                {items.map(item => 
                        <option value={item.city} id={item._id}>{item.city}</option>
                    )}
            </select>
            <div className="container-forms">
                    {inputsArray.map((item => 
                            <Input myRef={item.ref} name={item.name} typeText={item.typeText} />
                        ))}
            </div>
            <button className="btn-edit">Editar!</button>
          </form>
          </div>   
    </div>
  )
}

export default EditCity