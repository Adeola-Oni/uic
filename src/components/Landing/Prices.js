import React from 'react';
import '../CSS/Prices.css';
import trophy1 from '../Images/trophy (1).png'
import trophy2 from '../Images/trophy (2).png'
import competition from '../Images/competition.png'


const Prices = ()=>{
    return(
        <div className='Prices row' id='Prizes'>
            <div className='col-5'>
                <h3 className='Prices_header'>Prizes</h3>
                <p className='Prices_words'>Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now. Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now. Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. 
                </p>
                <button className='Prices_button'>APPLY NOW</button>
            </div>
            <div className='col-7'>
                <div className='images_container'>
                    <div><img src={trophy1} alt='' className='holder i1'/></div>
                    <div><img src={trophy2} alt='' className='holder i2'/></div>
                    <div><img src={competition} alt='' className='holder i3'/></div>
                </div>
            </div>
            
        </div>
    )
}

export default Prices;