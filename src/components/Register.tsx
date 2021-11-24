import { useContext,  useState } from "react"
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext"
import CtaButton from "./ui/CtaButton";
import FormInput from "./ui/FormInput";
import TextBanner from "./ui/TextBanner";



const Register = () => {
    const {  setUser } = useContext(UserContext);
    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [ agreed, setAgreed ] = useState<boolean>(false);
    const navigate= useNavigate();

    const register =  async () => {
        setUser({ id: 1, firstname, lastname,username: `${firstname}${lastname}#1`, password, picture: "none"});
        
        Promise.resolve(true).then((res) => {res ? navigate('/success') : alert('Erreur dans le formulaire')})
        
    }
    
    return (
        <>
            <TextBanner value="A few clicks away from our app..." />
            <p className="text-left w-full pt-4 pb-10">We need some of your informations to create your account.</p>
            
            <form
             onSubmit={(event) => {event.preventDefault();register ();}}>
                <FormInput 
                    name="firstname" 
                    labelValue="First Name" 
                    state={firstname} 
                    updateState={(value) => setFirstname(value)}/>
                <FormInput 
                    name="lastname" 
                    labelValue="Last Name"
                    state={lastname}
                    updateState={(value)=> { setLastname(value)}} />
                <FormInput 
                    name="password" 
                    labelValue="Password"
                    state={password}
                    updateState={(value)=> { setPassword(value)}} />
                <div className="flex w-full mb-6 "onClick={() => { setAgreed(!agreed)}}>
                    <div className="px-4" onClick={() => { setAgreed(!agreed)}}>
                        <div 
                            className={`w-4 h-4 border border-white rounded rounded-xs ${ agreed ? "bg-white shadow-inset" : null}`}
                            ></div>
                    </div>
                    <div className="text-left text-sm"><p>By clicking the sign up button, you agree our Terms and that you have read our Data Use Policy, including Cookie Use</p></div>
                </div>
                <div className="flex justify-between items-center w-full">
                     <button 
                        type="button"
                        className="group flex items-center justify-center w-full"
                        onClick={() => { navigate('/hero')}}
                        >
                        <p className="group-hover:underline">cancel</p>
                    </button>
                    <CtaButton size="w-5/6" value="Sign Up"/>
                </div>
            </form>
        </>
    )
}

export default Register;