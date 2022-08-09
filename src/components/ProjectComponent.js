import React from "react";
import './project.css';
import emailjs from 'emailjs-com';
import { Button, NavbarText,Navbar,NavbarBrand, NavbarToggler,Collapse,Nav, Form, FormGroup, Label, Col, Input} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

class ProjectComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={
      FullName:'',
      Email:'',
      MobNumber:'',
      title:'',
      description:''

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
  titleInputHandler = async (event)=>{
    await this.setState({message: event.target.value});

  }
  descriptionInputHandler = async (event)=>{
    await this.setState({message: event.target.value});

  }
  sendMailHandler= (event)=>{
    event.preventDefault();
    emailjs.sendForm('service_ahfduh', 'template_t2p4enj', event.target, "user_PP2Ej65fiTpPEWPQ6vw8p").then(res=>{
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
        <h1>Give Your Project To Us</h1>
        <div class="icon-links">
        
          <a href="mailto:rupakchauhan835@gmail.com" style={{color:"red"}}><EmailIcon /></a>
          <a href="https://linkedin.com "><LinkedInIcon /></a>
          </div>
    </div>
    <hr/>
  </div>
  <h5 style={{marginBottom:"60px"}}>Let's start the journey of bringing your business online. Submit details of projects to Us and we will reach back to you.</h5>
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
      for="title"
      sm={2}
    >
      Project Title
    </Label>
    <Col sm={10}>
      <Input
        id="title"
        name="title"
        placeholder="eg. website for my gym"
        type="text"
        value={this.state.title}
        onChange={this.titleInputHandler}
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="Description"
      sm={2}
    >
      Project Detail
    </Label>
    <Col sm={10}>
      <Input
        id="Description"
        name="Description"
        type="textarea"
        row={8}
        placeholder="eg. I want to make a beautiful website for my gym, so that all users can see different pricing plans, 
                      services and book the slot for them."
                      value={this.state.description}
        onChange={this.descriptionInputHandler}
      />
    </Col>
  </FormGroup>
  <Button className="offset-2" >Submit</Button>
  </div>
  </Form>
  </div>
  </React.Fragment>
    );
  }
}
export default ProjectComponent;