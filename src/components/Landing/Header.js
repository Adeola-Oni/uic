import React from 'react';
import "../CSS/Header.css";
import Navigation from './Navigation';

const Header =()=>{
    return(
        <div className='Header row'>
            <div className='col-12 Navigation'><Navigation/></div>
            <div className='Header_contents col-7'>
                <p className='Header_contents_words'><span className='Header_contents_medium'>got an idea that can make unilag better</span>
                    <span className='Header_contents_large'> bring that idea to life</span>
                    <span className='Header_contents_small'> Submit your innovative ideas to help make University of Lagos a batter 
                        campus and stand a chance to win prizes. Apply now</span>
                </p>
                <button className='Header_button'>APPLY NOW</button>
            </div>
            <div className='col-5 side'>
                {/* <img src='../Images/OBJECT.png' alt="Smiley face" height="42" width="42"></img> */}
            </div>

        </div>
    )
}

export default Header;