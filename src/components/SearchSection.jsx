const SearchSection = ({title, icon}) => {
    return(
        <div className="search-sec-container">
            <h1>{title}</h1>
           <div className="d-flex align-items-center">
            <i class={icon}></i>
            <input className="ms-3 h-50" type="text" placeholder="type something..."></input>
            </div>
        </div>
    )
}

export default SearchSection