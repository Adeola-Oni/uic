import React from 'react';
import '../CSS/About.css';
import sideImg from '../Images/Group.png';
import Vector from '../Images/Vector (2).png'

const About = ()=>{
    return(
        <div className='About row' id='About'>
            <div className='col-6 bg'>
                <img src={Vector} alt='' className='sideImg'/>
                <img src={sideImg} alt='' className='sideImg2'/>
            </div>
            <div className='col-6'>
                <h3 className='About_header'>About Us</h3>
                <p className='About_words'>Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now. Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now. Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now. Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now</p>
            </div>
            
        </div>
    )
}

export default About;