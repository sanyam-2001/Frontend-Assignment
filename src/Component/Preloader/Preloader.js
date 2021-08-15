import React, {useRef, useEffect} from 'react';
import gsap from 'gsap';
const Preloader = () => {
    let preloaderTextRef = useRef(null);
    let containerRef = useRef(null);
    let secondaryRef = useRef(null);

    useEffect(()=>{
        const tl = gsap.timeline({paused:true});
        tl.from([preloaderTextRef.current], {top:'60%', opacity:0, duration:0.5})
        tl.to([preloaderTextRef.current], {top:'40%', opacity:0, delay:0.6,  duration:0.5})
        tl.to([containerRef.current], {scaleY:0, transformOrigin:'top',  duration:0.8})
        tl.to([secondaryRef.current], {scaleY:0, transformOrigin:'top',  duration:0.6})
        setTimeout(()=> tl.play(), 1000);

    }, []);
    return ( 
        <>
        <div style={{position:'fixed', top:0, left:0, height:'100vh', width:'100%', backgroundColor: 'white', zIndex:10}} ref={containerRef}>
            <div 
                style={{fontFamily:'IBM Plex Serif', fontSize:'3em', position:'absolute', top:'50%', left:'50%', transform:'translate(-50%, -50%)', color:'rgba(40, 40, 40, 0.8)'}}
                ref={preloaderTextRef}
            >
                Hi. I'm Preloader.
            </div>
        </div>
        <div style={{position:'fixed', height:'100vh', width:'100%', top:0, left:0, backgroundColor:'#3EE7D6', zIndex:9}} ref={secondaryRef}></div>

        </>
     );
}
 
export default Preloader;