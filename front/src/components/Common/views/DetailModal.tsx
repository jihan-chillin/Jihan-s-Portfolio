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
    detailId
}:IDetailModal){
    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2' 

    const {ProjectContent} = useSelector((state:any)=>state.project)
    const {TimelineContents} = useSelector((state:any)=>state.timeline)
    const dispatch = useDispatch();
    
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
                        <ModalCloseButton dark={dark} src='./closebtn.png'/>
                    </ModalCloseButtonWrapper>
                        <ModalContentWrapper>
                        <ModalContentTitle>작업 기간</ModalContentTitle>
                        <ModalContentInfo>
                        {ProjectContent[detailId].period}
                        </ModalContentInfo>

                        <ModalContentTitle>기술 스택</ModalContentTitle>
                        <ModalContentInfo>
                        {ProjectContent[detailId].techStack}
                        </ModalContentInfo>

                        <ModalContentTitle>나의 기여도</ModalContentTitle>
                        <ModalContentInfo>{ProjectContent[detailId].contribution}</ModalContentInfo>
                    
                        <ModalContentTitle>느낀점</ModalContentTitle>
                        <ModalContentInfo>{ProjectContent[detailId].takeAway}</ModalContentInfo>
                        {ProjectContent[detailId].gitAddress !==''
                        ? <a href={ProjectContent[detailId].gitAddress}><ModalContentTitle>깃 레퍼지토리 👈</ModalContentTitle></a>
                        : <></>
                        }
                        
                    </ModalContentWrapper>
                </ModalWrapper>
            ) : (
                <ModalWrapper>
                    <ModalCloseButtonWrapper onClick={closeTimelineModal}>
                        <ModalCloseButton dark={dark} src='./closebtn.png'/>
                    </ModalCloseButtonWrapper>
                    <ModalContentWrapper>
                        <ModalContentTitle>기간</ModalContentTitle>
                        <ModalContentInfo>
                            {TimelineContents[detailId].timelinePeriod}
                        </ModalContentInfo>

                        <ModalContentTitle>활동 내용</ModalContentTitle>
                        <ModalContentInfo>
                            {TimelineContents[detailId].timelineInfo}
                        </ModalContentInfo>
                        {TimelineContents[detailId].linkTitle !== '' 
                        ? (
                        <>
                            <ModalContentTitle>관련링크</ModalContentTitle>
                            <a href={TimelineContents[detailId].timelinelink}><ModalContentInfo>{TimelineContents[detailId].linkTitle}</ModalContentInfo></a>
                        </>)
                        :(
                            <></>
                        )
                        }
                        
                    </ModalContentWrapper>
                </ModalWrapper>
            )}
        </>
        
    )
}