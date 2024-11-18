import React from 'react'
import ProjectDetailsTopSection from './projectsDetailsPageSections/ProjectDetailsTopSection'
import { useParams } from 'react-router-dom'
import projectData from '../data/ProjectsData';

const ProjectDetailsPage = () => {
    const { slugs } = useParams();
    const data = projectData?.find(index => index?.slugs === slugs);
    return (
        <>
            <ProjectDetailsTopSection title={data?.title} bgImg={data?.bgImg} />
        </>
    )
}

export default ProjectDetailsPage
