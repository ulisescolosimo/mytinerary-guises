import {React, useRef, useState} from 'react';
import Input from './Input'
import '../styles/NewCities.css'


const Form = () => {

    const countryRef = useRef()
    const cityRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()
    const imageRef = useRef()

    const [countries, setCountry] = useState([])
 
    const handleForm = (e) => {
        e.preventDefault()
        const object = {
            country : countryRef.current.value,
            city: cityRef.current.value,
            population: populationRef.current.value,
            foundation: foundationRef.current.value,
            imgurl: imageRef.current.value
        }
        setCountry([...countries, object])
    } 

    

  return (
    <div className="container-newcities">
    <form className="form-cities" onSubmit={handleForm}>
        <div className="input-label">
            <label htmlFor="country">Country</label>
            <Input forwardRef={countryRef} id="Country" />
        </div>
        <div className="input-label">
            <label htmlFor="city">City</label>
            <Input forwardRef={cityRef} id="city" />
        </div>
        <div className="input-label">
            <label htmlFor="population">Population</label>
            <Input forwardRef={populationRef} id="population" />
        </div>
        <div className="input-label">
            <label htmlFor="year">Foundation year</label>
            <Input forwardRef={foundationRef} id="year" />
        </div>
        <div className="input-label">
            <label htmlFor="image">Image</label>
            <Input forwardRef={imageRef} id="image" />
        </div>
        <button type="submit" className="button-form">Add city</button>
    </form>
    </div>
  )
}

export default Form