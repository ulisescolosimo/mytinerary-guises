import {React, useRef, useState} from 'react';
import Input from './Input'
import '../styles/NewCities.css'
import { useGetNewCityMutation } from '../features/citiesApi'
import Alerts from './Alerts'

const Form = () => {

    const countryRef = useRef()
    const cityRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()
    const imageRef = useRef()
    const descriptionRef = useRef()
    const formRef = useRef()

    const [addNewPost] = useGetNewCityMutation()
    const [error, setError] = useState("");

    const newCity = async(object) => {
      await addNewPost(object)
        .unwrap()
        .then((succes) => {
        setError("City created successfully")
        formRef.current.reset()
      })
      .catch((error) => {
        setError(error.data.message);
      });
  }

    const handleForm = async(e) => {

      e.preventDefault();

      let object = {
        country : countryRef.current.value,
        city: cityRef.current.value,
        population: populationRef.current.value,
        foundation: foundationRef.current.value,
        description: descriptionRef.current.value,
        photo: imageRef.current.value
      }

      if(cityRef.current.value == "" || countryRef.current.value == "" || populationRef.current.value == "" || foundationRef.current.value == "" || descriptionRef.current.value == "" || imageRef.current.value == ""){
        setError('Please fill all inputs')
        console.log(error);
      }else{
        newCity(object);
      }
      }

      
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
                <img src='./assets/travel.png' alt="travel" />
            </div>          
          </div>
          <div className="container-form">
          <form className="form-cities" onSubmit={handleForm} ref={formRef}>
                  {inputsArray.map((item => <Input myRef={item.ref} name={item.name} typeText={item.typeText} />))}
                  <button type="submit" className="button-form">Add city</button>
                  <Alerts error={error} />
          </form>
          </div>   
      </div>  
    </div>
  )
}

export default Form