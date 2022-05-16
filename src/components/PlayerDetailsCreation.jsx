import { Button, Row, Col } from "react-bootstrap"
import "../styles/card.scss"
import logo from "../assets/logo_transparent.png"
import { useState } from "react"


const PlayerDetailsCreation = () => {

	const [pac, setPac] = useState(undefined)

	const [sho, setSho] = useState(undefined)

	const [pas, setPas] = useState(undefined)

	const [dri, setDri] = useState(undefined)

	const [def, setDef] = useState(undefined)

	const [phy, setPhy] = useState(undefined)

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
								<input type="text" style={{ color: "black" }} placeholder="Insert Club here..." className="me-2 mb-4" />
								<div className="stats content d-flex justify-content-center mb-4" style={{ color: "white" }}>

									<div className="me-2">
										<li ><input type="number" onChange={(e)=> setPac(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pac</span></li>
										<li ><input type="number" onChange={(e)=> setSho(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>sho</span></li>
										<li ><input type="number" onChange={(e)=> setPas(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>pas</span></li>
									</div>

									<div style={{ color: "white" }}>
										<li ><input type="number" onChange={(e)=> setDri(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>dri</span></li>
										<li ><input type="number" onChange={(e)=> setDef(e.target.value)}  style={{ color: "black", width: "50px" }} className="me-2" /><span>def</span></li>
										<li ><input type="number" onChange={(e)=> setPhy(e.target.value)} style={{ color: "black", width: "50px" }} className="me-2" /><span>phy</span></li>
									</div>
								</div>
								<input type="text" style={{ color: "black" }} placeholder="Insert Nationality here..." className="me-2" />
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

export default PlayerDetailsCreation