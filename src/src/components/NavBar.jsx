import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';



function MyNavbar({ onSearchResults }) {
  
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="position-relative">
      <Container fluid>
        <Navbar.Brand href="#">MoodBoard Maker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1">
              <FontAwesomeIcon icon={faHouse} size="xl"/>
            </Nav.Link>
            <Nav.Link href="#action2">
              <FontAwesomeIcon icon={faPlus}  size="xl"/>
            </Nav.Link>
            
            <Nav.Link className="search-wrapper">
              <SearchBar onSearchResults={onSearchResults}/>
            </Nav.Link>
          </Nav>

          <Nav.Link href="#action2">
              <FontAwesomeIcon icon={faUserLarge} size="xl"/>
            </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;