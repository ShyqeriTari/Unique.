import { Col, Row, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import SearchSection from "./SearchSection"

const Search = () => {

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
                <Col sm={6} md={6} lg={4}><SearchSection title={"Player name"} icon={"bi bi-person-fill"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Position"} icon={"bi bi-bullseye"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Nationality"} icon={"bi bi-globe"} /></Col>

                <Col sm={6} md={6} lg={4}><SearchSection title={"Age"} icon={"bi bi-calendar-week"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Country"} icon={"bi bi-globe"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Club"} icon={"bi bi-building"} /></Col>
            </Row>

            <Button variant="dark" className="search-button m-auto p-3" onClick={()=> navigate("/search-result") }>Search</Button>

        </div>
    )
}

export default Search