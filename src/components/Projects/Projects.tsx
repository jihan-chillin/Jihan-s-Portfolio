import React from 'react'
import { 
    ProjectsWrapper, 
    CateName 
} from './Projects.styles'

export function Projects() {
    return (
        <ProjectsWrapper id="project">
            <CateName>Projects</CateName>
            <div>프로젝트입니다.</div>
        </ProjectsWrapper>
    )
}