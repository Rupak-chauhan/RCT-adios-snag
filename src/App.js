import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, NavItem, NavLink, 
  UncontrolledDropdown,DropdownMenu,DropdownItem,DropdownToggle, 
  NavbarText,Navbar,NavbarBrand, NavbarToggler,Collapse,Nav, Form, FormGroup, Label, Col, Input     } from 'reactstrap';
import BackgroundComponent from './components/BackgroundComponent';
import ContactUsComponent from './components/ContactUsComponent';
import AboutUsComponent from './components/AboutUsComponent';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import MainNavigation from './navigation/MainNavigation';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import FooterComponent from './navigation/FooterComponent';
import ProjectComponent from './components/ProjectComponent';
library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  render() {
    
    return (
      <BrowserRouter>
      <div>
      <MainNavigation />
      <Switch>
          <Route  exact path="/" component={BackgroundComponent} />
          <Route  exact path="/aboutus" component={AboutUsComponent} />
          <Route  exact path="/contactus" component={ContactUsComponent} />
          <Route  exact path="/project" component={ProjectComponent} />
          <Redirect to="/" />
      </Switch>
      <FooterComponent />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
