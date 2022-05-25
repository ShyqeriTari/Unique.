import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { setFirstPlayerAction, setSecondPlayerAction } from "../redux/actions"


const Card = ({image, club, position, pac, sho, pas, dri, def, phy, nationality, name, player}) => {

	const dispatch = useDispatch()

	const [like, setLike] = useState(false)
	const [disLike, setDisLike] = useState(false)
	const [fav, setFav] = useState(false)

	const location = window.location.pathname

	const role = localStorage.getItem("role")

	const addFavPlayer = async (e) => {
		e.preventDefault()
		const newUser = { player }
		try {
		  if(role==="fan"){
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/addPlayer`, {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.ok) {
			let data = await response.json()
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }}
		} catch (error) {
		  console.log(error)
		}
	  }

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
								<li ><span className="me-2">{sho}</span><span>sho</span></li>
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
				</Link>: location === "/search-compare-result1" ? <Link className="link" to="/player-compare">
				<div onClick={()=> dispatch(setFirstPlayerAction("111"))} className="face face1">
					<h4 className="details">{club}</h4>
					<h6 className="details">{position}</h6>
					<div className="stats content d-flex justify-content-center">
						<div className="details me-3">
							<div>
								<li ><span className="me-2">{pac}</span><span>pac</span></li>
								<li ><span className="me-2">{sho}</span><span>sho</span></li>
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
				</Link> : location === "/search-compare-result2" ? <Link className="link" to="/player-compare">
				<div onClick={()=> dispatch(setSecondPlayerAction("222"))} className="face face1">
					<h4 className="details">{club}</h4>
					<h6 className="details">{position}</h6>
					<div className="stats content d-flex justify-content-center">
						<div className="details me-3">
							<div>
								<li ><span className="me-2">{pac}</span><span>pac</span></li>
								<li ><span className="me-2">{sho}</span><span>sho</span></li>
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
								<li ><span className="me-2">{sho}</span><span>sho</span></li>
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
				{role === "fan" && <i onClick={()=> {setFav(!fav); addFavPlayer()}} className={fav ? "bi bi-star-fill yellow-fav judge" : "bi bi-star judge"}></i>}
				</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default Card