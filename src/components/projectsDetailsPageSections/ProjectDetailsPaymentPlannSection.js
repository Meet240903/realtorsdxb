import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsPaymentPlannSection.css'

const ProjectDetailsPaymentPlannSection = ({ sectionData }) => {
    return (
        <>
            <div className='project-details-payment-plann-section-container'>
                <div className='project-details-payment-plann-section-title'>
                    <h2>payment plan</h2>
                </div>
                <div className='row mx-0 project-details-payment-plann-section-content'>
                    <div className='col-md-4 project-details-payment-plann-section-left-content'>
                        <h1>{sectionData?.roi}</h1>
                        <p>roi</p>
                    </div>
                    <div className='col-md-8 project-details-payment-plann-section-right-content'>
                        <div className='project-details-payment-plann-section-right-inner-content'>
                            <div className='project-details-payment-plann-section-right-content-box'>
                                <h1>{sectionData?.downPayment}</h1>
                                <p>Down Payment</p>
                                <small>On Booking Date</small>
                            </div>
                            <div className='project-details-payment-plann-section-right-content-box'>
                                <h1>{sectionData?.duringContruction}</h1>
                                <p>During Construction</p>
                                <small>1st to 7th Installment</small>
                            </div>
                            <div className='project-details-payment-plann-section-right-content-box'>
                                <h1>{sectionData?.onHandover}</h1>
                                <p>On Handover</p>
                                <small>100% Completion</small>
                            </div>
                            <div className='project-details-payment-plann-section-right-content-box'>
                                <h1>{sectionData?.dldFee}</h1>
                                <p>Post-Handover</p>
                                <small>Within 24 Months</small>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='project-details-page-amenities-section-button'>
                    <button>Submit inquiry or request a call back</button>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsPaymentPlannSection
