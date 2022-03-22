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

    const [percent, setPercent] = useState(40);

    return (
        <>
            {/* SkillContentWrapper 나중에 for문 or 맵돌려서 나오게 해야겠다. */}
            <SkillContenWrapper>
                <SkillsIcon src={ImagePath}/>
                <SkillInfoWrapper>
                    <SkillTitleWrapper>
                        <SkillTitle>{Title}</SkillTitle>
                        <SkillPercentage>{SkillPecentage}%</SkillPercentage>
                    </SkillTitleWrapper>
                    <SkillbarWrapper>
                        <SkillbarBackground/>
                        <Progress percent={percent}/>
                    </SkillbarWrapper>
                </SkillInfoWrapper>
            </SkillContenWrapper>
        </>
    )
}