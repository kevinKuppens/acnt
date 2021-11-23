import { createContext } from "react";
export type userContext = {
    isLoggedIn: boolean,
    user ?: {
        id: number,
        firstname: string, 
        lastname: string,
        picture: string
    }
}
const UserContext = createContext({
    isLoggedIn: false
})

export default UserContext;