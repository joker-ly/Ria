import React, { Component } from 'react';
import {Accordion, ListGroup} from 'react-bootstrap';

export class SideBarMenu extends Component {
  render() {
    return (
      <div>
        <br /><br /><br />
        <Accordion >
            <Accordion.Item eventKey="0">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat1.png')} width={25} height={25}/>Laptops</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat2.jpg')} width={25} height={25}/>Tabs</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat3.png')} width={25} height={25}/>Desktops</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat1.png')} width={25} height={25}/>Smart Phones</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat2.jpg')} width={25} height={25}/>Tablets</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
                <Accordion.Header><img alt="Category item" src={require('../../assets/images/cat3.png')} width={25} height={25}/>Other</Accordion.Header>
                <Accordion.Body>
                <ListGroup>
                    <ListGroup.Item action href="#link2">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link3">No style</ListGroup.Item>
                    <ListGroup.Item action href="#link4">No style</ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>

        </Accordion>
   
      </div>
    )
  }
}

export default SideBarMenu
