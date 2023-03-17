import {UserContext} from "../../contexts/UserContextProvider";
import React from "react";
import {Link} from "react-router-dom";
import UserInfo from "../../components/UserInfo";

export default function MainPage() {

    const {user} = React.useContext(UserContext)

    return <>
        <h2>Main Page</h2>
        {user === undefined && <Link to={"/login"}>Login</Link>}
        {user  && <UserInfo user={user}/>}
    </>
}