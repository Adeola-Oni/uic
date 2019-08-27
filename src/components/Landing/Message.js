import React from 'react';
import '../CSS/Message.css';
import sideImg from '../Images/Group (1).png';
import Vector from '../Images/Vector (4).png'

const Message = ()=>{
    return(
        <div className='Message row' style={{'margin-right': '10%'}}>
            <div className='col-5' >
                <h3 className='Message_header'>Question/Suggestion??</h3>
                <form>
                    <div>
                        {/* <label for="email" class='label_input'>Email Address</label> */}
                        <input className='Message_input' placeholder="Email Address" type="email" id="email" required />
                    </div>

                    <div>
                        {/* <label for="email" class='label_input'>Email Address</label> */}
                        <input className='Message_input' placeholder="Question/Suggestion" type="text" required />
                    </div>
                    <button className='Message_button'>SUBMIT NOW</button>
                </form>
            </div>
            <div className='col-7'>
            {/* <img src={sideImg} /> */}
                <img src={Vector} alt='' className='Vector_img'/>
                <img src={sideImg} alt='' className='image_ontop'/>
            </div>
            
        </div>
    )
}

export default Message;