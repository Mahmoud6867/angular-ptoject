import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import changeLang from './../store/language/Action/ActionLang';


function Header() {
  const language = useSelector((state)=>state.lang);
  const dispatch = useDispatch();
  const handleChange = ()=>{
    dispatch(changeLang(language==="EN"?"AR":"EN"));
  }
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><Button variant="outline-primary" onClick={()=>{handleChange()}}>Language: {language}</Button></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-pills">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/movies">Movies</NavLink>
            <NavLink className="nav-link" to="/favorites">Favorites</NavLink>
            <NavLink className="nav-link" to="/about">About Us</NavLink>
            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
          </Nav>
            <NavDropdown  title="Account" id="basic-nav-dropdown">
              <NavLink className="nav-link" to="/signUp">Sign Up</NavLink>
              <NavLink className="nav-link" to="/login">Login</NavLink>
              <NavDropdown.Divider />
              <NavLink className="nav-link">Account Settings</NavLink>
            </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
