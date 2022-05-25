import { useState, useEffect } from "react";
import { Row, Col, Button, Modal } from "react-bootstrap"
import { Link } from "react-router-dom";
import Card from "./Card";
import axios from "axios";

const ClubProfile = () => {

    const [edit, setEdit] = useState(false)

    const [show, setShow] = useState(false);

    const [user, setUser] = useState(undefined)

    const [name, setName] = useState(undefined)

    const [country, setCountry] = useState(undefined)

    const [birthdate, setBirthdate] = useState(undefined)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchData = async () => {
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
      url:`${process.env.REACT_APP_LOCAL_URL}/club/imageUpload`,
      data: formData,
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        fetchData()
        console.log(response)
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
          console.log(response)
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
     <>  <Row className="g-0">
          {user && <> <Col md={2}>
               <div className="ms-3">
                <img src={user.image} className="profile-img" alt="profile-img" />
                <i onClick={()=> setEdit(!edit)} className="bi bi-three-dots pointer"/>
                {edit && <input className="form-control form-control-md mt-2" onChange={(e)=> {uploadImg(e)}} id="formFileLg" type="file" />}
               {edit && <Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e) => {setEdit(false); submitFile(e)}}>Save Image</Button>}
               {!edit && <h3>{user.name}</h3>}
               {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setName(e.target.value)} placeholder="Insert name here..." className="me-2 mt-2" />}
                {!edit && <h3>Founded on {user.birthdate}</h3>}
                {edit && <input type="date" style={{ color: "black" }} onChange={(e)=> setBirthdate(e.target.value)} placeholder="Insert year here..." className="me-2 mt-2" />}
                {!edit && <h3>{user.country}</h3>}
                {edit && <input type="text" style={{ color: "black" }} onChange={(e)=> setCountry(e.target.value)} placeholder="Insert country here..." className="me-2 mt-2" />}
               </div>
               {edit&&<Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e)=> {setEdit(false); modifyUser(e)}}>Save</Button>}
           </Col>
           <Col md={10} >
           <div className=" search-sec-container me-2 mt-2 mb-2"> 
           <h2>Players</h2> 
            <Row className="scroller-club text-center"> 
            <Col> <div onClick={handleShow} className="container mb-4 mt-4 me-4">
			<div className="card">
            <i className="bi bi-plus text-white m-auto"/>
			</div>
		</div> </Col>
            {Array.apply(0, Array(25)).map(function (x, i) {
    return <Col> <span className="text-danger pointer">Remove</span> <Card  name={"Van basten"} image={"https://gianlucadimarzio.com/images/van_basten_milan_gdm.jpg?p=intextimg&s=d6e09cb71a6e2ae3835c28cf87a3f4b0"}
    nationality={"Netherlands"} club={"A.C. Milan"} position={"STR"} pac={"99"} shot={"99"}  pas={"99"} dri={"99"} def={"99"} phy={"99"}
     />  </Col>
  })}</Row>
  </div>
           </Col>  </>}
       </Row>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col md={6}><Link className="link" to={"/search-club-player"}> Find</Link></Col>
                <Col md={6}>  <Link className="link" to={"/player-create"}> Create</Link></Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal></>
    )
}

export default ClubProfile