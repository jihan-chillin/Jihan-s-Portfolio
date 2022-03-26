import React, {useState} from 'react';

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
    ImagePath? : string;
    Title: string;
    SkillPecentage : number;
}

export function SkillsContent({
    ImagePath,
    Title,
    SkillPecentage
}:ISkillsContent){

// const [percent, setPercent] = useState(60)

    return (
        <>
            <SkillContenWrapper>
                <SkillsIcon src={ImagePath}/>
                <SkillInfoWrapper>
                    <SkillTitleWrapper>
                        <SkillTitle>{Title}</SkillTitle>
                        <SkillPercentage>{SkillPecentage}%</SkillPercentage>
                    </SkillTitleWrapper>
                    <SkillbarWrapper>
                        <SkillbarBackground/>
                        <Progress percent={SkillPecentage}/>
                    </SkillbarWrapper>
                </SkillInfoWrapper>
            </SkillContenWrapper>
        </>
    )
}