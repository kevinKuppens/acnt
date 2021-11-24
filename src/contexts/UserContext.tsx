import { createContext } from "react";
import { userContext } from "../types";

const UserContext = createContext<userContext>({
    isLoggedIn: false, setUser: ()=> console.warn('No User Set')
})

export default UserContext;