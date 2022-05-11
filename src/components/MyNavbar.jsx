import { Nav, Navbar, Container } from "react-bootstrap"
import logo from "../assets/logo_transparent.png"
const MyNavbar = () => {
    return(
        <>
          <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/club">
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
      <Nav.Link href="/me">Me</Nav.Link>
      <Nav.Link href="/favourites-players">Fav players</Nav.Link>
      <Nav.Link href="/search"><i className="bi bi-search" style={{fontSize: "25px"}}></i></Nav.Link>
      <Nav.Link href="/"><i className="bi bi-door-open" style={{fontSize: "25px"}}></i></Nav.Link>
    </Nav>
    </Container>
    </Navbar>
        </>
    )
}

export default MyNavbar