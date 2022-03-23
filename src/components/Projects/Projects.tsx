import React from 'react'
import { Slider } from '../Slider/Slider'
import { 
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer 
} from './Projects.styles'

export function Projects() {
    return (
        <ProjectsWrapper id="project">
            <CateName>Projects</CateName>
            <SliderWholeContainer>
                <Slider/>
                <Slider/>
            </SliderWholeContainer>
        </ProjectsWrapper>
    )
}