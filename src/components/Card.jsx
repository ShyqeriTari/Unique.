import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { setFirstPlayerAction, setSecondPlayerAction } from "../redux/actions"


const Card = ({image, club, position, pac, sho, pas, dri, def, phy, nationality, name, player, id, compare, handleClose, refetch, refetchAdd}) => {

	const dispatch = useDispatch()

	const [fan, setFan]= useState(undefined)

	const role = localStorage.getItem("role")

	const fetchData = async () => {
        try {
           
          const response = await fetch(process.env.REACT_APP_LOCAL_URL + "/fan/" + localStorage.getItem("userId"), {
              headers:{
                  "Authorization": `Bearer ${localStorage.getItem("token")}`
              }
          });
          const data = await response.json();
          setFan(data);
		  console.log(data)
        } catch (error) {
          console.log(error);
        }
      };

	  useEffect(()=>{if(localStorage.getItem("role") === "fan"){fetchData()}}, [])

	  const addPlayerToClub = async (e) => {
		const newUser = { id }
		try {
		 
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/addPlayer`, {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 200) {
			refetchAdd(e)
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  }


	const addFavPlayer = async () => {
		const newUser = { id }
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
		  if (response.status === 200) {
			fetchData()
			
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

	  const addLike = async (e) => {
		const newUser = { id }
		try {
		 
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/addLike`, {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 200) {
			refetch(e)
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  }


	  const addDisLike = async (e) => {
		const newUser = { id }
		try {
		  
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/addDisLike`, {
			method: "POST",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 200) {
			refetch(e)
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  }


	  const removeFavPlayer = async () => {
		const newUser = { id }
		try {
		  if(role==="fan"){
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/removePlayer`, {
			method: "DELETE",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 204) {
			fetchData()
			refetch()
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

	  const removeLike = async (e) => {
		const newUser = { id }
		try {
		  
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/removeLike`, {
			method: "DELETE",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 204) {
			refetch(e)
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  }

	  const removeDisLike = async (e) => {
		const newUser = { id }
		try {
		 
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/removeDisLike`, {
			method: "DELETE",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 204) {
			refetch(e)
		  } else {
			alert("registration failed")
			if (response.status === 400) {
			  alert("bad request")
			}
			if (response.status === 404) {
			  alert("page not found")
			}
		  }
		} catch (error) {
		  console.log(error)
		}
	  }

	return (
		<div className="container mb-4 me-4">
			<div className="card">{ compare === "1" ?
				<div onClick={()=> {dispatch(setFirstPlayerAction(player)); handleClose()}}  className="face face1">
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
				 : compare=== "2" ? 
				<div onClick={()=> {dispatch(setSecondPlayerAction(player)); handleClose()}} className="face face1">
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
				 : compare=== "club" ? 
				 <div onClick={(e)=> {addPlayerToClub(e); handleClose()}} className="face face1">
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
				 </div>: localStorage.getItem("userId") === id ? <Link className="link" to={`/me`}>
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
				</Link> : <Link className="link" to={`/player/${id}`}>
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
				<h2 className="mt-2">{name}</h2>{ localStorage.getItem("userId") !== id &&
				<div className="d-flex m-2 justify-content-around">
				{ player && player?.like.includes(localStorage.getItem("userId")) ? <i onClick={(e)=> { removeLike(e)}} className="bi bi-heart-fill red-like judge"></i> : <i onClick={(e)=> {if(player.dislike.includes(localStorage.getItem("userId"))){removeDisLike(e); addLike(e); }else{addLike(e)}}} className= "bi bi-heart judge"></i>}
				{  player && player?.dislike.includes(localStorage.getItem("userId")) ? <i onClick={(e)=> {removeDisLike(e)}} className="bi bi-heartbreak-fill red-like judge"></i>:<i onClick={(e)=> {if(player.like.includes(localStorage.getItem("userId"))){removeLike(e); addDisLike(e)}else{addDisLike(e)}}} className= "bi bi-heartbreak judge"></i>}
				{role === "fan" ? fan && fan.favPlayers.includes(id) ? <i onClick={()=> {removeFavPlayer()}} className="bi bi-star-fill yellow-fav judge" ></i> : <i onClick={()=> { addFavPlayer()}} className= "bi bi-star judge"></i>: <></>}
				</div>}
				</div>
				</div>
			</div>
		</div>
	)
}

export default Card