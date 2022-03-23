import { Html } from 'next/document'
import React from 'react'
import { 
    SkillsWrapper,
    CateName,
    AllSkillsContenWrapper,
 } from './Skills.styles'
import { SkillsContent } from './SkillsContent'

export function Skills() {
    return (
        <SkillsWrapper id="skill">
            <CateName>Skills</CateName>
            <AllSkillsContenWrapper>
                <SkillsContent ImagePath={'./html.png'}Title={'html,css,js'} SkillPecentage={60}/>
                <SkillsContent ImagePath={'./Next.png'}Title={'Next.js'} SkillPecentage={60}/>
                <SkillsContent ImagePath={'./react.png'}Title={'React'} SkillPecentage={60}/>
                <SkillsContent ImagePath={'./graphql.png'}Title={'GraphQL'} SkillPecentage={60}/>
                <SkillsContent ImagePath={'./typescript.png'}Title={'Typescript'} SkillPecentage={60}/>
                <SkillsContent ImagePath={'./github.png'}Title={'github(상태관리)'} SkillPecentage={60}/>
            </AllSkillsContenWrapper>
            
        </SkillsWrapper>
    )
}