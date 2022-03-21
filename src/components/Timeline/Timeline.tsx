import React from 'react'
import { CateName, TimelineWrapper } from './Timeline.styles'

export function Timeline() {
    return (
        <TimelineWrapper id="timeline" style={{height : '720px', border : '1px solid black'}}>
            <CateName>Timeline</CateName>
            <div id="timeline">Timeline입니다.</div>
        </TimelineWrapper>
       
    )
}