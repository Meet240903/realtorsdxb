import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import breadCrumpImg from '../assets/images/projects/breadcrumpImg.jpg'
import '../assets/css/projectPage.css'
import projectData from '../data/ProjectsData'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
    return (
        <>
            <BreadcrumpPage title="Projects" bgImg={breadCrumpImg} />
            <div className='project-page-section-container'>
                <div className='project-page-filter-section-content'>
                    <div className='project-page-filter-section-content-boxs'>
                        <p>Project Status</p>
                        <select>
                            <option value="Any" selected>Any</option>
                            <option value="Under Construction">Under Construction</option>
                        </select>
                    </div>
                    <div className='project-page-filter-section-content-boxs'>
                        <p>Project Type</p>
                        <select>
                            <option value="Any" selected>Any</option>
                            <option value="Apartments">Apartments</option>
                            <option value="Apartments and Villas">Apartments and Villas</option>
                            <option value="Apartment">Apartment</option>
                        </select>
                    </div>
                    <div className='project-page-filter-section-content-boxs'>
                        <p>Location</p>
                        <select>
                            <option value="Any" selected>Any</option>
                            <option value="Sports City, Dubai">Sports City, Dubai</option>
                            <option value="MBR City, Dubai">MBR City, Dubai</option>
                            <option value="Dubai Science Park, Dubai, UAE">Dubai Science Park, Dubai, UAE</option>
                        </select>
                    </div>
                    <div className='project-page-filter-section-content-boxs'>
                        <p>Budget</p>
                        <select>
                            <option value="Any" selected>Any</option>
                            <option value="0|2500000">AED0 - AED2500000</option>
                            <option value="2500000|5000000">AED2500000 - AED5000000</option>
                            <option value="5000000|7500000">AED5000000 - AED7500000</option>
                            <option value="7500000|10000000">AED7500000 - AED10000000</option>
                            <option value="10000000|12500000">AED10000000 - AED12500000</option>
                            <option value="12500000|15000000">AED12500000 - AED15000000</option>
                            <option value="15000000|17500000">AED15000000 - AED17500000</option>
                            <option value="17500000|20000000">AED17500000 - AED20000000</option>
                            <option value="20000000|22500000">AED20000000 - AED22500000</option>
                            <option value="22500000|25000000">AED22500000 - AED25000000</option>
                        </select>
                    </div>
                    <div className='project-page-filter-section-content-boxs'>
                        <button>search</button>
                    </div>
                </div>
                <div className='project-page-section-content'>
                    {
                        projectData?.map((data, index) => (
                            <Link to={`/projects/${data?.slugs}`} key={index} target='_top'>
                                <div className='project-page-section-content-boxs'
                                    style={{ backgroundImage: `url(${data?.sectionImg})` }}
                                >
                                    <div className='project-page-section-content-boxs-body'>
                                        <div className='project-page-section-content-boxs-body-left-content'>
                                            <h4>{data?.title}</h4>
                                            <p>{data?.location}</p>
                                        </div>
                                        <div className='project-page-section-content-boxs-body-right-content'>
                                            <h1>0{index + 1}</h1>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default ProjectsPage
