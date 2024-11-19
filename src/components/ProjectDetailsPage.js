import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import ProjectDetailsTopSection from './projectsDetailsPageSections/ProjectDetailsTopSection';
import projectData from '../data/ProjectsData';
import ProjectDetailsOverviewSection from './projectsDetailsPageSections/ProjectDetailsOverviewSection';
import ProjectDetailsHeader from './projectsDetailsPageSections/ProjectDetailsHeader';
import ProjectDetailsAmenitiesSection from './projectsDetailsPageSections/ProjectDetailsAmenitiesSection';
import ProjectDetailsExtraordinarySection from './projectsDetailsPageSections/ProjectDetailsExtraordinarySection';
import ProjectDetailsLocationSection from './projectsDetailsPageSections/ProjectDetailsLocationSection';
import EnquirySection from './projectsDetailsPageSections/EnquirySection';

const ProjectDetailsPage = () => {
    const { slugs } = useParams();
    const { hash } = useLocation();
    const data = projectData?.find(index => index?.slugs === slugs);

    useEffect(() => {
        if (hash) {
            const sectionId = hash.replace('#', '');
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <ProjectDetailsTopSection title={data?.title} bgImg={data?.bgImg} />
            <ProjectDetailsHeader />
            <div id='overview'>
                <ProjectDetailsOverviewSection sectionData={data?.overviewSectionData} />
            </div>
            <div id='amenities'>
                <ProjectDetailsAmenitiesSection sectionData={data?.amenitiesSectionData} />
            </div>
            {data?.extraordinarySectionData && (
                <ProjectDetailsExtraordinarySection sectionData={data?.extraordinarySectionData} />
            )}
            <div id='location'>
                <ProjectDetailsLocationSection sectionImg={data?.locationImg} />
            </div>
            <div id='enquiry'>
                <EnquirySection />
            </div>
        </>
    );
};

export default ProjectDetailsPage;
