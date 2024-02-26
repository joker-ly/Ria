import React, { Component } from 'react';
import Logo from'../assets/images/maharah-logo.svg';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from 'flowbite-react';

export class TopNavbar extends Component {
  render() {return (
    <Navbar expand="lg" fluid rounded>
      <NavbarBrand href="/">
        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">MAHARAH</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          
          <DropdownHeader>
            <span className="block text-sm">Abdulrahman Kablan</span>
            <span className="block truncate text-sm font-medium">abdulrahman@kablan.ly</span>
          </DropdownHeader>
          <DropdownItem>Dashboard</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />
          <DropdownItem>Sign out</DropdownItem>
        </Dropdown>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/">
          Home
        </NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="/contact_us">Contact</NavbarLink>
              </NavbarCollapse>
    </Navbar>

    );
  }
}
export default TopNavbar
