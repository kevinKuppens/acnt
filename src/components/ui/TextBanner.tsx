type TextBannerProps = {
    value:string
}
const TextBanner = (props: TextBannerProps)=>{
    return (
        <div 
            className="w-full  text-4xl pt-8 pb-8 border-white border-b text-white">
            <p className="text-left">{props.value}</p>
        </div>
    )
}

export default TextBanner;