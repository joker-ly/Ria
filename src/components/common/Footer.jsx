import React, { Component, Fragment } from 'react';
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
// import Logo from'assets/images/maharah-logo.svg';
export class Foooter extends Component {
  render() {
    return (    
    <Fragment>
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="/about">About</Footer.Link>
              <Footer.Link href="/contact_us">Contact</Footer.Link>
              <Footer.Link href="/services">Services</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="https://x.com/abdo_kablan">Twitter</Footer.Link>
              <Footer.Link href="https://www.facebook.com/Ab.ka.ly/">Facebook</Footer.Link>
              <Footer.Link href="https://github.com/joker-ly">Facebook</Footer.Link>
              <Footer.Link href="/contact_us">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">iOS</Footer.Link>
              <Footer.Link href="#">Android</Footer.Link>
              <Footer.Link href="#">Windows</Footer.Link>
              <Footer.Link href="#">MacOS</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Abdulrahman Kablan™" year={2024} />
            <Footer.Brand
              href="/"
              src="https://maharah.ly/en/hejubuh/sites/2/2023/12/maharah-logo.svg"
              alt="Maharah Logo"
              name="Maharah"
            />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="https://www.facebook.com/Ab.ka.ly/" icon={BsFacebook} />
            <Footer.Icon href="https://www.instagram.com/abdo.kablan" icon={BsInstagram} />
            <Footer.Icon href="https://x.com/abdo_kablan" icon={BsTwitter} />
            <Footer.Icon href="https://github.com/joker-ly" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
        {/* <div className="bg-dark text-white">
            <Container >
                <Row>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Contact us</h5>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-facebook'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-instagram'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-twitter'></i></a>
                        <a href="/"><i className='fab mt-4 m-2 h4 fa-youtube'></i></a>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>More Information</h5>
                        <p><Button variant="dark">Purchase Police</Button></p>
                        <p><Button variant="dark">Privacy Policy</Button></p>
                        <p><Button variant="dark">Refund Policy</Button></p>

                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>About Company</h5>
                        <p><Link to="/about"><Button variant="dark">About us</Button></Link></p>
                        <p><Button variant="dark">Company</Button></p>
                        <p><Link to="/contact_us"><Button variant="dark">Contact us</Button></Link></p>
                    </Col>
                    <Col className='p-2' lg={3} md={3} sm={6}>
                        <h5>Company Address</h5>
                        <p>FIT near to Faculty of Engineering - Misrata, Libya</p>
                        <span><i className='fa fa-envelope'></i> info@xxx.xx</span>
                    </Col>
                </Row>
                <h5 className='address'>Change Language</h5><br /><br />
                <div id="google_translate_element"></div>
            </Container>
            <Container fluid className='text-center m-0 pt-3 pb-1 bg-light text-black'>
                <Row>
                    <h6>All Rights is reserved for RIA</h6>
                </Row>
            </Container>
        </div> */}
      </Fragment>
    )
  }
}

export default Foooter
