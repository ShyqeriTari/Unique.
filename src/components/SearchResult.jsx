import { Row, Col} from "react-bootstrap"
import Card from "./Card";

const SearchResult = () => {
    return(
        <div className="text-center">
            <h1 className="mb-5">Result</h1>
        <Row>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
            <Col sm={6} md={4} lg={3}><Card/></Col>
        </Row>
        </div>
    )
}

export default SearchResult