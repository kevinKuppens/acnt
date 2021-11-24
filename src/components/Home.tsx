import {  useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext"
import CtaButton from "./ui/CtaButton";
import TextBanner from "./ui/TextBanner";

type HomeProps = {
    token:string;
}

const Home = (props:HomeProps) => {
    const {user} = useContext(UserContext);
    const [ wallets, setWallets ] = useState<Object[]>();

    const navigate = useNavigate();

    useEffect(()=> {
        console.log(props.token)
        if(props.token !== "logged"){
            navigate('/hero')
        }else{
            if(user?.wallets){
                setWallets(user?.wallets)
            }
        }
    }, [props.token, navigate, user])

    return (
        <>
        <TextBanner value={`Hello, ${user?.firstname} ${user?.lastname}`} />
        { wallets
            ? (<p>You have wallets</p>) 
            :  (<>
                <p className="text-light py-8">You don't have any wallets yet ...</p>
                <CtaButton size="w-full" value="Add a new wallet" />
                </>
                )}
        </>
    )
}


export default Home;

