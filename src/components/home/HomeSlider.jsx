import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slid1 from'../../assets/images/115A8585-compressed-scaled.jpg';
import slid2 from'../../assets/images/J39A4162-scaled.jpg';
import slid3 from'../../assets/images/J39A4281-scaled.jpg';

import { Carousel } from 'flowbite-react';

export class HomeSlider extends Component {
  render() {
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   autoplayspeed: 1500
    // };
    return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={3000}>
        <img src={slid1} alt="..." />
        <img src={slid2} alt="..." />
        <img src={slid3} alt="..." />
      </Carousel>
    </div>
    );
  }
}

export default HomeSlider
