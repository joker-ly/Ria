import React, { Component, Fragment } from 'react';
import TopNavbar from '../components/TopNavbar';
import Footer from '../components/common/Footer';
import AboutPage from '../pages/AboutPage';
import HomePage from '../pages/HomePage';
import IndexPage from '../pages/index';
import SearchPage from '../pages/SearchPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import ContactPage from '../pages/ContactPage';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

export class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <TopNavbar />
        <Routes>

          <Route exact path="/" Component={IndexPage} render={(props) => <HomePage {...props} key={Date.now()} /> } />

          <Route exact path="/about"  Component={AboutPage} render={(props) => <AboutPage {...props} key={Date.now()} /> } />

          <Route exact path="/search" render={(props) => <SearchPage {...props} key={Date.now()} /> } />

          <Route exact path="/login" render={(props) => <LoginPage {...props} key={Date.now()} /> } />

          <Route exact path="/register" render={(props) => <RegistrationPage {...props} key={Date.now()} /> } />

          <Route exact path="/services" Component={HomePage} render={(props) => <RegistrationPage {...props} key={Date.now()} /> } />

          <Route exact path="/contact_us" Component={ContactPage} render={(props) => <ContactPage {...props} key={Date.now()} /> } />

        </Routes>
        <Footer />
      </Fragment>
    )
  }
}

export default AppRouter
