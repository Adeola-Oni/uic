import React from 'react';
import '../CSS/Objectives.css';
import image1 from '../Images/online.png';
import image2 from '../Images/solution.png';
import image3 from '../Images/solution (1).png'

const Objectives =()=>{
    return(
        <div className='objectives' id='Objectives'>
            <h3 className='objectives_header'>Our Objectives</h3>
            <div className='cards'>
                <div className='card card-1'>
                    <img  src={image2} className='card_img' alt=''/>
                    <h3 className='card_header'>To Provide Lasting Solutions</h3>
                    <p className='card_words'>Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now</p>
                </div>

                <div className='card card-2'>
                    <img  src={image3} className='card_img' alt=''/>
                    <h3 className='card_header'>To Foster Creativity Amongst Students</h3>
                    <p className='card_words'>Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now</p>
                </div>

                <div className='card card-3'>
                    <img  src={image1} className='card_img' alt=''/>
                    <h3 className='card_header'>To Provide Adequate Mentorship To The Teams</h3>
                    <p className='card_words'>Submit your innovative ideas to help make University Of Lagos a better 
                    campusand stand a chance to win prizes. Apply now</p>
                </div>
            </div>
        </div>
    )
}

export default Objectives;