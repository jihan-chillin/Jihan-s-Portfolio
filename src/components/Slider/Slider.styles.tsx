import styled from "styled-components";

export const SliderWholeContainer = styled.div`
    width: 800px;
    margin: 0 auto;
    background-color: grey;
`

export const SliderContainer = styled.div`
    width : 350px;
    height : 500px;
    margin : 60px auto;
    background-color: #F2F2F2;
    border-radius: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const SliderImgContainer = styled.div`
    width: 100%;
    height : 300px;
    background-color: #AAAAAA;
    border-radius: 20px 20px 0 0;
`
export const SliderImg = styled.img`
    height: 100%;
`
export const SliderContent = styled.div`
    width : 350px;
    margin-top: 20px;
`

export const ProjectTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`

export const ProjectInfo = styled.div`
    display: -webkit-box;
    width : 296px;
    max-height: 110px;
    margin: 6px auto;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
`

export const ProjectDetailButton = styled.img`
    float: right;
    width: 24px;
    margin-right: 20px;
    cursor: pointer;
    
`
