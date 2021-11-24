type ProfileButtonsProps = {
    img: string
}
const ProfileButton = (props: ProfileButtonsProps) => {
    return (
        <div className="flex flex-row-reverse items-center">
            <button className="relative">
                <div className="w-10 h-10 rounded-full bg-white overflow-hidden relative z-50 ">
                    <img src={props.img !== "none" ? `../../${props.img} ` : "../../icones/undefined.svg"} className="transform translate-y-1"alt="profil" />
                </div>
                <div className="w-12 h-12 rounded-full border-2 border-blue-600 absolute top-1/2    left-1/2 transform -translate-y-1/2 -translate-x-1/2">

                </div>
                <div className=" absolute z-10 inset-0 bg-indigo-400 rounded-full filter blur">
                </div>
            </button>
            <button 
                type="button"
                className="w-8 h-8 border-2 border-white rounded rounded-full mr-4 flex justify-center items-center">
                <img src="../../icones/settings.svg" alt="settings icon" />
            </button>
        </div>
    )
}

export default ProfileButton;