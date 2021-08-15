import React from 'react';
import './Blog.css'
const Blog = () => {
    return ( 
        <div className="blogContainer">
            <div className="container">
                <div className="markup">
                    <span>What’s new?</span> <br />
                    <span style={{color:'grey'}}>Our blog and news</span>
                </div>
                <div className="panels">
                    <div className="panelDiv">
                        <div className="blog">
                            <div className="blogdate">Jan 06 Blog</div>
                            <div className="blogtext">24,895 hours later</div>
                            <div className="blogaction">Read More</div>
                        </div>
                        <hr />
                    </div>
                    <div className="panelDiv">
                        <div className="blog">
                            <div className="blogdate">Jan 06 Blog</div>
                            <div className="blogtext">Figma wanted our insights</div>
                            <div className="blogaction">Read More</div>
                        </div>
                        <hr />
                    </div>
                    <div className="panelDiv">
                        <div className="blog">
                            <div className="blogdate">Jan 06 Blog</div>
                            <div className="blogtext">This guy really won't shut up</div>
                            <div className="blogaction">Read More</div>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Blog;