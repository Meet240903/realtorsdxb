import React from 'react'
import '../assets/css/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <>
            <div className='footer-page-section-container'>
                <div className='footer-page-section-title'>
                    <h1>Get in touch</h1>
                </div>
                <div className='footer-page-section-content'>
                    <div className='footer-page-section-content-box'>
                        <small>phone</small>
                        <h2>+971 50 718 8073</h2>
                        <p>Business Bay, Dubai</p>
                    </div>
                    <div className='footer-page-section-content-box'>
                        <small>email</small>
                        <h2>info@realtorsdxb.com</h2>
                        <p><FontAwesomeIcon icon={faFacebookF} />&nbsp;&nbsp;&nbsp;&nbsp; <FontAwesomeIcon icon={faInstagram} /></p>
                    </div>
                    <div className='footer-page-section-content-box'>
                        <input type='text' placeholder='Enter your contact number' />
                        <button>request a call back</button>
                    </div>
                </div>
                <hr className='my-5' />
                <div className='footer-page-bottom-section-container'>
                    <p>© 2024 – Realtors DXB. All rights reserved.</p>
                    <p>Designed & Developed by Ghulam Abbas</p>
                </div>
            </div>
        </>
    )
}

export default Footer
