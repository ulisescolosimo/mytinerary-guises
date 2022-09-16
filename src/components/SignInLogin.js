import React from 'react'
import '../styles/SignForm.css'
import SignInGoogle from './SignInGoogle'
import { useRef, useState } from 'react'
import { useGetLoginMutation } from '../features/usersAPI'
import { Link, useNavigate } from 'react-router-dom'
import Alerts from './Alerts'

const SignInLogin = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const formRef = useRef()

    const [newLogin] = useGetLoginMutation()
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const handleNavigate = () => {
      navigate('/')
    }

    const signIn = async(data) => {
      await newLogin(data)
        .then((succes) => {
          setError("Sign in successfully")
          formRef.current.reset()
          let user = (succes?.data?.response?.user)
          localStorage.setItem("userLogged", JSON.stringify(user))
          handleNavigate()
    })
}

    const handleForm = async(e) => {

      e.preventDefault();

      let data = {
        email: emailRef.current.value,
        pass: passwordRef.current.value,
        from: 'form'
      }

      if(emailRef.current.value == "" || passwordRef.current.value == ""){
        setError('Please fill all credentials')
      } else {
        signIn(data)
    }
  }
  return (
    <div className='container-user'>
      <div className='container-signup'>
        <div className='container-infoForm'>
          <div className='container-textInfo'>
            <h3>Dont have an account?</h3>
            <p>If you need to register click here!</p>
            <Link to='/auth/signup'><button style={{cursor: 'pointer'}}>Sign Up</button></Link>
            <div className="img-signin">
              <img src='../assets/travelers.png' />
            </div>
          </div>
        </div>
        <div className='container-registerForm'>
              <h2 className='title-signup'>Sign In</h2>
              <form className='form-signup' ref={formRef} onSubmit={handleForm}>                                                                                       
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
                    <button type="submit" style={{cursor: 'pointer'}}>Sign In</button>                                       
              </form>
              <Alerts error={error} />
              <div>
                <p style={{textAlign: 'center', color: 'white'}}>Or</p>
              </div>
              <div className='button-google'>
                <SignInGoogle /> 
              </div>
            </div>
      </div>
    </div>
  )
}

export default SignInLogin