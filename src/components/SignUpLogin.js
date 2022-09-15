import React from 'react'
import '../styles/SignForm.css'
import SignUpGoogle from './SignUpGoogle'
import { useRef, useState } from 'react'
import { useGetNewUserMutation, useGetAllUsersQuery } from '../features/usersAPI'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function SignUp() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/signin')
  }

    const [role, setRole] = useState()

    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const imageRef = useRef()
    const countryRef = useRef()
    const formRef = useRef()

    const [newUser] = useGetNewUserMutation()

    const { data : users } = useGetAllUsersQuery()
    let usersResponse = users?.response
    let userLogged = usersResponse?.filter(user => user.logged)

    const handleForm = async(e) => {

      e.preventDefault();

      let data = {
        country: countryRef.current.value,
        photo: imageRef.current.value,
        name: nameRef.current.value,
        pass: passwordRef.current.value,
        email: emailRef.current.value,
        from: 'form',
        role: 'user',
      }

      
      await newUser(data)
      let timerInterval
      Swal.fire({
        title: 'Great, you are already registered!',
        timer: 4000,
        icon: 'success',
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 300)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      formRef.current.reset()
      handleNavigate()
      setTimeout(() => {
        window.location.reload()
      }, 500)
      }

  return (
    <div className='container-user'>
      <div className='container-signup'>
        <div className='container-infoForm'>
          <div className='container-textInfo'>
            <h3>Do you belong?</h3>
            <p style={{textAlign: 'center'}}>If you already have an account sign in here!</p>
            <Link to='/auth/signin'><button style={{cursor: 'pointer'}}>Sign In</button></Link>
          </div>
          <div className="img-signin">
            <img src='../assets/travelers.png' />
          </div>
        </div>
        <div className='container-registerForm'>
              <h2 className='title-signup'>Sign Up</h2>
              <form className='form-signup' ref={formRef} onSubmit={handleForm}>
                    <label className='container-input'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <input type='text' placeholder="Full name" name='name' required ref={nameRef} id='name' />
                    </label>                                                                                         
                    <label className='container-input'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                      </svg>
                      <input type='email' required placeholder="Email" name='email' ref={emailRef} id='email' />
                    </label>
                    <label className='container-input'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-key-fill" viewBox="0 0 16 16">
                        <path d="M3.5 11.5a3.5 3.5 0 1 1 3.163-5H14L15.5 8 14 9.5l-1-1-1 1-1-1-1 1-1-1-1 1H6.663a3.5 3.5 0 0 1-3.163 2zM2.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                      </svg>
                      <input type='password' required placeholder="Password" name='pass' ref={passwordRef} id='pass' />
                    </label>

                    <label className='container-input'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera" viewBox="0 0 16 16">
                        <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z"/>
                        <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                      </svg>
                      <input type='text' required placeholder="Image" ref={imageRef} name='photo' id='photo' />
                    </label>

                    <label className='container-input'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge-fill" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z"/>
                      </svg>
                      <input type='text' required placeholder="Country" ref={countryRef} name="country" id='country' />
                    </label>
                    <button type="submit" style={{cursor: 'pointer'}}>Sign Up</button>                                      
              </form>
              <div>
                <p style={{textAlign: 'center', color: 'white'}}>Or</p>
              </div>
              <div className='button-google'>
              <SignUpGoogle/> 
              </div>
            </div>
      </div>
    </div>
  )
}
