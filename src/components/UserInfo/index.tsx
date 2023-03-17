import React from "react";
import {User} from "../../models/UserModels";

type Props = {user: User}

export default function UserInfo({user}: Props) {



    return <p>Bienvenue {user.username}</p>
}