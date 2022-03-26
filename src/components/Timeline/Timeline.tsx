import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DetailModal } from '../Common/views/DetailModal';
import { 
    CateName,
    Period, 
    TimelineContentWrapper, 
    TimelineTitle, 
    TimelineWholeContentWrapper, 
    TimelineWrapper 
} from './Timeline.styles'

import {
    TOGGLE_TIMELINE_DETAIL_REQUEST
} from '../../../reducers/modalReducer'

export function Timeline() {
    const {TimelineContents} = useSelector((state)=> state.timeline);
    const {showTimelineDetail} = useSelector((state:any) => state.modal)
    

    const dispatch = useDispatch();
    const showTimelineModal = useCallback(()=>{
        dispatch({
            type : TOGGLE_TIMELINE_DETAIL_REQUEST,
            data : true,
        })

        console.log(showTimelineDetail, "showTimelineDetail")
    },[])
    
    
    return (
        <>
            <TimelineWrapper id="timeline">
                <CateName>Timeline</CateName>
                <TimelineWholeContentWrapper>
                    {TimelineContents.map((value)=>(
                        <TimelineContentWrapper>
                            {/* {showTimelineDetail ? <DetailModal/> : <></>} */}
                            <Period>{value.timelinePeriod}</Period>
                            <TimelineTitle onClick={showTimelineModal}>{value.timelineTitle}</TimelineTitle>
                        </TimelineContentWrapper>
                    ))}
                </TimelineWholeContentWrapper>
            </TimelineWrapper>
        </>
    )
}