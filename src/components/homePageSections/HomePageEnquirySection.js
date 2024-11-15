import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageEnquirySection.css'
import sectionImg from '../../assets/images/home/missionAndVisionSectionImgs/sectionImg1.jpg'

const HomePageEnquirySection = () => {
    return (
        <>
            <div className='row mx-0 home-page-enquiry-section-container'>
                <div className='col-md-6 p-0 home-page-enquiry-section-left-content'>
                    <img src={sectionImg} className='img-fluid' alt='section-img' />
                </div>
                <div className='col-md-6 home-page-enquiry-section-right-content'>
                    <small>QUICK ENQUIRY.</small>
                    <h2>Want more information?</h2>
                    <div className='home-page-enquiry-section-right-content-form'>
                        <input type='text' placeholder='Name' />
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

                        <select>
                            <option value="" disabled selected>Choose Project</option>
                            <option value="Sobha Hartland 2">Sobha Hartland 2</option>
                            <option value="Vincitore Aqua Dimore">Vincitore Aqua Dimore</option>
                            <option value="Danube Sportz">Danube Sportz</option>
                            <option value="Share more projects">Share more projects</option>
                        </select>
                        <div className='home-page-enquiry-section-right-content-form-button'>
                            <button>Submit inquiry or request a call back</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default HomePageEnquirySection
