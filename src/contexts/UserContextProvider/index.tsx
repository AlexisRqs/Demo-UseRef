import React, {PropsWithChildren} from "react";
import {User} from "../../models/UserModels";

type IUserContext = {
    user: User | undefined
    setUser: (user: User | undefined) => void
}

export const UserContext = React.createContext<IUserContext>(undefined!)

export default function UserContextProvider({children}: PropsWithChildren) {

    const [user, setUser] = React.useState<User>()

    return <UserContext.Provider value={{user, setUser}}> { children }
    </UserContext.Provider>
}