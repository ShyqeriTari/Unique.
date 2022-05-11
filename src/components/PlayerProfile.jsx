import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import ProfileDataSection from "./ProfileDataSection"

const PlayerProfile = () => {
    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <h3>name</h3>
                <h3>Position</h3>
                <h3>Club</h3>
               </div>
           </Col>
           <Col  md={7}>
               <div className="scroller">
             <ProfileDataSection/>
             <ProfileDataSection/>
             </div>
           </Col>
           <Col md={3}>
               c
           </Col>
       </Row>
    )
}

export default PlayerProfile