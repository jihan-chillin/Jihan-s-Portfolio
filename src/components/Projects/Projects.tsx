import React, {useCallback, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { 
    ProjectBackground,
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer,
    ForwardArrow,
    BackwardArrow,
    ProjectInfo, 
    ProjectTitle,
    SliderContainer,
    SliderContent,
    SliderImgContainer,
    ProjectDetailButton,
    SliderImg,
} from './Projects.styles'

import {TOGGLE_PROJECT_DETAIL_REQUEST} from '../../../reducers/projectsReducer' 
import { DetailModal } from '../Common/views/DetailModal'

export function Projects() {
    const {
        ProjectContent, 
        showProjectDetail,
        projectKey
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

    const goForward = useCallback(()=>{
        console.log("앞으로");
    },[])

    const goBackward = useCallback(()=>{
        console.log("뒤로");
    },[])

    return (
        <>
            <ProjectsWrapper id="project">
                <ProjectBackground showProjectDetail={showProjectDetail}/>
                <CateName>Projects</CateName>
                <SliderWholeContainer>
                    {showProjectDetail ? <DetailModal detailId={projectKey} cate={'ProjectDetail'}/> : <></>}
                    {ProjectContent.map((value,key)=>(
                        <SliderContainer>
                            <SliderImgContainer>
                                <SliderImg src='./graphql.png'/>
                            </SliderImgContainer>
                            <SliderContent>
                                <ProjectTitle>{value.ProjectTitle}</ProjectTitle>
                                <ProjectInfo>{value.ProjectInfo}</ProjectInfo>
                                <ProjectDetailButton src='./detail.png' onClick={()=>onShowModal(key)}/>
                            </SliderContent>
                        </SliderContainer>
                    ))}
                <ForwardArrow onClick={goForward} src='/forwardArrow.png'/>
                <BackwardArrow onClick={goBackward} src='/backwardArrow.png'/>
                </SliderWholeContainer>
            </ProjectsWrapper>
        </>
    )
}