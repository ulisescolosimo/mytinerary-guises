import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'
import { useGetNewUserMutation } from '../features/usersAPI'
import { useNavigate } from 'react-router-dom'

const SignUpGoogle = () => {

    const buttonDiv = useRef(null)

    const [newUser] = useGetNewUserMutation()

    const navigate = useNavigate()

    const handleNavigate = () => {
      navigate('/sigin')
    }

    async function handleCredentialResponse (response) {

        let userObject = jose.decodeJwt(response.credential)

        let data = {
            name: userObject.given_name,
            photo: userObject.picture,
            email: userObject.email,
            pass: userObject.sub,
            country: 'Argentina',
            role: 'user',
            from: 'google'
        }
        await newUser(data)
        handleNavigate()
      setTimeout(() => {
        window.location.reload()
      }, 500)
}

    useEffect(()=> {
        /* global google */
        google.accounts.id.initialize({
            client_id: "1068195771607-dtoj7c4iao1o9qmt8kc2k2idpb7vk0p4.apps.googleusercontent.com",
            callback: handleCredentialResponse,
            context: 'signup'
        });
        google.accounts.id.renderButton(
            buttonDiv.current,
            { theme: "filled_black", size: "medium", text: "signup_with", locale: 'en', type: "standar"}  // customization attributes
        );
    }, [])

return (
    <div>
        <div ref={buttonDiv}>

        </div>
    </div>
)
}

export default SignUpGoogle