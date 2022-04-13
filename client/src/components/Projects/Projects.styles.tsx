import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectBackground = styled.div<{showProjectDetail:any}>`
    display: ${(props:any)=> props.showProjectDetail ? 'block' : 'none'};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #4b4b4b;
    opacity: 0.6;
`

export const ProjectsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    padding-bottom : 70px;
    background-color: ${(props)=>props.theme.theme_9};
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: ${(props)=>props.theme.theme_2};
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 60px;
    }
`

export const ProjectContentWrapper = styled.div`
    width: 1200px;
    margin: 50px auto 0 auto;
    padding : 52px;
    background-color: #F2F2F2;
    border-radius: 20px;

    @media screen and (max-width : 1200px){
        width : 80%;
        padding : 40px;
    }
`

export const ProjectTitle = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Personnel = styled.div`
    margin-top: 8px;
    font-size: 16px;
    color : #AAAAAA;
`

export const ProjectDetailWrapper = styled.div`
    width: 900px;
    margin: 48px auto;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width : 1200px){
        display: block;
        width : 80%;
        margin: 16px auto;
    }
`

export const StyledSlider = styled(Slider)`
    width : 340px;
    display: inline-block;
    padding : 40px 0;
    border-radius: 20px;
    background-color: #F2F2F2;
    overflow : visible !important;

    @media screen and (max-width : 1200px){
        margin : 0 auto;
    }
`

export const SliderImgContainer = styled.div`
    width: 100%;
    border-radius: 20px 20px 0 0 ;
`

export const SliderImg = styled.img`
    width: 100%;
    object-fit: contain;
`

export const ProjectInfoWrapper = styled.div`
    width : 500px;
    height : 436px;
    padding : 20px 0;
    text-align: left;

    @media screen and (max-width : 1200px){
        margin : 8px auto;
        padding : 40px 0;
        width: auto;
        height: auto;
    }
`

export const ProjectSummary = styled.div`
    margin-bottom: 32px;
    font-size: 20px;
    color : #4b4b4b;

    @media screen and (max-width : 800px){
        width: 80%;
        margin: 32px 0;
        font-size: 16px;
        word-break:keep-all;
    }
`

export const SummaryEmph = styled.span`
    font-weight: bold;
    color : ${(props)=>props.theme.theme_7};
`
export const InfoTitle = styled.div`
    font-size: 18px;
    color : #000000;

    @media screen and (max-width : 800px){
        font-size: 16px;
    }
`

export const Infos = styled.div`
    margin-bottom: 20px;
    font-size: 15px;
    color : #4b4b4b;

    @media screen and (max-width : 800px){
        font-size: 12px;
    }
`

export const GitLink = styled.div`
    font-size: 18px;
    text-decoration: underline;
    color : #A9A9A9;
`