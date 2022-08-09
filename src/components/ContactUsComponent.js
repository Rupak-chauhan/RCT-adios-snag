import React from "react";
import './contact.css';
import emailjs from 'emailjs-com';
import { Button, NavbarText,Navbar,NavbarBrand, NavbarToggler,Collapse,Nav, Form, FormGroup, Label, Col, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class ContactUsComponent extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      FullName:'',
      Email:'',
      MobNumber:'',
      message:''

    }
  }
  

  nameInputHandler = async (event)=>{
    await this.setState({FullName: event.target.value});
  }
  emailInputHandler = async (event)=>{
    await this.setState({Email: event.target.value});
  }
  mobInputHandler = async (event)=>{
    await this.setState({MobNumber: event.target.value});
  }
  messageInputHandler = async (event)=>{
    await this.setState({message: event.target.value});

  }
  submitHandler= (event)=>{
    alert(`${this.state.FullName}`);
    event.preventDefault();
  }
  sendMailHandler= (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_ahfduh', 'template_8tyi0hj', event.target, "user_PP2Ej65fiTpPEWPQ6vw8p").then(res=>{
      console.log(res);
    }).catch(err=>{console.log(err)});
  }

  
  render(){
    return(
      <React.Fragment >
<div class="form">        
<Form onSubmit={this.sendMailHandler}>
  <div style={{marginBottom:"60px"}}>
    <div class="contact-group">
        <h1>Contact Us</h1>
        <div class="icon-links">
        
          <a href="tel:7568589886" style={{color:"green"}}><CallIcon /></a>
          <a href="mailto:adiosnag@gmail.com" style={{color:"red"}}><EmailIcon /></a>
          <a href="https://linkedin.com "><LinkedInIcon /></a>
          </div>
    </div>
    <hr/>
  </div>
  <h5 style={{marginBottom:"60px", fontFamily:'serif'}}>Happy To see you here, Just leave your message here.</h5>
  <div style={{backgroundColor:"rgb(243 243 255)", padding:'20px'}}>
<FormGroup row>
    <Label
      for="FullName"
      sm={2}
    >
      Full Name
    </Label>
    <Col sm={10}>
      <Input
        id="FullName"
        name="FullName"
        placeholder="Write Your Full Name"
        type="text"
        value={this.state.FullName}
        onChange={this.nameInputHandler}
      />
    </Col>
  </FormGroup>

  <FormGroup row>
    <Label
      for="Email"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="Email"
        name="Email"
        placeholder="Write Your Email"
        type="email"
        value={this.state.Email}
        onChange={this.emailInputHandler}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="MobNumber"
      sm={2}
    >
      Mobile Number
    </Label>
    <Col sm={10}>
      <Input
        id="MobNumber"
        name="MobNumber"
        placeholder="Write Your Mobile Number"
        type="number"
        value={this.state.MobNumber}
        onChange={this.mobInputHandler}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="message"
      sm={2}
    >
      Your message
    </Label>
    <Col sm={10}>
      <Input
        id="message"
        name="message"
        type="textarea"
        placeholder="Write Your Message Here"
        value={this.state.message}
        onChange={this.messageInputHandler}
      />
    </Col>
  </FormGroup>
  <Button className="offset-2" type="submit" >Submit</Button>
  </div>
  </Form>
  </div>
  </React.Fragment>
    );
  }
}
export default ContactUsComponent;