import React from 'react'
import HomePageTopSection from './homePageSections/HomePageTopSection'
import HomePageMissionAndVisionSection from './homePageSections/HomePageMissionAndVisionSection'
import HomePageOurMissionSection from './homePageSections/HomePageOurMissionSection'
import HomePageFeaturedProjectSection from './homePageSections/HomePageFeaturedProjectSection'
import HomePageInvestmentSection from './homePageSections/HomePageInvestmentSection'
import HomePageTestimonialSection from './homePageSections/HomePageTestimonialSection'
import HomePageEnquirySection from './homePageSections/HomePageEnquirySection'
import HomePageSponserSection from './homePageSections/HomePageSponserSection'

const HomePage = () => {
    return (
        <>
            <HomePageTopSection />
            <HomePageMissionAndVisionSection />
            <HomePageOurMissionSection />
            <HomePageFeaturedProjectSection />
            <HomePageInvestmentSection />
            <HomePageTestimonialSection />
            <HomePageEnquirySection />
            <HomePageSponserSection />
        </>
    )
}

export default HomePage
