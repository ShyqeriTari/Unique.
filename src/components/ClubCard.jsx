import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useState } from "react"


const ClubCard = ({image, club, year, name}) => {

	const [like, setLike] = useState(false)
	const [disLike, setDisLike] = useState(false)
	const [fav, setFav] = useState(false)


	return (
		<div className="container mb-4 me-4">
			<div className="card">
			<Link className="link" to="/club">
				<div className="face face1">
					<h4 className="details">{club}</h4>
					<h5 className="details mt-5">{year}</h5>
				</div>
				</Link>
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

export default ClubCard