import styled from 'styled-components'

export const ProjectBackground = styled.div`
    display: ${(props)=> props.showProjectDetail ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #4b4b4b;
    opacity: 0.6;
`

export const ProjectsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: ${(props)=>props.theme.theme_5}
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 24px;
    }
`

export const SliderWholeContainer = styled.div`
    position : relative;
    display: flex;
    margin: 0 auto;
    width: 800px;
    align-items: center;
    overflow: hidden;

    @media screen and (max-width : 800px){
        width: 360px;   
    }
`

export const ForwardArrow = styled.img`
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 0%;
    width : 20px;
    cursor: pointer;

    @media screen and (max-width : 800px){
        left: 0%;
        width: 16px;   
    }
`

export const BackwardArrow = styled.img`
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 0%;
    width : 20px;
    cursor: pointer;
    
    @media screen and (max-width : 800px){
        right: 0%; 
        width: 16px;   
    }
`

// 여기 Slider 스타일 복붙
export const SliderContainer = styled.div`
    display: inline-block;
    width : 300px;
    height : 450px;
    margin : 60px 30px 60px 60px;
    background-color: #F2F2F2;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media screen and (max-width : 800px){
        margin : 60px 30px;   
    }
`

export const SliderImgContainer = styled.div`
    width: 100%;
    height : 240px;
    background-color: #AAAAAA;
    border-radius: 20px 20px 0 0;
`
export const SliderImg = styled.img`
    height: 100%;
`
export const SliderContent = styled.div`
    width : 300px;
    margin-top: 20px;
`

export const ProjectTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`

export const ProjectInfo = styled.div`
    display: -webkit-box;
    width : 266px;
    max-height: 112px;
    margin: 8px auto;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`

export const ProjectDetailButton = styled.img`
    float: right;
    width: 20px;
    margin-right: 20px;
    cursor: pointer;
    
`