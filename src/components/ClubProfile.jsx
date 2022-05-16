import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap"
import Card from "./Card";

const ClubProfile = () => {

    const [edit, setEdit] = useState(false)

    return(
       <Row className="g-0">
           <Col md={2}>
               <div className="ms-3">
                <img src="https://s.yimg.com/cv/apiv2/default/soccer/20190408/500x500/Juventus_wbg.png" className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
               {edit && <input className="form-control form-control-md mt-2" id="formFileLg" type="file" />}
               {!edit && <h3>name</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h3>Founded on 30/08/1995</h3>}
                {edit && <input type="date" style={{ color: "black" }} placeholder="Insert year here..." className="me-2 mt-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={()=> setEdit(false)}>Save</Button>}
           </Col>
           <Col md={10} >
           <div className=" search-sec-container me-2 mt-2 mb-2"> <h2>Players</h2>
            <Row className="scroller-club"> 
            {Array.apply(0, Array(25)).map(function (x, i) {
    return <Col> <Card  name={"Van basten"} image={"https://gianlucadimarzio.com/images/van_basten_milan_gdm.jpg?p=intextimg&s=d6e09cb71a6e2ae3835c28cf87a3f4b0"}
    nationality={"Netherlands"} club={"A.C. Milan"} position={"STR"} pac={"99"} shot={"99"}  pas={"99"} dri={"99"} def={"99"} phy={"99"}
     /> </Col>
  })}</Row>
  </div>
           </Col>
       </Row>
    )
}

export default ClubProfile