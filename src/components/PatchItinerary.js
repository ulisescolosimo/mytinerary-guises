import React from 'react'
import { useState, useRef } from 'react'
import '../styles/MyTineraryEdit.css'
import Input from './Input'
import { useUpdateItineraryUserMutation, useGetItinerariesUserQuery } from '../features/myTineraryAPI' 
import Alerts from './Alerts'

const EditItineraryUser = () => {

      let user 
      if(localStorage.length > 0) {
            user =  JSON.parse(localStorage.getItem('userLogged'))
        } 

     
      const {data: items} = useGetItinerariesUserQuery(user?.id)
      const [open, setOpen] = useState(false)
      const [selected, setSelected] = useState({
            value: '',
            id: ''
          })

      const nameRef = useRef()
      const priceRef = useRef()
      const durationRef = useRef()
      const formRef = useRef()
     
      const inputsArray = [
            {name: "name", ref: nameRef, typeText:'text'},
            {name: "price", ref: priceRef, typeText:'text'},
            {name: "duration", ref: durationRef, typeText:'text'},
      ]

      const handleClick = () => {
            setOpen(!open)
          }

      const handleSelected = (e) => {
            setSelected({
                  value: e.target.value,
                  id: e.target[e.target.selectedIndex].id  
            })
      }

      const [error, setError] = useState("");

      const [editItineraryUser] = useUpdateItineraryUserMutation(user?.id)
       
      const edited = async(editedItineraryUser) => {
                  await editItineraryUser(editedItineraryUser)
                  .unwrap()
                  .then((succes) => {
                  setError("Itinerary edited successfully")
                  formRef.current.reset()
            })
            .catch((error) => {
                  setError(error.data.message);
            });
      }

      const handleSubmit = async(e) => {

            e.preventDefault()

            let editedItineraryUser = {
                  name:nameRef.current.value,
                  price:priceRef.current.value,
                  duration:durationRef.current.value,
                  id: selected.id
            }

            if(nameRef.current.value == "" || priceRef.current.value == "" || durationRef.current.value == ""){
                  setError('Please fill all inputs')
                }else{
                  edited(editedItineraryUser);
                }
            }  
      return (
            <>
            <div className='editItinerary-container'>  
            {open ? 
                  <div className="form-edit-container">
                  <form className="edit-form-itineraries" onSubmit={handleSubmit} ref={formRef}>
                        <select className="select-form" onChange={handleSelected}>
                        <option selected>Select itinerary</option>
                        {items?.response.map(item => 
                                    <option value={item.name} id={item._id}>{item.name}</option>
                              )}
                        </select>
                        <div className="container-forms">
                              {inputsArray.map((item => 
                                    <Input myRef={item.ref} name={item.name} typeText={item.typeText} />
                                    ))}
                        </div>
                        <button className="btn-edit" style={{cursor: 'pointer', padding: '15px'}}>Edit !</button>
                        <Alerts error={error} />
                  </form>                 
                  </div>   :null}      
                  <button className="see-more" onClick={handleClick}>{open ? "Go back" : "Edit your itinerary" }</button>      
                                    
      </div>
      </>
      )
}

export default EditItineraryUser