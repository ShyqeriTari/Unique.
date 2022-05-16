import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setFirstPlayerAction, setSecondPlayerAction } from "../redux/actions"


const Card = ({image, club, position, pac, shot, pas, dri, def, phy, nationality, name}) => {

	const dispatch = useDispatch()

	const [like, setLike] = useState(false)
	const [disLike, setDisLike] = useState(false)
	const [fav, setFav] = useState(false)

	const location = window.location.pathname

	return (
		<div className="container mb-4 me-4">
			<div className="card">
			{location === "/search-club-result" ? <Link className="link" to="/club">
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
				</Link>: location === "/search-compare-result" ? <Link className="link" to="/player-compare">
				<div onClick={()=> dispatch(setSecondPlayerAction("111"))} className="face face1">
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
				</Link> : <Link className="link" to="/player">
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
				</Link>}
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<div className="card-name">
				<h2 className="mt-2">{name}</h2>
				<div className="d-flex m-2 justify-content-around">
				<i onClick={()=> {if(disLike === false){setLike(!like)}else{setDisLike(false);setLike(!like)} }} className={like ? "bi bi-heart-fill red-like judge" : "bi bi-heart judge"}></i>
				<i onClick={()=> {if(like === false){setDisLike(!disLike)}else{setLike(false);setDisLike(!disLike)}}} className={disLike ? "bi bi-heartbreak-fill red-like judge" : "bi bi-heartbreak judge"}></i>
				<i onClick={()=> setFav(!fav)} className={fav ? "bi bi-star-fill yellow-fav judge" : "bi bi-star judge"}></i>
				</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Card