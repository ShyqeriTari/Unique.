import { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap"
import { Link, useParams } from "react-router-dom";
import Card from "./Card";
import axios from "axios";
import Search from "./Search";

const ClubProfile = () => {

    const [edit, setEdit] = useState(false)

    const [show, setShow] = useState(false);

    const [show2, setShow2] = useState(false);

    const [user, setUser] = useState(undefined)

    const [name, setName] = useState(undefined)

    const [country, setCountry] = useState(undefined)

    const [birthdate, setBirthdate] = useState(undefined)

    const [viewClub, setViewClub] = useState(undefined)

    const [currentPlayer, setCurrentPlayer] = useState(undefined)

  const handleClose = () => setShow(false);
  const handleClose2 = () => setShow2(false);
  const handleShow = () => setShow(true);
  const handleShow2 = () => setShow2(true);

  const params = useParams()

  const fetchData = async (e) => {
    try {
       
      const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/club/me", {
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

  const removePlayerFromClub = async (id) => {
		const newUser = { id }
		try {
		  
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/removePlayer`, {
			method: "DELETE",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 204) {
			fetchData()
		  } else {
			alert("registration failed")
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

  const getClub = async () => {
    try {
       
      const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/club/"+ params.id, {
          headers:{
              "Authorization": `Bearer ${localStorage.getItem("token")}`
          }
      });
      const data = await response.json();
      console.log(data)
      const response2 = await fetch(process.env.REACT_APP_LOCAL_URL + "/club/me", {
        headers:{
            "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
    });
    const data2 = await response2.json();

    if(data._id === data2._id){
      setUser(data2);
    }else{setViewClub(data)}
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(params.id){
      getClub()
    }else{
      fetchData()}
  }, [])

  const formData = new FormData()

  const uploadImg = (e) => {
    formData.append("image", e.target.files[0])
  }

  const submitFile = (e) => {
    e.preventDefault()

    axios({
      method: "put",
      url:`${process.env.REACT_APP_LOCAL_URL}/club/imageUpload`,
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
    const newInfo = { name, birthdate, country }
    try {
        let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/me`, {
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
     <div className="padding-body">  <Row className="g-0">
          {user && <> <Col md={3}>
               <div className="d-flex flex-column align-items-center">
                <img src={user.image} className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
                {edit && <input className="form-control form-control-md mt-2" onChange={(e)=> {uploadImg(e)}} id="formFileLg" type="file" />}
               {edit && <Button className="m-auto mt-2 w-50 bg-success mb-4" onClick={(e) => {setEdit(false); submitFile(e)}}>Save Image</Button>}
               {!edit && <h4>{user.name}</h4>}
               {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setName(e.target.value)} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h4>Founded on {user.birthdate}</h4>}
                {!edit && <h4>{user.country}</h4>}
                {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setCountry(e.target.value)} placeholder="Insert country here..." className="me-2 mt-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-success mb-4" onClick={(e)=> {setEdit(false); modifyUser(e)}}>Save</Button>}
           </Col>
           <Col md={9} >
           <div className=" search-sec-container me-2 mt-4 mb-2"> 
           <h2 style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid", textAlign: "center"}}>Players</h2> 
            <Row className="scroller-club text-center"> 
            <Col> <div onClick={handleShow} className="container mb-4 mt-4 me-4">
			<div className="card">
            <i className="bi bi-plus text-white m-auto"/>
			</div>
		</div> </Col>
            {user.players.map(player => {
    return <Col> <span onClick={()=> {handleShow2(); setCurrentPlayer(player._id)}} className="text-danger pointer">Remove</span> <Card id={player._id} refetch={fetchData} player={player} name={player.name} image={player.image}
    nationality={player.country} club={player.club.name} position={player.position} pac={player.pac} sho={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}
     />  </Col>
  })}

  </Row>
  </div>
           </Col>  </>}
           {viewClub && <> <Col md={3}>
               <div className="d-flex flex-column align-items-center">
                <img src={viewClub.image} className="profile-img" alt="profile-img" />
               <h3>{viewClub.name}</h3>
                 <h3>Founded on {viewClub.birthdate}</h3>
                 <h3>{viewClub.country}</h3>
               </div>
           </Col>
           <Col md={9} >
           <div className=" search-sec-container me-2 mt-4 mb-2"> 
           <h2 style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid", textAlign: "center"}}>Players</h2> 
            <Row className="scroller-club text-center"> 
            {viewClub.players.map(player => {
    return <Col> <Card refetch={getClub} player={player} id={player._id} name={player.name} image={player.image}
    nationality={player.country} club={player.club?.name} position={player.position} pac={player.pac} sho={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}
     />  </Col>
  })}
  
  </Row>
  </div>
           </Col>  </>}
       </Row>
       <Modal
        size="xl"
        show={show}
        onHide={() => handleClose()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-lg">
            Select player
          </Modal.Title>
          <i className="bi bi-x-circle-fill pointer" onClick={handleClose} style={{fontSize: "25px"}}></i>
        </Modal.Header>
        <Modal.Body><Search refetchAdd={fetchData} handleClose={handleClose} compare={"club"}/></Modal.Body>
      </Modal>
      
      <Modal
        size="md"
        show={show2}
        onHide={() => handleClose2()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header >
          <Modal.Title id="example-modal-sizes-title-lg">
            Are you sure to remove player?
          </Modal.Title>
          <i className="bi bi-x-circle-fill pointer" onClick={handleClose2} style={{fontSize: "25px"}}></i>
        </Modal.Header>
        <Modal.Body><div className="d-flex justify-content-around"><i onClick={()=> {removePlayerFromClub(currentPlayer); handleClose2()}} className="bi bi-hand-thumbs-up pointer" style={{fontSize: "30px", color: "green"}}></i><i onClick={handleClose2} className="bi bi-hand-thumbs-down pointer" style={{fontSize: "30px", color: "red"}}></i></div></Modal.Body>
      </Modal></div>
    )
}

export default ClubProfile