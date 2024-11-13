import React, { useState } from 'react'
import '../../assets/css/aboutUsPageSectionCSS/aboutUsPageHowItWorkSection.css'
import sectionImg1 from '../../assets/images/aboutus/howItWorksImgs/sectionImg1.svg'
import sectionImg2 from '../../assets/images/aboutus/howItWorksImgs/sectionImg2.svg'
import sectionImg3 from '../../assets/images/aboutus/howItWorksImgs/sectionImg3.svg'

const AboutUsPageHowItWorkSection = () => {
    const sectionData = [
        {
            sectionIcon: sectionImg1,
            title: "Submit info",
            content: "When you like a property on zoom call or physically, submit your passport copy, phone number and email ID to us.",
            spanBgColor: "#5c6bc0",
            iconBgColor: "#5C6BC012",
        },
        {
            sectionIcon: sectionImg2,
            title: "Submit Downpayment",
            content: "A payment link will be sent to your email to pay the downpayment, or you can pay with other methods.",
            spanBgColor: "#4caf50",
            iconBgColor: "#4CAF5012",
        },
        {
            sectionIcon: sectionImg3,
            title: "Get NOC",
            content: "on 25% of payment, you will get NOC to resale the property, and on 100% of the payment, you will get ownership",
            spanBgColor: "#0077b5",
            iconBgColor: "#0077B512",
        },
    ]
    const [hoverIndex, setHoverIndex] = useState(null);

    return (
        <div className='about-us-page-how-it-works-section-container'>
            <div className='about-us-page-how-it-works-section-title'>
                <h2>How it works</h2>
                <p>Simple explanation of the process of buying property in Dubai.</p>
            </div>
            <div className='about-us-page-how-it-works-section-content'>
                {sectionData.map((data, index) => (
                    <div
                        className='about-us-page-how-it-works-section-content-boxs'
                        key={index}
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                        style={{
                            border: hoverIndex === index ? `1px solid ${data.spanBgColor}` : '2px solid transparent'
                        }}
                    >
                        <div
                            className='about-us-page-how-it-works-section-content-boxs-span'
                            style={{ backgroundColor: data.spanBgColor }}
                        >
                            <p>Step 0{index + 1}</p>
                        </div>
                        <div
                            className='about-us-page-how-it-works-section-content-boxs-icon'
                            style={{ backgroundColor: data.iconBgColor }}
                        >
                            <img src={data.sectionIcon} className='img-fluid' alt='section-icon' />
                        </div>
                        <div className='about-us-page-how-it-works-section-content-boxs-body'>
                            <h4>{data.title}</h4>
                            <p>{data.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AboutUsPageHowItWorkSection;
