import React from 'react'
import { useSelector } from 'react-redux'
import { 
    CateName,
    Period, 
    TimelineContentWrapper, 
    TimelineTitle, 
    TimelineWholeContentWrapper, 
    TimelineWrapper 
} from './Timeline.styles'

export function Timeline() {
    const {TimelineContents} = useSelector((state)=> state.timeline);

    return (
        <TimelineWrapper id="timeline">
            <CateName>Timeline</CateName>
            <TimelineWholeContentWrapper>
                {TimelineContents.map((value)=>(
                    <TimelineContentWrapper>
                        <Period>{value.timelinePeriod}</Period>
                        <TimelineTitle>{value.timelineTitle}</TimelineTitle>
                    </TimelineContentWrapper>
                ))}
            </TimelineWholeContentWrapper>
        </TimelineWrapper>
       
    )
}