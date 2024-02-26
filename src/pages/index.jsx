import React, { Component,Fragment } from 'react';
import { Carousel } from 'flowbite-react';
import slid1 from'../assets/images/Maharah-Video-hero-slider.mp4';
export class Index extends Component {
  render() {
    return (
      <Fragment>
      <div className="h-screen w-screen p-3">
        <Carousel>
          <video src={slid1} alt="..." autoPlay />
        </Carousel>
      </div>
      </Fragment>
      )
    }
  }
  
  export default Index