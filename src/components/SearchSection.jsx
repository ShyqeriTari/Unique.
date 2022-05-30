const SearchSection = ({title, icon, type, min, max, text, setValue}) => {
    return(
        <div className="search-sec-container mb-4">
            <h1>{title}</h1>
           <div className="d-flex align-items-center">
            <i className={icon}></i>
            <input className="ms-3 h-50" type={type} min={min} max={max} placeholder={text} onChange={(e) => setValue(e.target.value)}></input>
            </div>
        </div>
    )
}

export default SearchSection