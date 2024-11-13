import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import breadCrumpImg from '../assets/images/contactUs/breadcrumpImg.jpg'
import ContactUsPageTopSection from './contactUsPageSections/ContactUsPageTopSection'
import ContactUsPageFormSection from './contactUsPageSections/ContactUsPageFormSection'

const ContactUs = () => {
    return (
        <>
            <BreadcrumpPage title="Contact Us" bgImg={breadCrumpImg} />
            <ContactUsPageTopSection />
            <ContactUsPageFormSection />
        </>
    )
}

export default ContactUs
