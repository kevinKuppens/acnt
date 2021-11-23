type CtaButtonProps={
    size:string,
    value:string,
    redirect:React.MouseEventHandler<HTMLButtonElement>
}

const CtaButton = (props:CtaButtonProps) => {
    return (
        <div className="relative">
            <button 
            className={`relative z-50 shadow shadow-xl bg-white text-lg bg-opacity-20 py-2 rounded rounded-md ${props.size}`}
            onClick={props.redirect}>
                <p className="relative z-50">{props.value}</p>
            </button>
            <div className="absolute h-10 w-full top-0 bg-blue-800 z-10 filter rounded rounded-2xl blur-sm "></div>
        </div>
    )
}

export default CtaButton;