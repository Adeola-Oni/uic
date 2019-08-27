import React from 'react';
import Logo from '../Images/unilagLogo.png';
import '../CSS/Footer.css'

const Footer = ()=>{
   return(
       <div className='Footer'>
            <div className='Footer_Upper'>
                <ul>
                    <li className='Footer_img_li'><img src={Logo} className='Footer_img'/></li>
                    <ul className='Footer_Upper_li'>
                        <li >About</li>
                        <li >FAQ</li>
                        <li >Prices</li>
                        <li >Contact</li>
                    </ul>
                </ul>
            </div>
           <br/>
           <hr />
           <div>
            <ul>
                <li>copyright Unilagideachallenge.com. All rights reserved</li>
                <ul>
                    {/* <li>A</li>
                    <li>B</li>
                    <li>C</li> */}
                </ul>
            </ul>
           </div>
       </div>

   ) 
}

export default Footer;