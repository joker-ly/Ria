import React, { Component } from 'react';
import {Button, Col, Container, Form, Navbar} from 'react-bootstrap';
import Logo from'../assets/images/logo.png';

export class TopNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg" className="bg-light" fixed='top'>
        <Container fluid>
        {/* Add columns to have a grid */}
        <Col lg={4} md={4} sm={12} xs={12}>
          <Navbar.Brand href="#">
            <img alt="Main Logo" src={Logo} width={50} height={50} className='d-inline-block' />
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
          <Button variant="outline-primary"><i className='fa fa-search'></i></Button>
          </Form>
        </Col>
         {/* Add columns to have a grid */}
      
              <Button variant="outline-primary"><i className='fa fa-shopping-cart'></i>Items 0</Button>
              <a href="/likes"><i className='fa h4 fa-bell'></i>
                <sup><span className='badge text-white bg-danger align-top'>8</span></sup>
              </a>
              <a href="/likes"><i className='fa h4 fa-heart'></i>
                <sup><span className='badge text-white bg-danger align-top'>8</span></sup>
              </a>
              <a href="/likes"><i className='fa fa-share'></i></a>
              <a href="/likes"><i className='fa h4 fa-address-card'></i></a>
   
        </Container>
      </Navbar>
    );
  }
}
export default TopNavbar
