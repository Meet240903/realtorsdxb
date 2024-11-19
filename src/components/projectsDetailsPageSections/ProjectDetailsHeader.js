import React from 'react';
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsHeader.css';

const ProjectDetailsHeader = () => {
    const headerData = [
        { title: "Overview", id: 'overview' },
        { title: "Amenities", id: 'amenities' },
        { title: "Plans", id: 'plans' },
        { title: "Gallery", id: 'gallery' },
        { title: "Video", id: 'video' },
        { title: "Location", id: 'location' },
        { title: "Enquiry", id: 'enquiry' },
    ];

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='project-details-page-header-section-container'>
            {headerData.map((data, index) => (
                <h4
                    key={index}
                    style={{ cursor: 'pointer', textDecoration: 'none' }}
                    onClick={() => handleScrollToSection(data.id)}
                >
                    {data.title}
                </h4>
            ))}
        </div>
    );
};

export default ProjectDetailsHeader;
