import {React, useCallback, useRef, useState} from 'react';
import Input from './Input'
import '../styles/NewCities.css'


const Form = () => {

    const countryRef = useRef()
    const cityRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()
    const imageRef = useRef()
    const descriptionRef = useRef()

    const [countries, setCountry] = useState([])
 
    const handleForm = (e) => {

        e.preventDefault();

        const formCity = document.querySelector('.form-cities')

        const object = {
            country : countryRef.current.value,
            city: cityRef.current.value,
            population: populationRef.current.value,
            foundation: foundationRef.current.value,
            description: descriptionRef.current.value,
            imgurl: imageRef.current.value
        };
        console.log(countries);
        setCountry([...countries, object]);
        formCity.reset();

        console.log(countries);
    }

    const inputsArray = [
                    {name: "photo", ref: imageRef},
                    {name: "city", ref: cityRef},
                    {name: "country", ref: countryRef},
                    {name: "population", ref: populationRef},
                    {name: "fundation", ref: foundationRef},
                    {name: "description", minlength:"10", cols: "27", rows:"5", ref: descriptionRef}
                    ]

  return (
    <div className="container-newcities">
    <form className="form-cities" onSubmit={handleForm}>
        {inputsArray.map((item => <Input myRef={item.ref} name={item.name} />))}
        <button type="submit" className="button-form">Add city</button>
    </form>
    </div>
  )
}

export default Form