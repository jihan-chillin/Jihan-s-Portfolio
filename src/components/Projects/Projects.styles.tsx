import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    background-color: #E7E7E7;
`

export const CateName = styled.span`
    display: inline-block;
    margin-top: 76px;
    font-size: 20px;
    color: #4b4b4b;
    opacity: 0.5;

    @media screen and (max-width : 800px){
        margin-top: 24px;
    }
`

export const SliderWholeContainer = styled.div`
    display: flex;
    margin: 0 auto;
    width: 800px;
    align-items: center;
    overflow: hidden;
    background-color: red;

    @media screen and (max-width : 800px){
        width: 360px;   
    }
`

export const ForwardArrow = styled.img`
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 10%;
    width : 20px;
    cursor: pointer;

    @media screen and (max-width : 800px){
        width: 16px;   
    }
`

export const BackwardArrow = styled.img`
    position: absolute;
    display: inline-block;
    top: 50%;
    right: 10%;
    width : 20px;
    cursor: pointer;
    
    @media screen and (max-width : 800px){
        width: 16px;   
    }
`