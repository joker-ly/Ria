import React, { Component, Fragment } from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import { Card } from 'flowbite-react';


export class Categories extends Component {
  render() {
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <h2>Maharah's journey</h2>
                    <p>Join the trainees on Maharah's journey, and watch all the special moments in the bootcamp</p>
                </div>
            </Container>
            <Row className='w-fit'>
                <Col lg={3} md={3} sm={3}>
                  <Card href="#" className="h-auto w-90">
                    <iframe height="315" src="https://www.youtube.com/embed/vkA5lYSbdD0?si=WJXPpxvME5U0B4YJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>  
                  </Card>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <Card href="#" className="h-auto w-90">
                  <iframe  height="315" src="https://www.youtube.com/embed/zC7bnsHLzf4?si=2mK1f-dxlgNFQyqm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Card>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <Card href="#" className="h-auto w-90">
                  <iframe  height="315" src="https://www.youtube.com/embed/YltaFQ05C0I?si=1R-aQxd7Wcm_aS9n" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Card>
                </Col>
                <Col lg={3} md={3} sm={3}>
                  <Card href="#" className="h-auto w-90">
                  <iframe  height="315" src="https://www.youtube.com/embed/inhIdAd_E4U?si=mcGtk4nm67Q-cy6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                  </Card>
                </Col>
            </Row>
        </Fragment>
      </div>
    )
  }
}

export default Categories
