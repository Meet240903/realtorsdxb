import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import aboutBreadcrumpImg from '../assets/images/aboutus/breadcrumpImg.jpg'
import AboutUsPageGoalSection from './aboutusPageSections/AboutUsPageGoalSection'
import AboutUsPageOurMissionSection from './aboutusPageSections/AboutUsPageOurMissionSection'
import AboutUsPagePaymentMethodSection from './aboutusPageSections/AboutUsPagePaymentMethodSection'
import AboutUsPageHowItWorkSection from './aboutusPageSections/AboutUsPageHowItWorkSection'

const AboutUs = () => {
    return (
        <>
            <BreadcrumpPage title="About Us" bgImg={aboutBreadcrumpImg} />
            <AboutUsPageGoalSection />
            <AboutUsPageOurMissionSection />
            <AboutUsPagePaymentMethodSection />
            <AboutUsPageHowItWorkSection />
        </>
    )
}

export default AboutUs
