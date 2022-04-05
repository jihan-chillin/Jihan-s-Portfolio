import React from 'react'
import { useSelector } from 'react-redux'
import { SkillContent } from './SkillContent';
import { 
    SkillsWrapper,
    CateName,
    SkillWholeWrapper,
    SKillUnitWrapper,
 } from './Skills.styles'

export function Skills() {

    const {BackFrontend, Etcetera} = useSelector((state:any)=>state.skill);

    return (
        <SkillsWrapper id="skill">
                <CateName>Skills</CateName>
                <SkillWholeWrapper>
                    {BackFrontend.map((value, index)=>(
                        <SKillUnitWrapper>
                            <SkillContent SkillsInfoKey={index} cate={'BackFrontend'}/>
                        </SKillUnitWrapper>
                        ))}
                    <SKillUnitWrapper>
                        {Etcetera.map((value,index)=>(
                            <SkillContent SkillsInfoKey={index} cate={'Etcetera'}/>
                        ))}
                    </SKillUnitWrapper>
                 </SkillWholeWrapper>
            </SkillsWrapper>
    )
}  