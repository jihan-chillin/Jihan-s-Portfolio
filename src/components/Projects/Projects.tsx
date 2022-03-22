import React from 'react'
import { Slider } from '../Slider/Slider'
import { 
    ProjectsWrapper, 
    CateName 
} from './Projects.styles'

export function Projects() {
    return (
        <ProjectsWrapper id="project">
            <CateName>Projects</CateName>
            <Slider/>
            <Slider/>
        </ProjectsWrapper>
    )
}