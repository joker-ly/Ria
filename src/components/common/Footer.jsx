import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="bg-dark text-white">
            <Container >
                <Row>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Contact us</h5>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-facebook'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-instagram'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-twitter'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-youtube'></i></a>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>More Information</h5>
                        <p><Button variant="dark">Purchase Police</Button></p>
                        <p><Button variant="dark">Privacy Policy</Button></p>
                        <p><Button variant="dark">Refund Policy</Button></p>

                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>About Company</h5>
                        <p><Link to="/about"><Button variant="dark">About us</Button></Link></p>
                        <p><Button variant="dark">Company</Button></p>
                        <p><Link to="/contact_us"><Button variant="dark">Contact us</Button></Link></p>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Company Address</h5>
                        <p>FIT near to Faculty of Engineering - Misrata, Libya</p>
                        <span><i className='fa fa-envelope'></i> info@xxx.xx</span>
                    </Col>
                </Row>
                <h5 className='address'>Change Language</h5><br /><br />
                <div id="google_translate_element"></div>
            </Container>
            <Container fluid className='text-center m-0 pt-3 pb-1 bg-light text-black'>
                <Row>
                    <h6>All Rights is reserved for RIA</h6>
                </Row>
            </Container>
        </div>
      </Fragment>
    )
  }
}

export default Footer
