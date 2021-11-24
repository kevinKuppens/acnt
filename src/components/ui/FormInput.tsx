type FormInputProps = {
    name : string, 
    labelValue: string
    state:string | undefined,
    updateState: (value:string) => void
}


const FormInput = (props:FormInputProps) => {

    const focusFn = () => {
        document.getElementById(`${props.name}-label`)?.classList.add('transform' ,'-translate-y-8' ,'transition','ease-in-out', 'opacity-100');
        document.getElementById(`${props.name}-backdrop`)?.classList.add('transition','ease-in-out', 'opacity-40');
    }
    const blurFn = () => {
        if(props.state === undefined || props.state === ""){
            document.getElementById(`${props.name}-label`)?.classList.remove('transform' ,'-translate-y-8', 'opacity-100');
        }
        document.getElementById(`${props.name}-backdrop`)?.classList.remove('transition','ease-in-out', 'opacity-40');
    }
    return (
        <div id={`${props.name}-bg`} className="mb-6 bg-white rounded rounded-lg w-full bg-opacity-20 h-14 relative px-4 flex items-center backdrop-filter backdrop-blur-md">
        <label 
            id={`${props.name}-label`}
            htmlFor={props.name}
            className="text-left block opacity-40 text-lg font-light absolute top-2 left-4">{props.labelValue}</label>
        <input id={`${props.name}-input`} type="text" className={`relative z-50 bg-transparent border-b border-white w-full px-2 text-lg font-light ${ props.state === undefined || props.state === "" ? 'opacity-40' : ""} focus:opacity-100 focus:outline-none`}
        onFocus={focusFn}
        onBlur={blurFn}
        value={ props.state }
        onChange={(event => { props.updateState(event.target.value)})}/>
        <div id={`${props.name}-backdrop`} className="absolute z-10 inset-0 bg-purple-500 filter blur-sm opacity-0"></div>
    </div>
    )
}

export default FormInput;