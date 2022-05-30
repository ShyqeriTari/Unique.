const SearchSection = ({title, icon, type, min, max, text}) => {
    return(
        <div className="search-sec-container mb-4">
            <h1>{title}</h1>
           <div className="d-flex align-items-center">
            <i className={icon}></i>
            <input className="ms-3 h-50" type={type} min={min} max={max} placeholder={text}></input>
            </div>
        </div>
    )
}

export default SearchSection