import styled from "styled-components";

export const SliderContainer = styled.div`
    display: inline-block;
    width : 320px;
    height : 450px;
    margin : 60px 20px;
    background-color: #F2F2F2;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width : 324px;
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
