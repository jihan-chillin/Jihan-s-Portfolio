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
} from './EduAwards.styles'

import { TOGGLE_TIMELINE_DETAIL_REQUEST } from '../../../reducers/timelineReducer';

export function EduAwards() {
    const {TimelineContents, showTimelineDetail, timelineKey, modal} = useSelector((state:any)=> state.timeline);

    const dispatch = useDispatch();
    
    const showTimelineModal = useCallback((key)=>{
        dispatch({
            type : TOGGLE_TIMELINE_DETAIL_REQUEST,
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
                    {TimelineContents.map((value, index)=>(
                            <TimelineDetailWrapper colorKey={index}>
                                <TimelineTitle>{value.timelineTitle}</TimelineTitle>
                                <Period>{value.timelinePeriod}</Period>
                                <Moredetail onClick={()=>showTimelineModal(index)}>더 자세히보기👈</Moredetail>
                            </TimelineDetailWrapper>
                    ))}
                    </TimelineContentWrapper>
                
            </TimelineWrapper>
        </>
    )
}