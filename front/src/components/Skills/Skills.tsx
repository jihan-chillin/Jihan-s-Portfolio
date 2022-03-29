import React from 'react'
import { useSelector } from 'react-redux'
import { 
    SkillsWrapper,
    CateName,
    AllSkillsContenWrapper,
 } from './Skills.styles'
import { SkillsContent } from './SkillsContent'

export function Skills() {

    const {SkillsInfos} = useSelector((state:any)=>state.skill);

    return (
        <SkillsWrapper id="skill">
            <CateName>Skills</CateName>
            <AllSkillsContenWrapper>
                {SkillsInfos.map((value, key)=>(
                    <SkillsContent 
                        title={value.skillTitle} 
                        imagePath={value.skillImagePath} 
                        skillPecentage={value.skillPercentage}
                        colorKey={key}
                    /> 
                ))}
            </AllSkillsContenWrapper>
            
        </SkillsWrapper>
    )
}