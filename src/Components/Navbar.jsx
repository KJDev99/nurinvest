import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import './main.css'
import { FcAlarmClock } from "react-icons/fc";
import MovingComponent from 'react-moving-text'
import Logo from './Imgs/convert (1).svg'

function BasicExample() {

  return (
  //   <Navbar className="navbar1" expand="lg">
  //   <Container className="navbar__all">
  //   <Nav.Link href="#home" className="navbar2"><img src={Logo} alt="" /></Nav.Link>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav" className="nav__list">
  //       <Nav className="me-auto">
  //         <Nav.Link href="#home">Home</Nav.Link>
  //         <Nav.Link href="#link">Link</Nav.Link>
  //         <NavDropdown title="Dropdown" id="basic-nav-dropdown">
  //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.2">
  //             Another action
  //           </NavDropdown.Item>
  //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
  //           <NavDropdown.Divider />
  //           <NavDropdown.Item href="#action/3.4">
  //             Separated link
  //           </NavDropdown.Item>
  //         </NavDropdown>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>
    <Navbar className="navbar1" expand="lg">
      <Container className="navbar__all">
        <Nav.Link href="#home" className="navbar2"><img src={Logo} alt="" /></Nav.Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">


            <Nav.Link href="#sec__one" className="nav3">KURS HAQIDA</Nav.Link>
            <Nav.Link href="#sec_two" className="nav3">KIMLAR UCHUN</Nav.Link>
            <Nav.Link href="#sec_three" className="nav3">KURS DASTURI</Nav.Link>
            <Nav.Link href="#sec_four" className="nav3">TA'LIM TARIFLARI</Nav.Link>

          </Nav>
        </Navbar.Collapse>
        <div className="clock ">
          <FcAlarmClock className="clock_item" />
          <MovingComponent
            type="flip"
            duration="3000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="90"
            fillMode="forwards"
            className='clock_animate'
          >
            Kursga 22-iyulda start beriladi
          </MovingComponent>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
