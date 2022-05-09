import { Link } from "react-router-dom"
import "../styles/card.scss"


const Card = () => {
	return (
		<div className="container mb-2">
<Link className="link" to="/profile">
			<div className="card">
				<div className="face face1">
					<h4 className="java">A.S.D. Costalunga</h4>
					<h6 className="java">CM</h6>
					<div className="stats content d-flex justify-content-center">
						<div className="java me-3">
							<div>
								<li ><span className="me-2">89</span><span>pac</span></li>
								<li ><span className="me-2">94</span><span>sho</span></li>
								<li ><span className="me-2">81</span><span>pas</span></li>
							</div>
						</div>
						<div className="java">
							<div>
								<li ><span className="me-2">90</span><span>dri</span></li>
								<li ><span className="me-2">33</span><span>def</span></li>
								<li ><span className="me-2">83</span><span>phy</span></li>
							</div>
						</div>
					</div>
					<h5 className="java mt-3">Argentina</h5>
				</div>
				<div className="face face2 d-flex flex-column align-items-center justify-content-between">
				<h2>Van Basten</h2>
					<img src="https://upload.wikimedia.org/wikipedia/it/4/4d/Marco_van_Basten.jpg" alt="player-img" />
					
				</div>

			</div>
			</Link>
		</div>
	)
}

export default Card