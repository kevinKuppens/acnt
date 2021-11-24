import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import CtaButton from "./ui/CtaButton";
import FormInput from "./ui/FormInput";
import TextBanner from "./ui/TextBanner"

type LoginProps = {
    setToken:(value:string) => void
}
const Login = (props:LoginProps) => {
    const { user } = useContext(UserContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const login = () => {
        if(username === user?.username && password=== user?.password){
            props.setToken('logged');
            navigate('/');
        }
    }
    return (
        <div className="text-left font-light">  
            <TextBanner value="Welcome Back" />
            <p className="py-4">Login to your user account to access to your data and manage your personnal account.</p>
            <p className="py-4">You Don't have an account yet ? <Link to="/register" className="font-bold">Sign up</Link></p>
            <form
                className="mt-6"
                onSubmit={(event) => {event.preventDefault();login()}}>
                <FormInput name="username" labelValue="Username" state={username} updateState={(value) => {setUsername(value)}} />
                <FormInput name="password" labelValue="Password" state={password} updateState={(value) => {setPassword(value)}} />
                <div className="flex items-center mt-36">
                    <button 
                        type="button"
                        className="w-1/2"
                        onClick={() => navigate('/hero')}>Cancel</button>
                    <CtaButton size="w-1/2" value="Sign In" />
                </div>
            </form>
        </div>
    )
}

export default Login;