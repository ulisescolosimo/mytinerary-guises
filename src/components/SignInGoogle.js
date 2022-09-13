import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'

const SignInGoogle = () => {

  const buttonDiv = useRef(null)

    /* let [newUser] = useSignupMutator */

    async function handleCredentialResponse (response) {
        let userObject = jose.decodeJwt(response.credential)

        let data = {
          email: userObject.email,
          password: userObject.sub
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
<div>
    <div ref={buttonDiv}>
        
    </div>
</div>
)
}

export default SignInGoogle
