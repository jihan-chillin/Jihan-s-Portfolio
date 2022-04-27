import React from 'react'
import { useSelector } from 'react-redux'

import { 
    ProjectsWrapper, 
    CateName,
    StyledSlider,
    SliderImgContainer,
    SliderImg,
    ProjectTitle,
    ProjectContentWrapper,
    Personnel,
    ProjectInfoWrapper,
    ProjectSummary,
    InfoTitle,
    Infos,
    GitLink,
    ProjectDetailWrapper,
    SummaryEmph
} from './Projects.styles'

export function Projects() {
    const {ProjectContent} = useSelector((state:any)=> state.project);

    const settings ={
        dots : true,
        arrows : false,
        isFinite : true,
        speed: 500, // 넘어가는 속도는 몇으로 할 것인지
        slidesToShow: 1, 
        slidesToScroll: 1,
    }

    return (
        <>
            <ProjectsWrapper id="project">
                <CateName>Projects</CateName>

                <ProjectContentWrapper>
                    <ProjectTitle>{ProjectContent[0].projectTitle}</ProjectTitle>
                    <Personnel>{ProjectContent[0].privateOrTeam}</Personnel>
                    <ProjectDetailWrapper>
                        <StyledSlider {...settings}>
                                {ProjectContent[0].ProjectImages.map((value)=>(
                                    <SliderImgContainer>
                                        <SliderImg src={value}/>
                                    </SliderImgContainer>
                                ))}   
                        </StyledSlider>
                        <ProjectInfoWrapper>
                            <ProjectSummary>
                                라이트/다크 모드 이외에 <SummaryEmph>사계절모드를 redux</SummaryEmph>로 
                                구현해본 포트폴리오 사이트입니다. 
                                React와 redux를 학습하기 위해 개발한 사이트로
                                <SummaryEmph>기획부터 배포까지 온전한 웹사이트 제작을 혼자</SummaryEmph> 해보았다는 
                                점에서 의미가 있는 프로젝트입니다. 
                            </ProjectSummary>                            
                            <InfoTitle>작업기간</InfoTitle>
                            <Infos>{ProjectContent[0].period}</Infos>
                            <InfoTitle>기여도 (맡은 역할)</InfoTitle>
                            <Infos>{ProjectContent[0].contribution}</Infos>
                            <InfoTitle>기술스택</InfoTitle>
                            <Infos>{ProjectContent[0].techStack}</Infos>
                            <a href={ProjectContent[0].gitAddress}><GitLink>깃 레퍼지토리 👈</GitLink></a>
                        </ProjectInfoWrapper>
                    </ProjectDetailWrapper>
                </ProjectContentWrapper>

                <ProjectContentWrapper>
                    <ProjectTitle>{ProjectContent[1].projectTitle}</ProjectTitle>
                    <Personnel>{ProjectContent[1].privateOrTeam}</Personnel>
                    <ProjectDetailWrapper>
                        <StyledSlider {...settings}>
                                {ProjectContent[1].ProjectImages.map((value)=>(
                                    <SliderImgContainer>
                                        <SliderImg src={value}/>
                                    </SliderImgContainer>
                                ))}   
                        </StyledSlider>
                        <ProjectInfoWrapper>
                            <ProjectSummary>
                            <SummaryEmph>React를 활용하기 위한 기초지식</SummaryEmph>을 위해 만든 프로젝트이지만, 
                            react 이외에 redux와 프런트 최적화 그리고 백엔드 등에 대한 전반적인 이해를 
                            기반으로 개발했습니다. 이제는 <SummaryEmph>마음만 먹으면 react로 
                            저만의 프로젝트를 구현할 수 있겠다는 자신감</SummaryEmph>을 준 프로젝트입니다.
                            </ProjectSummary>                            
                            <InfoTitle>작업기간</InfoTitle>
                            <Infos>{ProjectContent[1].period}</Infos>
                            <InfoTitle>기여도 (맡은 역할)</InfoTitle>
                            <Infos>{ProjectContent[1].contribution}</Infos>
                            <InfoTitle>기술스택</InfoTitle>
                            <Infos>{ProjectContent[1].techStack}</Infos>
                            <a href={ProjectContent[1].gitAddress}><GitLink>깃 레퍼지토리 👈</GitLink></a>
                        </ProjectInfoWrapper>
                    </ProjectDetailWrapper>
                </ProjectContentWrapper>

                <ProjectContentWrapper>
                    <ProjectTitle>{ProjectContent[2].projectTitle}</ProjectTitle>
                    <Personnel>{ProjectContent[2].privateOrTeam}</Personnel>
                    <ProjectDetailWrapper>
                        <StyledSlider {...settings}>
                                {ProjectContent[2].ProjectImages.map((value)=>(
                                    <SliderImgContainer>
                                        <SliderImg src={value}/>
                                    </SliderImgContainer>
                                ))}   
                        </StyledSlider>
                        <ProjectInfoWrapper>
                            <ProjectSummary>
                            <SummaryEmph>Spring을 이용</SummaryEmph>해서 만든 웹 사이트이며, 
                            이 프로젝트를 통해 개발의 편리함을 주는 <SummaryEmph>라이브러리와 프레임워크의 필요성</SummaryEmph>을 몸소 느낄 수 있었습니다. 
                            또한, 백엔드를 담당한 팀원들과 <SummaryEmph>협업하는 과정에 관해 많이 배울 수</SummaryEmph> 있었습니다.
                             구체적인 계획과 명시 사항 들을 <SummaryEmph>notion에 직접 정리</SummaryEmph>하여
                              개발과정에서 혼란이 없도록 노력했던 프로젝트입니다.
                            </ProjectSummary>                            
                            <InfoTitle>작업기간</InfoTitle>
                            <Infos>{ProjectContent[2].period}</Infos>
                            <InfoTitle>기여도 (맡은 역할)</InfoTitle>
                            <Infos>{ProjectContent[2].contribution}</Infos>
                            <InfoTitle>기술스택</InfoTitle>
                            <Infos>{ProjectContent[2].techStack}</Infos>
                            <a href={ProjectContent[2].gitAddress}><GitLink>깃 레퍼지토리 👈</GitLink></a>
                        </ProjectInfoWrapper>
                    </ProjectDetailWrapper>
                </ProjectContentWrapper>

                <ProjectContentWrapper>
                    <ProjectTitle>{ProjectContent[3].projectTitle}</ProjectTitle>
                    <Personnel>{ProjectContent[3].privateOrTeam}</Personnel>
                    <ProjectDetailWrapper>
                        <StyledSlider {...settings}>
                                {ProjectContent[3].ProjectImages.map((value)=>(
                                    <SliderImgContainer>
                                        <SliderImg src={value}/>
                                    </SliderImgContainer>
                                ))}   
                        </StyledSlider>
                        <ProjectInfoWrapper>
                            <ProjectSummary>
                            Git을 이용해 팀원들과 협업하고, 배웠던 HTML, CSS, Javascript를 활용하여 
                            <SummaryEmph>제작한 첫 번째 프로젝트</SummaryEmph>이며, 개발 과정에서 웹 개발의 기본 지식을 쌓을 수 있었습니다.
                            </ProjectSummary>                            
                            <InfoTitle>작업기간</InfoTitle>
                            <Infos>{ProjectContent[3].period}</Infos>
                            <InfoTitle>기여도 (맡은 역할)</InfoTitle>
                            <Infos>{ProjectContent[3].contribution}</Infos>
                            <InfoTitle>기술스택</InfoTitle>
                            <Infos>{ProjectContent[3].techStack}</Infos>
                            <a href={ProjectContent[3].gitAddress}><GitLink>깃 레퍼지토리 👈</GitLink></a>
                        </ProjectInfoWrapper>
                    </ProjectDetailWrapper>
                </ProjectContentWrapper>
            </ProjectsWrapper>
        </>
    )
}