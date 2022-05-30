import { Col, Row, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import SearchSection from "./SearchSection"
import { useEffect } from "react"

const Search = () => {

    const location = window.location.pathname

    const navigate = useNavigate()

    return(
        <div>
            <div className="d-flex justify-content-between p-2">
                <div>
            <h2>Search</h2>
            <h4>Search players and clubs by defining search filters</h4>
            </div>
            </div>

            <Row className="m-auto mb-4 mt-5">
                <Col sm={6} md={6} lg={6}><SearchSection title={"Name"} icon={"bi bi-person-fill"} type={"text"} text={"name..."}/></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Position"} icon={"bi bi-bullseye"} type={"text"} text={"position..."}/></Col>

                <Col sm={6} md={6} lg={6}><SearchSection title={"Birth year"} icon={"bi bi-calendar-week"} type={"number"} min={1900} max={2022}/></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Country"} icon={"bi bi-globe"} type={"text"} text={"country..."}/></Col>
            </Row>

           { location === "/search-club-player" ? <Button variant="dark" className="search-button m-auto p-3" onClick={()=> navigate("/search-club-result") }>Search</Button> : location === "/search-compare-player1" ? <Button variant="dark" className="search-button m-auto p-3" onClick={()=> navigate("/search-compare-result1") }>Search</Button> : location === "/search-compare-player2" ? <Button variant="dark" className="search-button m-auto p-3" onClick={()=> navigate("/search-compare-result2") }>Search</Button>:<Button variant="dark" className="search-button m-auto p-3" onClick={()=> navigate("/search-result") }>Search</Button>}

        </div>
    )
}

export default Search