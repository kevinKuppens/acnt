
type User = {
    id: number,
    firstname : string, 
    lastname : string,
    password: string,
    username: string,
    picture:string,
    wallets ?: Object[]
}
export type userContext = {
    isLoggedIn: boolean,
    user ?: User,
    setUser: (User:User)=> void;
}