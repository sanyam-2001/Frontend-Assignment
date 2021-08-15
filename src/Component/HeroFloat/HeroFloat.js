import React, {useEffect, useRef} from 'react';
import Video from './vid.mp4';
import gsap from 'gsap'
import './HeroFloat.css';
const HeroFloat = () => {
    let videoRef = useRef(null);
    let containerRef = useRef(null);
    useEffect(() => {
        const tl = new gsap.timeline({paused:true});
        tl.from([containerRef.current], {width:'100%',height:'100vh',  left:0, top:0, duration: 2});
        setTimeout(()=>{
            tl.play()
        }, 3600)
        setTimeout(()=>{
            videoRef.current.play();
        }, 3000)
    }, []);
    return ( 
        <div className="videoContainer"  ref={containerRef}>
            <video 
            className="video"
                muted
                src={Video}
                ref={videoRef}
                style={{width:'100%'}}
            >

             </video>
        </div>
     );
}
 
export default HeroFloat;