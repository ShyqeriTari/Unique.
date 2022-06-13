

const SearchSection = ({title, icon, type, min, max, text, setValue, size}) => {
    return(
        <div className="mb-5 d-flex flex-column align-items-center">
            <h3>{title}</h3>
           <div className="d-flex align-items-center justify-content-center">
            <i className={icon}></i>
            <input className={`ms-3 h-50`} type={type} style={{minWidth: size}} min={min} max={max} placeholder={text} onChange={(e) => setValue(e.target.value)}></input>
            </div>
        </div>
    )
}

export default SearchSection