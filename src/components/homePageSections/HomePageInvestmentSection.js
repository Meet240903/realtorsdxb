import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageInvestmentSection.css'
import sectionImg1 from '../../assets/images/home/investmentSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/home/investmentSectionImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/home/investmentSectionImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/home/investmentSectionImgs/sectionImg4.png'
import sectionImg5 from '../../assets/images/home/investmentSectionImgs/sectionImg5.png'
import sectionImg6 from '../../assets/images/home/investmentSectionImgs/sectionImg6.png'

const HomePageInvestmentSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Global Hub",
            content: "Dubai is a global business and travel hub, ensuring a steady stream of rental income and high capital appreciation.",
        },
        {
            sectionImg: sectionImg2,
            title: "Tax Advantages",
            content: "Enjoy tax-free rental income and capital gains, providing a substantial financial advantage to investors.",
        },
        {
            sectionImg: sectionImg3,
            title: "Diverse Property Options",
            content: "From luxury apartments to commercial spaces, Dubai offers a diverse range of real estate options to suit every investor's needs.",
        },
        {
            sectionImg: sectionImg4,
            title: "Security and Stability",
            content: "Dubai offers a safe and stable environment for investments, backed by strong legal protections and regulations.",
        },
        {
            sectionImg: sectionImg5,
            title: "Tourism and Hospitality",
            content: "As a thriving tourist destination, Dubai ensures a constant demand for short-term rentals, guaranteeing a consistent income stream.",
        },
        {
            sectionImg: sectionImg6,
            title: "Smart City Innovations",
            content: "Dubai's commitment to technology and innovation ensures your investments are future-proof and in sync with global trends.",
        },
    ]
    return (
        <>
            <div className='home-page-investment-section-container'>
                <div className='home-page-investment-section-title'>
                    <small>Dubai: The Investment Oasis</small>
                    <h1>Why invest in Dubai?</h1>
                </div>
                <div className='home-page-investment-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='home-page-investment-section-content-boxs' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                <h4>{data?.title}</h4>
                                <p>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePageInvestmentSection
