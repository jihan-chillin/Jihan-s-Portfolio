import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailModal } from '../Common/views/DetailModal';
import { 
    TimelineBackground,
    CateName,
    Period, 
    TimelineContentWrapper, 
    TimelineTitle, 
    TimelineWholeContentWrapper, 
    TimelineWrapper 
} from './Timeline.styles'

import { TOGGLE_TIMELINE_DETAIL_REQUEST } from '../../../reducers/timelineReducer';

export function Timeline() {
    const {TimelineContents, showTimelineDetail, timelineKey} = useSelector((state:any)=> state.timeline);

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
            <TimelineWrapper id="timeline">
                <TimelineBackground showTimelineDetail={showTimelineDetail}/>
                <CateName>Timeline</CateName>
                <TimelineWholeContentWrapper>
                    {showTimelineDetail ? <DetailModal detailId={timelineKey}/> : <></>}
                    {TimelineContents.map((value, key)=>(
                        <TimelineContentWrapper>
                            <Period>{value.timelinePeriod}</Period>
                            <TimelineTitle colorKey={key} onClick={()=>showTimelineModal(key)}>{value.timelineTitle}</TimelineTitle>
                        </TimelineContentWrapper>
                    ))}
                </TimelineWholeContentWrapper>
            </TimelineWrapper>
        </>
    )
}