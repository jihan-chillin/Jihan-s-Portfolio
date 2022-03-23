import React from 'react'
import { 
    CateName,
    Period, 
    TimelineContentWrapper, 
    TimelineTitle, 
    TimelineWholeContentWrapper, 
    TimelineWrapper 
} from './Timeline.styles'

export function Timeline() {
    return (
        <TimelineWrapper id="timeline">
            <CateName>Timeline</CateName>
            <TimelineWholeContentWrapper>
                <TimelineContentWrapper>
                    <Period>2020.07.07 ~ 2021.07.07</Period>
                    <TimelineTitle>요요요요</TimelineTitle>
                </TimelineContentWrapper>

                <TimelineContentWrapper>
                    <Period>2020.07.07</Period>
                    <TimelineTitle>요요요요</TimelineTitle>
                </TimelineContentWrapper>

                <TimelineContentWrapper>
                    <Period>2020.07.07 ~ 2021.07.07</Period>
                    <TimelineTitle>요요요요</TimelineTitle>
                </TimelineContentWrapper>

                <TimelineContentWrapper>
                    <Period>2020.07.07 ~ 2021.07.07</Period>
                    <TimelineTitle>요요요요</TimelineTitle>
                </TimelineContentWrapper>

                <TimelineContentWrapper>
                    <Period>2020.07.07 ~ 2021.07.07</Period>
                    <TimelineTitle>요요요요</TimelineTitle>
                </TimelineContentWrapper>
            </TimelineWholeContentWrapper>
        </TimelineWrapper>
       
    )
}