import React, { Component } from 'react';
import {Button, Col, Container, Form, Navbar} from 'react-bootstrap';
import Logo from'../assets/images/logo.png';
import { Link } from 'react-router-dom';

export class TopNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg" className="bg-light" fixed='top'>
        <Container fluid>
        {/* Add columns to have a grid */}
        <Col lg={4} md={4} sm={12} xs={12}>
          <Navbar.Brand href="#">
            <Link to="/"><img alt="Main Logo" src={Logo} width={50} height={50} className='d-inline-block' /></Link>
            MATJER
          </Navbar.Brand>
        </Col> 
        {/* Add columns to have a grid */}
        <Col lg={3} md={4} sm={12} xs={12}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-0"
              aria-label="Search"
            />
          <Link to="/search" variant="outline-primary"><i className='fa fa-search'></i></Link>
          </Form>
        </Col>
         {/* Add columns to have a grid */}
      
              <Link to="cart_list"><Button variant="outline-primary"><i className='fa fa-shopping-cart'></i>Items 0</Button></Link>
              <Link to="/favourit"><i className='fa h4 fa-bell'></i>
                <sup><span className='badge text-white bg-danger align-top'>8</span></sup>
              </Link>
              <Link to="/notification"><i className='fa h4 fa-heart'></i>
                <sup><span className='badge text-white bg-danger align-top'>8</span></sup>
              </Link>
              <Link to="/login"><i className='fa fa-share'></i></Link>
              <Link to="/profile"><i className='fa h4 fa-address-card'></i></Link>
   
        </Container>
      </Navbar>
    );
  }
}
export default TopNavbar
