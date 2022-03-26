import React, { useCallback, useRef } from 'react';
import { 
    ProjectInfo, 
    ProjectTitle,
    SliderContainer,
    SliderContent,
    SliderImgContainer,
    ProjectDetailButton,
    SliderImg,
 } from './Slider.styles';

 export interface ISlider{
    title : string,
    info : string,
}

export function  Slider({
    title,
    info 
}:ISlider){

    return(
            <SliderContainer>
                <SliderImgContainer>
                    <SliderImg src='./graphql.png'/>
                </SliderImgContainer>
                <SliderContent>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectInfo>{info}</ProjectInfo>
                    <ProjectDetailButton src='./detail.png'/>
                </SliderContent>
            </SliderContainer>   
    )
}