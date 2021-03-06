
import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import ProfileButton from './navBar/profileButton';

type NavBarProps = {
    token : string
}
const NavBar = ( props:NavBarProps) => {
    const {user}= useContext(UserContext);

    return(
        <div className="flex justify-between items-center pt-4 h-14">
            <div className="text-white sm:opacity-40 flex text-xl hover:opacity-100 transition ease-in-out ">
                <Link className="flex group items-center relative" to="/">
                    <div className="text-white">acnt</div>
                    <div className="w-6 h-6 ml-2 mt-1">
                        <img src="../icones/logo.svg" alt="acnt Logo" />
                    </div>
                    <div className="absolute left-0 bottom-0 bg-white opacity-0 group-hover:opacity-50 w-full h-1/3 filter blur-xl transition ease-in-out"></div>
                </Link>
            </div>
            { console.log(user , props.token)}
            {props.token === 'logged' && user
                ?  ( <ProfileButton img={user.picture}/>) 
                : null}
        </div>
    )
}

export default NavBar;