// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export class TopNavBar extends Component {
  //   static propTypes = {}

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand>
              <strong>N</strong>ews<strong>A</strong>pp
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/business">Business</Nav.Link>
                <Nav.Link href="/entertainment">Entertainment</Nav.Link>
                <Nav.Link href="/general">General</Nav.Link>
                <Nav.Link href="/health">Health</Nav.Link>
                <Nav.Link href="/science">Science</Nav.Link>
                <Nav.Link href="/sports">Sports</Nav.Link>
                <Nav.Link href="/technology">Technology</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavBar;
