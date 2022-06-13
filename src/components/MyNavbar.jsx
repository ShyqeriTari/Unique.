
import { Nav, Navbar, Container } from "react-bootstrap"
import logo from "../assets/logo_transparent.png"

const MyNavbar = ({render, setRender}) => {


  const location = window.location.pathname

    return(
        <>{ !render ? <></>:
<Navbar bg="dark" style={{position:"sticky", top: "0", zIndex:"1000"}} variant="dark">
    <Container>
    <Navbar.Brand className="d-flex align-items-center" href="/search">
        <img
          alt="logo-navbar"
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top me-2"
        />{' '}
        <span style={{fontSize: "25px"}}>Unique.</span>
      </Navbar.Brand>
      
    <Nav className="ms-auto align-items-center">
      <Nav.Link href="/search"><i className={location=== "/search" ? "bi bi-binoculars text-white" : "bi bi-binoculars"} style={{fontSize: "23px"}}></i></Nav.Link>
      <Nav.Link href="/player-compare"> <i className={location=== "/player-compare" ?"bi bi-arrow-left-right text-white" : "bi bi-arrow-left-right"} style={{fontSize: "23px"}}></i></Nav.Link>
      <Nav.Link href="/me"><i className={location=== "/me" ? "bi bi-person-fill text-white" : "bi bi-person-fill"} style={{fontSize: "23px"}}></i></Nav.Link>
      <Nav.Link href="/"><i className="bi bi-door-open" onClick={()=> {localStorage.setItem("token", "");localStorage.setItem("role", ""); setRender(false) }} style={{fontSize: "23px"}}></i></Nav.Link>
    </Nav>
    </Container>
    </Navbar>
 } </>
    )
}

export default MyNavbar