type CtaButtonProps={
    size:string,
    value:string,
    redirect?:React.MouseEventHandler<HTMLButtonElement>
}

const CtaButton = (props:CtaButtonProps) => {
    return (
        <div className={`relative flex ${props.size}`}>
            <button 
            className={`relative z-50 shadow shadow-xl bg-white text-lg bg-opacity-20 py-2 rounded rounded-md w-full`}
            onClick={props.redirect}>
                <p className="relative z-50">{props.value}</p>
            </button>
            <div className={`absolute inset-0 w-full bg-blue-800 z-10 filter rounded rounded-2xl blur-sm`}></div>
        </div>
    )
}

export default CtaButton;