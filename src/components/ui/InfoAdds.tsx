type InfoAddsProps = {
    type : 'Income' | 'Outcome',
    value: string,
    addedStyle: string
}

const InfoAdds = (props:InfoAddsProps) => {
    return (
        <div className={`w-1/2 flex items-center justify-around rounded rounded-md font-light text-sm ${props.type === "Income" ? "bg-info-green" : "bg-info-red"} py-2 px-4 bg-opacity-30 ${props.addedStyle}`}>
            <img src={`../../icones/${props.type === "Income" ? "income" : "outcome"}.svg`} alt="data info icon" />
            <p className="w-5/6">{props.value}</p>
        </div>
    )
}

export default InfoAdds;