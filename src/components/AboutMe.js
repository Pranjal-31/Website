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
                <p className="para-about">
                I am motivated, detail-oriented who has developed a mature and responsible approach to any 
                task that I undertake. Currently pursuing Bachelors in Technology in Computer Science
                 Engineering at Shri Shankaracharya Technical Campus (SSTC) . I am hardworking and an 
                 ambitious individual.</p>
                 <br>

                 </br>
                 <p className="para-about">

I have remarkable skills in web development & designing and have developed and designed my personal website 
from scratch along with some more web applications and I am proficient in it.
I worked with an NGO “Navyuva Charitable Trust”, for developing e-posters.
</p>
<br>

</br>
<p className="para-about">
I am seeing a part-time position in the industry in which I can put into practice my knowledge and experience, ultimately benefiting the operations of the organisation that I work for.


                </p>
                </div>
            </div>
          </div>  
        </div>
    )
}

export default AboutMe
