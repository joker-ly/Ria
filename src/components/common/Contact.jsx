import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Button, Form} from 'react-bootstrap';
import { Label, Textarea,TextInput  } from 'flowbite-react';
import { HiMail } from 'react-icons/hi';
import Logo from'../../assets/images/libya-map-graphic.svg';
export class Contact extends Component {
  render() {
    return (
      <Fragment>
        <Container>
            <Row>
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>
                    <Row className='text-center'>
                        <Col className="p-0 m-0" lg={6} md={6} sm={6} xs={6}>
                            <br /><br /><br />
                            <p>Maharah has launched in three Libyan cities: Tripoli, Benghazi, and Sabha, covering the west, east, and south of Libya.

                              Training Locations:
                              Soufara Al Alim
                              HW Center
                              Eylyes Space</p>
                              <img src={Logo} className="mr-3 s:h-16" alt="Libya" />
                        </Col>
                        <Col className="d-flex justify-content-center mt-5" lg={6} md={6} sm={6} xs={6}>
                            <Form id="contactForm" className="onboardForm" rows="4" cols="50">
                            <br /><br /><br />
                                <h4 className='section-title-login'>Contact us</h4>
                                <h6 className='section-sub-title'>For any questions or assistance, please use the contact form below to get in touch with us, or contact us through the provided contact info.</h6>
                                <div className="mb-2 block">
                                  <Label htmlFor="input-info" color="info" value="Enter your Name" />
                                </div>
                                <TextInput id="input-info" placeholder="Input Name" required color="info" />
                                <div className="mb-2 block">
                                  <Label htmlFor="email4" value="Your email" />
                                </div>
                                <TextInput id="email4" type="email" rightIcon={HiMail} placeholder="name@flowbite.com" required />
                                <div className="mb-2 block">
                                  <Label htmlFor="input-info" color="info" value="Enter your Message" />
                                </div>
                                <Textarea id="comment" placeholder="Leave a Message..." required rows={4} />
                                <Button id="sendBtn" type="submit" className="btn btn-block m-2 site-btn-login">Send</Button>
                            </Form>
                        </Col>
                    </Row>        
                </Col>
            </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Contact
