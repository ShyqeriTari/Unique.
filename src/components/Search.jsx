import { Col, Row, Button } from "react-bootstrap"
import SearchSection from "./SearchSection"
import { useState } from "react"
import Card from "./Card";
import ClubCard from "./ClubCard";

const Search = ({compare, handleClose, refetchAdd, refetchPlayer, refetchFan}) => {

    const [birthdate, setBirthdate] = useState("")
    const [position, setPosition] = useState("")
    const [country, setCountry] = useState("")
    const [names, setNames] = useState("")
    const [result, setResult] = useState(false)
    const [fetchPlayerResult, setFetchPlayerResult] = useState(undefined)
    const [fetchClubResult, setFetchClubResult] = useState(undefined)
    const [role, setRole] = useState("player")

    const location = window.location.pathname 

    const changeName = (value) => {
        setNames(value)
    }

    const changeBirthdate = (value) => {
        setBirthdate(value.toString())
    }

    const changeCountry = (value) => {
        setCountry(value)
    }

    const changePosition = (value) => {
        setPosition(value)
    }

    const fetchPlayerSearchResult = async (e) => {
        e.preventDefault()
            try {
                if(names !== "" || country !== "" || birthdate !== "" || position !== "" ){
              const response = await fetch(process.env.REACT_APP_LOCAL_URL + `/player?name=/${names}/i&country=/${country}/i&birthdate=/${birthdate}/i&position=/${position}/i`, {
                  headers:{
                      "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
              });
              const data = await response.json();
              console.log(data)
              setFetchPlayerResult(data);
            } else{
                const response = await fetch(process.env.REACT_APP_LOCAL_URL + `/player/all`, {
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const data = await response.json();
                console.log(data)
                setFetchPlayerResult(data);
            }
              
            } catch (error) {
              console.log(error);
            }
    }

    const fetchClubSearchResult = async (e) => {
        e.preventDefault()
            try {
                if(names !== "" || country !== "" || birthdate !== "" || position !== "" ){
              const response = await fetch(process.env.REACT_APP_LOCAL_URL + `/club?name=/${names}/i&country=/${country}/i`, {
                  headers:{
                      "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
              });
              const data = await response.json();
              console.log(data)
              setFetchClubResult(data);}else{
                const response = await fetch(process.env.REACT_APP_LOCAL_URL + `/club/all`, {
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                });
                const data = await response.json();
                console.log(data)
                setFetchClubResult(data);
              }
              
            } catch (error) {
              console.log(error);
            }
    }

    return(
        <div className="mt-5 padding-body" >
           { !result && location !== "/player-compare" && location !== "/me" && <div className="d-flex justify-content-center">
                <div>
            <h4>Search players and clubs by defining search filters</h4>
            <Row>
          {role === "player" ? <Col sm={6} md={6} lg={6} onClick={(e) => {setRole("player")}} className="pointer bg-dark text-white mb-1 me-1" style={{padding: "10px", border:"1px solid black", borderRadius: "5px"}}>player</Col> : <Col onClick={(e) => {setRole("player")}} className=" pointer bg-white me-1 mb-1" style={{padding: "10px", border:"1px solid black", borderRadius: "5px"}}>player</Col>}
          {role === "club" ? <Col sm={6} md={6} lg={6} onClick={(e) => {setRole("club")}} className="pointer bg-dark text-white mb-1 " style={{padding: "10px", border:"1px solid black", borderRadius: "5px"}}>club</Col> : <Col onClick={(e) => {setRole("club")  }} className=" pointer bg-white mb-1" style={{padding: "10px", border:"1px solid black", borderRadius: "5px"}}>club</Col>}
         </Row>
            </div>
            </div>}
           {!result && role === "player" && compare !== "player" && compare !== "fan" && <> 

            <Row className="mb-4 mt-5 d-flex">
                <Col sm={6} md={6} lg={6}><SearchSection title={"Name"} icon={"bi bi-person-fill"} type={"text"} text={"name..."} setValue={changeName} /></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Position"} icon={"bi bi-bullseye"} type={"text"} text={"position..."} setValue={changePosition} /></Col>

                <Col sm={6} md={6} lg={6}><SearchSection title={"Birth year"} size={"140%"} icon={"bi bi-calendar-week"} type={"number"} min={1900} max={2022} setValue={changeBirthdate}/></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Country"} icon={"bi bi-globe"} type={"text"} text={"country..."} setValue={changeCountry}/></Col>
            </Row>

        <Button variant="dark" className="search-button m-auto p-3" onClick={(e)=> {setResult(true); fetchPlayerSearchResult(e)} }>Search</Button>
        </>}
        {!result && (role === "club" || compare === "player" || compare === "fan") && <>

            <Row className="m-auto mb-4 mt-5">
                <Col sm={6} md={6} lg={6}><SearchSection title={"Name"} icon={"bi bi-person-fill"} type={"text"} text={"name..."} setValue={changeName} /></Col>

                <Col sm={6} md={6} lg={6}><SearchSection title={"Country"} icon={"bi bi-globe"} type={"text"} text={"country..."} setValue={changeCountry}/></Col>
            </Row>

        <Button variant="dark" className="search-button m-auto p-3" onClick={(e)=> {setResult(true); fetchClubSearchResult(e)} }>Search</Button>
        </>}
            {result && role === "player" && fetchPlayerResult && <div className="text-center">
            <h3 className="mb-5" style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid"}}>Players Result</h3>
        <Row>
           {fetchPlayerResult && fetchPlayerResult.map((player, idx )=> <Col key={idx}> <Card refetchAdd={refetchAdd} refetch={fetchPlayerSearchResult} handleClose={handleClose} player={player} compare={compare} id={player._id}  name={player.name} image={player.image} nationality={player.country} club={player.club?.name} position={player.position} pac={player.pac} sho={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}/> </Col>)
  }
        </Row>
        </div>}
        {result && (role === "club" || compare === "player" || compare === "fan") && fetchClubResult && <div className="text-center">
            <h3 className="mb-5" style={{borderBottom: "0.5px solid", padding: "5px", borderTop: "0.5px solid"}}>Clubs Result</h3>
        <Row>
           {fetchClubResult && fetchClubResult.map((club, idx )=> <Col key={idx}> <ClubCard refetchFan={refetchFan} handleClose={handleClose} refetchPlayer={refetchPlayer} compare={compare} refetch={fetchClubSearchResult} club={club} id={club._id} name={club.name} image={club.image} city={club.country} year={club.birthdate} /> </Col>)
  }
        </Row>
        </div>}
        </div>
    )
}

export default Search