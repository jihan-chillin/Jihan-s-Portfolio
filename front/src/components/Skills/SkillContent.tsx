import { useSelector } from "react-redux";
import {
    SkillContentWrapper, 
    SkillTitle,
    SkillIcon
 } from "./SkillContent.styles";

export interface ISkillContent{
    SkillsInfoKey : number,
    cate : string,
}

export function SkillContent({
    SkillsInfoKey,
    cate,
}:ISkillContent){
    const {BackFrontend, Etcetera} = useSelector((state:any)=>state.skill)
    
    return(
        <>
        {cate == 'BackFrontend'
        ? (
            <SkillContentWrapper>
                <SkillTitle>{BackFrontend[SkillsInfoKey].skillTitle}</SkillTitle>
                {BackFrontend[SkillsInfoKey].SkillIcon.map((value)=>(
                    <SkillIcon src={value}/>
                ))}
            </SkillContentWrapper>
        ) 
        : (
            <SkillContentWrapper>
                <SkillTitle>{Etcetera[SkillsInfoKey].skillTitle}</SkillTitle>
                {Etcetera[SkillsInfoKey].SkillIcon.map((value)=>(
                    <SkillIcon src={value}/>
                ))}
            </SkillContentWrapper>
        )}
        </>
    )
}