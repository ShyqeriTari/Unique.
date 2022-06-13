import { useState } from "react";
import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import { ChartCompare } from "./ChartCompare"
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";
import { useSelector } from "react-redux";

const PlayerCompare = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

    const player1 = useSelector((state)=> state.firstPlayer)

    const player2 = useSelector((state)=> state.secondPlayer)

    return(
      <div  className="padding-body2">
       <Row className="g-0">
           <Col  xs={6} md={2}>
               
               <div onClick={handleShow} className="container pointer mb-4 mt-4 me-4">
		{!player1.name &&	<div className="card add-compare ">
            <i className="bi bi-plus text-white m-auto"/>
			</div>}</div>
      {player1.name && <div className="ms-3 me-2 d-flex flex-column align-items-center">
                <img src={player1.image} className="profile-img" alt="profile-img" />
             <div className="compare-infos"> {player1._id === localStorage.getItem("userId") ? <Link to={`/me`}><h3>{player1.name}</h3></Link> : <Link to={`/player/${player1._id}`}><h3>{player1.name}</h3></Link>}
                 <h4>{player1.position}</h4>
                 {player1.club?.name && player1.club?._id === localStorage.getItem("userId") ? <Link to={`/me`}><h4>{player1.club?.name}</h4></Link> : <Link to={`/club/${player1.club?._id}`}><h4>{player1.club?.name}</h4></Link>}
                 <h5>{player1.birthdate}</h5>
                 <div onClick={handleShow} className="container pointer mb-4 mt-3 me-4">
                   <Button  variant="dark" className="search-compare-button p-3"><i className="bi bi-binoculars" style={{fontSize: "15px"}}></i></Button>
               </div></div>
               </div>}		
           </Col>
           <Col xs={6} md={2} className="sm-screen-show ">
           <div onClick={handleShow2} className="container pointer mb-4 mt-4 me-4">
           {!player2.name &&	<div className="card add-compare">
            <i className="bi bi-plus text-white m-auto"/>
			</div>}</div>
      {player2.name && <> <div className="ms-3 d-flex flex-column align-items-center">
                <img src={player2.image} className="profile-img" alt="profile-img" />
                <div className="compare-infos">  {player2._id === localStorage.getItem("userId") ? <Link to={`/me`}><h3>{player2.name}</h3></Link> : <Link to={`/player/${player2._id}`}><h3>{player2.name}</h3></Link>}
                 <h4>{player2.position}</h4>
                 {player2.club?.name && player2.club?._id === localStorage.getItem("userId") ? <Link to={`/me`}><h4>{player2.club?.name}</h4></Link> : <Link to={`/club/${player2.club?._id}`}><h4>{player2.club?.name}</h4></Link>}
                 <h5>{player2.birthdate}</h5>
                 <div onClick={handleShow2} className="container pointer mb-4 mt-3 me-4">
                   <Button  variant="dark" className="search-compare-button p-3"><i className="bi bi-binoculars" style={{fontSize: "15px"}}></i></Button>
               </div> </div></div> </>}
           </Col>
           <Col  md={8}>
                   <div className="mt-2 m-auto chart-container" >
               <ChartCompare/>
               </div>
           </Col>
           <Col md={2} className="sm-screen-hide ">
           <div onClick={handleShow2} className="container pointer mb-4 mt-4 me-4">
           {!player2.name &&	<div className="card add-compare">
            <i className="bi bi-plus text-white m-auto"/>
			</div>}</div>
      {player2.name && <> <div className="ms-3 d-flex flex-column align-items-center">
                <img src={player2.image} className="profile-img" alt="profile-img" />
                <div className="compare-infos"> {player2._id === localStorage.getItem("userId") ? <Link to={`/me`}><h3>{player2.name}</h3></Link> : <Link to={`/player/${player2._id}`}><h3>{player2.name}</h3></Link>}
                 <h4>{player2.position}</h4>
                 {player2.club?.name && player2.club?._id === localStorage.getItem("userId") ? <Link to={`/me`}><h4>{player2.club?.name}</h4></Link> : <Link to={`/club/${player2.club?._id}`}><h4>{player2.club?.name}</h4></Link>}
                 <h5>{player2.birthdate}</h5>
                 <div onClick={handleShow2} className="container pointer mb-4 mt-3 me-4">
                   <Button  variant="dark" className="search-compare-button p-3"><i className="bi bi-binoculars" style={{fontSize: "15px"}}></i></Button>
               </div> </div> </div> </>}
           </Col>
      <Modal
        size="xl"
        show={show}
        onHide={() => handleClose()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Search handleClose={handleClose} compare={"1"}/></Modal.Body>
      </Modal>
      <Modal
        size="xl"
        show={show2}
        onHide={() => handleClose2()}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body><Search handleClose={handleClose2} compare={"2"}/></Modal.Body>
      </Modal>
       </Row>
       </div>
    )
}

export default PlayerCompare