import React from "react";
import './about.css';
import { Card, CardBody, CardTitle, CardSubtitle, CardText  } from "reactstrap";
import mayank from '../images/mayank-cofo1.jpg';
import rupak from '../images/rupak2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AboutUsComponent = () =>{
    return(
        <div className="about" >
            <div class="about-sec">
                <h1 >About us</h1>
                <hr/>
                <p>
                Welcome to Adios Snag. Here at Adios Snag, we offer the best services in Web Development. Adios Snag was 
                founded with the idea of being able to give all people who want a website to move their business online and 
                organizations who want to collaborate with us, the best Web Development solution possible. ~ If you want to 
                get your website ready, want to collaborate with us for web-related solutions, and looking for the best
                 solutions at an affordable price. If so, then you are at the right place! Adios Snag is an IT-based company,
                  which deals in Web Development. The vision of
                 this company is to make the local business of different parts of the world online. At Adios Snag we are 
                 dedicated to:
<ul>
  <li>Give Quality Services</li>
  <li>Provide Affordable Solutions</li>
  <li>Value For Customer</li>
  <li>Future Support To Customers</li>
</ul>
If you are someone who wants websites or organizations who want to collaborate with us, interested 
in Web Development, then we are here to help you! If you need any help in building websites please reach to us.
                </p>
            </div>
            <div class="leadership-sec">
                <h1>Our Leadership</h1>
                <hr/>
                <Card>
    <CardBody>
      <CardTitle tag="h5">
        Rupak Singh Chauhan
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       Director, C.E.O & Founder, Adios Snag
      </CardSubtitle>
    </CardBody>
    <img
      alt="Card image cap"
      src={rupak}
      style={{borderRadius:'50%',width:'10%', margin:'auto'}}
    />
    <CardBody>
      <CardText>
      Rupak Singh Chauhan is the Chief Executive Officer and Founder of Adios Snag, serving global customers.
      Rupak oversees the strategy, design, web development, and customer relationship for Adios Snag around
      the world. Web development includes both front-end & back-end development. After earning a Bachelor's 
      degree in Computer Science and Engineering from India, Rupak specialized in Website Development and worked
      on various projects. Adios Snag is an IT company, focused on global solutions for web development. Dedica
      for work in Rupak Chauhan and his experience make it possible to accomplish the mission and vision of the company.
      </CardText>
      
    </CardBody>
  </Card>

  <Card>
    <CardBody>
      <CardTitle tag="h5">
        Mayank Sharma 
      </CardTitle>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
       Director & Co-Founder, Adios Snag
      </CardSubtitle>
    </CardBody>
    <img
      alt="Card image cap"
      src={mayank}
      style={{borderRadius:'50%',width:'10%', margin:'auto'}}
    />
    <CardBody>
      <CardText>
      Mayank Sharma is the Chief Operations Officer and Co-founder of Adios Snag, serving global customers.
       Mayank oversees the implementation of Data Science, Artificial Intelligence, Cloud Computing, and operations 
       in Adios Snag. After earning a Bachelor's degree in Computer Science and Engineering from India, Mayank has a 
       specialization in Data Science, Artificial intelligence, Cloud Computing, and other technologies required to 
       deploy a website successfully. Adios Snag is an IT company, focused on global solutions
       for web development, and leaders like Mayank Sharma and his experience make it possible to achieve our goals.

      </CardText>
      
    </CardBody>
  </Card>
            </div>
            <div class="services-sec">
              <h1>Our Services</h1>
              <hr/>
              <p>
                <h4>Web Development</h4>
                <p>We deal in web development, we take projects from clients and deploy them their website.
                  We works on following technologies:
                  </p>
                  <ul>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'html5']} color="orange"  /> HTML 5
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'css3']} color="blue" />   Css 3
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'js-square']} color="orange"/> JavaScript
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'bootstrap']} color="orange"/> Bootstrap
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'js-square']} color="orange" /> JQuery
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'react']} color="blue"/> React
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'node']} color="blue" />  Node js
                    </li>
                    <li>
                    <FontAwesomeIcon icon={['fab', 'js']} color="blue"/>  Express
                    </li>
                  </ul>
                
              </p>
            </div>
        </div>
    );
}
export default AboutUsComponent;