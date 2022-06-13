import { Row, Col, Button, Modal, Dropdown, DropdownButton } from "react-bootstrap"
import "../styles/playerProfile.css"
import ProfileDataSection from "./ProfileDataSection"
import { Chart } from "./Chart"
import { useState, useEffect } from "react"
import YoutubeEmbed from "./YoutubeEmbed"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import Search from "./Search"

const PlayerProfile = () => {

    const [edit, setEdit] = useState(false)

    const [pac, setPac] = useState(undefined)

    const [sho, setSho] = useState(undefined)

    const [pas, setPas] = useState(undefined)

    const [dri, setDri] = useState(undefined)

    const [def, setDef] = useState(undefined)

    const [phy, setPhy] = useState(undefined)

    const [user, setUser] = useState(undefined)

    const [viewPlayer, setViewPlayer] = useState(undefined)

    const [video, setVideo] = useState(false)

    const [name, setName] = useState(undefined)

    const [position, setPosition] = useState(undefined)

    const [show, setShow] = useState(false);

    const params = useParams()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const fetchData = async () => {
        try {
           
          const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/player/me", {
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

      useEffect(()=>{if(params.id){
        getPlayer()
      }else{fetchData()} 
      }, [])

      const modifyVideo = async (e) => {
        e.preventDefault()
        const newVideo = { video }
        try {
            let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/me`, {
              method: "PUT",
              body: JSON.stringify(newVideo),
              headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
            })
            if (response.ok) {
              console.log(response)
              fetchData()
             
            } else {
              alert("Video failed")
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

      const formData = new FormData()

      const uploadImg = (e) => {
        formData.append("image", e.target.files[0])
      }

      const submitFile = (e) => {
        e.preventDefault()
    
        axios({
          method: "put",
          url:`${process.env.REACT_APP_LOCAL_URL}/player/imageUpload`,
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
        const newInfo = { pac, sho, pas, dri, def, phy, name, position }
        try {
            let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/me`, {
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

      const getPlayer = async () => {
        try {
           
          const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/player/" + params.id, {
              headers:{
                  "Authorization": `Bearer ${localStorage.getItem("token")}`
              }
          });
          const data = await response.json();

          const response2 = await fetch(process.env.REACT_APP_LOCAL_URL + "/player/me", {
            headers:{
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            }
        });
        const data2 = await response2.json();
        if(data._id === data2._id){
        setUser(data2);}else{
          console.log(data)
          setViewPlayer(data);
        }
        } catch (error) {
          console.log(error);
        }
      };

    return (
      <div className="mt-3 padding-body" >
        <Row className="g-0">
           {user && <> <Col md={3}>
                <div className="d-flex flex-column align-items-center">
                    <img src={user.image} className="profile-img" alt="profile-img" />
                    <i onClick={() => setEdit(!edit)} className="bi bi-three-dots pointer" />
                    {edit && <input className="form-control form-control-md mt-2" onChange={(e) => {uploadImg(e)}} id="formFileLg" type="file" />}
                    {edit && <Button className="m-auto mt-2 w-50 bg-success mb-2" onClick={(e) => {setEdit(false); submitFile(e)}}>Save Image</Button>}
                    {!edit && <h4>{user.name}</h4>}
                    {edit && <input type="text" onChange={(e) => setName(e.target.value)} style={{ color: "black" }} placeholder="Insert name here..." className="me-2 mt-2" />}
                    {!edit && <h4>{user.position}</h4>}
                    {edit && <DropdownButton
          variant="outline-dark"
          title={position ? position : "select role"}
          id="input-group-dropdown-1"

          className="mt-2"
        >
          <Dropdown.Item  onClick={(e) => {setPosition("GK")}}>GK</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("LWB")}}>LWB</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("LB")}}>LB</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("CB")}}>CB</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("RB")}}>RB</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("RWB")}}>RWB</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("LM")}}>LM</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("CM")}}>CM</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("CDM")}}>CDM</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("CAM")}}>CAM</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("RM")}}>RM</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("RW")}}>RW</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("LF")}}>LF</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("RF")}}>RF</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("ST")}}>ST</Dropdown.Item>
          <Dropdown.Item  onClick={(e) => {setPosition("CF")}}>CF</Dropdown.Item>
      
      </DropdownButton>}
              {!edit && <Link to={`/club/${user.club?._id}`}> <h3>{user.club?.name}</h3></Link>}
           {edit && <div onClick={handleShow} className="pointer bg-dark mt-1 ps-2 mb-1 d-flex align-items-center"> <span className="text-white me-2">select club </span> <i style={{fontSize: "25px"}} className="bi bi-binoculars m-auto pointer text-white me-1"/> </div>}
                {!edit && <h4>{user.birthdate}</h4>}
                    {!edit && <h4>{user.country}</h4>}
                    {edit && <Row className="mt-2"><Col><li ><input type="number" onChange={(e) => setPac(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pac</span></li>
                        <li ><input type="number" onChange={(e) => setSho(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>sho</span></li>
                        <li ><input type="number" onChange={(e) => setPas(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pas</span></li></Col>
                        <Col><li ><input type="number" onChange={(e) => setDri(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>dri</span></li>
                        <li ><input type="number" onChange={(e) => setDef(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>def</span></li>
                        <li ><input type="number" onChange={(e) => setPhy(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>phy</span></li></Col></Row>}

                </div>
                {edit && <Button className="m-auto mt-2 w-50 bg-success mb-4" onClick={(e) => {modifyUser(e); setEdit(false)}}>Save</Button>}
            </Col>
            <Col md={9}>
                <div className="scroller">
                    <div className="search-sec-container">
                        <h2>Quality</h2>
                        <div className="mt-2 m-auto chart-container" >
                        <Chart name={user.name} pac={user.pac} sho={user.sho}  pas={user.pas} dri={user.dri} def={user.def} phy={user.phy} />
                        </div>
                    </div>
                    <div className="search-sec-container mt-2">
                        <div className="d-flex align-items-center justify-content-between">
                        <h2>Video</h2>
                        <i onClick={() => setVideo(!video)} className="bi bi-three-dots pointer" />
                        </div>
                      {!video && <YoutubeEmbed embedId={user.video} />}
                      {video &&<div className="d-flex"> <input type="text" placeholder="insert video id" onChange={(e) => setVideo(e.target.value)} style={{ color: "black", width: "30%", }} className="ms-3" />
                      <Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e) => {modifyVideo(e); setVideo(!video)}}>Save</Button></div>}
                    </div>
                </div>
            </Col></>}
            {viewPlayer && <> <Col md={3}>
                <div className="d-flex flex-column align-items-center">
                    <img src={viewPlayer.image} className="profile-img" alt="profile-img" />
                     <h4>{viewPlayer.name}</h4>
                    <h4>{viewPlayer.position}</h4>{ localStorage.getItem("userId") === viewPlayer.club?._id ?
                   <Link to={`/me`}> <h3>{viewPlayer.club?.name}</h3></Link>:<Link to={`/club/${viewPlayer.club?._id}`}> <h3>{viewPlayer.club?.name}</h3></Link>}
                    <h4>{viewPlayer.birthdate}</h4>
                     <h4>{viewPlayer.country}</h4>
                </div>
               </Col>
            <Col md={9}>
                <div className="scroller">
                    <div className="search-sec-container ">
                        <h2>Quality</h2>
                        <div className="mt-2 m-auto chart-container" >
                        <Chart name={viewPlayer.name} pac={viewPlayer.pac} sho={viewPlayer.sho}  pas={viewPlayer.pas} dri={viewPlayer.dri} def={viewPlayer.def} phy={viewPlayer.phy} />
                        </div>
                    </div>
                    <div className="search-sec-container mt-2">
                        <div className="d-flex align-items-center justify-content-between">
                        <h2>Video</h2>
                        </div>
                      <YoutubeEmbed embedId={viewPlayer.video} />
                    </div>
                </div>
            </Col></>}
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
        <Modal.Body><Search refetchPlayer={fetchData} handleClose={handleClose} compare={"player"}/></Modal.Body>
      </Modal>
        </Row>
        </div>
    )
}

export default PlayerProfile