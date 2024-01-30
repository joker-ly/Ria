import React, { Component } from 'react';
import '../src/assets/css/custom.css';
import {TopNavbar} from './components/TopNavbar';
import HomeTop from './components/home/HomeTop';
import Categories from './components/home/Categories';
import NewArrival from './components/home/NewArrival';
import Collections from './components/home/Collections';
import Featured from './components/home/Featured';


export class App extends Component {
  render() {
    return (
      <div className=''>
        <TopNavbar />
        <HomeTop />
        <Categories />
        <NewArrival />
        <Collections />
        <Featured />
      </div>
    )
  }
}

export default App
