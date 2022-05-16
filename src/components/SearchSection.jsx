const SearchSection = ({title, icon, type}) => {
    return(
        <div className="search-sec-container mb-4">
            <h1>{title}</h1>
           <div className="d-flex align-items-center">
            <i className={icon}></i>
            <input className="ms-3 h-50" type={type} placeholder="type something..."></input>
            </div>
        </div>
    )
}

export default SearchSection