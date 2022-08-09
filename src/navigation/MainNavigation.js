import React from 'react';
import { Button, NavItem, NavLink, 
    UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle, 
    NavbarText,Navbar,NavbarBrand, NavbarToggler,Collapse,Nav} from 'reactstrap';
    import './nav.css'
  import BackgroundComponent from '../components/BackgroundComponent';
  import ContactUsComponent from '../components/ContactUsComponent';
  import AboutUsComponent from '../components/AboutUsComponent';
  import logo from '../images/logo-clear.png';

  export default class MainNavigation extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return(
        <div style={{marginBottom:'60px'}}>
        <Navbar
    color="red"
    expand="md"
    light
    fixed="top"
    style={{backgroundColor:'rgb(207 216 247)'}}
    
  >
    <NavbarBrand href="/" style={{height:'60px', padding:'0px', margin:'0px'}}>
      <img src={logo} style={{height:'100%', padding:'0px', margin:'0px'}} />
    </NavbarBrand>
    <NavbarToggler onClick={this.toggle} />
    <Collapse isOpen={this.state.isOpen} navbar className="justify-content-end">
      <Nav
        navbar inline
      >
        <NavItem >
        
          <NavLink href="/aboutus" style={{fontSize:'larger', color:"#374656", fontWeight:'bold'}}>
            About us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contactus" style={{fontSize:'larger', color:"#374656", fontWeight:'bold'}}>
            Contact us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/project" style={{fontSize:'larger', color:"#374656", fontWeight:'bold'}}>
            Give Project
          </NavLink>
        </NavItem>
      </Nav>
      
    </Collapse>
  </Navbar>
  {/* <BackgroundComponent /> */}
  {/* <ContactUsComponent />
  <AboutUsComponent /> */}
      </div>
      );
  }
}
