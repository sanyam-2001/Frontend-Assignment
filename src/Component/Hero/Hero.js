import React from 'react';
import './Hero.css'
import {AiFillCaretDown} from 'react-icons/ai'
const Hero = () => {
    return ( 
        <div className="heroContainer">
            <div className="muted-text" style={{marginTop:'5%'}}>Featured Project</div>
            <div className="mainText">
                <div style={{color: 'black'}} className="pone">Clear Motion</div>
                <div className="laptop ptwo">It's gonna be a</div>
                <div className="laptop pthree">comfy ride</div>
                <div className="mobile">It's gonna be a comfy ride</div>
            </div>
            <div className="muted-text" style={{marginTop:'5%'}}>
                <div className="text" style={{color:'black'}}>More Projects</div>
                <div className="icon" style={{ color:'#3EE7D6'}}><AiFillCaretDown /></div>
            </div>
        </div>
     );
}
 
export default Hero;