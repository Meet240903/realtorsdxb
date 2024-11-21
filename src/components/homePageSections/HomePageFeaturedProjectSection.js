import React, { useState, useEffect } from 'react';
import '../../assets/css/homePageSectionCSS/homePageFeaturedProjectSection.css';
import projectData from '../../data/ProjectsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HomePageFeaturedProjectSection = () => {
    const [projectCounter, setProjectCounter] = useState(0);

    useEffect(() => {
        // Create an interval to increment the projectCounter
        const interval = setInterval(() => {
            setProjectCounter((prevCounter) => {
                if (prevCounter < 49) {
                    return prevCounter + 1;
                } else {
                    clearInterval(interval);
                    return prevCounter;
                }
            });
        }, 20); // Adjust the interval speed as needed

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='home-page-featured-project-section-container'>
            <div className='home-page-featured-project-section-title'>
                <div className='home-page-featured-project-section-title-left-content'>
                    <small>what we build</small>
                    <h2>Featured projects</h2>
                </div>
                <div className='home-page-featured-project-section-title-right-content'>
                    <h1>{projectCounter}<span>+</span></h1>
                    <p>Completed Projects</p>
                </div>
            </div>
            <div className='home-page-featured-project-section-content'>
                {
                    projectData?.map((data, index) => (
                        <Link to={`/projects/${data?.slugs}`} style={{textDecoration:'none'}} key={index} target='_top'>
                            <div className='home-page-featured-project-section-content-boxs'>
                                <div className='home-page-featured-project-section-content-boxs-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                                <div className='home-page-featured-project-section-content-boxs-body'>
                                    <h4>{data?.title}</h4>
                                    <p>{data?.location}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
            <div className='home-page-featured-project-section-button'>
                <button><FontAwesomeIcon icon={faArrowRightLong} /> view all projects</button>
            </div>
        </div>
    );
};

export default HomePageFeaturedProjectSection;
