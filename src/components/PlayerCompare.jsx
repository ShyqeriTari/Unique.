import { useState } from "react";
import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import { ChartCompare } from "./ChartCompare"
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PlayerCompare = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
       <Row className="g-0">
           <Col md={2}>
               
               <div onClick={handleShow} className="container mb-4 mt-4 me-4">
			<div className="card">
            <i className="bi bi-plus text-white m-auto"/>
			</div>
		</div>
        <div className="ms-4">
                <h3>name</h3>
                <h3>Position</h3>
                <h3>Club</h3>
                <h3>Age</h3>
                </div>
           </Col>
           <Col  md={8}>
                   <div className="search-sec-container mt-2">
                   <h1>Compare</h1>
               <ChartCompare/>
               </div>
           </Col>
           <Col md={2}>
          
           <div onClick={handleShow} className="container mb-4 mt-4 me-4">
			<div className="card">
            <i className="bi bi-plus text-white m-auto"/>
			</div>
		</div>
        <div className="ms-4">
                <h3>name</h3>
                <h3>Position</h3>
                <h3>Club</h3>
                <h3>Age</h3>
               </div>
           </Col>
           <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Link className="link" to={"/search-compare-player"}> Find</Link>
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
       </Row>
    )
}

export default PlayerCompare