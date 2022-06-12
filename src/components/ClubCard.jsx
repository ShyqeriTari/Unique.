import { Link } from "react-router-dom"
import "../styles/card.scss"
import { useEffect, useState } from "react"


const ClubCard = ({image, club, year, name, city, id, refetch, refetchPlayer, compare, handleClose, refetchFan}) => {

	const [like, setLike] = useState(false)
	const [disLike, setDisLike] = useState(false)
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

	const addFavClub = async () => {
		
		const newUser = { id }
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

	  const modifyUser = async () => {
        const club= id
        const newInfo = { club }
        try {
            let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/me`, {
              method: "PUT",
              body: JSON.stringify(newInfo),
              headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
            })
            if (response.ok) {
              console.log(response)
              refetchPlayer()
             
            } else {
              alert("Modification Failed")
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

	  const modifyFan = async () => {
        const club = id
        const newInfo = { club }
        try {
            let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/me`, {
              method: "PUT",
              body: JSON.stringify(newInfo),
              headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
              },
            })
            if (response.ok) {
              console.log(response)
              refetchFan()
             
            } else {
              alert("Modification Failed")
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

	  const addLike = async (e) => {
		const newUser = { id }
		try {
		 
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/addLike`, {
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
		  
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/addDisLike`, {
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

	  const removeFavClub = async (e) => {
		const newUser = { id }
		try {
		  if(role==="fan"){
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/removeClub`, {
			method: "DELETE",
			body: JSON.stringify(newUser),
			headers: {
			  "Content-type": "application/json",
			  "Authorization": `Bearer ${localStorage.getItem("token")}`
			},
		  })
		  if (response.status === 204) {
			refetch(e)
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

	  const removeLike = async (e) => {
		const newUser = { id }
		try {
		 
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/removeLike`, {
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
		  
		  let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/removeDisLike`, {
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
			<div className="card">{ compare === "player" ? <>
				<div onClick={()=> {modifyUser(); handleClose()}} className="face face1">
					<h4 className="details">{name}</h4>
					<h5 className="details mt-2">{city}</h5>
					<h5 className="details mt-5">{year}</h5>
				</div>
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<div className="card-name">
				<h2 className="mt-2">{name}</h2>
				<div className="d-flex m-2 justify-content-around">
				{club && club.like.includes(localStorage.getItem("userId")) ? <i onClick={(e)=> { removeLike(e)}} className="bi bi-heart-fill red-like judge"></i> : <i onClick={(e)=> {if(club.dislike.includes(localStorage.getItem("userId"))){addLike(e); removeDisLike(e)}else{addLike(e)} }} className= "bi bi-heart judge"></i>}
				{club && club.dislike.includes(localStorage.getItem("userId")) ?<i onClick={(e)=> {removeDisLike(e)}} className="bi bi-heartbreak-fill red-like judge"></i>:<i onClick={(e)=> {if(club.like.includes(localStorage.getItem("userId"))){removeLike(e); addDisLike(e)}else{addDisLike(e)}}} className= "bi bi-heartbreak judge"></i>}
				{role === "fan" ? fan && fan.favClubs.includes(id) ? <i onClick={()=> {removeFavClub() }} className="bi bi-star-fill yellow-fav judge" ></i> : <i onClick={()=> { addFavClub()}} className= "bi bi-star judge"></i>: <></>}
				</div>
				</div>
				</div> </>: compare === "fan" ? <>
				<div onClick={()=> {modifyFan(); handleClose()}} className="face face1">
					<h4 className="details">{name}</h4>
					<h5 className="details mt-2">{city}</h5>
					<h5 className="details mt-5">{year}</h5>
				</div>
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<div className="card-name">
				<h2 className="mt-2">{name}</h2>
				<div className="d-flex m-2 justify-content-around">
				{club && club.like.includes(localStorage.getItem("userId")) ? <i onClick={(e)=> { removeLike(e)}} className="bi bi-heart-fill red-like judge"></i> : <i onClick={(e)=> {if(club.dislike.includes(localStorage.getItem("userId"))){addLike(e); removeDisLike(e)}else{addLike(e)} }} className= "bi bi-heart judge"></i>}
				{club && club.dislike.includes(localStorage.getItem("userId")) ?<i onClick={(e)=> {removeDisLike(e)}} className="bi bi-heartbreak-fill red-like judge"></i>:<i onClick={(e)=> {if(club.like.includes(localStorage.getItem("userId"))){removeLike(e); addDisLike(e)}else{addDisLike(e)}}} className= "bi bi-heartbreak judge"></i>}
				{role === "fan" ? fan && fan.favClubs.includes(id) ? <i onClick={()=> {removeFavClub() }} className="bi bi-star-fill yellow-fav judge" ></i> : <i onClick={()=> { addFavClub()}} className= "bi bi-star judge"></i>: <></>}
				</div>
				</div>
				</div> </>: localStorage.getItem("userId") === id ?  <>
			<Link className="link" to={`/me`}>
				<div className="face face1">
					<h4 className="details">{name}</h4>
					<h5 className="details mt-2">{city}</h5>
					<h5 className="details mt-5">{year}</h5>
				</div>
				</Link>
				<div className="face face2 d-flex flex-column align-items-center justify-content-end" style={{backgroundImage:`url(${image})`}}>
				<div className="card-name">
				<h2 className="mt-2">{name}</h2>
				</div>
				</div> </>: <>
			<Link className="link" to={`/club/${id}`}>
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
				{club && club.like.includes(localStorage.getItem("userId")) ? <i onClick={(e)=> { removeLike(e)}} className="bi bi-heart-fill red-like judge"></i> : <i onClick={(e)=> {if(club.dislike.includes(localStorage.getItem("userId"))){addLike(e); removeDisLike(e)}else{addLike(e)} }} className= "bi bi-heart judge"></i>}
				{club && club.dislike.includes(localStorage.getItem("userId")) ?<i onClick={(e)=> {removeDisLike(e)}} className="bi bi-heartbreak-fill red-like judge"></i>:<i onClick={(e)=> {if(club.like.includes(localStorage.getItem("userId"))){removeLike(e); addDisLike(e)}else{addDisLike(e)}}} className= "bi bi-heartbreak judge"></i>}
				{role === "fan" ? fan && fan.favClubs.includes(id) ? <i onClick={()=> {removeFavClub() }} className="bi bi-star-fill yellow-fav judge" ></i> : <i onClick={()=> { addFavClub()}} className= "bi bi-star judge"></i>: <></>}
				</div>
				</div>
				</div> </>}
			</div>
		</div>
	)
}

export default ClubCard