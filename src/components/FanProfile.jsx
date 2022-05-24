import { useEffect, useState } from "react"
import { Row, Col, Button } from "react-bootstrap"
import "../styles/playerProfile.css"
import Card from "./Card"
import ClubCard from "./ClubCard"

const FanProfile = () => {

    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState(undefined)

    const fetchData = async () => {
        try {
           
          const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/fan/me", {
              headers:{
                  "Authorization": `Bearer ${localStorage.getItem("token")}`
              }
          });
          const data = await response.json();
          console.log(data)
          setUser(data);
          
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
          fetchData()
      }, [])

    return(
       <Row className="g-0">
          {user && <><Col md={2}>
               <div className="ms-3">
                <img src={user.image} className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
               {edit && <input className="form-control form-control-md mt-2" id="formFileLg" type="file" />}
                {!edit && <h3>{user.name}</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h3>Club fan from 13/04/2001</h3>}
                {!edit && <h3>{user.country}</h3>}
                {edit && <input type="text" style={{ color: "black" }} placeholder="Insert club here..." className="me-2 mt-2" />}
                {edit && <input type="date" style={{ color: "black" }} placeholder="Insert year here..." className="me-2 mt-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={()=> setEdit(false)}>Save</Button>}
           </Col> 
           <Col  md={9}>
           <div className="fan-sec-container mb-2 mt-2" >
            <h1>Fav players</h1>
           <div className="hor-scroller d-flex" >
           {user.favPlayers.map(player => {
    return  <Card  name={player.name} image={player.image}
    nationality={player.country} club={player.club} position={player.position} pac={player.pac} shot={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}
     /> 
  })}
            </div>
        </div>
        <div className="fan-sec-container mb-2 mt-2">
            <h1>Fav clubs</h1>
           <div className="hor-scroller d-flex" >
           {user.favClubs.map(club => {
    return <ClubCard  name={club.name} image={club.image}
    year={`Founded on ${club.birthdate}`} club={club.name} city={club.country}
     /> 
  })}
            </div>
        </div>
           </Col> </>}
       </Row>
    )
}

export default FanProfile