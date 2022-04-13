import React from 'react'
import { 
    AboutContentWrapper,
    AboutWrapper, 
    CateName, 
    InfoContent, 
    InfoContentWrapper, 
    InfoIcon, 
    InfoTitle, 
    InfoWrapper, 
    LineWrapper, 
    Profile,
    ProfileContainer,
    WholeInfoWrapper,
} from './AboutMe.styles'

import { useSelector } from 'react-redux'

export function AboutMe() {
    const {
        profile,
        FirstLine,
        SecondLine,
        ThirdLine
    } = useSelector((state:any)=>state.about);

    const {color} = useSelector((state:any)=>state.theme)
    const dark = color.theme_1 == '#F2F2F2'

    return(
       <AboutWrapper id ="about">
            <CateName>About</CateName>
            <AboutContentWrapper>
                <ProfileContainer>
                    <Profile src={profile}/>
                </ProfileContainer>   

                <WholeInfoWrapper>
                    <LineWrapper>
                        {FirstLine.map((value)=>(
                            <InfoWrapper>
                                <InfoIcon dark={dark} src={value.icon}/>
                                <InfoContentWrapper>
                                    <InfoTitle>{value.title}</InfoTitle>
                                    <InfoContent>{value.firstcontent}</InfoContent>
                                </InfoContentWrapper>
                            </InfoWrapper>
                        ))}
                    </LineWrapper>

                    <LineWrapper>
                        {SecondLine.map((value)=>(
                            <InfoWrapper>
                                <InfoIcon dark={dark} src={value.icon}/>
                                <InfoContentWrapper>
                                    <InfoTitle>{value.title}</InfoTitle>
                                    <InfoContent>{value.firstcontent}</InfoContent>
                                </InfoContentWrapper>
                            </InfoWrapper>
                        ))}
                    </LineWrapper>

                    <LineWrapper>
                        {ThirdLine.map((value)=>(
                            <InfoWrapper>
                                <InfoIcon dark={dark} src={value.icon}/>
                                <InfoContentWrapper>
                                    <InfoTitle>{value.title}</InfoTitle>
                                    <InfoContent>{value.firstcontent}</InfoContent>
                                    {value.secondcontent != '' ? <InfoContent>{value.secondcontent}</InfoContent> : <></>}
                                </InfoContentWrapper>
                            </InfoWrapper>
                        ))}
                    </LineWrapper>
                
                </WholeInfoWrapper>    
              
            </AboutContentWrapper>
       </AboutWrapper>
    )
}