import React, { Component, Fragment } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { Card } from 'flowbite-react';

export class Blog extends Component {
  render() {
    return (
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>Blog</h2>
                    <p>our Blog</p>
                </div>
                <Row>
                    <Col className='p-2 h-18' lg={3} md={3} sm={6}>
                      <Card
                      className="max-w-sm"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="/1.webp"
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Maharah: The Journey of Selection and Excellence
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        At Maharah School, we embarked on an exceptional phase brimming wit…
                        </p>
                      </Card>
                    </Col>
                    <Col className='p-2 h-18' lg={3} md={3} sm={6}>
                    <Card
                      className="max-w-sm"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="/2.webp"
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Official Launch of the Training Phase at Maharah Coding School
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Maharah Training Phase Launch Maharah Coding School embarked on its…
                        </p>
                      </Card>
                    </Col>
                    <Col className='p-2 h-18' lg={3} md={3} sm={6}>
                    <Card
                      className="max-w-sm"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="/3.webp"
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Maharah in Sebha – Launch of Training Program
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Maharah in Sebha On the thirteenth of January 2024, the training pr…
                        </p>
                      </Card>
                    </Col>
                    <Col className='p-2 h-18' lg={3} md={3} sm={6}>
                    <Card
                      className="max-w-sm"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="/4.webp"
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Insights from Maharah Focus Groups: Exploring Digital and Programming Skills
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        On Saturday, November 18, 2023, Maharah conducted a focus groups se…
                        </p>
                      </Card>
                    </Col>
                    <Col className='p-2 h-18' lg={3} md={3} sm={6}>
                    <Card
                      className="max-w-sm"
                      imgAlt="Meaningful alt text for an image that is not purely decorative"
                      imgSrc="/5.webp"
                      >
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Launch Event of Maharah Coding School Project
                        </h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        Tuesday, December 5, 2023, marked the commencement of the Maharah C…
                        </p>
                      </Card>
                    </Col>
                </Row>
            </Container>   
      </Fragment>
    )
  }
}

export default Blog
