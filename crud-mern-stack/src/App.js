import React from "react"
import {Nav, Navbar, Container, Row, Col} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPet from "./components/add_pet";
import EditPetInfo from "./components/edit_pet_info";
import PetList from "./components/pet_list"

import './App.css';
import "bootstrap/dist/css/bootstrap.css"


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/add_pet"} className="nav-link">
                  PetBuddy
                </Link>
              </Navbar.Brand>


              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/add_pet"} className="nav-link">
                    Add new pet
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/pet_list"} className="nav-link">
                    Pet list
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>


        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/" element={<AddPet/>}/>
                  <Route path="/add_pet" element={<AddPet/>}/>
                  <Route path="/edit_pet_info/:id" element={<EditPetInfo/>}/>
                  <Route path="/pet_list" element={<PetList/>}/>
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
