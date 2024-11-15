import React from 'react'
import HomePageTopSection from './homePageSections/HomePageTopSection'
import HomePageMissionAndVisionSection from './homePageSections/HomePageMissionAndVisionSection'
import HomePageOurMissionSection from './homePageSections/HomePageOurMissionSection'
import HomePageFeaturedProjectSection from './homePageSections/HomePageFeaturedProjectSection'
import HomePageInvestmentSection from './homePageSections/HomePageInvestmentSection'
import HomePageTestimonialSection from './homePageSections/HomePageTestimonialSection'

const HomePage = () => {
    return (
        <>
            <HomePageTopSection />
            <HomePageMissionAndVisionSection />
            <HomePageOurMissionSection />
            <HomePageFeaturedProjectSection />
            <HomePageInvestmentSection />
            <HomePageTestimonialSection />
        </>
    )
}

export default HomePage
