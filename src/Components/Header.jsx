
import { Navbar, Nav, Container, Dropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState,useEffect} from "react"
import '../index.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 300); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar with conditional class for scroll effect */}
      <Navbar expand="lg" variant="" fixed="top" className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home" className='home'>Home</Nav.Link>
              <Nav.Link href="#about-us">About Us</Nav.Link>
              <Dropdown>
                <Dropdown.Toggle variant="dark" id="dropdown-basic" className="dropdown-transparent">
                  Research
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#research1">Research 1</Dropdown.Item>
                  <Dropdown.Item href="#research2">Research 2</Dropdown.Item>
                  <Dropdown.Item href="#research3">Research 3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <div className="banner">
        <div className="banner-content">
          <p className='b-head'>Quick Solutions For all Needs </p>
          <p className=' font-weight-bold'>Your <span className='span'>Succes</span>s is <br/><span className='our'>our</span>  <span className='mo'>Motto</span></p>
          <Button variant="primary" href="#about-us">SignUp</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
