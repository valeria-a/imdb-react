import axios from "axios"
import { useState } from "react"
import {GOOGLE_LOGIN, LOGIN} from "../urls"
import { GoogleLogin } from '@react-oauth/google';


export default function LoginPage() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const formData = new FormData(event.target)

        axios.post(LOGIN, formData)
        .then((responseData) => {
            if (responseData.status === 200) {
                localStorage.setItem('access', responseData.data.access)
                localStorage.setItem('refresh', responseData.data.refresh)
                window.open('/', '_self')
            }
        })
        .catch((error) => {
            console.log(error)
            setErrorText(error.response.data.detail)
        })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email:</label>
                <input type="text" name="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>

                <br />

                <label htmlFor="password" >Password:</label>
                <input type="password" name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>

                <br />

                <input type="submit" value="Login"></input>
            </form>
            {errorText &&
            <p>Error occurred: {errorText}</p>}

            <GoogleLogin
                onSuccess={async credentialResponse => {
                    console.log(credentialResponse);
                    const response = await axios.post(GOOGLE_LOGIN,
                        {},
                        {headers: {'Authorization': credentialResponse.credential}})
                }}
                onError={() => {
                    console.log('Login Failed');
                }}
            />
        </>
    )
}
