import React from 'react'
import '../../assets/css/aboutUsPageSectionCSS/aboutUsPagePaymentMethodSection.css'
import sectionImg1 from '../../assets/images/aboutus/paymentMethodImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/aboutus/paymentMethodImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/aboutus/paymentMethodImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/aboutus/paymentMethodImgs/sectionImg4.png'

const AboutUsPagePaymentMethodSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Bank transfer",
        },
        {
            sectionImg: sectionImg2,
            title: "Crypto Currency",
        },
        {
            sectionImg: sectionImg3,
            title: "Pay cheques",
        },
        {
            sectionImg: sectionImg4,
            title: "Pay by cash",
        },
    ]
    return (
        <>
            <div className='about-us-page-payment-method-section-container'>
                <div className='about-us-page-payment-method-section-title'>
                    <p>You can send your investments by these methods</p>
                    <h2>Payments methods</h2>
                </div>
                <div className='about-us-page-payment-method-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='about-us-page-payment-method-section-method-list' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='payment-method-img' />
                                <p>{data?.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default AboutUsPagePaymentMethodSection
