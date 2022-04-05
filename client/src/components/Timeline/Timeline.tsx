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
            <TimelineWrapper id="timeline">
                <TimelineBackground showTimelineDetail={showTimelineDetail}/>
                <CateName>Timeline</CateName>
                {showTimelineDetail ? <DetailModal detailId={timelineKey}/> : <></>}
                <TimelineWholeContentWrapper>
                    {TimelineContents.map((value, key)=>(
                        <TimelineContentWrapper>
                            <TimelineTitle colorKey={key} onClick={()=>showTimelineModal(key)}>{value.timelineTitle}</TimelineTitle>
                        </TimelineContentWrapper>
                    ))}
                </TimelineWholeContentWrapper>
            </TimelineWrapper>
        </>
    )
}