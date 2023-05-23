import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import expressIcon from '../assets/img/express-icon.png';
import mongoDBIcon from '../assets/img/mongodb-icon.png';


function Skills (){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <div className="skill-box" id="skills">
            <div className="title-skill">
            <h2 style={{fontSize:"50px", fontWeight:"bold", marginTop:"55px"}}>Technical Skills</h2>
            {/* <p>In this bootcamp, teach me about the MERN stack and other tools following below.</p> */}
            <Carousel 
            className="slide-box" 
            responsive={responsive}
            infinite={true}
            swipeable={true}
            draggable={true}
            showDots={false}
            itemClass="carousel-item-padding-100-px"
            // centerMode={}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={true}
            >
                <div className="items">
                    <i className="fa-brands fa-html5 fa-5x" style={{color:"#eb7d00"}}></i>
                    <p style={{paddingTop:"15px"}}>HTML 5</p>
                </div>
                <div className="items">
                    <i className="fa-brands fa-css3 fa-5x" style={{color: "#74a8fb"}}></i>
                    <p style={{paddingTop:"15px"}}>CSS 3</p>
                </div>
                <div className="items">
                    <i class="fa-brands fa-bootstrap fa-5x" style={{color: "#7434d5"}}></i>
                    <p style={{paddingTop:"15px"}}>Bootstrap 5</p>
                </div>
                <div className="items">
                    <i className="fa-brands fa-js fa-5x" style={{color: '#ffd91a'}}></i>
                    <p style={{paddingTop:"15px"}}>Java Script</p>    
                </div>
                <div className="items">
                    <i className="fa-brands fa-react fa-5x" style={{color: "#59c3f7"}}></i>
                    <p style={{paddingTop:"15px"}}>React</p>    
                </div>
                <div className="items">
                    <i className="fa-brands fa-node fa-5x" style={{color: "#4abf58"}}></i>
                    <p style={{paddingTop:"15px"}}>Node JS</p>    
                </div>
                <div className="items">
                    <img src={expressIcon} style={{width:'150px', paddingTop:'10px'}} />
                    <p style={{paddingTop:"25px"}}>Express JS</p>    
                </div>
                <div className="items">
                    <img src={mongoDBIcon} style={{width:'100px'}} />
                    <p style={{paddingTop:"15px"}}>Mongo DB</p>    
                </div>
                <div className="items">
                    <i className="fa-brands fa-git-alt fa-5x" style={{color: "#f0790a"}}></i>
                    <p style={{paddingTop:"15px"}}>Git</p>    
                </div>
                <div className="items">
                    <i class="fa-brands fa-github fa-5x"></i>
                    <p style={{paddingTop:"15px"}}>Github</p>    
                </div>
            </Carousel>
            </div>
        </div>
      )
      
}

export default Skills