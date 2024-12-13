import React,{useState,useRef} from "react";
import "../css/contact.css";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {
  const[name,setName]=useState('')
  const[lastname,setLastName]=useState('')
  const[phone,setPhone]=useState('')
  const[email,setEmail]=useState('')
  const[message,setMessage]=useState('')
  const myElementRef1 = useRef(null);
  const myElementRef2 = useRef(null);
  const myElementRef3 = useRef(null);
  const myElementRef4 = useRef(null);
  const myElementRef5 = useRef(null);

const submitHandler=()=>{
  if(name===''){
    myElementRef1.current.style.display= 'block';
  }
  else if(lastname===''){
    myElementRef2.current.style.display= 'block';
  }
  else if(phone===''){
    myElementRef3.current.style.display= 'block';
  }
  else if(email===''){
    myElementRef4.current.style.display= 'block';
  }
  else if(message===''){
    myElementRef5.current.style.display= 'block';
  }
  else{
    alert('data saved')
  }

}

  return (
    <div>
        <div className="bg-contact">
        <div className="container-fluid contactus">
        <div className="left">
          <h1>Contact Us</h1>
          <p className="hideClass mb-5">
            Ready to get started with our crane shipping services? Don't
            hesitate to reach out to our team for expert assistance.
          </p>
          <h5>Contact Information :</h5>
          <div className="mb-2">
            <FaPhone /> 09845335934
          </div>
          <div className="mb-2">
            <MdEmail /> sgmcraneservice@gmail.com
          </div >
          <div className="mb-2">
            <IoLocationSharp /> 18, 4th Cross Rd, near Kamdhenu auto cnc <br /> 
                              private limited, Ganapathy Nagar, 3rd phase, <br />
                              Peenya, Bengaluru, Karnataka 560058
          </div>

          <br />
          <br />

          {/* <h5>Business Hours :</h5>
          <div>Monday - Friday: [Opening Hours]</div>
          <div>Saturday - Sunday: Closed</div> */}
        </div>
        <div className="right">
            <h4>Get in Touch</h4>
            <div className="contactform">
      <label htmlFor="">First Name</label>
      <br />
      <input type="text" placeholder="First Name" onChange={(e)=>{setName(e.target.value)
        if(name!==''){
          myElementRef1.current.style.display= 'none';
        }
      }} value={name}/>
      <span style={{display:'none',color:'red',textAlign:'left'}} ref={myElementRef1}>enter name</span>
      <br />
      <label htmlFor="">Last Name</label>
      <br />
      <input type="text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)
     if(lastname!==''){
      myElementRef2.current.style.display= 'none';
    }
      }} value={lastname}/>
      <span style={{display:'none',color:'red',textAlign:'left'}} ref={myElementRef2}>enter last name</span>
      <br />
      <label htmlFor="">Phone*</label>
      <br />
      <input type="text" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)
           if(phone!==''){
            myElementRef3.current.style.display= 'none';
          }
      }} value={phone}/>
      <span style={{display:'none',color:'red',textAlign:'left'}} ref={myElementRef3}>enter valid phone</span>
      <br />
      <label htmlFor="">Email*</label>
      <br />
      <input type="text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)
          if(email!==''){
            myElementRef4.current.style.display= 'none';
          }
      }} value={email}/>
      <span style={{display:'none',color:'red',textAlign:'left'}} ref={myElementRef4}>enter valid email</span>
        <br />
      <label htmlFor="">Message*</label>
      <br />
      <textarea name="" id="" placeholder="Message" onChange={(e)=>{setMessage(e.target.value)
           if(message!==''){
            myElementRef5.current.style.display= 'none';
          }
      }} value={message}>

      </textarea>
      <span style={{display:'none',color:'red',textAlign:'left'}} ref={myElementRef5}>enter valid message</span>
                <br />
     <button className='bn34' onClick={submitHandler}>Submit</button>
    </div>
        </div>
      </div>
        </div>
        <img
        src="../images/bgfootertop.jpg"
        alt=""
        srcset=""
        className="footerImg"
        data-aos='fade-up'
      />
      <br />
   
    </div>
  );
}

export default Contact;
