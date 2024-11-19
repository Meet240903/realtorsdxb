import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsExtraordinarySection.css';
import sectionImg1 from '../../assets/images/projectDetails/extraordinarySectionImgs/sportz/sectionImg1.webp';

const ProjectDetailsExtraordinarySection = ({ sectionData }) => {
    return (
        <div className="project-details-page-extraordinary-section-container">
            <div className="project-details-page-extraordinary-section-title">
                <h2>EMBRACE THE EXTRAORDINARY</h2>
            </div>
            <Swiper
                modules={[Pagination, Autoplay]}
                slidesPerView={4}
                spaceBetween={20}
                slidesPerGroup={1} // Move one box at a time
                pagination={{ clickable: true }} // Enable dots to redirect slides
                autoplay={{
                    delay: 3000, // 3 seconds delay
                    disableOnInteraction: true, // Stop autoplay after user interaction
                }}
                loop={true} // Enable looping by default
                breakpoints={{
                    0: {
                        slidesPerView: 1, // Show one slide for small screens
                        loop: false, // Disable looping for small screens
                        spaceBetween: 10, // Reduce space between slides
                    },
                    768: {
                        slidesPerView: 4, // Show four slides for larger screens
                        loop: true, // Enable looping for larger screens
                        spaceBetween: 20,
                    },
                }}
                className="project-details-page-extraordinary-section-content-slider"
            >
                {sectionData.map((data, index) => (
                    <SwiperSlide key={index}>
                        <div className="project-details-page-extraordinary-section-content-box">
                            <img
                                src={data.sectionImg}
                                className="img-fluid"
                                alt="sectionImg"
                            />
                            <p>{data.title}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className='project-details-page-amenities-section-button'>
                <button>Submit inquiry or request a call back</button>
            </div>
        </div>
    );
};

export default ProjectDetailsExtraordinarySection;
