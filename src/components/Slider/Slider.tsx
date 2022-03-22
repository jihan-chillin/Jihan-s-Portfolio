import React from 'react';
import { 
    SliderWholeContainer,
    ProjectInfo, 
    ProjectTitle,
    SliderContainer,
    SliderContent,
    SliderImgContainer,
    ProjectDetailButton,
    SliderImg
 } from './Slider.styles';

export function Slider(){
    return(
        <SliderWholeContainer>
            <SliderContainer>
                <SliderImgContainer>
                    <SliderImg src='./graphql.png'/>
                </SliderImgContainer>
                <SliderContent>
                    <ProjectTitle>프로젝트명</ProjectTitle>
                    <ProjectInfo>
                        프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 
                        컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 
                        컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠
                        컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠
                        컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠
                        컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠프로젝트 컨텐츠
                    </ProjectInfo>
                    <ProjectDetailButton src='./detail.png'/>
                </SliderContent>
            </SliderContainer>   
        </SliderWholeContainer> 
    )
}