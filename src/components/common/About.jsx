import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
// import Backg from'../assets/images/about-img-43fdee60.webp';
export class About extends Component {
  render() {
    return (
      <Fragment>
        <Container className="bg-[url('assets/images/about-img-43fdee60.webp')] h-full bg-cover">
            <div className="breadbody bg-[url('assets/images/about-img-43fdee60.webp')]">
              <Breadcrumb aria-label="Default breadcrumb example">
              <Breadcrumb.Item href="/" icon={HiHome}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item href="/about">About</Breadcrumb.Item>
              </Breadcrumb>
                {/* <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="">
                        Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Data</Breadcrumb.Item>
                </Breadcrumb> */}
            </div>
            <Row className="p-2">
                <Col className="shadow-sm mt-2" md={12} lg={12} sm={12} xs={12}>
                    <h4 className="section-title-login">About Maharah</h4>
                    <p className="section-title-contact">
                    The Maharah Coding School is an educational initiative to equip young people in Libya with coding and technological expertise. Developed by the United Nations Development Programme (UNDP) and financially supported by the European Union (EU).

It aims to support the youth with technical skills in coding and as instruments of social and economic development. By offering a curriculum that addresses challenges like market entry and regulatory navigation, it's a catalyst for sustainable peace and development. This approach prepares a new generation of young Libyans to be peace innovators, contributing to a stable, prosperous future in Libya.                    </p>
                </Col>
            </Row>
            <Row className="p-2">
                <Col className="shadow-sm mt-2" md={12} lg={12} sm={12} xs={12}>
                    <h4 className="section-title-login">Why
Maharah</h4>
                    <p className="section-title-contact">
                    Because it's the easiest and most effective way to pursue your passion for programming and start your professional journey as a skilled programmer.

Through our different courses, you will learn programming skills from experienced trainers in an interactive learning experience. This prepares you for the job market and qualifies you for available positions after finishing the program.

Mahara's educational courses provide a certified certificate to trainees. Additionally each trainee will have the chance not only to improve their programming skills but also to work on important soft skills preparing them for their future careers.

Practical
Lessons
Our curriculum is designed to offer practical, real-world lessons. Trainees engage with hands-on projects and current industry practices, ensuring relevance and practicality.

Experienced
Trainers
Our trainers are seasoned professionals in the industry. Their guidance goes beyond textbooks, offering insights from years of experience, enriching the learning journey.

Certified
Program
Upon successful completion of the training program at Mahara, trainees receive valuable certification validating skills, enhancing employability and credibility in the tech industry.


                    </p>
                </Col>
            </Row>
            
        </Container>

      </Fragment>
    )
  }
}

export default About
