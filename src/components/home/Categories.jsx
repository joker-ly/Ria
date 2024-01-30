import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

export class Categories extends Component {
  render() {
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>CATEGORIES</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
            </Container>
            <Row>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat2.jpg')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat3.png')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat2.jpg')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={2} md={2} sm={6}>
                    <Card className='h-100 w-100 text-center'>
                        <Card.Body>
                            <img alt="Category item" src={require('../../assets/images/cat3.png')} className='h-60 w-50 text-center'/>
                            <h4>Computer</h4>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Fragment>
      </div>
    )
  }
}

export default Categories
