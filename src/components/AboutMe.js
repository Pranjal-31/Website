import React from 'react'
import me from '../MM.jpeg'

function AboutMe() {
    return (
        <div id="about" className="container py-5">
        <div className="row">
            <div className="col-lg-6 col-xs-12">
                <div className="photo-wrap mb-5">
                    <img className="mypic" src={me} alt="Developer"  ></img>
                </div>
            </div>
            <div className="col-lg-6 col-xs-12 ">
            <div className="para-wrap">
            <h1 className="about-heading"> About Me</h1>
                <p>
                    AboutMe anything Proffesional personal

                    It is an open-source framework from late 2011 that is used for designing responsive websites with a mobile-first approach faster and easier. Bootstrap is available for HTML, CSS, and JS. According to server-side languages like PHP, Node, etc bootstrap helps to design the frontend.

Why Bootstrap? 

Faster and Easier
Mobile First style
It is free! Available on www.getbootstrap.com
Browser support
Responsive Design 
Bootstrap 5 alpha launched in mid-June of 2020. As it is in the alpha-1 version, in the future some more features can be added to bootstrap 5

In the alpha-1 version of bootstrap 5 some classes removed are: 
                </p>
                </div>
            </div>
          </div>  
        </div>
    )
}

export default AboutMe
