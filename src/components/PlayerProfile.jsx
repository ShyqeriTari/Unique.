import { Row, Col, Button } from "react-bootstrap"
import "../styles/playerProfile.css"
import ProfileDataSection from "./ProfileDataSection"
import { Chart } from "./Chart"
import { useState } from "react"

const PlayerProfile = () => {

    const [edit, setEdit] = useState(false)

    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="ms-3">
                <img src="https://i.pinimg.com/564x/7b/99/a8/7b99a82ddd252b2dea8c8e4008ccd38d.jpg" className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
                {edit && <input className="form-control form-control-md mt-2" id="formFileLg" type="file" />}
                {!edit && <h3>name</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h3>position</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert position here..." className="me-2 mt-2" />}
                {!edit && <h3>club</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert club here..." className="me-2 mt-2" />}
                {!edit && <h3>age</h3>}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={()=> setEdit(false)}>Save</Button>}
           </Col>
           <Col  md={7}>
               <div className="scroller">
                   <div className="search-sec-container mt-2">
                   <h1>Quality</h1>
               <Chart/>
               </div>
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