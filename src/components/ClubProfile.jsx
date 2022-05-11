import { Row, Col } from "react-bootstrap"
import Card from "./Card";

const ClubProfile = () => {
    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <h3>name</h3>
                <h3>Founded on 30/08/1995</h3>
               </div>
           </Col>
           <Col md={10}>
            <h2>Players</h2>
            <Row className="scroller"> 
            {Array.apply(0, Array(25)).map(function (x, i) {
    return <Col> <Card  name={"Van basten"} image={"https://gianlucadimarzio.com/images/van_basten_milan_gdm.jpg?p=intextimg&s=d6e09cb71a6e2ae3835c28cf87a3f4b0"}
    nationality={"Netherlands"} club={"A.C. Milan"} position={"STR"} pac={"99"} shot={"99"}  pas={"99"} dri={"99"} def={"99"} phy={"99"}
     /> </Col>
  })}</Row>
           </Col>
       </Row>
    )
}

export default ClubProfile