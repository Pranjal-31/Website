import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LinkedinShareButton,
    LinkedinIcon,

} from "react-share";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        {/* <div className="d-flex">
                            <p>main office #222 2021</p>
                        </div> */}
                        <div className="d-flex">
                            <a href="tel-92536783832">+917240912762</a>
                        </div>
                        <div className="d-flex">
                            <p>pranjals3108@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <a className="footer-nav">Home</a>
                                <br/>
                                <a className="footer-nav">About Me</a>
                                <br/>
                                <a className="footer-nav">Skills</a>
                            </div>
                            <div className="col">
                                <a className="footer-nav">Portfolio</a>
                                <br/>
                                <a className="footer-nav">Contacts</a>
                                <br/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex pt-2 justify-content-center">
                            <FacebookShareButton
                            url={"https://www.linkedin.com/in/pranjals-31/"}
                            quote={"Inspirinf Software Engineer"}
                            hashtag="#reactjs"
                            >
                                <FacebookIcon className="mx-3" size={30}/>
                            </FacebookShareButton>
                            <TwitterShareButton
                            url={"https://www.linkedin.com/in/pranjals-31/"}
                            quote={"Inspirinf Software Engineer"}
                            hashtag="#reactjs"
                            >
                                <TwitterIcon className="mx-3" size={30}/>
                            </TwitterShareButton>
                            <LinkedinShareButton
                            url={"https://www.linkedin.com/in/pranjals-31/"}
                            quote={"Inspirinf Software Engineer"}
                            hashtag="#reactjs"
                            >
                                <LinkedinIcon className="mx-3" size={30}/>
                            </LinkedinShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyright&copy;
                            {new Date().getFullYear()}&nbsp;
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
