import React, {useState} from 'react';
import { useSelector } from 'react-redux';

import {
    SkillInfoWrapper,
    Progress,
    SkillbarBackground,
    SkillbarWrapper,
    SkillContenWrapper,
    SkillTitleWrapper,
    SkillPercentage,
    SkillsIcon,
    SkillTitle
} from './SkillsContent.styles'

export interface ISkillsContent{
    imagePath? : string;
    title: string;
    skillPecentage : string;
    colorKey : number,
}

export function SkillsContent({
    imagePath,
    title,
    skillPecentage,
    colorKey
}:ISkillsContent){

     return (
        <>
            <SkillContenWrapper>
                <SkillsIcon src={imagePath}/>
                <SkillInfoWrapper>
                    <SkillTitleWrapper>
                        <SkillTitle>{title}</SkillTitle>
                        <SkillPercentage>{skillPecentage}%</SkillPercentage>
                    </SkillTitleWrapper>
                    <SkillbarWrapper>
                        <SkillbarBackground/>
                        <Progress colorKey={colorKey} percent={skillPecentage}/>
                    </SkillbarWrapper>
                </SkillInfoWrapper>
            </SkillContenWrapper>
        </>
    )
}