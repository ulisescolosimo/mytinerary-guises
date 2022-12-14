import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useGetLoginMutation } from '../features/usersAPI'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { loggedTrue } from '../features/loggedSlice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInGoogle = () => {

  const buttonDiv = useRef(null)

  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/')
  }

  const showLoginMsg = (user) => {
    toast.success(`Welcome ${user}!`, {
        position: toast.POSITION.BOTTOM_RIGHT
    });
  };

  const dispatch = useDispatch()

  const [newLogin] = useGetLoginMutation()

    async function handleCredentialResponse (response) {

        let userObject = jose.decodeJwt(response.credential)

        let data = {
          email: userObject.email,
          pass: userObject.sub,
          from: 'google'
        }

          newLogin(data)
          .then((succes) => {
            let user = succes?.data?.response?.user
            let token = succes?.data?.response?.token
            localStorage.setItem("userLogged", JSON.stringify(user))
            localStorage.setItem("token", JSON.stringify(token))
            dispatch(loggedTrue())
            showLoginMsg(user.name)
            handleNavigate()
        })
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
</div>
)
}

export default SignInGoogle

