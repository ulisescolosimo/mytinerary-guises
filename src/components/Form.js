import {React, useRef} from 'react';
import Input from './Input'
import '../styles/NewCities.css'
import axios from 'axios';


const Form = () => {

    const countryRef = useRef()
    const cityRef = useRef()
    const populationRef = useRef()
    const foundationRef = useRef()
    const imageRef = useRef()
    const descriptionRef = useRef()
    const formRef = useRef()
 
    const handleForm = (e) => {

        e.preventDefault();

        axios.post(`http://localhost:4000/cities/`,  {

        country : countryRef.current.value,
        city: cityRef.current.value,
        population: populationRef.current.value,
        foundation: foundationRef.current.value,
        description: descriptionRef.current.value,
        photo: imageRef.current.value
      
        })

        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch((error) => console.log(error));

      formRef.current.reset()
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
                <img src='./assets/travel.png' />
            </div>          
          </div>
          <div className="container-form">
          <form className="form-cities" onSubmit={handleForm} ref={formRef}>
                  {inputsArray.map((item => <Input myRef={item.ref} name={item.name} typeText={item.typeText} />))}
                  <button type="submit" className="button-form">Add city</button>
          </form>
          </div>   
      </div>  
    </div>
  )
}

export default Form