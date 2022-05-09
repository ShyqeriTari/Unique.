import { Link } from "react-router-dom"
import "../styles/card.scss"


const Card = ({image, club, position, pac, shot, pas, dri, def, phy, nationality, name}) => {
	return (
		<div className="container mb-2">
<Link className="link" to="/player">
			<div className="card">
				<div className="face face1">
					<h4 className="details">{club}</h4>
					<h6 className="details">{position}</h6>
					<div className="stats content d-flex justify-content-center">
						<div className="details me-3">
							<div>
								<li ><span className="me-2">{pac}</span><span>pac</span></li>
								<li ><span className="me-2">{shot}</span><span>sho</span></li>
								<li ><span className="me-2">{pas}</span><span>pas</span></li>
							</div>
						</div>
						<div className="details">
							<div>
								<li ><span className="me-2">{dri}</span><span>dri</span></li>
								<li ><span className="me-2">{def}</span><span>def</span></li>
								<li ><span className="me-2">{phy}</span><span>phy</span></li>
							</div>
						</div>
					</div>
					<h5 className="details mt-3">{nationality}</h5>
				</div>
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<h2 className="mt-2" style={{backgroundColor: "white", width: "90%", borderRadius: "10px"}}>{name}</h2>
				</div>

			</div>
			</Link>
		</div>
	)
}

export default Card