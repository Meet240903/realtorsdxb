import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/enquirySection.css'

const EnquirySection = () => {
    return (
        <>
            <div className='project-details-enquiry-section-container'>
                <div className='project-details-enquiry-section-title'>
                    <h2>Enquiry</h2>
                    <p>Wish to get a call back from our team? Fill in your details.</p>
                </div>
                <div className='project-details-enquiry-section-form'>
                    <input type='text' placeholder='Name' />
                    <input type='email' placeholder='Email' />
                    <input type='text' placeholder='Phone/Whatsapp Number' />

                    <select>
                        <option value="" disabled selected>Select your budget</option>
                        <option value="Less than 1 Million AED">Less than 1 Million AED</option>
                        <option value="1 Million AED to 5 Million AED">1 Million AED to 5 Million AED</option>
                        <option value="5 Million to 10 Million AED">5 Million to 10 Million AED</option>
                        <option value="More than 10 Million AED">More than 10 Million AED</option>
                    </select>

                    <select>
                        <option value="" disabled selected>Purpose of buying?</option>
                        <option value="Golden Visa">Golden Visa</option>
                        <option value="For Investment / off-plan property">For Investment / off-plan property</option>
                        <option value="For Own use / Ready property">For Own use / Ready property</option>
                    </select>

                    <select>
                        <option value="" disabled selected>What are you looking for?</option>
                        <option value="Studio">Studio</option>
                        <option value="1 Bedroom">1 Bedroom</option>
                        <option value="2 Bedrooms">2 Bedrooms</option>
                        <option value="3 Bedrooms">3 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="4 Bedrooms">4 Bedrooms</option>
                        <option value="Others">Others</option>
                    </select>
                    <div className='home-page-enquiry-section-right-content-form-button'>
                        <button>Submit inquiry or request a call back</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnquirySection
