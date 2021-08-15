import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import './Hamburger.css';

const Hamburger = () => {
    const [open, setOpen] = useState(false);

    let bar1 = useRef(null);
    let bar2 = useRef(null);
    let screen = useRef(null);
    const clickHandler = () => {
        if (!open) {
            const tl = gsap.timeline({ paused: true });
            tl.to([bar1.current], { transform: "rotate(45deg)", top: '50%', left: "50%", duration: 0.5 })
            tl.to([bar2.current], { transform: "rotate(-45deg)", top: '50%', left: "50%", duration: 0.5, delay: -0.5 })
            tl.to([screen.current], { transform: "scaleY(1)", duration: 0.5, delay: -0.5 })
            tl.play()
        }
        else {
            const tl = gsap.timeline({ paused: true });
            tl.to([bar1.current], { transform: "rotate(0deg)", top: '40%', left: "0%", duration: 0.5 })
            tl.to([bar2.current], { transform: "rotate(0deg)", top: '60%', left: "0%", duration: 0.5, delay: -0.5 })
            tl.to([screen.current], { transform: "scaleY(0)", duration: 0.5, delay: -0.5 })

            tl.play()
        }
        setOpen(prev => !prev)
    }
    return (
        <div>
            <div className="hamburger" onClick={() => clickHandler()}>
                <div className="bar1" ref={bar1}></div>
                <div className="bar2" ref={bar2}></div>
            </div>
            <div className="dropdownMenu" ref={screen}>
                <div style={{ width: '80%', margin: 'auto' }}>
                    <div style={{ paddingTop: '3em', paddingBottom: '3em' }}><svg width="65" height="18" viewBox="0 0 79 18" role="img"><title>Ueno</title><path d="M232.29,89.534H227.6V72.463h4.688v2.788A6.009,6.009,0,0,1,237.916,72c4.61,0,6.29,3.1,6.29,6.891V89.534h-4.688V79.818c0-2.631-1.055-4.142-3.36-4.142-2.383,0-3.868,1.857-3.868,4.722v9.136ZM255,90a9,9,0,1,1,9.1-8.98C264.1,86.323,260.35,90,255,90Zm0-3.523c2.891,0,4.376-2.244,4.376-5.457,0-3.254-1.485-5.5-4.376-5.5-2.852,0-4.336,2.244-4.336,5.5C250.662,84.232,252.146,86.476,255,86.476ZM201.916,72.463H206.6V89.534h-4.688V86.746A6.009,6.009,0,0,1,196.29,90c-4.61,0-6.29-3.1-6.29-6.89V72.463h4.688V82.18c0,2.631,1.055,4.142,3.36,4.142,2.383,0,3.868-1.859,3.868-4.724V72.463Zm19.523,12.216a4.136,4.136,0,0,1-3.808,1.8,4.541,4.541,0,0,1-4.689-4.3h12.932V80.515c0-4.645-2.891-8.516-8.517-8.516a8.87,8.87,0,0,0-9.025,9.251c0,5.38,3.829,8.748,9.142,8.748,3.37,0,5.9-1.309,7.3-3.615Zm-4.121-9.274a3.865,3.865,0,0,1,3.985,3.869H213.02C213.45,77.148,214.74,75.406,217.318,75.406Zm49.328,14.5h0a2.343,2.343,0,0,1-2.354-2.331v-0.1a2.343,2.343,0,0,1,2.354-2.332h0A2.343,2.343,0,0,1,269,87.477v0.1A2.343,2.343,0,0,1,266.646,89.907Z" transform="translate(-190 -72)"></path></svg></div>
                    <div className="dropdownContainer" style={{ marginTop: '5%' }}>
                        <div className="ddInner">
                            <div className="dropdownLinks">
                                <div>Services</div>
                                <div>About</div>
                                <div>Clients</div>
                                <div>News</div>
                                <div>Careers</div>
                                <div>Contact</div>
                            </div>
                            <div className="dropdownLists">
                                <div>
                                    <ul>
                                        <label>Experiments</label>
                                        <li>Bueno</li>
                                        <li>Ueno.design</li>
                                        <li>Ueno.store</li>
                                        <li>Ueno.events</li>
                                        <li>Ueno.land</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <label>Misc</label>
                                        <li>Newsletter</li>
                                        <li>Blog</li>
                                        <li>Playground</li>
                                        <li>Press</li>
                                        <li>Privacy</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <label>Social</label>
                                        <li>Twitter</li>
                                        <li>Instagram</li>
                                        <li>Dribbble</li>
                                        <li>Github</li>
                                        <li>Facebook</li>
                                        <li>Linkedin</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul>
                                        <label>Directions</label>
                                        <li>San Francisco</li>
                                        <li>New york</li>
                                        <li>Los Angeles</li>
                                        <li>Reykjavik</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hamburger;