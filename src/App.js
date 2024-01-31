import React, { Component } from 'react';
import {TopNavbar} from './components/TopNavbar';
import '../src/assets/css/custom.css';
import Footer from './components/common/Footer';
import ProductCategoryPage from './pages/ProductCategoryPage';


export class App extends Component {
  render() {
    return (
      <div className=''>
        <TopNavbar />
        <br />
        <br />
        <br />
        <br />
        <ProductCategoryPage />
        <Footer />
      </div>
    )
  }
}

export default App
