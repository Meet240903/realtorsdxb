import React, { useState } from 'react';
import '../../assets/css/homePageSectionCSS/homePageTestimonialSection.css';
import sectionImg from '../../assets/images/home/testimonialsSectionImgs/sectionImg1.jpg';
import userImg1 from '../../assets/images/home/testimonialsSectionImgs/userImg1.png';
import userImg2 from '../../assets/images/home/testimonialsSectionImgs/userImg2.png';
import userImg3 from '../../assets/images/home/testimonialsSectionImgs/userImg3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const HomePageTestimonialSection = () => {
    const sectionData = [
        {
            sectionImg: userImg1,
            userName: "Grayce",
            locationName: "New York, USA",
            content: "“Investing in Dubai was a dream, and Realtors DXB turned it into a reality. Their dedication to finding the perfect property for me and their transparent approach gave me the confidence I needed to take the plunge. Dubai's real estate market is flourishing, and I'm thrilled to be part of it”",
        },
        {
            sectionImg: userImg2,
            userName: "Hewett",
            locationName: "New York, USA",
            content: "“Dubai's real estate market can be daunting, but Realtors DXB made it accessible and profitable for me. Their support in every aspect, from property selection to legal and financial guidance, was exceptional. I'm thrilled with the results, and I'm excited to watch my investment grow.”",
        },
        {
            sectionImg: userImg3,
            userName: "Mark Leon",
            locationName: "New York, USA",
            content: "“I couldn't be happier with my decision to invest with Realtors DXB. Their team's expertise and local insights were invaluable. Dubai's real estate market can be challenging to navigate, but they made it smooth and profitable. I've already seen impressive returns on my investment. Thank you, UAE Investors Hub ”",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sectionData.length - 1 : prevIndex - 1
        );
    };

    const getVisibleSlides = () => {
        const slidesToShow = window.innerWidth <= 768 ? 1 : 2; // Show 1 slide for mobile, 2 for larger screens
        const extendedData = [...sectionData, ...sectionData];
        const start = currentIndex;
        const end = start + slidesToShow;
        return extendedData.slice(start, end);
    };


    return (
        <div className="home-page-testimonial-section-container">
            <div className="home-page-testimonial-section-title">
                <small>TESTIMONIALS</small>
                <h2>What our recent clients said about us!</h2>
            </div>
            <div className="home-page-testimonial-section-img">
                <img src={sectionImg} className="img-fluid" alt="section-img" />
            </div>
            <div className="home-page-testimonial-section-content">
                <div className="home-page-testimonial-section-content-slider">
                    {getVisibleSlides().map((item, index) => (
                        <div
                            className="home-page-testimonial-section-content-slider-boxs"
                            key={index}
                        >
                            <div className="home-page-testimonial-section-content-slider-boxs-top-content">
                                <img
                                    src={item.sectionImg}
                                    className="img-fluid"
                                    alt="user-img"
                                />
                                <div className="home-page-testimonial-section-content-slider-boxs-top-middle-content">
                                    <h4>{item.userName}</h4>
                                    <p>{item.locationName}</p>
                                </div>
                                <FontAwesomeIcon
                                    icon={faQuoteRight}
                                    className="home-page-testimonial-setion-quote"
                                />
                            </div>
                            <p className="slilder-message-content">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="home-page-testimonial-section-content-slider-controls">
                    <div
                        className="home-page-testimonial-section-content-slider-control-box"
                        onClick={prevSlide}
                    >
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div
                        className="home-page-testimonial-section-content-slider-control-box"
                        onClick={nextSlide}
                    >
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageTestimonialSection;
