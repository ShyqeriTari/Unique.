import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useState } from "react"


const ClubCard = ({image, club, year, name, city}) => {

	const [like, setLike] = useState(false)
	const [disLike, setDisLike] = useState(false)
	const [fav, setFav] = useState(false)

	const role = localStorage.getItem("role")

	const addFavClub = async (e) => {
		e.preventDefault()
		const newUser = { club }
		try {
		  if(role==="fan"){
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/addClub`, {
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
			<Link className="link" to="/club">
				<div className="face face1">
					<h4 className="details">{name}</h4>
					<h5 className="details mt-2">{city}</h5>
					<h5 className="details mt-5">{year}</h5>
				</div>
				</Link>
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<div className="card-name">
				<h2 className="mt-2">{name}</h2>
				<div className="d-flex m-2 justify-content-around">
				<i onClick={()=> {if(disLike === false){setLike(!like)}else{setDisLike(false);setLike(!like)} }} className={like ? "bi bi-heart-fill red-like judge" : "bi bi-heart judge"}></i>
				<i onClick={()=> {if(like === false){setDisLike(!disLike)}else{setLike(false);setDisLike(!disLike)}}} className={disLike ? "bi bi-heartbreak-fill red-like judge" : "bi bi-heartbreak judge"}></i>
				{role === "fan" && <i onClick={()=> {setFav(!fav); addFavClub()}} className={fav ? "bi bi-star-fill yellow-fav judge" : "bi bi-star judge"}></i>}
				</div>
				</div>
				</div>
			</div>
		</div>
	)
}

export default ClubCard