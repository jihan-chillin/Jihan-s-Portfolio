import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailModal } from '../Common/views/DetailModal';
import { 
    TimelineBackground,
    CateName,
    TimelineContentWrapper, 
    TimelineDetailWrapper, 
    TimelineWrapper,
    TimelineTitle,
    Period,
    Moredetail,
} from './EduAward.styles'

import { TOGGLE_EDUAWARDS_DETAIL_REQUEST } from '../../../reducers/EduAwardReducer';

export function EduAwards() {

    const {
        EduawardContents, 
        showTimelineDetail, 
        timelineKey
    } = useSelector((state:any)=> state.eduaward);

    const dispatch = useDispatch();
    
    const showTimelineModal = useCallback((key)=>{
        dispatch({
            type : TOGGLE_EDUAWARDS_DETAIL_REQUEST,
            data : {
                showTimelineDetail : true,
                timelineKey : key
            }
        })
    },[]) 
    
    
    return (
        <>
            <TimelineWrapper id="Edu/Awards">
                <TimelineBackground showTimelineDetail={showTimelineDetail}/>
                <CateName>Edu/Awards</CateName>
                {showTimelineDetail ? <DetailModal detailId={timelineKey}/> : <></>}
               
                    <TimelineContentWrapper>
                    {EduawardContents.map((value, index)=>(
                            <TimelineDetailWrapper colorKey={index}>
                                <TimelineTitle>{value.eduwardTitle}</TimelineTitle>
                                <Period>{value.eduawardPeriod}</Period>
                                <Moredetail onClick={()=>showTimelineModal(index)}>더 자세히보기👈</Moredetail>
                            </TimelineDetailWrapper>
                    ))}
                    </TimelineContentWrapper>
                
            </TimelineWrapper>
        </>
    )
}