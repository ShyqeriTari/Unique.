import { Row, Col} from "react-bootstrap"
import Card from "./Card";

const SearchResult = () => {
    return(
        <div className="text-center">
            <h1 className="mb-5">Result</h1>
        <Row>
           {Array.apply(0, Array(25)).map(function (x, i) {
    return <Col> <Card  name={"Van basten"} image={"https://gianlucadimarzio.com/images/van_basten_milan_gdm.jpg?p=intextimg&s=d6e09cb71a6e2ae3835c28cf87a3f4b0"}
    nationality={"Netherlands"} club={"A.C. Milan"} position={"STR"} pac={"99"} shot={"99"}  pas={"99"} dri={"99"} def={"99"} phy={"99"}
     /> </Col>
  })}
        </Row>
        </div>
    )
}

export default SearchResult