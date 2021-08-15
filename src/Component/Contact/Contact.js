import React from 'react';
import './Contact.css'
const Contact = () => {
    return ( 
        <>
        <div className="contactContainer">
            <div className="statement">
                    <div className="statementText"   style={{fontFamily:'IBM Plex Serif'}}>Got a Project?</div>
                    <div className="statementText" style={{fontFamily:'IBM Plex Serif',  color:'grey'}}>Let's Talk</div>
                    <div className="slidingButton">Tell Us Everything</div>
            </div>
            <div className="sublinks">
                <div>
                    <ul className="contactList">
                        <li>Clients</li>
                        <li>About</li>
                        <li>News</li>
                        <li>Contacts</li>
                        <li>Careers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div>
                    <ul className="contactList countryList">
                        <li>San Francisco</li>
                        <li>New York</li>
                        <li>Los Angeles</li>
                        <li>Reykjavik</li>
                    </ul>
                </div>
                <div>
                    <ul className="contactList">
                        <li>Newsletter</li>
                        <li>Blog</li>
                        <li>Bueno.co</li>
                        <li>Ueno.design</li>
                        <li>Ueno.store</li>
                        <li>Useno.events</li>
                        <li>Useno.playground</li>
                        <li>Playground</li>
                        <li>The Interview</li>
                    </ul>
                </div>
            </div>
        </div>
        

        </>
     );
}
 
export default Contact;