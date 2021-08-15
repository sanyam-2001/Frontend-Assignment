import React, {useEffect} from 'react';
import './ProjectItem.css';
import AOS from 'aos';
const ProjectItem = (props) => {
    useEffect(()=>{
        AOS.init();
    }, [])
    return ( 
        <div className="projectItemContainer" data-aos="fade-up"  data-aos-offset="500" style={{marginTop: props.index%2===0?"5vh":0}}>
            <img src={props.src} alt={props.title} style={{width:'100%'}} />
            <div className="title">{props.title}</div>
            <div className="subtitle">{props.subTitle}</div>
        </div>
     );
}
 
export default ProjectItem;