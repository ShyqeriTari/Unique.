import { Col, Row, Button } from "react-bootstrap"
import SearchSection from "./SearchSection"
import { useState } from "react"
import Card from "./Card";

const Search = () => {

    const [birthdate, setBirthdate] = useState("")
    const [position, setPosition] = useState("")
    const [country, setCountry] = useState("")
    const [names, setNames] = useState("")
    const [result, setResult] = useState(false)
    const [fetchResult, setFetchResult] = useState(undefined)

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

    const fetchSearchResult = async (e) => {
        e.preventDefault()
            try {
              const response = await fetch(process.env.REACT_APP_LOCAL_URL + `/player?name=/${names}/i&country=/${country}/i&birthdate=/${birthdate}/i&position=/${position}/i`, {
                  headers:{
                      "Authorization": `Bearer ${localStorage.getItem("token")}`
                  }
              });
              const data = await response.json();
              console.log(data)
              setFetchResult(data);
              
            } catch (error) {
              console.log(error);
            }
    }

    return(
        <div>
           {!result && <> <div className="d-flex justify-content-between p-2">
                <div>
            <h2>Search</h2>
            <h4>Search players and clubs by defining search filters</h4>
            </div>
            </div>

            <Row className="m-auto mb-4 mt-5">
                <Col sm={6} md={6} lg={6}><SearchSection title={"Name"} icon={"bi bi-person-fill"} type={"text"} text={"name..."} setValue={changeName} /></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Position"} icon={"bi bi-bullseye"} type={"text"} text={"position..."} setValue={changePosition} /></Col>

                <Col sm={6} md={6} lg={6}><SearchSection title={"Birth year"} icon={"bi bi-calendar-week"} type={"number"} min={1900} max={2022} setValue={changeBirthdate}/></Col>
                <Col sm={6} md={6} lg={6}><SearchSection title={"Country"} icon={"bi bi-globe"} type={"text"} text={"country..."} setValue={changeCountry}/></Col>
            </Row>

        <Button variant="dark" className="search-button m-auto p-3" onClick={(e)=> {setResult(true); fetchSearchResult(e)} }>Search</Button>
        </>}
            {result && fetchResult && <div className="text-center">
            <h1 className="mb-5">Result</h1>
        <Row>
           {fetchResult && fetchResult.map((player, idx )=> <Col key={idx}> <Card  name={player.name} image={player.image} nationality={player.country} club={player.club?.name} position={player.position} pac={player.pac} shot={player.sho}  pas={player.pas} dri={player.dri} def={player.def} phy={player.phy}/> </Col>)
  }
        </Row>
        </div>}
        </div>
    )
}

export default Search