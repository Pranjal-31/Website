
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Particles from 'react-particles-js';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
function App() {
  return (
    <>
    
    <Particles 
    params={
     { particles :{
        number:{
          value: 30,
          density:{
            enable : true,
            value_area : 900
          }
        },
        opacity:{
          value: 0.5
        },
        shape:{
          type: ["stars","polygon","circles","edge"],
            width: 1,
            color: "#40ff0652"
          },
        size:{
          value:5,
          anim:{
            enable:true,
            speed:5,
            size_min: 1,
            sync: true
          }
        }
     }
      }
      }
    />
    <Navbar />
    <Header />
    <AboutMe/>
    <Skills/>
    <Portfolio/>
    <Contacts/>
    <Footer/>

  </>
  
  );
}

export default App;
