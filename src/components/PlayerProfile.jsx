import { Row, Col, Button, Modal } from "react-bootstrap"
import "../styles/playerProfile.css"
import ProfileDataSection from "./ProfileDataSection"
import { Chart } from "./Chart"
import { useState, useEffect } from "react"
import YoutubeEmbed from "./YoutubeEmbed"
import axios from "axios"
import { useParams } from "react-router-dom"
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
        <Row className="g-0">
           {user && <> <Col md={3}>
                <div className="ms-3">
                    <img src={user.image} className="profile-img" alt="profile-img" />
                    <i onClick={() => setEdit(!edit)} className="bi bi-three-dots pointer" />
                    {edit && <input className="form-control form-control-md mt-2" onChange={(e) => {uploadImg(e)}} id="formFileLg" type="file" />}
                    {edit && <Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e) => {setEdit(false); submitFile(e)}}>Save Image</Button>}
                    {!edit && <h3>{user.name}</h3>}
                    {edit && <input type="text" onChange={(e) => setName(e.target.value)} style={{ color: "black" }} placeholder="Insert name here..." className="me-2 mt-2" />}
                    {!edit && <h3>{user.position}</h3>}
                    {edit && <input type="text" onChange={(e) => setPosition(e.target.value)} style={{ color: "black" }} placeholder="Insert position here..." className="me-2 mt-2" />}
                    {!edit && <h3>{user.club?.name}</h3>}
                    {edit && <div onClick={handleShow} className="pointer"> <span>select club </span> <i  className="bi bi-plus m-auto pointer"/> </div>}
                    {!edit && <h3>{user.birthdate}</h3>}
                    {!edit && <h3>{user.country}</h3>}
                    {edit && <><li ><input type="number" onChange={(e) => setPac(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pac</span></li>
                        <li ><input type="number" onChange={(e) => setSho(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>sho</span></li>
                        <li ><input type="number" onChange={(e) => setPas(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pas</span></li>
                        <li ><input type="number" onChange={(e) => setDri(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>dri</span></li>
                        <li ><input type="number" onChange={(e) => setDef(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>def</span></li>
                        <li ><input type="number" onChange={(e) => setPhy(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>phy</span></li></>}

                </div>
                {edit && <Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e) => {modifyUser(e); setEdit(false); submitFile(e)}}>Save</Button>}
            </Col>
            <Col md={9}>
                <div className="scroller">
                    <div className="search-sec-container mt-2">
                        <h1>Quality</h1>
                        <Chart pac={user.pac} sho={user.sho}  pas={user.pas} dri={user.dri} def={user.def} phy={user.phy} />
                    </div>
                    <div className="search-sec-container mt-2">
                        <div className="d-flex align-items-center justify-content-between">
                        <h1>Video</h1>
                        <i onClick={() => setVideo(!video)} className="bi bi-three-dots pointer" />
                        </div>
                      {!video && <YoutubeEmbed embedId={user.video} />}
                      {video &&<div className="d-flex"> <input type="text" placeholder="insert video id" onChange={(e) => setVideo(e.target.value)} style={{ color: "black", width: "30%", }} className="ms-3" />
                      <Button className="m-auto mt-2 w-50 bg-dark mb-4" onClick={(e) => {modifyVideo(e); setVideo(!video)}}>Save</Button></div>}
                    </div>
                </div>
            </Col></>}
            {viewPlayer && <> <Col md={3}>
                <div className="ms-3">
                    <img src={viewPlayer.image} className="profile-img" alt="profile-img" />
                     <h3>{viewPlayer.name}</h3>
                    <h3>{viewPlayer.position}</h3>
                    <h3>{viewPlayer.club?.name}</h3>
                    <h3>{viewPlayer.birthdate}</h3>
                     <h3>{viewPlayer.country}</h3>
                </div>
               </Col>
            <Col md={9}>
                <div className="scroller">
                    <div className="search-sec-container mt-2">
                        <h1>Quality</h1>
                        <Chart pac={viewPlayer.pac} sho={viewPlayer.sho}  pas={viewPlayer.pas} dri={viewPlayer.dri} def={viewPlayer.def} phy={viewPlayer.phy} />
                    </div>
                    <div className="search-sec-container mt-2">
                        <div className="d-flex align-items-center justify-content-between">
                        <h1>Video</h1>
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
    )
}

export default PlayerProfile