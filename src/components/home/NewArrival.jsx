import React, { Component, Fragment } from 'react';
import {Container, Row, Card} from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class NewArrival extends Component {
    
    constructor(){
        super();

        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this)

    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }
  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    return (
      <div>
        <Fragment>
            <Container className="text-center mt-5" fluid>
                <div className='section-title text-center mb-55'>
                    <a className="btn btn-sm ml-2 site-btn"  onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                    <a className="btn btn-sm ml-2 site-btn" onClick={this.next}><i className='fa fa-angle-right'></i></a>
                    <h2>NEW ARRVALS</h2>
                    <p>Some of our Exclusive Collection, You May Like</p>
                </div>
                <Row>
                    <Slider ref={c => (this.slider=c)} {...settings}>
                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat2.jpg')}  className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>

                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat3.png')} className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>
                        <div>
                            <Card>
                                <Card.Body>
                                    <img alt="Category item" src={require('../../assets/images/cat1.png')}  className='h-100 w-100 text-center'/>
                                </Card.Body>
                                <p>Perfect New Laptop with Process i3</p>
                                <p>Price: 100$</p>
                            </Card>
                        </div>

                    </Slider>                    
                </Row>
            </Container>
        </Fragment>
      </div>
    )
  }
}

export default NewArrival
