import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    ModalCloseButton, 
    ModalCloseButtonWrapper, 
    ModalContentInfo, 
    ModalContentTitle, 
    ModalContentWrapper, 
    ModalWrapper 
} from '../styles/DetailModal.styles';

import {TOGGLE_PROJECT_DETAIL_REQUEST} from '../../../../reducers/projectsReducer'
import { TOGGLE_TIMELINE_DETAIL_REQUEST } from '../../../../reducers/timelineReducer';

export interface IDetailModal{
    cate? : string,
    detailId? : any,
}

export function DetailModal({
    cate,
    detailId,
}:IDetailModal){
    const {ProjectContent} = useSelector((state:any)=>state.project)
    const {TimelineContents} = useSelector((state:any)=>state.timeline)
    const dispatch = useDispatch();
    
    console.log(ProjectContent, "ProjectContent 뭐있니.")
    console.log(detailId, "눌린 detailId");
    console.log(ProjectContent[detailId], "이거 찐으로 궁금함");

    const closeModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_PROJECT_DETAIL_REQUEST,
            data : false,
        })
    },[])

    const closeTimelineModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_TIMELINE_DETAIL_REQUEST,
            data : false,
        })
    },[])
   
    return(
        <>
            {cate == 'ProjectDetail' ? (
                <ModalWrapper cate={'ProjectDetail'}>
                    <ModalCloseButtonWrapper onClick={closeModal}>
                        <ModalCloseButton src='./closebtn.png'/>
                    </ModalCloseButtonWrapper>
                        <ModalContentWrapper>
                        <ModalContentTitle>기간</ModalContentTitle>
                        <ModalContentInfo>
                        {ProjectContent[detailId].period}
                        </ModalContentInfo>

                        <ModalContentTitle>기술 스택</ModalContentTitle>
                        <ModalContentInfo>
                        {ProjectContent[detailId].techStack}
                        </ModalContentInfo>

                        <ModalContentTitle>나의 기여도</ModalContentTitle>
                        <ModalContentInfo>{ProjectContent[detailId].contribution}</ModalContentInfo>
                    </ModalContentWrapper>
                </ModalWrapper>
            ) : (
                <ModalWrapper>
                    <ModalCloseButtonWrapper onClick={closeTimelineModal}>
                        <ModalCloseButton src='./closebtn.png'/>
                    </ModalCloseButtonWrapper>
                    <ModalContentWrapper>
                        <ModalContentTitle>활동 내용</ModalContentTitle>
                        <ModalContentInfo>
                            {TimelineContents[detailId].timelineInfo}
                        </ModalContentInfo>

                        <ModalContentTitle>발표영상 링크</ModalContentTitle>
                        <a href={TimelineContents[detailId].timelinelink}><ModalContentInfo>요ㅛㅇ</ModalContentInfo></a>
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
        </>
        
    )
}