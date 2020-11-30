import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import Search from "./Search";

const logOut = () => {
  console.log('Clicked and trying to logout');
  fetch('/logout');

  window.localStorage.clear();
  window.location.href = '/';
};

const Account = () => {
  return (
    <>
      <NavDropdown title="More" id="basic-nav-dropdown">
      <NavDropdown.Item href="/signup">Sign Up</NavDropdown.Item>
      <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
      <NavDropdown.Divider />
      </NavDropdown>
    </>
  );
};

class Header extends Component {
  constructor(props){
    super(props)
    this.user = props.user
    console.log(this.user.length, "user length")
  }

  render(){
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Fund The Change</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/generalOrgs">Organizations</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            {!this.user.length > 0 ? <Account /> : console.log('Failure')}
          </Nav>
        <Nav>
          <Search/>
          {this.user.length > 0 ? <Button onClick={logOut}>Log Out</Button> : console.log('Failure')}
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };
};

export default Header;
