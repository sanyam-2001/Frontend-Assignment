import React, {useRef, useEffect} from 'react';
import {ImLocation} from 'react-icons/im'
import './VideoPane.css'
const VideoPane = () => {
    let videoRef = useRef(null);
    useEffect(()=>{
        videoRef.current.play();
    }, []);
    return ( 
        <div style={{ width:'100%',backgroundColor:'white', position:'relative', paddingTop:'10%'}}>
            <video
                src="https://ueno.co/static/interview-white-17edfff518080c24e6248ae5e6b232dc.mp4"
                muted
                style={{
                    textAlign:'center',
                    width:'80%',
                    marginLeft:'10%',
                }}
                ref = {videoRef}
            >
            </video>
            <div className="joiningText" style={{width:'80%', margin: 'auto', fontFamily: 'IBM Plex Serif'}}>
                <div >
                    Join Us
                </div>
                <div className="joinUstag" style={{color:'grey'}}>
                    Open Positions
                </div>
                
                <div className="positionPanel" style={{justifyContent:'space-around', paddingTop:'20%', paddingBottom:'20%'}}>
                    <div style={{fontFamily:'Roboto'}}>
                        <div style={{ fontSize:'24px'}}>San Francisco &mdash; <ImLocation /></div>
                        <div style={{color:'grey', fontSize:'12px'}}>No Open Positions</div>
                    </div>
                    <div style={{fontFamily:'Roboto'}}>
                        <div style={{ fontSize:'24px'}}>New York &mdash; <ImLocation /></div>
                        <div style={{color:'grey', fontSize:'12px'}}>No Open Positions</div>
                    </div>
                    <div style={{fontFamily:'Roboto'}}>
                        <div style={{ fontSize:'24px'}}>Reykjavík &mdash; <ImLocation /></div>
                        <div style={{color:'grey', fontSize:'12px'}}>No Open Positions</div>
                    </div>
                    <div style={{fontFamily:'Roboto'}}>
                        <div style={{ fontSize:'24px'}}>Los Angeles &mdash; <ImLocation /></div>
                        <div style={{color:'grey', fontSize:'12px'}}>No Open Positions</div>
                    </div>
                </div>
                <hr style={{border:'none', borderTop: '1px solid rgba(20, 20, 20, 0.2)', marginBottom:'5%'}}/>
            </div>
        </div>
     );
}
 
export default VideoPane;