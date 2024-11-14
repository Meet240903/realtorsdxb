import React, { useState } from 'react';
import sectionImg1 from '../../assets/images/home/topSectionImgs/sliderImg1.jpg';
import sectionImg2 from '../../assets/images/home/topSectionImgs/sliderImg2.jpg';
import sectionImg3 from '../../assets/images/home/topSectionImgs/sliderImg3.jpg';
import '../../assets/css/homePageSectionCSS/homePageTopSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faChevronLeft, faChevronRight, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

const HomePageTopSection = () => {
    const sliderData = [
        {
            sliderImg: sectionImg1,
            content: "Find Best Investment options in the UAE",
            fontColor: '#000',
            buttonText: 'find more'
        },
        {
            sliderImg: sectionImg2,
            content: "Invest with confidence Invest with Dubai",
            fontColor: '#fff',
            buttonText: 'view project'
        },
        {
            sliderImg: sectionImg3,
            content: "Dive into our world of lavish lifestyle and structures",
            fontColor: '#fff',
            buttonText: 'view project'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
    };

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - 1 + sliderData.length) % sliderData.length
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const getSlideAnimation = () => {
        return currentIndex % 2 === 0 ? 'slide-from-bottom' : 'slide-from-right';
    };

    return (
        <div className='home-page-top-section-container'>
            <img
                src={sliderData[currentIndex].sliderImg}
                className={`img-fluid ${getSlideAnimation()}`}
                alt='section-img'
            />
            <div className={`home-page-top-section-body-content ${getSlideAnimation()}`}>
                <small style={{
                    color: sliderData[currentIndex].fontColor
                }}>Realtors DXB</small>
                <h1 style={{
                    color: sliderData[currentIndex].fontColor
                }}>{sliderData[currentIndex].content}</h1>
                <button>
                    {sliderData[currentIndex].buttonText} <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
            </div>
            <div className='home-page-top-section-footer-content'>
                <div className='home-page-top-section-footer-left-content'>
                    <div className='home-page-top-section-footer-left-content-phone-icon'>
                        <FontAwesomeIcon className='home-page-top-section-phone-icon' icon={faPhoneVolume} />
                    </div>
                    <div className='home-page-top-section-footer-left-content-body'>
                        <small>call us now</small>
                        <h3>+971 50 7188073</h3>
                    </div>
                </div>
                <div className='home-page-top-section-footer-right-content'>
                    <div className='home-page-top-section-footer-right-content-slider-counter'>
                        {sliderData.map((_, index) => (
                            <p
                                key={index}
                                onClick={() => goToSlide(index)}
                                style={{ cursor: 'pointer', borderBottom: index === currentIndex ? '3px solid #fff' : '' }}
                            >
                                {index + 1 < 10 ? `0${index + 1}` : index + 1}
                            </p>
                        ))}
                    </div>
                    <hr className='home-page-top-section-hr' />
                    <div className='home-page-top-section-footer-right-content-slider-controls'>
                        <div onClick={goToPrevSlide} className='home-page-top-section-footer-right-content-slider-left-control'>
                            <FontAwesomeIcon icon={faChevronLeft} className='home-page-top-section-slider-icon' />
                        </div>
                        <div onClick={goToNextSlide} className='home-page-top-section-footer-right-content-slider-left-control'>
                            <FontAwesomeIcon icon={faChevronRight} className='home-page-top-section-slider-icon' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageTopSection;
