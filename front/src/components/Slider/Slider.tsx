import React, { useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { TOGGLE_PROJECT_DETAIL_REQUEST } from '../../../reducers/modalReducer';
import { DetailModal } from '../Common/views/DetailModal';
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
    detailId : number,
}

export function  Slider({
    title,
    info,
    detailId
}:ISlider){
    
    const dispatch = useDispatch();

    const {showProjectDetail} = useSelector((state)=>state.modal)

    const onShowModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_PROJECT_DETAIL_REQUEST,
            data : true,
        })
    },[])


    return(
        <>
            {showProjectDetail ? <DetailModal detailId={detailId} cate={'ProjectDetail'}/> : <></>}
            <SliderContainer>
                <SliderImgContainer>
                    <SliderImg src='./graphql.png'/>
                </SliderImgContainer>
                <SliderContent>
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectInfo>{info}</ProjectInfo>
                    <ProjectDetailButton src='./detail.png' onClick={onShowModal}/>
                </SliderContent>
            </SliderContainer>   
        </>
    )
}