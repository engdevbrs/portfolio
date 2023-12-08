import emailjs from "emailjs-com";
import { useEffect, useState } from "react";

const Contact = () => {
  const [mailData, setMailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, message, subject } = mailData;
  const [error, setError] = useState();

  const handleChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    console.log("entrando");
    e.preventDefault();
    if (
      name.length === 0 ||
      email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {
      emailjs.send(
          "service_hte9rcr", // service id
          "template_5ghmqhf", // template id
          mailData,
          "AFwDAq9yc49zmoPdm" // public api
        )
        .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
      document.getElementById("contact-form").reset();
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  useEffect(() => {
  }, [error]);
  
  return (
    <section id="contactus" data-nav-tooltip="Contact Me" className="pp-section pp-scrollable section dark-bg">
    <div className="container">
       <div className="title">
          <h3>Get in touch.</h3>
       </div>
       <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
             <div id="contact-info" className="contact-info">
                <h4>What’s your story? Get in touch</h4>
                <p>Always available for freelancing if the right project comes along, Feel free to contact me.</p>
                <ul>
                   <li className="media"><i className="ti-map"></i><span className="media-body">26 Blake Street, Ponsony, Auckland.</span></li>
                   <li className="media"><i className="ti-email"></i><span className="media-body">fearzlx3@gmail.com</span></li>
                   <li className="media"><i className="ti-mobile"></i><span className="media-body">+64 02108688368</span></li>
                </ul>
             </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
             <div className="contact-form">
                <h4>Say Something</h4>
                <form id="contact-form" onSubmit={handleSubmit}>
                   <div className="row">
                      <div className="col-md-6">
                         <div className="form-group"><input name="name" id="name" placeholder="Name *" className="form-control " type="text" defaultValue="" onChange={(e)=> handleChange(e)} /></div>
                      </div>
                      <div className="col-md-6">
                         <div className="form-group"><input name="email" id="email" placeholder="Email *" className="form-control " type="email" defaultValue="" onChange={(e)=> handleChange(e)}/></div>
                      </div>
                      <div className="col-12">
                         <div className="form-group"><input name="subject" id="subject" placeholder="Subject *" className="form-control " type="text" defaultValue="" onChange={(e)=> handleChange(e)}/></div>
                      </div>
                      <div className="col-md-12">
                         <div className="form-group"><textarea name="message" id="message" placeholder="Your message *" rows="5" className="form-control " onChange={(e)=> handleChange(e)}></textarea></div>
                      </div>
                      <div className="col-md-12">
                         <div className="send"><input className="px-btn px-btn-theme" type="submit" defaultValue="send message"/></div>
                         {
                        error === false ? 
                        <div className="alert alert-primary mt-3" role="alert">
                            <i className="far fa-check-circle" style={{fontSize:'20px'}}></i>
                            <span>{' '}Message Sent Successfully</span>
                        </div> : error === true ? 
                        <div className="alert alert-danger mt-3">
                            <i className="far fa-times-circle" style={{fontSize:'20px'}}></i>
                            <span>{' '}Message Sending Failed
                            </span>
                        </div> : <></>
                        }
                      </div>
                   </div>
                </form>
             </div>
          </div>
       </div>
    </div>
 </section>
  );
};
export default Contact;
