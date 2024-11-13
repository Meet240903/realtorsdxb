import React from 'react'
import '../../assets/css/contactUsPageSectionCSS/contactUsPageFormSection.css'

const ContactUsPageFormSection = () => {
    return (
        <>
            <div className='contact-us-page-form-section-container'>
                <div className='contact-us-page-form-section-content'>
                    <small>leave a message</small>
                    <h2>We love to hear from you</h2>
                    <input type='text' placeholder='Name' />
                    <input type='number' placeholder='Contact/Whatsapp number' />
                    <input type='text' placeholder='Email' />
                    <textarea rows={4} placeholder='Message' />
                    <button>send</button>
                </div>
            </div>
        </>
    )
}

export default ContactUsPageFormSection
