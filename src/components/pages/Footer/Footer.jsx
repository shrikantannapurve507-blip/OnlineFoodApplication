import React from 'react'
import { assets } from '../../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logos} className='logo'/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus blanditiis ullam numquam aliquam, sequi id nihil veniam iure repudiandae dignissimos, nisi expedita iste sapiente? Rerum eum illo voluptas voluptatibus! Ducimus.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt=''/>
                    <img src={assets.linkedin_icon} alt=''/>

                </div>
            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-21-456-7898</li>
                    <li>contactinfo@gmail.com</li>
                </ul>

            </div>
        </div>
<hr/>
<p className="footer-copyright">Copyright @ Swiggy.com -All rights Resevered</p>


    </div>
  )
}

export default Footer