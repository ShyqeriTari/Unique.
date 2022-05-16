import { Button, Row, Col } from "react-bootstrap"
import "../styles/card.scss"
import logo from "../assets/logo_transparent.png"


const ClubDetailsCreation = () => {

	return (
		<>
			< Row className="mt-3">
				<Col md={6}>
					<div className="container mb-4 me-4">
						<div className="card" style={{ width: "300px", height: "400px" }}>
							<div className="face" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "contain" }} >
							<div className="d-flex flex-column align-items-center justify-content-end" style={{backgroundColor:"rgba(22,22,22,0.5)", height:"100%"}}>
								<div>
									<input className="form-control form-control-md" id="formFileLg" type="file" />
								</div>
								<div className="card-name">
									<input type="text" style={{ color: "black" }} placeholder="Insert name here..." className="me-2" />
								</div>
								</div>
							</div>
						</div>
					</div>
				</Col>
				<Col md={6}>
					<div className="container mb-4 me-4" >
						<div className="card" style={{ width: "300px", height: "400px" }}>
							<div className="face face1" style={{ backgroundImage: `url(${logo})`, backgroundRepeat: "no-repeat", backgroundPosition: "top", backgroundSize: "contain" }}>
								<div style={{backgroundColor:"rgba(22,22,22,0.5)", height:"100%"}}>
								<input type="text" style={{ color: "black" }} placeholder="Insert Club name..." className="me-2 mb-4" />
								<input type="text" style={{ color: "black" }} placeholder="Insert Club city..." className="me-2 mb-4" />
								<label className="text-white">Foundation year</label>
								<input type="date" style={{ color: "black" }} placeholder="Insert foundation year..." className="me-2" />
								</div>
							</div>
						</div>
					</div>
				</Col>
			</Row>
			<Button className="m-auto mt-2 w-50 bg-dark mb-4">Create</Button>
		</>
	)

}

export default ClubDetailsCreation