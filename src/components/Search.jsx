import { Col, Row } from "react-bootstrap"
import SearchSection from "./SearchSection"

const Search = () => {
    return(
        <div>
            <div>
            <h2>Search</h2>
            <h4>Search players and clubs by defining search filters</h4>
            </div>

            <Row className="m-auto mb-5 mt-5">
                <Col sm={6} md={6} lg={4}><SearchSection title={"Player name"} icon={"bi bi-person-fill"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Position"} icon={"bi bi-bullseye"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Nationality"} icon={"bi bi-globe"} /></Col>
            </Row>

            <Row className="m-auto">
                <Col sm={6} md={6} lg={4}><SearchSection title={"Age"} icon={"bi bi-calendar-week"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Country"} icon={"bi bi-globe"} /></Col>
                <Col sm={6} md={6} lg={4}><SearchSection title={"Club"} icon={"bi bi-building"} /></Col>
            </Row>

        </div>
    )
}

export default Search