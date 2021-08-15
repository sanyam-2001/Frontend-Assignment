import React from 'react';
import './Blob.css'
const Blob = () => {
    return ( 
            <svg className="svgBlob" viewBox="0 0 200 200"  height="150vh" xmlns="http://www.w3.org/2000/svg" style={{position:'absolute', top:'-20%', left:'65%', zIndex:'1'}}>
                <path fill="#3EE7D6" d="M62.8,-61.8C79,-46.6,88.1,-23.3,86.9,-1.1C85.8,21.1,74.5,42.1,58.3,56.9C42.1,71.7,21.1,80.2,-0.2,80.5C-21.6,80.7,-43.1,72.7,-58.2,57.9C-73.3,43.1,-82,21.6,-82.6,-0.6C-83.2,-22.8,-75.7,-45.5,-60.6,-60.7C-45.5,-75.9,-22.8,-83.5,0.3,-83.8C23.3,-84,46.6,-77,62.8,-61.8Z" transform="translate(100 100)" />
            </svg>
     );
}
 
export default Blob;