import React, {useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { 
    ProjectBackground,
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer,
    StyledSlider,
    SliderContainer,
    SliderImgContainer,
    SliderImg,
    SliderContent,
    ProjectTitle,
    ProjectInfo, 
    ProjectDetailButton,
    PrivateTeam,
    PrivateOrTeam,
} from './Projects.styles'

import {
    TOGGLE_PROJECT_DETAIL_REQUEST
} from '../../../reducers/projectsReducer' 

import { DetailModal } from '../Common/views/DetailModal';

export function Projects() {
    const {
        ProjectContent, 
        showProjectDetail,
        projectKey,
    } = useSelector((state:any)=> state.project);
    
    const dispatch = useDispatch();
    const onShowModal = useCallback((key)=>{
        dispatch({
            type : TOGGLE_PROJECT_DETAIL_REQUEST,
            data : {
                showProjectDetail : true,
                projectKey : key
            },
        })
    },[])

    const settings ={
        dots : false,
        isFinite : true,
        speed: 500, // 넘어가는 속도는 몇으로 할 것인지
        slidesToShow: 1, 
        slidesToScroll: 1,
    }

    return (
        <>
            <ProjectsWrapper id="project">
                <ProjectBackground showProjectDetail={showProjectDetail}/>
                <CateName>Projects</CateName>
                <SliderWholeContainer>
                    {showProjectDetail ? <DetailModal detailId={projectKey} cate={'ProjectDetail'}/> : <></>}
                            <StyledSlider {...settings}>
                                {ProjectContent.map((value,key)=>(
                                    <SliderContainer>
                                        <SliderImgContainer className='slick-slide'>
                                            <SliderImg src={value.ProjectThumbnail}/>
                                        </SliderImgContainer>
                                        <SliderContent>
                                            <ProjectTitle>{value.ProjectTitle}</ProjectTitle>
                                            <PrivateOrTeam>{value.PrivateOrTeam}</PrivateOrTeam>
                                            <ProjectInfo>{value.ProjectInfo}</ProjectInfo>
                                            <ProjectDetailButton src='./detail.png' onClick={()=>onShowModal(key)}/>
                                        </SliderContent>
                                    </SliderContainer>
                                ))}
                            </StyledSlider>
                </SliderWholeContainer>
            </ProjectsWrapper>
        </>
    )
}