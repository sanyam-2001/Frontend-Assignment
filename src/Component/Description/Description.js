import React from 'react';
import './Description.css'
const Description = () => {
    return ( 
        <div className="mainDescPanel" style={{ backgroundColor:'#FAFAFA', position:'relative', zIndex:-3}}>
            <div className="descText">
                Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and experiences.
            </div>
            <div className="emptyFlex" style={{marginTop: '2.5%'}}>
                <div style={{borderRight: '1px solid rgba(30, 30, 30, 0.1)'}}></div>
                <div></div>
            </div>
            <div className="emptyFlex secondEmpty" style={{backgroundColor:'white'}}>
                <div style={{borderRight: '1px solid rgba(30, 30, 30, 0.1)'}}></div>
                <div>
                    <div className="baseTextContainer">
                        <span className="baseText" >
                            <span>All work, all play</span> <br /><span style={{color:'rgba(40, 40, 40, 0.8)'}}>Selected Projects</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Description;