import React from 'react'
import ProjectDetailsTopSection from './projectsDetailsPageSections/ProjectDetailsTopSection'
import { useParams } from 'react-router-dom'
import projectData from '../data/ProjectsData';
import ProjectDetailsOverviewSection from './projectsDetailsPageSections/ProjectDetailsOverviewSection';
import ProjectDetailsHeader from './projectsDetailsPageSections/ProjectDetailsHeader';
import ProjectDetailsAmenitiesSection from './projectsDetailsPageSections/ProjectDetailsAmenitiesSection';
import ProjectDetailsExtraordinarySection from './projectsDetailsPageSections/ProjectDetailsExtraordinarySection';

const ProjectDetailsPage = () => {
    const { slugs } = useParams();
    const data = projectData?.find(index => index?.slugs === slugs);

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
            {
                data?.extraordinarySectionData && <ProjectDetailsExtraordinarySection sectionData={data?.extraordinarySectionData} />
            }
        </>
    )
}

export default ProjectDetailsPage
