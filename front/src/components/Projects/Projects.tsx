import React, {useCallback, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { 
    ProjectBackground,
    ProjectsWrapper, 
    CateName,
    SliderWholeContainer,
    ProjectInfo, 
    ProjectTitle,
    SliderContainer,
    SliderContent,
    SliderImgContainer,
    ProjectDetailButton,
    SliderImg,
    StyledSlider,
} from './Projects.styles'


import {TOGGLE_PROJECT_DETAIL_REQUEST} from '../../../reducers/projectsReducer' 
import { DetailModal } from '../Common/views/DetailModal'
import { Slider } from '../Slider/SliderComponent'

export function Projects() {
    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2'

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

    const settings ={
        dots : false,
        isFinite : true,
        speed: 500, // 넘어가는 속도는 몇으로 할 것인지
        slidesToShow: 1, 
        slidesToScroll: 1,
        responsive : [{
            breakpoint : 800,
            settings : {
                dots : false,
                isFinite : true,
                speed: 500, // 넘어가는 속도는 몇으로 할 것인지
                slidesToShow: 1, 
                slidesToScroll: 1,
            }
        }]
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
                                            <SliderImg src='./graphql.png'/>
                                        </SliderImgContainer>
                                        <SliderContent>
                                            <ProjectTitle>{value.ProjectTitle}</ProjectTitle>
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