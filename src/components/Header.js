import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home" className="header-wrapper">
            <div className="main-info">
                <h1>inspiring software engineer</h1>
                    <Typed
                        className="typed-text"
                        strings={["Web development", "Web designing" , "JavaScript", "Python"]}
                        typeSpeed ={40}
                        backSpeed={60}
                        loop 
                    />
                    <Link smooth={true} to="contacts" href="#" className="btn-offer">contact me</Link>

            </div>

        </div>
    )
}

export default Header
