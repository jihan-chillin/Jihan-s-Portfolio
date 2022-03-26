import React, {useRef, useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { 
    ProjectBackground,
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer,
    ForwardArrow,
    BackwardArrow
} from './Projects.styles'

import { Slider } from '../Slider/Slider'

export function Projects() {
    const {ProjectContent} = useSelector((state:any)=> state.project);
    const {showProjectDetail} = useSelector((state:any)=>state.modal);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const TOTAL_SLIDES = 2;

    const moveRight = () => {

        if (currentSlide >= TOTAL_SLIDES) {
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const moveLeft = () => {

        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    useEffect(() => {
        
        const halfAni = currentSlide * 50;
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        // halfAni
        slideRef.current.style.transform = `translateX(-${halfAni}%)`;
        // slideRef.current.style.transform = `translateX(-${currentSlide}00%)`;
    }, [currentSlide]);

    return (
        <>
            <ProjectsWrapper id="project">
                <ProjectBackground showProjectDetail={showProjectDetail}/>
                <CateName>Projects</CateName>
                <SliderWholeContainer ref={slideRef}>
                    {ProjectContent.map((value)=>(
                        <Slider title={value.ProjectTitle} info={value.ProjectInfo} detailId={value.ProjectId}/>
                    ))}
                </SliderWholeContainer>
                <ForwardArrow onClick={moveLeft} src='/forwardArrow.png'/>
                <BackwardArrow onClick={moveRight} src='/backwardArrow.png'/>
            </ProjectsWrapper>
        </>
    )
}