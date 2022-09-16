import React, { useEffect, useRef, useState } from 'react'
import * as jose from 'jose'
import { useGetLoginMutation } from '../features/usersAPI'
import { Link, useNavigate } from 'react-router-dom'
import Alerts from './Alerts'

const SignInGoogle = () => {

  const buttonDiv = useRef(null)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  const [error, setError] = useState("");

  const signInGoogle = async(data) => {
    await newLogin(data)
      .unwrap()
      .then((succes) => {
        setError("Sign in successfully")
  })
  .catch((error) => {
    setError(error.data.message);
  });
  }

  const [newLogin] = useGetLoginMutation()

    async function handleCredentialResponse (response) {

        let userObject = jose.decodeJwt(response.credential)

        let data = {
          email: userObject.email,
          pass: userObject.sub,
          from: 'google'
        }

        if(!error){
          signInGoogle(data);
          setTimeout(() => {
          handleNavigate()
          window.location.reload()
        }, 3000)
        }
    }

  useEffect(()=> {
    /* global google */
    google.accounts.id.initialize({
        client_id: "1068195771607-dtoj7c4iao1o9qmt8kc2k2idpb7vk0p4.apps.googleusercontent.com",
        callback: handleCredentialResponse,
        context: 'signin'
    });
    google.accounts.id.renderButton(
        buttonDiv.current,
        { theme: "filled_black", size: "medium", text: "signin_with", locale: 'en', type: "standar"}  // customization attributes
    );
}, [])

return (
<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <div ref={buttonDiv}>
    
    </div>
    <Alerts error={error} style={{width: 'auto'}} />
</div>
)
}

export default SignInGoogle
