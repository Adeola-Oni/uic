import React from 'react';
import '../CSS/Navigation.css';
import Logo from '../Images/unilagLogo.png'

const Navigation=()=>{
    return(
        <div className='Nav'>
            {/* <ul>
                <li className='logo_part'><img src={Logo} className='logo'/> UNILAG Idea Challenge</li>
                <ul className='list'>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>PRIZES</li>
                    <li>CONTACT</li>
                    <li>ADMIN LOGIN </li>
                    <li className='Apply_button'>APPLY NOW</li>
                </ul>
                
            </ul> */}
            <div className="row Navigation">
                <div className='col-5 nav_container1'>
                    <div><img src={Logo} className='logo'/> UNILAG Idea Challenge</div>
                </div>

                <div className='col-7 nav_container'>
                    <a href='!#' className='nav_items'>HOME</a>
                    <a href='#About' className='nav_items'>ABOUT</a>
                    <a href='#Prizes' className='nav_items'>PRIZES</a>
                    <a href='!#' className='nav_items'>CONTACT</a>
                    <a href='!#' className='nav_items'>ADMIN LOGIN </a>
                    <a href='!#' className='Apply_button nav_items'>APPLY NOW</a>
                </div>
                <div className='nav_container_hidden'>
                    <a href='!#' className='nav_items'>HOME</a>
                    <a href='!#' className='nav_items'>ABOUT</a>
                    <a href='!#' className='nav_items'>PRIZES</a>
                    <a href='!#' className='nav_items'>CONTACT</a>
                    <a href='!#' className='nav_items'>ADMIN LOGIN </a>
                    <a href='!#' className='Apply_button nav_items'>APPLY NOW</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation;