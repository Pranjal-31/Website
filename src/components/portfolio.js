import React from "react";
import image1 from "../image/Todo.png";
import image2 from "../image/Wishapp.png";
import image3 from "../image/Produ.jpg";
import image4 from "../image/Portfolio.png";
// import image5 from "../image/img5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {
 
const openImage1 = () =>{
    const content = (
    <>
    <img className="popup-img" src={image1} alt="img1"/>
    <p>This is a web app for making a todo list. To add tap or click on the bar.</p>
    <b>GitHub</b> <a className="hyper-link" onClick={ () => 
    window.open("https://github.com/Pranjal-31/Todo-list")}>link </a>
    </>
    )
    PopupboxManager.open ({content})

    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Todo-list project",
          },
        },
      });
}
const PopupboxConfigimg1 = {
    titleBar : {
        enable: true,
        text: "Todo-list Webapp"
},
    fadeIn: true,
    fadeInSpeed :200
}


// 2nd

const openImage2 = () =>{
    const content = (
    <>
    <img className="popup-img" src={image2} alt="img2"/>
    <p>It is a web-app which wishes you according to time. Created using ReactJS, HTML and CSS.</p>
    <b>GitHub</b> <a className="hyper-link" onClick={ () => 
    window.open("https://github.com/Pranjal-31/wishapp")}>link </a>
    </>
    )
    PopupboxManager.open ({content})

    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Wishing Web-app",
          },
        },
      });
}
const PopupboxConfig2 = {
    titleBar : {
        enable: true,
        text: "image2"
    },
    fadeIn: true,
    fadeInSpeed :200
}
//3rd

const openImage3 = () =>{
    const content = (
    <>
    <img className="popup-img" src={image3} alt="img3"/>
    <p>The Producer-Consumer problem is a classic problem this is used for multi-process synchronization 
    i.e. synchronization between more than one processes. In the producer-consumer problem, there is one
     Producer that is producing something and there is one Consumer that is consuming the products produced
      by the Producer.</p>
    <b>GitHub</b> <a className="hyper-link" onClick={ () => 
    window.open("https://github.com/Pranjal-31/Producer-consumer")}>link </a>
    </>
    )
    PopupboxManager.open ({content})

    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Producer Consumer Problem (JAVA)",
          },
        },
      });
}
const PopupboxConfig3 = {
    titleBar : {
        enable: true,
        text: "image3" 
    },
    fadeIn: true,
    fadeInSpeed :200
}
//4th
const openImage4 = () =>{
    const content = (
    <>
    <img className="popup-img" src={image4} alt="img4"/>
    <p>Personal Website.  Created using ReactJS, HTML and CSS.</p>
    <b>GitHub</b> <a className="hyper-link" onClick={ () => 
    window.open("https://github.com/Pranjal-31/Website")}>link </a>
    </>
    )
    PopupboxManager.open ({content})

    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Personal Website",
          },
        },
      });
}
const PopupboxConfig4 = {
    titleBar : {
        enable: true,
        text: "image4"
    },
    fadeIn: true,
    fadeInSpeed :200
}
//5th
// const openImage5 = () =>{
//     const content = (
//     <>
//     <img className="popup-img" src={image5} alt="img5"/>
//     <p>Lorem ipsum.......</p>
//     <b>GitHub</b> <a className="hyper-link" onClick={ () => 
//     window.open("https://www.npmjs.com/package/react-popupbox")}>link </a>
//     </>
//     )
//     PopupboxManager.open ({content})
// }
// const PopupboxConfig5 = {
//     titleBar : {
//         enable: true,
//         text: "Image5"
//     },
//     fadeIn: true,
//     fadeInSpeed :200
// }



    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5"> portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-wrap" onClick={openImage1}>
                     <img className="portfolio-image" src={image1} alt="iamge1"></img>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                     </div>                
                {/* image 2 */}
                    <div className="portfolio-image-wrap" onClick={openImage2}>
                     <img className="portfolio-image" src={image2} alt="iamge2"></img>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                     </div>
                {/* image 3 */}
                    <div className="portfolio-image-wrap" onClick={openImage3} >
                     <img className="portfolio-image" src={image3} alt="iamge3"></img>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                     </div>
                {/* image 4 */}
                    <div className="portfolio-image-wrap" onClick={openImage4}>
                     <img className="portfolio-image" src={image4} alt="iamge4"></img>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                {/* image 5 */}
                {/* <div className="portfolio-image-wrap"  onClick={openImage5}>
                     <img className="portfolio-image" src={image5} alt="iamge5"></img>
                     <div className="overflow"></div>
                     <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>*/}
                </div> 
            </div>
            <PopupboxContainer {...PopupboxConfigimg1} />
            <PopupboxContainer {...PopupboxConfig2} />
            <PopupboxContainer {...PopupboxConfig3} />
            <PopupboxContainer {...PopupboxConfig4} />
            {/* <PopupboxContainer {...PopupboxConfig5} /> */}

        </div>
    )
}

export default Portfolio
