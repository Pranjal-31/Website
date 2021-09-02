import React from 'react';
import emailjs from 'emailjs-com';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';


const Contacts = () => {
    // const[successMessage , setSuccessMessage]  = useState("");

    // const { register, handleSubmit, formState: { error } } = useForm();
    
    const serviceID = "service_ID";
    const templateId = "template_ID";
    const userId = "user_leBSId1p0DvtIZ4U9HyMq";

    // const onSubmit = (data, r) => {
    //     sendEmail(
    //         serviceID,
    //         templateId,
    //         {
    //             name : data.name,
    //             phone : data.phone,
    //             email : data.email,
    //             subject: data.subject,
    //             description : data.description
    //         },
    //         userId
    //     )
    //     r.target.reset();
    // }


//     const sendEmail = (serviceID, templateId, variables , userId) => {    
//         emailjs.send(serviceID, templateId, variables , userId)
//           .then(() => {
//             setSuccessMessage("Form sent successfully!");
//         }).catch(err => console.error(`Something went wrong! ${err}`)); 
         
// }
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateId, e.target, userId)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

    return (
        <div id="contacts" className="contacts">
        <div className="text-center">
            <h1>Contact me</h1>
            <p>Please fill out the form and describe your project needs, I'll contact you
            as soon as possible.</p>
            </div>
            <div className="container">
            <form onSubmit={sendEmail}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        {/* NAME INPUT */}
                        <div className="text-center">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="NAME"
                            name="name"
                            
                //   {...register("name" ,{
                //     required: "Please enter your name",
                //     maxLength: {
                //       value: 20,
                //       message:  "Please enter a name with fewer than 20 characters"
                       
                //     }
                //   })}
                        />
                        <div className="line"></div>
                        </div>  
                        {/* <span className="error-message">
                            {error.name && error.name.message}
                        </span>    */}
                        {/* PHONE INPUT */}
                        <div className="text-center">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="PHONE NUMBER"
                            name="phone"
                        />
                        <div className="line"></div>
                        </div>  
                        {/* EMAIL INPUT */}
                        <div className="text-center">
                        <input 
                            type="email"
                            className="form-control"
                            placeholder="EMAIL"
                            name="email"
                        />
                        <div className="line"></div>
                        </div>                        
                        {/* SUBJECT INPUT */}
                        <div className="text-center">
                        <input 
                            type="text" 
                            className="form-control"
                            placeholder="SUBJECT"
                            name="subject"
                        />
                        <div className="line"></div>
                    </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        {/* DESCRIPTION */}
                        <div className="text-center">
                        <textarea                        
                            type="text" 
                            className="form-control"
                            placeholder="Please briefly describe your project..."
                            name="description"
                        ></textarea>
                        <div className="line"></div>
                        <button  className="btn-main-offer contact-btn" type="submit">Contact me</button>
                        </div>
                    </div>
                </div>
                </form>
     </div>
     </div>
     
                
        
    )
}

export default Contacts 
