import React, { useState, useEffect } from "react"
import { Form, Button,  Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../styles/login.css"
import logoBlack from "../assets/logo-black.png"

const Login = ({setRender}) => {
  const [view, setView] = useState(true)

  const changeView = () => {
    setView(!view)
  }


  useEffect(()=>{
    localStorage.setItem("role", "fan")
    setRender(false)
  }, [])

  return (
    <div className="welcome">
        <img src={logoBlack} alt="logo_black" width={"100px"}/>
      <h1>Unique.</h1>
      {view ? (
        <Log setRender={setRender} registerView={changeView} />
      ) : (
        <Register setRender={setRender} loginView={changeView} />
      )}
    </div>
  )
}

// Login Component**************

function Log({ registerView, setRender}) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("fan")
  const navigate = useNavigate()

  const userLogin = async (e) => {
    e.preventDefault()
    const User = {  password, email }
    try {
      if(role==="fan"){
      let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/login`, {
        method: "POST",
        body: JSON.stringify(User),
        headers: {
          "Content-type": "application/json",
        },
      })
      if (response.ok) {
        let data = await response.json()
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("userId", data.id)
        navigate("/search")
        setRender(true)
      } else {
        alert("registration failed")
        if (response.status === 400) {
          alert("bad request")
        }
        if (response.status === 404) {
          alert("page not found")
        }
      }}else if(role==="player"){
        let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/login`, {
          method: "POST",
          body: JSON.stringify(User),
          headers: {
            "Content-type": "application/json",
          },
        })
        if (response.ok) {
          let data = await response.json()
          localStorage.setItem("token", data.accessToken)
          navigate("/search")
          setRender(true)
          localStorage.setItem("userId", data.id)
        } else {
          alert("registration failed")
          if (response.status === 400) {
            alert("bad request")
          }
          if (response.status === 404) {
            alert("page not found")
          }
        }}else if(role==="club"){let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/login`, {
          method: "POST",
          body: JSON.stringify(User),
          headers: {
            "Content-type": "application/json",
          },
        })
        if (response.ok) {
          let data = await response.json()
          localStorage.setItem("token", data.accessToken)
          navigate("/search")
          setRender(true)
          localStorage.setItem("userId", data.id)
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
    <div className="login">
      <h3>Login</h3>
      <p className="view-change">
        {`Not registered? `}
        <span className="view-link" onClick={registerView}>
          {`Sign up here`}
        </span>
      </p>
      <Form onSubmit={(e) => role && userLogin(e)}>
        <Form.Group className="mt-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            size="md"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label className="mt-3">Password</Form.Label>
          <Form.Control
            required
            size="md"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <Form.Label className="mt-3">Select Role</Form.Label>
          <Row>{role === "fan" ? <Col onClick={(e) => {setRole("fan");  localStorage.setItem("role", "fan")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>fan</Col> : <Col onClick={(e) => {setRole("fan");  localStorage.setItem("role", "fan")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>fan</Col>}
          {role === "player" ? <Col onClick={(e) => {setRole("player");  localStorage.setItem("role", "player")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>player</Col> : <Col onClick={(e) => {setRole("player"); localStorage.setItem("role", "player")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>player</Col>}
          {role === "club" ? <Col onClick={(e) => {setRole("club");  localStorage.setItem("role", "club")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>club</Col> : <Col onClick={(e) => {setRole("club");  localStorage.setItem("role", "club")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>club</Col>}
         </Row>
        </Form.Group>
        <Button type="submit" className="mt-4 m-auto log-button" variant="dark">
          Log In
        </Button>
      </Form>
    </div>
  )
}

// Register Component**************

function Register({ loginView, setRender }) {
  const [name, setName] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [role, setRole] = useState("fan")

  const navigate = useNavigate()

  const userRegister = async (e) => {
    e.preventDefault()
    const newUser = { name, birthdate, password, email, country, role }
    try {
      if(role==="fan"){
      let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/fan/register`, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json",
        },
      })
      if (response.ok) {
        let data = await response.json()
        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("userId", data._id)
        navigate("/search")
        setRender(true)
      } else {
        alert("registration failed")
        if (response.status === 400) {
          alert("bad request")
        }
        if (response.status === 404) {
          alert("page not found")
        }
      }}else if(role==="player"){
        let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/player/register`, {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-type": "application/json",
          },
        })
        if (response.ok) {
          let data = await response.json()
          localStorage.setItem("token", data.accessToken)
          navigate("/search")
          setRender(true)
          localStorage.setItem("userId", data._id)
        } else {
          alert("registration failed")
          if (response.status === 400) {
            alert("bad request")
          }
          if (response.status === 404) {
            alert("page not found")
          }
        }}else if(role==="club"){let response = await fetch(`${process.env.REACT_APP_LOCAL_URL}/club/register`, {
          method: "POST",
          body: JSON.stringify(newUser),
          headers: {
            "Content-type": "application/json",
          },
        })
        if (response.ok) {
          let data = await response.json()
          localStorage.setItem("token", data.accessToken)
          navigate("/search")
          setRender(true)
          localStorage.setItem("userId", data._id)
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
    <div className="register">
      <h3>Sign Up</h3>
      <p className="view-change view-link" onClick={loginView}>
        Log In?
      </p>
      <Form onSubmit={(e) => userRegister(e)}>
        <Form.Group className="mt-3">
        <Form.Label>Full name</Form.Label>
          <Form.Control
            required
            size="md"
            placeholder="Enter Full name"
            onChange={(e) => setName(e.target.value)}
          />
           <Form.Label className="mt-3">Role</Form.Label>
           <Row>{role === "fan" ? <Col onClick={(e) => {setRole("fan");  localStorage.setItem("role", "fan")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>fan</Col> : <Col onClick={(e) => {setRole("fan");  localStorage.setItem("role", "fan")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>fan</Col>}
          {role === "player" ? <Col onClick={(e) => {setRole("player");  localStorage.setItem("role", "player")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>player</Col> : <Col onClick={(e) => {setRole("player"); localStorage.setItem("role", "player")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>player</Col>}
          {role === "club" ? <Col onClick={(e) => {setRole("club");  localStorage.setItem("role", "club")}} className="me-2 pointer bg-dark text-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>club</Col> : <Col onClick={(e) => {setRole("club");  localStorage.setItem("role", "club")}} className="me-2 pointer bg-white" style={{padding: "5px", border:"1px solid black", borderRadius: "5px"}}>club</Col>}
         </Row>
         <Form.Label className="mt-3">Age</Form.Label>
          <Form.Control
            required
            size="md"
            type="date"
            placeholder="Enter Birth Date"
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <Form.Label className="mt-3">Country</Form.Label>
          <Form.Control
            required
            size="md"
            type="text"
            placeholder="Enter Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <Form.Label className="mt-3">Email Address</Form.Label>
          <Form.Control
            required
            size="md"
            type="email"
            placeholder="Enter Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Label className="mt-3" type="password">
            Password
          </Form.Label>
          <Form.Control
            type="password"
            required
            size="md"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" className="mt-4 m-auto log-button" variant="dark">
          Sign Up
        </Button>
      </Form>
    </div>
  )
}

export default Login