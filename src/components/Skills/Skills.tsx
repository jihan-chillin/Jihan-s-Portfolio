import React from 'react'
import { 
    SkillsWrapper,
    CateName
 } from './Skills.styles'

export function Skills() {
    return (
        <SkillsWrapper id="skill" style={{height : '720px', border : '1px solid black'}}>
            <CateName>Skills</CateName>
            <div>스킬부분입니다.</div>
        </SkillsWrapper>
    )
}