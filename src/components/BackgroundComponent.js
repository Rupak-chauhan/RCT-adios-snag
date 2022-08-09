import React from "react";
import './BackgroundComponent.css';
import ProjectComponent from "./ProjectComponent";

const BackgroundComponent = () =>{
    return(
      <div className="back">
      <div className="back-image">
          <div className="intro" >
          <h1  data-aos="zoom-in-up">
              We Make Web Solutions
          </h1>
          <p  data-aos="zoom-in-up">
          We help people, organizations to take their business online by developing their websites. 
          We give chance to people across the world to contact us and develop their websites at the most affordable price. 
          Just click on the button below to begin the journey of making your business online.
          </p>
          <a href="/project">
          <button className="back-btn">
              Give Project
          </button>
          </a>
          </div>
          
      </div>
      <ProjectComponent />
      </div>  
    );
};

export default BackgroundComponent;