import styled,{ keyframes, css } from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    background-color: ${(props)=>props.theme.theme_5};
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
    margin: 0 auto;
    width: 98%;
`

// react-slick 커스텀 
export const StyledSlider = styled(Slider)`
    margin: 0 auto;
    padding: 80px 200px;
    width: 800px;
    border : 20px;
    align-items: center;

    @media screen and (max-width : 800px){
        margin: 0 auto;
        padding: 36px 80px;
        width: 80%;  
        border : 20px;
        align-items: center;
    }

    .slick-prev {
    left: 50px !important;
    bottom : 50%;
    z-index: 1000;

    @media screen and (max-width : 800px){
        left: 30px !important;
    }
  }
  .slick-prev:before{
    color : ${(props)=>props.theme.theme_1};
  }

  .slick-next {
    right: 50px !important;
    z-index: 1000;

    @media screen and (max-width : 800px){
        right: 30px !important;
    }
  }

  .slick-next:before{
    color : ${(props)=>props.theme.theme_1};
  }
`

export const SliderContainer = styled.div`
    display: inline-block;
    width : 200px;
    height : 480px;
    margin : 0px auto;
    background-color: #F2F2F2;
    border-radius: 20px;
    overflow : visible !important;

    @media screen and (max-width : 800px){
        width : 180px;
        height : 480px; 
    }

    @media screen and (max-width : 600px){
        height : 380px;
    }
`

export const SliderImgContainer = styled.div`
    width: 100%;
    height : 240px;
    background-color: #AAAAAA;
    border-radius: 20px 20px 0 0 ;

    @media screen and (max-width : 600px){
        width: 100%;
        height : 172px;
    }
`

export const SliderImg = styled.img`
    display: inline-block;
    margin: 0 auto;
    height: 100%;
`
export const SliderContent = styled.div`
    width : 80%;
    margin: 0 auto;
`

export const ProjectTitle = styled.span`
    display: inline-block;
    margin-top: 30px;
    font-weight: bold;
    font-size: 20px;

    @media screen and (max-width : 600px){
        font-size: 16px;
    }
`

export const ProjectInfo = styled.div`
    display: -webkit-box;
    width : 90%;
    max-height: 112px;
    margin: 8px auto;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;

    @media screen and (max-width : 600px){
        margin: 8px auto;
        font-size: 12px;
    }
`

export const ProjectDetailButton = styled.img`
    float: right;
    width: 20px;
    margin-right: 16px;
    cursor: pointer; 
`