// import PropTypes from 'prop-types'
import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

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
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business" id="RouterNavLink">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment" id="RouterNavLink">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/Health" id="RouterNavLink">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science" id="RouterNavLink">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports" id="RouterNavLink">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology" id="RouterNavLink">Technology</Link></li>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default TopNavBar;
