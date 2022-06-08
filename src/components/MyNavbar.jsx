
import { Nav, Navbar, Container } from "react-bootstrap"
import logo from "../assets/logo_transparent.png"

const MyNavbar = ({render, setRender}) => {

  const renderNav = localStorage.getItem("renderNav")

    return(
        <>{ !render ? <></>:
<Navbar bg="dark" style={{position:"sticky", top: "0", zIndex:"1000"}} variant="dark">
    <Container>
    <Navbar.Brand href="/search">
        <img
          alt="logo-navbar"
          src={logo}
          width="35"
          height="35"
          className="d-inline-block align-top"
        />{' '}
      Unique.
      </Navbar.Brand>
    <Nav className="ms-auto align-items-center">
      <Nav.Link href="/search"><i className="bi bi-binoculars" style={{fontSize: "25px"}}></i></Nav.Link>
      <Nav.Link href="/player-compare"> <i className="bi bi-arrow-left-right" style={{fontSize: "25px"}}></i></Nav.Link>
      <Nav.Link href="/me"><i className="bi bi-person-fill" style={{fontSize: "25px"}}></i></Nav.Link>
      <Nav.Link href="/"><i className="bi bi-door-open" onClick={()=> {localStorage.setItem("token", "");localStorage.setItem("role", ""); setRender(false) }} style={{fontSize: "25px"}}></i></Nav.Link>
    </Nav>
    </Container>
    </Navbar>
 } </>
    )
}

export default MyNavbar