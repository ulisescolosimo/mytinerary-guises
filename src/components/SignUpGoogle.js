import React, { useEffect, useRef } from 'react'
import * as jose from 'jose'

const SignUpGoogle = () => {

    const buttonDiv = useRef(null)

    /* let [newUser] = useSignupMutator */

    async function handleCredentialResponse (response) {
        let userObject = jose.decodeJwt(response.credential)

        /* mandar la info al back con algun mutation de redux o algun metodo asi let [newUser] = useSignupMutator*/

        let data = {
            name: userObject.name,
            photo: userObject.picture,
            email: userObject.email,
            pass: userObject.sub,
            role: 'user',
            from: 'google'
    }

    /* mandar la info al back con algun mutation de redux o algun metodo asi let [newUser] = useSignupMutator*/

    /* newUser(data) */

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