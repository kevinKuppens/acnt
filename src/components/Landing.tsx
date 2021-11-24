import { Link, useNavigate } from "react-router-dom";
import CtaButton from "./ui/CtaButton";
import InfoAdds from "./ui/InfoAdds";
import TextBanner from "./ui/TextBanner";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className="text-white">
            <TextBanner value="Keep track of account from anywhere, at anytime."/>
            <div className="w-full">
                <div className=" text-xs bg-white bg-opacity-20 mt-8 py-1 text-white rounded rounded-md flex justify-around items-center">
                    <img className="w-12" src="../icones/card.svg" alt="card icon" />
                    <div className="text-left">
                        <p>Personal Account</p>
                        <p>5346 **** **** **56</p>
                    </div>
                    <p className="text-lg">1456,78 $</p>
                </div>
                <div className="flex flex-between items-center mt-2">
                    <InfoAdds addedStyle="mr-1" type="Income"  value="+ 340,00 $"/>
                    <InfoAdds addedStyle="ml-1" type="Outcome" value="- 28,03 $" />    
                </div>
                <p className="text-sm w-full py-2 mt-2 mb-4 text-left font-light">
                    Add incomes, see outcomes, keep an eye on your sold and find old entries, see your loss or gain in just seconds and more ! 
                </p>
                <CtaButton 
                    size="w-full"
                    value="Sign up"
                    redirect={() => { navigate('/register')}}/>
                <p className="text-md font-light mt-4">Already have an account ? <Link to="/login" className="font-bold">Sign In</Link></p>
                <p className="text-xs font-light mt-6 px-16">By signing up you are agreeing to our <span className="font-bold">Terms</span> and <span className="font-bold">Privacy policy</span></p>
            </div>
        </div>
    )
}

export default Landing;