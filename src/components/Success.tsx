import { useContext } from "react";
import { useNavigate } from "react-router";
import UserContext from "../contexts/UserContext";
import { userContext } from "../types";
import CtaButton from "./ui/CtaButton";
import TextBanner from "./ui/TextBanner";

const Success = () => {
    const { user } = useContext<userContext>(UserContext);
    const navigate = useNavigate();
    return (
        <>
            <TextBanner value="You are now Registered !" />
            <div className="text-left font-light">
                <p className="py-2">You can now login with this username : </p>
                <p className="text-center font-medium text-2xl py-8">{user?.username}</p>
                <p className="py-2">The password is the one you entered while registering</p>
                <p className="pt-4 pb-20">You still need to validate your account adding your mail information Inside your personnal setting in the app.</p>
            </div>
            <CtaButton size="w-1/2 mx-auto" value="Login" redirect={() => navigate("/login")}/>
        </>
    )
}

export default Success;