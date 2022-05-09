import { Col, Row } from "react-bootstrap"

const Search = () => {
    return(
        <div>
            <div>
            <h2>Search</h2>
            <h4>Search players and clubs by defining search filters</h4>
            </div>

            <Row className="m-auto">
                <Col md={6} lg={4}>player name</Col>
                <Col md={6} lg={4}>position</Col>
                <Col md={6} lg={4}>nationality</Col>
            </Row>

            <Row className="m-auto">
                <Col md={6} lg={4}>age</Col>
                <Col md={6} lg={4}>country</Col>
                <Col md={6} lg={4}>club</Col>
            </Row>

        </div>
    )
}

export default Search