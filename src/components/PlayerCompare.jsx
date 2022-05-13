import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import { ChartCompare } from "./ChartCompare"

const PlayerCompare = () => {
    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="ms-3">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <h3>name</h3>
                <h3>Position</h3>
                <h3>Club</h3>
               </div>
           </Col>
           <Col  md={8}>
                   <div className="search-sec-container mt-2">
                   <h1>Compare</h1>
               <ChartCompare/>
               </div>
           </Col>
           <Col md={2}>
           <div className="ms-3">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <h3>name</h3>
                <h3>Position</h3>
                <h3>Club</h3>
               </div>
           </Col>
       </Row>
    )
}

export default PlayerCompare