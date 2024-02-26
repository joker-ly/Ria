import React, { Component, Fragment } from 'react';

import HomeTop from '../components/home/HomeTop';
import Categories from '../components/home/Categories';
import Training from '../components/home/Training';
import Blog from '../components/home/Blog';


export class HomePage extends Component {
  constructor(){
    super();
    window.scroll(0,0)

    }
  render() {
    return (
        <Fragment>
          <HomeTop />
          <Categories />
          <Training />
          <Blog />
        </Fragment>
    )
  }
}

export default HomePage
