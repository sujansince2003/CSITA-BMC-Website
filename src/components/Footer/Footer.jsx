import React from 'react'
import logo from '../../Assets/logohero.png'
import {BsFillTelephoneFill,BsFacebook} from 'react-icons/bs'
import {HiLocationMarker} from 'react-icons/hi'
import {MdEmail} from 'react-icons/md'
import { IconContext } from "react-icons";
import './footer.css'
const Footer = () => {
  return (
    <div>

<footer>
    <div className="contact-item-wrapper">
    <ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<BsFillTelephoneFill />



</IconContext.Provider>}
title="Phone"
text="+9779866142435"
/>
<ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<HiLocationMarker />



</IconContext.Provider>}
title="Address"
text="Butwal-Golpark"
/>
<ContactItem
icon={<IconContext.Provider value={{ color: "black", size:"33px", className: "global-class-name" }}>


<MdEmail />



</IconContext.Provider>}
title="Email"
text="csitassociationbmc@gmail.com"
/>


    </div>
<div className="social-item-wrapper">

    <span className="logo-bmc">
        <img src={logo} />
    </span>
    <div className="social-links-wrapper">

    <SocialLink
   
    sicon = {
    <IconContext.Provider value={{ color: "blue", size:"33px", className: "global-class-name" }}>
    <a href='https://www.facebook.com/csit.bmc/' target="_blank">
    
    <BsFacebook />
    </a>
    
    
    </IconContext.Provider>
    
    
    }

 
    
    />
    
    <h3 className='copyright-section'>© 2022 CSIT Association Of BMC. All Rights Reserved. </h3>
    
 
    </div>
</div>



</footer>

    </div>
  )
}

export default Footer

function ContactItem(props){
    return(
        
<section className='footer-contact'>

        <div className='container'>
        <span className='icon'>
           
            
           {props.icon}

       </span>
            <div className="contact-desc">

      
        <span>

        <h1>{props.title}</h1>
        </span>

        <div className="info">
            <p>{props.text}</p>
        </div>

            </div>

        </div>
</section>
        
        
    )
}

function SocialLink(props){
    return(
        <div className='social-icons'>
          {props.sicon}
        </div>
    )
}
