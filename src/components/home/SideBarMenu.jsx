import React, { Component } from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag,HiOutlineMinusSm,HiOutlinePlusSm} from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import Logo from'../../assets/images/maharah-logo.svg';

export class SideBarMenu extends Component {
  render() {
    return (
      <Sidebar aria-label="Sidebar Maharah">
      <Sidebar.Logo href="#" img={Logo} imgAlt="Maharah logo">
        Maharah
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
        <Sidebar.Collapse
            icon={HiShoppingBag}
            label="Training"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
            }}
          >
            <Sidebar.Item href="#">Full Stack Web Development</Sidebar.Item>
            <Sidebar.Item href="#">Mobile App Development</Sidebar.Item>
            <Sidebar.Item href="#">Back-end Development</Sidebar.Item>
            <Sidebar.Item href="#">Front-End Development</Sidebar.Item>
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Blog
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Videos
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
    )
  }
}

export default SideBarMenu
