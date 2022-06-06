import { useState } from "react";
import { Row, Col } from "react-bootstrap"
import "../styles/playerProfile.css"
import { ChartCompare } from "./ChartCompare"
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Search from "./Search";

const PlayerCompare = () => {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [show2, setShow2] = useState(false);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);

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
          
           <div onClick={handleShow2} className="container mb-4 mt-4 me-4">
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
        <Modal.Body><Search compare={"1"}/></Modal.Body>
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
        <Modal.Body><Search compare={"2"}/></Modal.Body>
      </Modal>
       </Row>
    )
}

export default PlayerCompare