import { Html } from 'next/document'
import React from 'react'
import { useSelector } from 'react-redux'
import { 
    SkillsWrapper,
    CateName,
    AllSkillsContenWrapper,
 } from './Skills.styles'
import { SkillsContent } from './SkillsContent'

export function Skills() {

    const {SkillsInfos} = useSelector((state)=>state.skill);

    return (
        <SkillsWrapper id="skill">
            <CateName>Skills</CateName>
            <AllSkillsContenWrapper>
                {SkillsInfos.map((value)=>(
                    <SkillsContent Title={value.skillTitle} ImagePath={value.skillImagePath} SkillPecentage={value.skillPercentage}/> 
                ))}
            </AllSkillsContenWrapper>
            
        </SkillsWrapper>
    )
}