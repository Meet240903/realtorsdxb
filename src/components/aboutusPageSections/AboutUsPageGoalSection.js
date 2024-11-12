import React from 'react'
import '../../assets/css/aboutUsPageSectionCSS/aboutusPageGoalSection.css'

const AboutUsPageGoalSection = () => {
    const sectionData = [
        {
            title: "Strategy",
            content: "We combine our extensive local market knowledge with a global perspective, ensuring you access the best investment opportunities in Dubai",
        },
        {
            title: "Ideas",
            content: "We understand that every investor has unique goals. Our team is dedicated to crafting personalized investment strategies to meet your needs",
        },
        {
            title: "Transparency",
            content: "Trust is the cornerstone of our business. We prioritize transparency in all our dealings, providing you with peace of mind throughout your investment journey.",
        },
        {
            title: "Quick Support",
            content: "From property selection and negotiation to legal and financial guidance, we offer a comprehensive range of services to simplify your investment process.",
        },
    ]
    return (
        <>
            <div className='about-us-page-goal-section-container'>
                <div className='row mx-0 about-us-page-goal-section-content'>
                    <div className='col-md-4 about-us-page-goal-section-left-content'>
                        <h3>Our goal then and now is to provide quality projects</h3>
                        <p>Unlock the door to limitless investment possibilities in Dubai’s thriving real estate market with UAE Investors Hub.</p>
                    </div>
                    <div className='col-md-4 about-us-page-goal-section-right-content'>
                        {
                            sectionData?.map((data, index) => (
                                <div className='about-us-page-goal-section-right-content-boxs' key={index}>
                                    <h4 className='about-us-boxs-header'>{data?.title}</h4>
                                    <p className='about-us-boxs-content'>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsPageGoalSection
