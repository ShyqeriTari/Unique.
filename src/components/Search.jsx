import { Col, Row } from "react-bootstrap"
import SearchSection from "./SearchSection"

const Search = () => {
    return(
        <div>
            <div>
            <h2>Search</h2>
            <h4>Search players and clubs by defining search filters</h4>
            </div>

            <Row className="m-auto">
                <Col sm={6} md={6} lg={4}><SearchSection title={"Player name"} icon={"bi bi-person-fill"} /></Col>
                <Col sm={6} md={6} lg={4}>position</Col>
                <Col sm={6} md={6} lg={4}>nationality</Col>
            </Row>

            <Row className="m-auto">
                <Col sm={6} md={6} lg={4}>age</Col>
                <Col sm={6} md={6} lg={4}>country</Col>
                <Col sm={6} md={6} lg={4}>club</Col>
            </Row>

        </div>
    )
}

export default Search