import React, {useRef, useState, useEffect} from 'react'
import { 
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer,
    ForwardArrow,
    BackwardArrow
     
} from './Projects.styles'

import { DetailModal } from '../Common/views/DetailModal'
import { Slider } from '../Slider/Slider'

export function Projects() {
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
                <CateName>Projects</CateName>
                <SliderWholeContainer ref={slideRef}>
                    <Slider/>
                    <Slider/>
                    {/* <Slider/> */}
                </SliderWholeContainer>
                <ForwardArrow onClick={moveLeft} src='/forwardArrow.png'/>
                <BackwardArrow onClick={moveRight} src='/backwardArrow.png'/>
            </ProjectsWrapper>
        </>
    )
}