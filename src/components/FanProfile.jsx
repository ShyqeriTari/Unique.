import { useEffect, useState } from "react"
import { Row, Col, Button, Modal } from "react-bootstrap"
import "../styles/playerProfile.css"
import Card from "./Card"
import ClubCard from "./ClubCard"
import axios from "axios"
import Search from "./Search"

const FanProfile = () => {

    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState(undefined)

    const [name, setName] = useState(undefined)

    const [club, setClub] = useState(undefined)

    const [country, setCountry] = useState(undefined)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const fetchData = async (e) => {
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

      const formData = new FormData()

      const uploadImg = (e) => {
        formData.append("image", e.target.files[0])
      }

      const submitFile = (e) => {
        e.preventDefault()
    
        axios({
          method: "put",
          url:`${process.env.REACT_APP_LOCAL_URL}/fan/imageUpload`,
          data: formData,
          headers: {
            "Authorization": `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        })
          .then(function (response) {
            fetchData()
          })
          .catch(function (response) {
            //handle error
            console.log(response)
          })
      }

      const modifyUser = async (e) => {
        e.preventDefault()
        const newInfo = { name, club, country}
        try {
            let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/me`, {
              method: "PUT",
              body: JSON.stringify(newInfo),
              headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
            })
            if (response.ok) {
              fetchData()
             
            } else {
              alert("Modification Failed")
              if (response.status === 400) {
                alert("bad request")
              }
              if (response.status === 404) {
                alert("page not found")
              }
            }
        } catch (error) {
          console.log(error)
        }
      }

    return(
      <div className="padding-body">
       <Row className="g-0">
          {user && <><Col md={2}>
               <div className="d-flex flex-column align-items-center">
                <img src={user.image} className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
               {edit && <input className="form-control form-control-md mt-2" onChange={(e)=> {uploadImg(e)}} id="formFileLg" type="file" />}
               {edit && <Button className="m-auto mt-2 w-50 bg-success mb-4" onClick={(e) => {setEdit(false); submitFile(e)}}>Save Image</Button>}
                {!edit && <h3>{user.name}</h3>}
                {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setName(e.target.value)} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h3>{user.club?.name}</h3>}
                {!edit && <h3>{user.country}</h3>}
                {edit && <div onClick={handleShow} className="pointer bg-dark mt-1 ps-2 mb-1 d-flex align-items-center"> <span className="text-white me-2">select club </span> <i style={{fontSize: "25px"}} className="bi bi-binoculars m-auto pointer text-white me-1"/> </div>}
                {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setCountry(e.target.value)} placeholder="Insert country here..." className="me-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-success mb-4" onClick={(e)=> {setEdit(false); modifyUser(e)}}>Save</Button>}
           </Col> 
           <Col  md={9}>
           <div className=" mb-2 mt-4" >
            <h2 style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid", textAlign: "center"}}>Fav players</h2>
           <div className="hor-scroller d-flex" >
           {user.favPlayers.map(player => {
    return  <Card refetch={fetchData} id={player._id} player={player}  name={player.name} image={player.image}
    nationality={player.country} club={player.club?.name} position={player.position} pac={player.pac} shot={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}
     /> 
  })}
            </div>
        </div>
        <div className="mb-2 mt-4">
            <h2 style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid", textAlign: "center"}}>Fav clubs</h2>
           <div className="hor-scroller d-flex" >
           {user.favClubs.map(club => {
    return <ClubCard refetch={fetchData} id={club._id} club={club}  name={club.name} image={club.image}
    year={`Founded on ${club.birthdate}`}  city={club.country}
     /> 
  })}
            </div>
        </div>
           </Col> </>}
           <Modal
        size="xl"
        show={show}
        onHide={() => handleClose()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Select your club
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Search refetchFan={fetchData} setEditFan={setEdit} handleClose={handleClose} compare={"fan"}/></Modal.Body>
      </Modal>
       </Row>
       </div>
    )
}

export default FanProfile