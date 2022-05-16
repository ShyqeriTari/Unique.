import { useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import "../styles/playerProfile.css"
import Card from "./Card"
import ClubCard from "./ClubCard"

const FanProfile = () => {

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
                {!edit && <h3>Club fan from 13/04/2001</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert club here..." className="me-2 mt-2" />}
                {edit && <input type="date" style={{ color: "black" }} placeholder="Insert year here..." className="me-2 mt-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={()=> setEdit(false)}>Save</Button>}
           </Col> 
           <Col  md={9}>
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
    year={"Founded on 30/08/1995"} club={"F.C. Juventus"} city={"Turin, Italy"}
     /> 
  })}
            </div>
        </div>
           </Col>
       </Row>
    )
}

export default FanProfile