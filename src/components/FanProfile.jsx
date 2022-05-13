import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import Card from "./Card"
import ClubCard from "./ClubCard"

const FanProfile = () => {
    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <h3>name</h3>
                <h3>Club from 13/04/2001</h3>
               </div>
           </Col>
           <Col  md={7}>
           <div className="fan-sec-container mb-2 mt-2" >
            <h1>Fav players</h1>
           <div className="hor-scroller d-flex" >
           {Array.apply(0, Array(7)).map(function (x, i) {
    return  <Card  name={"Van basten"} image={"https://gianlucadimarzio.com/images/van_basten_milan_gdm.jpg?p=intextimg&s=d6e09cb71a6e2ae3835c28cf87a3f4b0"}
    nationality={"Netherlands"} club={"A.C. Milan"} position={"STR"} pac={"99"} shot={"99"}  pas={"99"} dri={"99"} def={"99"} phy={"99"}
     /> 
  })}
            </div>
        </div>
        <div className="fan-sec-container mb-2 mt-2">
            <h1>Fav clubs</h1>
           <div className="hor-scroller d-flex" >
           {Array.apply(0, Array(7)).map(function (x, i) {
    return <ClubCard  name={"Juventus"} image={"https://s.yimg.com/cv/apiv2/default/soccer/20190408/500x500/Juventus_wbg.png"}
    year={"Founded on 30/08/1995"} club={"F.C. Juventus"}
     /> 
  })}
            </div>
        </div>
           </Col>
           <Col md={3}>
               c
           </Col>
       </Row>
    )
}

export default FanProfile