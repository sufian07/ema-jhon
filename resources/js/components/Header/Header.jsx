// import { Button } from 'bootstrap';
import React from 'react';
import { Form, FormControl, Nav, Navbar, NavbarBrand,NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"


const Header = () => {
    return (
        <div>
            <Navbar bg="ligth" expand="lg">
                <NavbarBrand href="/home">ema-jhon</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav" />
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="/home">Home</NavLink>
                        <NavLink href="/about">About</NavLink>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        {/* <Button variant="outline-success">Search</Button> */}
                    </Form>
                </NavbarCollapse>
            </Navbar>
            <Router>
                <Switch>
                    <Route path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default Header;