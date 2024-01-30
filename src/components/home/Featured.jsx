import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Featured extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>FEATURED</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Card className='card w-100'>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Card card className='w-100'>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Card className='w-100'>
                                <Card.Body> 
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Card className='card w-100'>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                    <Col className='p-0 m-2' lg={3} md={3} sm={6}>
                        <div>
                            <Card>
                                <Card.Body className='w-100'>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container> 
      </Fragment>
    )
  }
}

export default Featured
