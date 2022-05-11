    import { Button, Row, Col } from "react-bootstrap"
import "../styles/card.scss"


const PlayerDetailsCreation = () => {

	return (
        <>
        < Row className="mt-3">
            <Col md={6}>
		<div className="container mb-4 me-4">
			<div className="card" style={{width: "300px", height:"400px"}}>
				<div className="face d-flex flex-column align-items-center justify-content-end" >
                <div>
  <input className="form-control form-control-md" id="formFileLg" type="file"/>
</div>
				<div className="card-name">
				<input type="text" style={{color: "black"}} placeholder="Insert name here..." className="me-2"/>
				<div className="d-flex m-2 justify-content-around">
            	</div>
				</div>
				</div>
			</div>
		</div>
        </Col>
        <Col md={6}>
        <div className="container mb-4 me-4" >
			<div className="card" style={{width: "300px", height:"400px"}}>
        <div className="face face1">
        <input type="text" style={{color: "black"}} placeholder="Insert Club here..." className="me-2 mb-4"/>
					<div className="stats content d-flex justify-content-center mb-4" style={{color: "white"}}>
						
							<div className="me-2">
                            <li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>pac</span></li>
                            <li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>sho</span></li>
                            <li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>pas</span></li>
							</div>

							<div style={{color: "white"}}>
								<li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>dri</span></li>
								<li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>def</span></li>
								<li ><input type="number" style={{color: "black", width: "50px"}} className="me-2"/><span>phy</span></li>
							</div>
						</div>
                        <input type="text" style={{color: "black"}} placeholder="Insert Nationality here..." className="me-2"/>
				</div>
                </div>
                </div>
                </Col>
        </Row>
        <Button className="m-auto mt-2 w-50 bg-dark mb-4">Create</Button>
        </>
	)

}

export default PlayerDetailsCreation