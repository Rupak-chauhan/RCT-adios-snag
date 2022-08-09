import React from "react";
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/logo-clear.png';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const FooterComponent = () =>{
    return(
        <React.Fragment>
            <footer class="footer-cont">
                <div class="footer">
                <div class="foot-links">
                    <ul class="nav-links">
                        <li class="nav-link"><a href="/">Home</a></li>
                        <li class="nav-link"><a href="/aboutus">About us</a></li>
                        <li class="nav-link"><a href="/contactus">Contact us</a></li>
                        <li class="nav-link"><a href="/">Give Project</a></li>
                    </ul>
                </div>
                
                
                <div class="address-sec">
                    <h3>Our Address</h3>
                    <address>
                        Adio Snag HeadOffice, 302022
                        Near Shalby Hospital, Ajmer Road
                        Vaishali Nagar, Jaipur, Rajasthan.
                    
                    </address>
                </div>
                </div>
                <div class="foot-contact" style={{textAlign:'center' }}>
                <div class="icon-links">
        
                <a href="tel:7568589886" style={{color:"green"}}><CallIcon /></a>
          <a href="mailto:rupakchauhan835@gmail.com" style={{color:"red"}}><EmailIcon /></a>
          <a href="https://linkedin.com "><LinkedInIcon /></a>
        </div>
        <div style={{display:'flex', alignItems:'center', justifyContent:'center', alignContent:'center'}}>
            <img src={logo} height="34px" style={{margin:'4px'}} />
        <h5>Copyright Adios Snag ©2021</h5>
        </div>
                </div>
            </footer>
        </React.Fragment>
    );
};

export default FooterComponent;