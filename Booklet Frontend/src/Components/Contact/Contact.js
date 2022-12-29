import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { FaCcMastercard } from 'react-icons/fa';
import { FaCcVisa } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import { FaCreditCard } from 'react-icons/fa';
import React from 'react'
import "./Contact.css"
function Contact(){
    return(
        <div className="contact" id="contact">	
            <div className="contact-form">
                <h2 className="text-center">Feedback</h2>
                <p>Subscribe to our page to get the latest updates on our Book collection and posts.</p>
                <form>
                    <input type="" placeholder="Your Name" required/>
                    <input type="email" name="" id="" placeholder="Your E-mail" required/>
                    <input type="" placeholder="Write a subject" required/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <input type="submit" name="" value="Submit" className="send"/>
                </form>
            </div>
    
            <div className="social">
                <h2>Mohammad Shahin</h2>
                <h2>Mostafa S Asif</h2>
                <h4>Address</h4>
                <p>Kumira, Sitakunda, Chattogram</p>
                <p>Phone: +880 1521-537475</p>
                <p>E-mail: <a href="mailto:c201035shahin.iiuc@gmail.com">c201035shahin.iiuc@gmail.com</a></p>
                <p>Contact Us through Gmail and Social link given below</p>
                <div className="social-form">
                    <a href="https://www.facebook.com/s.mr.holmes/"><FaFacebook/></a>
                    <a href="https://www.linkedin.com/in/mohammad-shahin-shah/"><FaLinkedin/></a>
                    <a href="https://www.instagram.com/mohammad_sath/"><FaInstagram/></a>
                    <a href="https://www.instagram.com/mohammad_sath/"><FaTwitter/></a>
                </div>
    
                <div className="accept-card">
                    <h6>We Accept Payment Via </h6>
                    <FaMoneyCheckAlt/>
                    <FaCcMastercard/>
                    <FaCcVisa/>
                    <FaPaypal/>
                    <FaCreditCard/>
                </div>
            </div>
        </div>
    );
}
export default Contact;