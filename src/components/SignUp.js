import React from 'react'
import '../styles/SignForm.css'

export default function SignUp() {

 const inputsArray = [
            {name: "firstName",  type:'text'},
            {name: "lastName",  type:'text'},
            {name: "email",  type:'email'},
            {name: "pass",  type:'password'},
            {name: "image ",  type:'url'},
            {name: "country", type:'country' }
            ] 
  return (
    <div className='container-user'>
      <div className='container-signup'>
        <div className='container-infoForm'>
          <img src='./assets/travelers.png' />
        </div>
        <div className='container-registerForm'>
              <form className='form-signup'>
                  <div className='name-container'>
                    <div className='container-input'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <input type={'text'}></input>
                     </div>
                      <div className='container-input'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <input type={'text'}></input>
                    </div>                                                           
                  </div>                                  
                  <div>
                    <div className='container-input'><input></input></div>
                    <div className='container-input'><input></input></div>
                    <div className='container-input'><input></input></div>
                    <div className='container-input'><input></input></div>
                  </div>                      
              </form>
        </div>
      </div>
    </div>
  )
}


//ref: firstRef
//ref: lastRef
//ref: emailRed
//ref: passRef
//ref: imageRef
//ref: countryRef