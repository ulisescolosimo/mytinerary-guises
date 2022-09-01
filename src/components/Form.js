import {React, useCallback, useEffect, useRef, useState} from 'react';
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
        setCountry([...countries, object]);
        formCity.reset();
      }

      useEffect(() => {
        console.log(countries)
      },[countries])
      
    const inputsArray = [
                    {name: "photo", ref: imageRef, typeText:'text'},
                    {name: "city", ref: cityRef, typeText:'text'},
                    {name: "country", ref: countryRef, typeText:'text'},
                    {name: "population", ref: populationRef, typeText:'text'},
                    {name: "foundation ", ref: foundationRef, typeText:'text'},
                    {name: "description", typeText:'textarea', minlength:"10", cols: "27", rows:"5", ref: descriptionRef}
                    ]

  return (
    <div className='container-root'>
      <div className='container-bg'>
          <div className='container-intro'>
            <div className='container-add'>
                <h3> Add your city !</h3>
                <img src='./assets/travel.png' />
            </div>          
          </div>
          <div className="container-form">
          <form className="form-cities" onSubmit={handleForm}>
                  {inputsArray.map((item => <Input myRef={item.ref} name={item.name} typeText={item.typeText} />))}
                  <button type="submit" className="button-form">Add city</button>
          </form>
          </div>   
      </div>  
    </div>
  )
}

export default Form