import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import aboutBreadcrumpImg from '../assets/images/aboutus/breadcrumpImg.jpg'
import AboutUsPageGoalSection from './aboutusPageSections/AboutUsPageGoalSection'

const AboutUs = () => {
    return (
        <>
            <BreadcrumpPage title="About Us" bgImg={aboutBreadcrumpImg} />
            <AboutUsPageGoalSection />
        </>
    )
}

export default AboutUs
