import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ProjectBackground = styled.div`
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
    margin: 20px auto;
    padding: 10px 160px;
    width: 800px;
    border : 20px;
    align-items: center;

    @media screen and (max-width : 800px){
        margin: 0 auto;
        padding: 36px 80px;
        width: 76%;  
        border : 20px;
        align-items: center;
    }

    @media screen and (max-width : 576px){
        margin: 0 auto;
        padding: 36px 50px;
        width: 76%;  
        border : 20px;
        align-items: center;
    }

    .slick-prev {
    left: 50px !important;
    bottom : 50%;
    z-index: 1000;

    @media screen and (max-width : 800px){
        left: 20px !important;
     }
    }

  .slick-prev:before{
    color : ${(props)=>props.theme.theme_1};
  }

  .slick-next {
    right: 50px !important;
    z-index: 1000;

    @media screen and (max-width : 800px){
        right: 20px !important;
    }
  }

  .slick-next:before{
    color : ${(props)=>props.theme.theme_1};
  }
`

export const SliderContainer = styled.div`
    display: inline-block;
    width : 200px;
    margin : 0px auto;
    padding : 10px 0;
    border-radius: 20px;
    background-color: #F2F2F2;
    overflow : visible !important;
`

export const SliderImgContainer = styled.div`
    width: 100%;
    border-radius: 20px 20px 0 0 ;
`

export const SliderImg = styled.img`
    display: inline-block;
    margin: 0 auto;
    width: 98%;
`
export const SliderContent = styled.div`
    width : 80%;
    margin: 0 auto;
    padding : 10px 0 ;
`
export const ProjectTitle = styled.span`
    display: inline-block;
    margin-top: 30px;
    font-weight: bold;
    font-size: 18px;

    @media screen and (max-width : 576px){
        font-size: 14px;
    }
`

export const ProjectInfo = styled.div`
    width : 90%;
    margin: 20px auto;
    font-size: 14px;

    @media screen and (max-width : 576px){
        font-size: 12px;
    }

`

export const ProjectDetailButton = styled.img`
    float: right;
    width: 20px;
    margin-right: 12px;
    cursor: pointer; 

    @media screen and (max-width : 576px){
        width : 16px;
    }
`