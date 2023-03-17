import {UserContext} from "../../contexts/UserContextProvider";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function LoginPage() {

    const usernameInputRef = React.useRef<HTMLInputElement>(null)

    const {setUser} = React.useContext(UserContext)

    const navigate = useNavigate()

    function login() {

        const username = usernameInputRef.current?.value
        if (username === undefined || username === "") {
            return alert("Username not valid")
        }

        //define user
        setUser({username})

        //redirect to homepage
        navigate("/home")
    }

    return <>
        <p>Username : </p>
        <input ref={usernameInputRef} type="text"/>
        <button onClick={login}>Connexion</button>
    </>
}